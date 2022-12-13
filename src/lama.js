import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, email, numeric, min, max, regex } from 'vee-validate/dist/rules';
//import VueI18n from 'vue-i18n'

import BaseView from "./BaseView";
import Bootstap4View from "./Bootstap4View";
import DefaultConnector from "./DefaultConnector";
import LamaForm from "./components/Form.vue";
import LamaBuilder from "./components/Builder.vue";

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

//Vue.use(VueI18n)

extend('required', required);
extend('email', email);
extend('numeric', numeric);
extend('min', min);
extend('max', max);
extend('regex', regex);

let Lama = {
    /**
     * @namespace Namespace for all Lama Field Class Implementations.
     */
    Fields: {},

    /**
     * @namespace Namespace for all Lama Connector Class Implementations.
     */
    Connectors: {},

    //this.Extend = $.extend;
    Extend: function (a, b) {
        for (var key in b)
            // eslint-disable-next-line no-prototype-builtins
            if (b.hasOwnProperty(key))
                a[key] = b[key];
        return a;
    },

    /**
     * Makes an array.
     *
     * @param {Any} nonArray A non-array variable.
     * @returns {Array} Array out of the non-array variable.
     */
    makeArray: function (nonArray) {
        return Array.prototype.slice.call(nonArray);
    },
    /**
    * Finds whether the type of a variable is function.
    * @param {Any} obj The variable being evaluated.
    * @returns {Boolean} True if the variable is a function, false otherwise.
    */
    isFunction: function (obj) {
        return Object.prototype.toString.call(obj) === "[object Function]";
    },

    /**
     * Finds whether the type of a variable is string.
     * @param {Any} obj The variable being evaluated.
     * @returns {Boolean} True if the variable is a string, false otherwise.
     */
    isString: function (obj) {
        return (typeof obj === "string");
    },

    /**
     * Finds whether the type of a variable is object.
     * @param {Any} obj The variable being evaluated.
     * @returns {Boolean} True if the variable is an object, false otherwise.
     */
    isObject: function (obj) {
        return !this.isUndefined(obj) && Object.prototype.toString.call(obj) === '[object Object]';
    },

    /**
     * Finds whether the type of a variable is a plain, non-prototyped object.
     * @param {Any} obj The variable being evaluated.
     * @returns {Boolean} True if the variable is a plain object, false otherwise.
     */
    isPlainObject: function (obj) {
        //return $.isPlainObject(obj);
        return Object.prototype.toString.call(obj) === '[object Object]';
    },

    /**
     * Finds whether the type of a variable is number.
     * @param {Any} obj The variable being evaluated.
     * @returns {Boolean} True if the variable is a number, false otherwise.
     */
    isNumber: function (obj) {
        return (typeof obj === "number");
    },

    /**
     * Finds whether the type of a variable is array.
     * @param {Any} obj The variable being evaluated.
     * @returns {Boolean} True if the variable is an array, false otherwise.
     */
    isArray: function (obj) {
        return Object.prototype.toString.call(obj) == "[object Array]";
    },

    /**
     * Finds whether the type of a variable is boolean.
     * @param {Any} obj The variable being evaluated.
     * @returns {Boolean} True if the variable is a boolean, false otherwise.
     */
    isBoolean: function (obj) {
        return (typeof obj === "boolean");
    },

    /**
     * Finds whether the type of a variable is undefined.
     * @param {Any} obj The variable being evaluated.
     * @returns {Boolean} True if the variable is a undefined, false otherwise.
     */
    isUndefined: function (obj) {
        return (typeof obj == "undefined");
    },
    /**
    * Finds whether a variable is empty.
    * @param {Any} obj The variable being evaluated.
    * @param [boolean] includeFunctions whether to include functions in any counts
    * @returns {Boolean} True if the variable is empty, false otherwise.
    */
    isEmpty: function (obj, includeFunctions) {

        var self = this;

        if (this.isUndefined(obj)) {
            return true;
        }
        else if (obj === null) {
            return true;
        }

        if (obj && this.isObject(obj)) {
            var count = self.countProperties(obj, includeFunctions);
            if (count === 0) {
                return true;
            }
        }

        return false;
    },
    /**
     * Counts the number of properties in an object.
     *
     * @param obj
     * @param includeFunctions
     *
     * @returns {number}
     */
    countProperties: function (obj, includeFunctions) {
        var count = 0;
        if (obj && this.isObject(obj)) {
            for (var k in obj) {
                // eslint-disable-next-line no-prototype-builtins
                if (obj.hasOwnProperty(k)) {
                    if (includeFunctions) {
                        count++;
                    } else {
                        if (typeof (obj[k]) !== "function") {
                            count++;
                        }
                    }
                }
            }
        }
        return count;
    },
    /**
     * Produces a copy of the given JS value.
     *
     * If the value is a simple array or a simple object, then a pure copy is produced.
     *
     * If it's a complex object or a function, then the reference is copied (i.e. not truly a copy).
     *
     * @param thing
     * @return {*}
     */
    copyOf: function (thing) {
        var copy = thing;

        if (this.isArray(thing)) {
            copy = [];

            for (var i = 0; i < thing.length; i++) {
                copy.push(this.copyOf(thing[i]));
            }
        }
        else if (this.isObject(thing)) {
            if (thing instanceof Date) {
                // date
                return new Date(thing.getTime());
            }
            else if (thing instanceof RegExp) {
                // regular expression
                return new RegExp(thing);
            }
            else if (thing.nodeType && "cloneNode" in thing) {
                // DOM node
                copy = thing.cloneNode(true);
            }
            else if (this.isPlainObject(thing)) {
                copy = {};

                for (var k in thing) {
                    // eslint-disable-next-line no-prototype-builtins
                    if (thing.hasOwnProperty(k)) {
                        copy[k] = this.copyOf(thing[k]);
                    }
                }
            }
            else {
                // otherwise, it's some other kind of object so we just do a referential copy
                // in other words, not a copy
            }
        }

        return copy;
    },

    copyInto: function (target, source) {
        for (var i in source) {
            // eslint-disable-next-line no-prototype-builtins
            if (source.hasOwnProperty(i) && !this.isFunction(this[i])) {
                target[i] = source[i];
            }
        }
    },

    /**
     * Retained for legacy purposes.  Alias for copyOf().
     *
     * @param object
     * @returns {*}
     */
    cloneObject: function (object) {
        return this.copyOf(object);
    },

    /**
     * Splices a string.
     *
     * @param {String} source Source string to be spliced.
     * @param {Integer} splicePoint Splice location.
     * @param {String} splice String to be spliced in.
     * @returns {String} Spliced string
     */
    spliceIn: function (source, splicePoint, splice) {
        return source.substring(0, splicePoint) + splice + source.substring(splicePoint, source.length);
    },

    /**
     * Compacts an array.
     *
     * @param {Array} arr Source array to be compacted.
     * @returns {Array} Compacted array.
     */
    compactArray: function (arr) {
        var n = [], l = arr.length, i;
        for (i = 0; i < l; i++) {
            if (!this.isNull(arr[i]) && !this.isUndefined(arr[i])) {
                n.push(arr[i]);
            }
        }
        return n;
    },

    /**
     * Removes accents from a string.
     *
     * @param {String} str Source string.
     * @returns {String} Cleaned string without accents.
     */
    removeAccents: function (str) {
        return str.replace(/[àáâãäå]/g, "a").replace(/[èéêë]/g, "e").replace(/[ìíîï]/g, "i").replace(/[òóôõö]/g, "o").replace(/[ùúûü]/g, "u").replace(/[ýÿ]/g, "y").replace(/[ñ]/g, "n").replace(/[ç]/g, "c").replace(/[œ]/g, "oe").replace(/[æ]/g, "ae");
    },

    /**
     * @private
     * @param el
     * @param arr
     * @param fn
     */
    indexOf: function (el, arr, fn) {
        var l = arr.length, i;

        if (!this.isFunction(fn)) {
            /**
             * @ignore
             * @param elt
             * @param arrElt
             */
            fn = function (elt, arrElt) {
                return elt === arrElt;
            };
        }

        for (i = 0; i < l; i++) {
            if (fn.call({}, el, arr[i])) {
                return i;
            }
        }

        return -1;
    },
    isEmptyObject: function (obj) {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    },
    /**
     * Finds whether a variable has empty value or not.
     *
     * @param {Any} val Variable to be evaluated.
     * @param [boolean] includeFunctions whether to include function in any counts
     *
     * @returns {Boolean} True if the variable has empty value, false otherwise.
     */
    isValEmpty: function (val, includeFunctions) {
        var empty = false;
        if (this.isEmpty(val, includeFunctions)) {
            empty = true;
        } else {
            if (this.isString(val) && val === "") {
                empty = true;
            }
            if (this.isObject(val) && this.isEmptyObject(val)) {
                empty = true;
            }
            if (this.isArray(val) && val.length === 0) {
                empty = true;
            }

            /*
            if (this.isNumber(val) && isNaN(val)) {
                empty = true;
            }
            */
        }
        return empty;
    },
    /**
     * Merges json obj2 into obj1 using a recursive approach.
     *
     * @param {Object} obj1 Destination object.
     * @param {Object} obj2 Source object.
     * @param {Function} validKeyFunction Function used to determine whether to include a given key or not.
     *
     * @returns {Object} Merged object.
     */
    merge: function (obj1, obj2, validKeyFunction) {
        if (!obj1) {
            obj1 = {};
        }
        for (var key in obj2) {
            var valid = true;

            if (validKeyFunction) {
                valid = validKeyFunction(key);
            }

            if (valid) {
                if (this.isEmpty(obj2[key])) {
                    obj1[key] = obj2[key];
                } else {
                    if (this.isObject(obj2[key])) {
                        if (!obj1[key]) {
                            obj1[key] = {};
                        }
                        obj1[key] = this.merge(obj1[key], obj2[key]);
                    } else {
                        obj1[key] = obj2[key];
                    }
                }
            }
        }

        return obj1;
    },

    /**
     * Merges json "source" into "target" using a recursive approach. The merge will include empty values
     * of obj2 properties.
     *
     * @param {Object} target Target object.
     * @param {Object} source Source object.
     *
     * @returns {Object} Merged object
     */
    mergeObject: function (target, source) {

        if (!target) {
            target = {};
        }

        if (!source) {
            source = {};
        }

        this.mergeObject2(source, target);

        return target;
    },

    mergeObject2: function (source, target) {
        //var isArray = this.isArray;
        //var isObject = this.isObject;
        //var isUndefined = this.isUndefined;
        //var copyOf = this.copyOf;

        var _merge = (source, target) => {
            if (this.isArray(source)) {
                if (this.isArray(target)) {
                    // merge array elements
                    for (let index = 0; index < source.length; index++) {
                        target.push(this.copyOf(source[index]));
                    }
                    //$.each(source, function (index) {
                    //    target.push(copyOf(source[index]));
                    //});
                }
                else {
                    // something is already in the target that isn't an ARRAY
                    // skip
                }
            }
            else if (this.isObject(source)) {
                if (this.isObject(target)) {
                    // merge object properties
                    for (const key in source) {
                        // eslint-disable-next-line no-prototype-builtins
                        if (source.hasOwnProperty(key)) {
                            if (this.isUndefined(target[key])) {
                                target[key] = this.copyOf(source[key]);
                            } else {
                                target[key] = _merge(source[key], target[key]);
                            }
                        }
                    }


                    //$.each(source, function (key) {

                    //if (isUndefined(target[key])) {
                    //target[key] = copyOf(source[key]);
                    //} else {
                    //target[key] = _merge(source[key], target[key]);
                    //}

                    //});
                }
                else {
                    // something is already in the target that isn't an OBJECT
                    // skip
                }
            }
            else {
                // otherwise, it's a scalar, always overwrite
                target = this.copyOf(source);
            }

            return target;
        };
        _merge(source, target);
        return target;
    },

    /**
    * Static counter for generating a unique ID.
    */
    uniqueIdCounter: 0,
    /**
     * Generates a unique alpaca id.
     *
     * @returns {String} The unique alpaca id.
     */
    generateId: function () {
        this.uniqueIdCounter++;
        return "lama" + this.uniqueIdCounter;
    },
    /**
     * Field Type to Schema Type Mappings.
     */
    defaultSchemaFieldMapping: {},

    /**
     * Registers a field type to schema data type mapping.
     *
     * @param {String} schemaType Schema data type.
     * @param {String} fieldType Field type.
     */
    registerDefaultSchemaFieldMapping: function (schemaType, fieldType) {
        if (schemaType && fieldType) {
            this.defaultSchemaFieldMapping[schemaType] = fieldType;
        }
    },

    /**
     * Field Type to Schema Format Mappings.
     */
    defaultFormatFieldMapping: {},

    /**
     * Registers a field type to schema format mapping.
     *
     * @param {String} format Schema format.
     * @param {String} fieldType Field type.
     */
    registerDefaultFormatFieldMapping: function (format, fieldType) {
        if (format && fieldType) {
            this.defaultFormatFieldMapping[format] = fieldType;
        }
    },
    /**
     * Gets schema type of a variable.
     *
     * @param {Any} data The variable.
     * @returns {String} Schema type of the variable.
     */
    getSchemaType: function (data) {

        var schemaType = null;

        // map data types to default field types
        if (this.isEmpty(data)) {
            schemaType = "string";
        }
        else if (this.isArray(data)) {
            schemaType = "array";
        }
        else if (this.isObject(data)) {
            schemaType = "object";
        }
        else if (this.isString(data)) {
            schemaType = "string";
        }
        else if (this.isNumber(data)) {
            schemaType = "number";
        }
        else if (this.isBoolean(data)) {
            schemaType = "boolean";
        }
        // Last check for data that carries functions -- GitanaConnector case.
        if (!schemaType && (typeof data === 'object')) {
            schemaType = "object";
        }
        return schemaType;
    },
    /**
    * Makes a best guess at the options field type if none provided.
    *
    * @param schema
    * @returns {string} the field type
    */
    guessOptionsType: function (schema) {
        var type = null;

        if (schema && typeof (schema["enum"]) !== "undefined") {
            if (schema["enum"].length > 3) {
                type = "select";
            }
            else {
                type = "radio";
            }
        }
        else {
            type = this.defaultSchemaFieldMapping[schema.type];
        }

        // check if it has format defined
        if (schema.format && this.defaultFormatFieldMapping[schema.format]) {
            type = this.defaultFormatFieldMapping[schema.format];
        }

        return type;
    },

    /**
     * Lama Views.
     */
    views: {},

    /**
     * Generates a valid view id.
     *
     * @returns {String} A valid unique view id.
     */
    generateViewId: function () {
        return "view-" + this.generateId();
    },

    /**
     * Registers a view with the framework.
     *
     * @param viewObject
     */
    registerView: function (viewObject) {
        var viewId = viewObject.id;
        if (!viewId) {
            return this.throwDefaultError("Cannot register view with missing view id: " + viewId);
        }
        var existingView = this.views[viewId];
        if (existingView) {
            this.mergeObject(existingView, viewObject);
        }
        else {
            this.views[viewId] = viewObject;
            if (!viewObject.components) {
                viewObject.components = {};
            }
        }
    },

    /**
     * Resolves which view handles a given theme and type of operation.
     *
     * @param {String} ui
     * @param {String} type
     *
     * @returns {String} the view id
     */
    lookupView: function (ui, type) {
        var theViewId = null;
        for (var viewId in this.views) {
            var view = this.views[viewId];

            if (view.ui === ui && view.type === type) {
                theViewId = viewId;
                break;
            }
        }
        return theViewId;
    },

    /**
     * Registers a component to a view.
     *
     * @param {String} templateId Template id.
     * @param {String|Object} template Either the text of the template or an object containing { "type": "<templateEngineIdentifier>", "template": "<markup>" }
     * @param [String] viewId the optional view id.  If none is provided, then all registrations are to the default view.
     */
    registerTemplate: function (templateId, template, viewId) {
        // if no view specified, fall back to the base view which is "base"
        if (!viewId) {
            viewId = "base";
        }
        if (!this.views[viewId]) {
            this.views[viewId] = {};
            this.views[viewId].id = viewId;
        }
        if (!this.views[viewId].components) {
            this.views[viewId].components = {};
        }
        this.views[viewId].components[templateId] = template;
    },

    /**
     * Registers list of templates to a view.
     *
     * @param {Array} components Components being registered
     * @param {String} viewId Id of the view that the components being registered to.
     */
    registerTemplates: function (components, viewId) {
        for (var templateId in components) {
            this.registerTemplate(templateId, components[templateId], viewId);
        }
    },

    /**
     * Maps of field types to field class implementations.
     */
    fieldClassRegistry: {},

    /**
     * Registers an implementation class for a type of field.
     *
     * @param {String} type Field type.
     * @param{Lama.Field} fieldClass Field class.
     */
    registerFieldComponent: function (type, fieldClass) {
        this.fieldClassRegistry[type] = fieldClass;
    },

    /**
     * Returns the implementation class for a type of field.
     *
     * @param {String} type Field type.
     *
     * @returns{Lama.Field} Field class mapped to field type.
     */
    getFieldComponent: function (type) {
        return this.fieldClassRegistry[type];
    },

    /**
     * Gets the field type id for a given field implementation class.
     *
     * @param{Lama.Field} fieldClass Field class.
     *
     * @returns {String} Field type of the field class.
     */
    getFieldComponentType: function (fieldClass) {
        for (var type in this.fieldClassRegistry) {
            // eslint-disable-next-line no-prototype-builtins
            if (this.fieldClassRegistry.hasOwnProperty(type)) {
                if (this.fieldClassRegistry[type] === fieldClass) {
                    return type;
                }
            }
        }
        return null;
    },

    /**
     * Maps of connector types to connector class implementations.
     */
    connectorClassRegistry: {},

    /**
     * Registers an implementation class for a connector type.
     *
     * @param {String} type cConnect type
     * @param{Lama.Connector} connectorClass Connector class.
     */
    registerConnectorClass: function (type, connectorClass) {
        this.connectorClassRegistry[type] = connectorClass;
    },

    /**
     * Returns the implementation class for a connector type.
     *
     * @param {String} type Connect type.
     * @returns{Lama.Connector} Connector class mapped to connect type.
     */
    getConnectorClass: function (type) {
        return this.connectorClassRegistry[type];
    },

    getMessage: function (viewId, key, locale) {

        if (!locale) {
            locale = this.defaultLocale;
        }
        var messageForLocale = null;
        while (viewId) {
            var view = this.views[viewId];
            if (view && view["messages"]) {
                if (view["messages"][locale]) {
                    messageForLocale = view["messages"][locale][key];
                }
                if (this.isEmpty(messageForLocale)) {
                    messageForLocale = view["messages"][key];
                }
                if (!this.isEmpty(messageForLocale)) {
                    return messageForLocale;
                }
            }
            viewId = view.parent;
        }
        return "[" + key + "]";
    },

    /**
    * Initial function for setting up field instance and executing callbacks if needed.
    *
    * @param {Object} el Container element.
    * @param {Object} data Field data.
    * @param {Object} options Field options.
    * @param {Object} schema Field schema.
    * @param {Object|String} view Field view.
    * @param {Object} initialSettings any additional settings provided to the top-level Lama object
    * @param {Function} callback Render callback.
    * @param {Function} renderedCallback Post-render callback.
    * @param {Lama.connector} connector Field connector.
    * @param {Function} errorCallback Error callback.
    *
    * @returns {Lama.Field} New field instance.
    */
    init: function (el, data, options, schema, view, initialSettings, callback, renderedCallback, connector, errorCallback) {

        //var self = this;

        // if they provided an inline view object, we assign an id and store onto views map
        // so that it gets compiled along with the rest
        if (this.isObject(view)) {
            var viewId = view.id;
            if (!viewId) {
                view.id = this.generateViewId();
            }
            var parentId = view.parent;
            if (!parentId) {
                view.parent = "bootstrap4-edit";
            }
            this.registerView(view);
            view = view.id;
        }

        // make some intelligent guesses about what view id we might default to in case they want to use
        // auto-view selection.  We detect jquery-ui, bootstrap and jquerymobile.  If nothing can be detected,
        // we fall back to straight web views.
        var fallbackUI = this.defaultView || null;
        var fallbackType = null;

        if (fallbackUI) {
            if (data) {
                fallbackType = "edit";
            } else {
                fallbackType = "create";
            }
        }

        // if no view provided, but they provided "ui" and optionally "type", then we try to auto-select the view
        if (!view) {
            var ui = initialSettings.ui;
            var type = initialSettings.type;

            if (!ui) {
                if (!fallbackUI) {
                    fallbackUI = this.defaultUI;
                }
                if (fallbackUI) {
                    ui = fallbackUI;
                }
            }

            if (ui) {
                if (!type) {
                    type = fallbackType ? fallbackType : "edit";
                }

                this.logDebug("No view provided but found request for UI: " + ui + " and type: " + type);

                // see if we can auto-select a view
                view = this.lookupView(ui, type);
                if (view) {
                    this.logDebug("Found view: " + view);
                } else {
                    this.logDebug("No view found for UI: " + ui + " and type: " + type);
                }
            }
        }

        // NOTE: at this point view is a string (the view id) or it is empty/null

        // if still no view, then default fallback to our detected view or the default
        if (!view) {
            return this.throwErrorWithCallback("A view was not specified and could not be automatically determined.", errorCallback);
        }
        else {
            // debugging: if the view isn't available, we want to report it right away
            if (this.isString(view)) {
                if (!this.views[view]) {
                    return this.throwErrorWithCallback("The desired view: " + view + " could not be loaded.  Please make sure it is loaded and not misspelled.", errorCallback);
                }
            }

            var field = this.createFieldInstance("", data, options, schema, view, connector);
            if (field) {

                //this.fieldInstances[field.getId()] = field;

                // mechanism for looking up field instances by id
                //field.allFieldInstances = function () {
                //   return this.fieldInstances;
                //};

                // allow callbacks defined through view
                if (this.isEmpty(callback)) {
                    callback = field.view.render;
                }
                if (this.isEmpty(renderedCallback)) {
                    renderedCallback = field.view.postRender;
                }

                var fin = function () {
                    // if this is the top-level alpaca field, we apply some additional CSS classes
                    if (!field.parent) {
                        //field.getFieldEl().addClass("alpaca-" + self.getNormalizedView(view).type);
                    }

                    // if this is the top-level alpaca field, we mark as top
                    if (!field.parent) {
                        //field.getFieldEl().addClass("alpaca-top");
                    }

                    renderedCallback(field);
                };

                if (!this.isEmpty(callback)) {
                    callback(field, function () {
                        fin();
                    });
                } else {
                    field.render(function () {
                        fin();
                    });
                }

                field.callback = callback;
                field.renderedCallback = renderedCallback;
            }
        }
    },
    /**
     * Internal method for constructing a field instance.
     *
     * @param {Object} el The dom element to act as the container of the constructed field.
     * @param {Object} data The data to be bound into the field.
     * @param {Object} options The configuration for the field.
     * @param {Object} schema The schema for the field.
     * @param {Object|String} view The view for the field.
     * @param{Lama.connector} connector The field connector to be bound into the field.
     * @param {Function} errorCallback Error callback.
     *
     * @returns{Lama.Field} New field instance.
     */
    createFieldInstance: function (prefix, data, options, schema, view, connector) {

        var errorCallback = this.defaultErrorCallback;
        // make sure options and schema are not empty
        if (this.isValEmpty(options, true)) {
            options = {};
        }
        if (this.isValEmpty(schema, true)) {
            schema = {};
        }
        if (this.isUndefined(schema.required)) {
            schema.required = false;
        }

        // options can be a string that identifies the kind of field to construct (i.e. "text")
        if (options && this.isString(options)) {
            var fieldType = options;
            options = {};
            options.type = fieldType;
        }
        if (!options.type) {
            // if nothing passed in, we can try to make a guess based on the type of data
            if (!schema.type) {
                schema.type = this.getSchemaType(data);
            }
            if (!schema.type) {
                if (data && this.isArray(data)) {
                    schema.type = "array";
                }
                else {
                    schema.type = "object"; // fallback
                }
            }

            // using what we now about schema, try to guess the type
            options.type = this.guessOptionsType(schema);
        }
        // find the field class registered for this field type
        var component = this.getFieldComponent(prefix + options.type);
        if (!component) {
            errorCallback({
                "message": "Unable to find field class for type: " + options.type + " (" + schema.type + ")",
                "reason": "FIELD_INSTANTIATION_ERROR"
            });
            return null;
        }
        if (schema.type == "object" && this.isUndefined(data)) {
            data = {};
        } else if (schema.type == "array" && this.isUndefined(data)) {
            data = [];
        }

        //else if (this.isEmpty(data) && schema.default) {
        //    data = schema.default;
        //}

        // if we have data, bind it in
        return {
            component,
            props: { data, options, schema, view, connector, errorCallback }
        };
        //return new FieldClass(el, data, options, schema, view, connector, errorCallback);

    },
    /**
     * Creates an empty data object for a given JSON schema.
     *
     * @param schema
     * @returns {string}
     */
    createEmptyDataInstance: function (schema) {
        if (!schema) {
            return "";
        }

        if (schema.type === "object") {
            return {};
        }

        if (schema.type === "array") {
            return [];
        }

        if (schema.type === "number") {
            return -1;
        }

        if (schema.type === "boolean") {
            return false;
        }

        return "";
    },

    defaultView: {

    },
    /*
    DEFAULT_ERROR_CALLBACK: function (error) {
        if (error && error.message) {
            // log to debug
            this.logError(JSON.stringify(error));

            // error out
            throw new Error("Lama caught an error with the default error handler: " + JSON.stringify(error));

        }
    },
    */
    /**
     * Default error callback handler for Lama.
     *
     * This error handler will be used if an "error" argument isn't passed in to the constructor for an Lama field.
     *
     * @param error
     */
    defaultErrorCallback: function (error) {
        if (error && error.message) {
            // log to debug
            //this.logError(JSON.stringify(error));
            console.log(error);

            // error out
            throw new Error("Lama caught an error with the default error handler: " + JSON.stringify(error));

        }
    },

    /**
     * Utility method that throws a general error and dispatches to the default error handler.
     *
     * @param message
     */
    throwDefaultError: function (message) {
        if (message && this.isObject(message)) {
            message = JSON.stringify(message);
        }

        var err = {
            "message": message
        };

        this.defaultErrorCallback(err);
    },

    /**
     * Utility method that throws an error back to the given callback handler.
     *
     * @param message
     * @param errorCallback
     */
    throwErrorWithCallback: function (message, errorCallback) {
        if (message && this.isObject(message)) {
            message = JSON.stringify(message);
        }

        var err = {
            "message": message
        };

        if (errorCallback) {
            errorCallback(err);
        }
        else {
            this.defaultErrorCallback(err);
        }
    },

    ///////////////////////////////////////////////////////////////////////////////////////////
    //
    // LOGGER
    //
    ///////////////////////////////////////////////////////////////////////////////////////////

    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,

    // by default, logging only shows warnings and above
    // to debug, set this.logLevel = this.DEBUG
    logLevel: 2, //WARN,

    logDebug: function (obj) {
        this.log(this.DEBUG, obj);
    },
    logInfo: function (obj) {
        this.log(this.INFO, obj);
    },
    logWarn: function (obj) {
        this.log(this.WARN, obj);
    },
    logError: function (obj) {
        this.log(this.ERROR, obj);
    },

    LOG_METHOD_MAP: {
        0: 'debug',
        1: 'info',
        2: 'warn',
        3: 'error'
    },

    log: function (level, obj) {

        if (this.logLevel <= level) {
            var method = this.LOG_METHOD_MAP[level];

            if (typeof console !== 'undefined' && console[method]) {
                if ("debug" === method) {
                    console.debug(obj);
                }
                else if ("info" === method) {
                    console.info(obj);
                }
                else if ("warn" === method) {
                    console.warn(obj);
                }
                else if ("error" === method) {
                    console.error(obj);
                }
                else {
                    console.log(obj);
                }
            }
        }
    },
    installed: false,
    install(Vue, options) {
        if (this.installed) {
            console.warn("[LamaVue] allready installed");
            return
        }
        this.installed = true;

        this.registerView(BaseView);
        Bootstap4View.register();
        if (options && options.view)
            this.defaultView = options.view;
        else
            this.defaultView = "bootstrap4-edit";
        this.registerConnectorClass("default", DefaultConnector);
    },
    mount(elementOrSelector, config) {
        let app = new Vue({
            data: {
                model: config.data
            },
            render: function (h) {
                var self = this;
                return h(LamaForm, {
                    ref: 'form',
                    props: {
                        schema: config.schema,
                        options: config.options,
                        view: config.view,
                        connector: config.connector,
                        value: self.model
                    },
                    on: {
                        input: function (event) {
                            //self.$emit('input', event.target.value)
                            self.model = event;
                        }
                    }
                });

            },
            mounted() {
                if (config.init)
                    this.$refs.form.init();
            }, 

        }).$mount(elementOrSelector);
        return {
            getValue(){
                return app.model;
            },
            setValue(val){
                return app.model = val;
            },
            validate(successCallback, errorCallBack){
                app.$refs.form.validate(successCallback, errorCallBack);
            }

        };
    },
    mountBuilder(elementOrSelector, config) {
        let app = new Vue({
            data: {
                model: config.data
            },
            render: function (h) {
                var self = this;
                return h(LamaBuilder, {
                    ref: 'builder',
                    props: {                       
                        connector: config.connector,
                        value: self.model
                    },
                    on: {
                        input: function (event) {
                            //self.$emit('input', event.target.value)
                            self.model = event;
                        }
                    }
                });

            }
        }).$mount(elementOrSelector);
        return {
            getValue(){
                return app.model;
            },
            validate(successCallback, errorCallBack){
                app.$refs.builder.validate(successCallback, errorCallBack);
            }
        };
    }
}
export default Lama;

if (typeof window !== 'undefined' ) {
    window.Lama = Lama;
    Vue.use(Lama);
}