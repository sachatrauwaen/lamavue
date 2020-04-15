import Vue from 'vue'
//import Fields from './components/Fields.vue'
import Form from './components/Form.vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, email, numeric } from 'vee-validate/dist/rules';
import VueI18n from 'vue-i18n'

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.use(VueI18n)

extend('required', required);
extend('email', email);
extend('numeric', numeric);

(function ($) {
    var Lama = function () {
        var args = Lama.makeArray(arguments);
        if (args.length === 0) {
            // illegal
            return Lama.throwDefaultError("You must supply at least one argument.  This argument can either be a DOM element against which Lama will generate a form or it can be a function name.  See http://www.alpacajs.org for more details.");
        }
        // element is the first argument (either a string or a DOM element)
        var el = args[0];
        if (el && Lama.isString(el)) {
            el = $("#" + el);
        }
        // other arguments we may want to figure out
        var data = null;
        var schema = null;
        var options = null;
        var view = null;
        var callback = null;
        var renderedCallback = null;
        var errorCallback = null;
        var connector = null;
        var notTopLevel = false;
        var initialSettings = {};
        // if these options are provided, then data, schema, options and source are loaded via connector
        var dataSource = null;
        var schemaSource = null;
        var optionsSource = null;
        var viewSource = null;
        var config = null;
        if (Lama.isObject(args[1])) {
            config = args[1];
        }
        else if (Lama.isFunction(args[1])) {
            config = args[1]();
        }
        else {
            config = {
                "data": args[1]
            };
        }
        if (!config) {
            return Lama.throwDefaultError("Unable to determine Lama configuration");
        }
        data = config.data;
        schema = config.schema;
        options = config.options;
        view = config.view;
        callback = config.render;
        if (config.callback) {
            callback = config.callback;
        } else {
            callback = function (field, afterRenderCallBack) {
                /* 
                                const i18n = new VueI18n({
                                    locale: 'ja', 
                                    messages: , 
                                  }) */

                new Vue({
                    //i18n,
                    data: {
                        model: field.props.data
                    },
                    render: function (h) {
                        var self = this;
                        return h(Form, {
                            props: {
                                data: field.props.data,
                                schema: field.props.schema,
                                options: field.props.options,
                                view: field.props.view,
                                connector: field.props.connector,
                                value: self.model
                            },
                            on: {
                                input: function (event) {
                                    //self.$emit('input', event.target.value)
                                    self.model = event;
                                }
                            }
                        });
                        /*
                                                var self = this;
                                                return h(field.component, {
                                                    props: field.props
                                                },
                                                    [
                                                        h(Fields, {
                                                            props: {
                                                                data: field.props.data,
                                                                schema: field.props.schema,
                                                                options: field.props.options,
                                                                view: field.props.view,
                                                                value: self.model
                                                            },
                                                            on: {
                                                                input: function (event) {
                                                                    //self.$emit('input', event.target.value)
                                                                    self.model = event;
                                                                }
                                                            }
                                                        })
                                                    ]
                                                )
                                                */
                    }
                }).$mount(el[0]);
                afterRenderCallBack();
            }
        }
        renderedCallback = config.postRender;
        errorCallback = config.error;
        connector = config.connector;

        // sources
        dataSource = config.dataSource;
        schemaSource = config.schemaSource;
        optionsSource = config.optionsSource;
        viewSource = config.viewSource;

        // other
        if (config.ui) {
            initialSettings["ui"] = config.ui;
        }
        if (config.type) {
            initialSettings["type"] = config.type;
        }
        if (!Lama.isEmpty(config.notTopLevel)) {
            notTopLevel = config.notTopLevel;
        }

        // if no error callback is provided, we fall back to a browser alert
        if (Lama.isEmpty(errorCallback)) {
            errorCallback = Lama.defaultErrorCallback;
        }

        // instantiate the connector (if not already instantiated)
        // if config is passed in (as object), we instantiate
        if (!connector || !connector.connect) {
            var connectorId = "default";
            var connectorConfig = {};
            if (Lama.isString(connector)) {
                connectorId = connector;
            }
            else if (Lama.isObject(connector) && connector.id) {
                connectorId = connector.id;
                if (connector.config) {
                    connectorConfig = connector.config;
                }
            }

            var ConnectorClass = Lama.getConnectorClass(connectorId);
            if (!ConnectorClass) {
                ConnectorClass = Lama.getConnectorClass("default");
            }
            connector = new ConnectorClass(connectorId, connectorConfig);
        }

        // For second or deeper level of fields, default loader should be the one to do loadAll
        // since schema, data, options and view should have already been loaded.
        // Unless we want to load individual fields (other than the templates) using the provided
        // loader, this should be good enough. The benefit is saving time on loader format checking.

        var loadAllConnector = connector;

        if (notTopLevel) {
            var LoadAllConnectorClass = Lama.getConnectorClass("default");
            loadAllConnector = new LoadAllConnectorClass("default");
        }

        if (!options) {
            options = {};
        }

        var _renderedCallback = function (field) {
            if (renderedCallback) {
                renderedCallback(field);
            }
        };

        loadAllConnector.loadAll({
            "data": data,
            "schema": schema,
            "options": options,
            "view": view,
            "dataSource": dataSource,
            "schemaSource": schemaSource,
            "optionsSource": optionsSource,
            "viewSource": viewSource
        }, function (loadedData, loadedOptions, loadedSchema, loadedView) {

            // for cases where things could not be loaded via source loaders, fall back to what may have been passed
            // in directly as values

            loadedData = loadedData ? loadedData : data;
            loadedSchema = loadedSchema ? loadedSchema : schema;
            loadedOptions = loadedOptions ? loadedOptions : options;
            loadedView = loadedView ? loadedView : view;

            // some defaults for the case where data is null
            // if schema + options are not provided, we assume a text field

            if (Lama.isEmpty(loadedData)) {
                if (Lama.isEmpty(loadedSchema) && (Lama.isEmpty(loadedOptions) || Lama.isEmpty(loadedOptions.type))) {
                    loadedData = "";

                    if (Lama.isEmpty(loadedOptions)) {
                        loadedOptions = "text";
                    }
                    else if (options && Lama.isObject(options)) {
                        loadedOptions.type = "text";
                    }
                }
            }

            if (loadedOptions.view && !view) {
                loadedView = loadedOptions.view;
            }

            // init alpaca
            return Lama.init(el, loadedData, loadedOptions, loadedSchema, loadedView, initialSettings, callback, _renderedCallback, connector, errorCallback);

        }, function (loadError) {
            errorCallback(loadError);
            return null;
        });

        //el.append("<p>test</p>");



    }

    /**
     * @namespace Namespace for all Lama Field Class Implementations.
     */
    Lama.Fields = {};

    /**
     * @namespace Namespace for all Lama Connector Class Implementations.
     */
    Lama.Connectors = {};


    Lama.Extend = $.extend;

    // static methods and properties
    Lama.Extend(Lama,

        {
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
                return !Lama.isUndefined(obj) && Object.prototype.toString.call(obj) === '[object Object]';
            },

            /**
             * Finds whether the type of a variable is a plain, non-prototyped object.
             * @param {Any} obj The variable being evaluated.
             * @returns {Boolean} True if the variable is a plain object, false otherwise.
             */
            isPlainObject: function (obj) {
                return $.isPlainObject(obj);
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

                if (Lama.isUndefined(obj)) {
                    return true;
                }
                else if (obj === null) {
                    return true;
                }

                if (obj && Lama.isObject(obj)) {
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

                if (obj && Lama.isObject(obj)) {
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

                if (Lama.isArray(thing)) {
                    copy = [];

                    for (var i = 0; i < thing.length; i++) {
                        copy.push(Lama.copyOf(thing[i]));
                    }
                }
                else if (Lama.isObject(thing)) {
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
                    else if ($.isPlainObject(thing)) {
                        copy = {};

                        for (var k in thing) {
                            // eslint-disable-next-line no-prototype-builtins
                            if (thing.hasOwnProperty(k)) {
                                copy[k] = Lama.copyOf(thing[k]);
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
                return Lama.copyOf(object);
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
                    if (!Lama.isNull(arr[i]) && !Lama.isUndefined(arr[i])) {
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

                if (!Lama.isFunction(fn)) {
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
                if (Lama.isEmpty(val, includeFunctions)) {
                    empty = true;
                } else {
                    if (Lama.isString(val) && val === "") {
                        empty = true;
                    }
                    if (Lama.isObject(val) && $.isEmptyObject(val)) {
                        empty = true;
                    }
                    if (Lama.isArray(val) && val.length === 0) {
                        empty = true;
                    }

                    /*
                    if (Lama.isNumber(val) && isNaN(val)) {
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
                        if (Lama.isEmpty(obj2[key])) {
                            obj1[key] = obj2[key];
                        } else {
                            if (Lama.isObject(obj2[key])) {
                                if (!obj1[key]) {
                                    obj1[key] = {};
                                }
                                obj1[key] = Lama.merge(obj1[key], obj2[key]);
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
                var isArray = Lama.isArray;
                var isObject = Lama.isObject;
                var isUndefined = Lama.isUndefined;
                var copyOf = Lama.copyOf;

                var _merge = function (source, target) {
                    if (isArray(source)) {
                        if (isArray(target)) {
                            // merge array elements
                            $.each(source, function (index) {
                                target.push(copyOf(source[index]));
                            });
                        }
                        else {
                            // something is already in the target that isn't an ARRAY
                            // skip
                        }
                    }
                    else if (isObject(source)) {
                        if (isObject(target)) {
                            // merge object properties
                            $.each(source, function (key) {

                                if (isUndefined(target[key])) {
                                    target[key] = copyOf(source[key]);
                                } else {
                                    target[key] = _merge(source[key], target[key]);
                                }

                            });
                        }
                        else {
                            // something is already in the target that isn't an OBJECT
                            // skip
                        }

                    }
                    else {
                        // otherwise, it's a scalar, always overwrite
                        target = copyOf(source);
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
                Lama.uniqueIdCounter++;
                return "lama" + Lama.uniqueIdCounter;
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
                if (Lama.isEmpty(data)) {
                    schemaType = "string";
                }
                else if (Lama.isArray(data)) {
                    schemaType = "array";
                }
                else if (Lama.isObject(data)) {
                    schemaType = "object";
                }
                else if (Lama.isString(data)) {
                    schemaType = "string";
                }
                else if (Lama.isNumber(data)) {
                    schemaType = "number";
                }
                else if (Lama.isBoolean(data)) {
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
                    type = Lama.defaultSchemaFieldMapping[schema.type];
                }

                // check if it has format defined
                if (schema.format && Lama.defaultFormatFieldMapping[schema.format]) {
                    type = Lama.defaultFormatFieldMapping[schema.format];
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
                    return Lama.throwDefaultError("Cannot register view with missing view id: " + viewId);
                }

                var existingView = this.views[viewId];
                if (existingView) {
                    Lama.mergeObject(existingView, viewObject);
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
             * @param {Lama.Field} fieldClass Field class.
             */
            registerFieldComponent: function (type, fieldClass) {
                this.fieldClassRegistry[type] = fieldClass;
            },

            /**
             * Returns the implementation class for a type of field.
             *
             * @param {String} type Field type.
             *
             * @returns {Lama.Field} Field class mapped to field type.
             */
            getFieldComponent: function (type) {
                return this.fieldClassRegistry[type];
            },

            /**
             * Gets the field type id for a given field implementation class.
             *
             * @param {Lama.Field} fieldClass Field class.
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
             * @param {Lama.Connector} connectorClass Connector class.
             */
            registerConnectorClass: function (type, connectorClass) {
                this.connectorClassRegistry[type] = connectorClass;
            },

            /**
             * Returns the implementation class for a connector type.
             *
             * @param {String} type Connect type.
             * @returns {Lama.Connector} Connector class mapped to connect type.
             */
            getConnectorClass: function (type) {
                return this.connectorClassRegistry[type];
            },

            getMessage: function (viewId, key, locale) {

                if (!locale) {
                    locale = Lama.defaultLocale;
                }
                var messageForLocale = null;
                while (viewId) {
                    var view = this.views[viewId];
                    if (view["messages"]) {
                        if (view["messages"][locale]) {
                            messageForLocale = view["messages"][locale][key];
                        }
                        if (Lama.isEmpty(messageForLocale)) {
                            messageForLocale = view["messages"][key];
                        }
                        if (!Lama.isEmpty(messageForLocale)) {
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
                if (Lama.isObject(view)) {
                    var viewId = view.id;
                    if (!viewId) {
                        view.id = this.generateViewId();
                    }
                    var parentId = view.parent;
                    if (!parentId) {
                        view.parent = "bootstrap-edit";
                    }
                    this.registerView(view);
                    view = view.id;
                }

                // make some intelligent guesses about what view id we might default to in case they want to use
                // auto-view selection.  We detect jquery-ui, bootstrap and jquerymobile.  If nothing can be detected,
                // we fall back to straight web views.
                var fallbackUI = Lama.defaultView || null;
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
                            fallbackUI = Lama.defaultUI;
                        }
                        if (fallbackUI) {
                            ui = fallbackUI;
                        }
                    }

                    if (ui) {
                        if (!type) {
                            type = fallbackType ? fallbackType : "edit";
                        }

                        Lama.logDebug("No view provided but found request for UI: " + ui + " and type: " + type);

                        // see if we can auto-select a view
                        view = this.lookupView(ui, type);
                        if (view) {
                            Lama.logDebug("Found view: " + view);
                        } else {
                            Lama.logDebug("No view found for UI: " + ui + " and type: " + type);
                        }
                    }
                }

                // NOTE: at this point view is a string (the view id) or it is empty/null

                // if still no view, then default fallback to our detected view or the default
                if (!view) {
                    return Lama.throwErrorWithCallback("A view was not specified and could not be automatically determined.", errorCallback);
                }
                else {
                    // debugging: if the view isn't available, we want to report it right away
                    if (Lama.isString(view)) {
                        if (!this.views[view]) {
                            return Lama.throwErrorWithCallback("The desired view: " + view + " could not be loaded.  Please make sure it is loaded and not misspelled.", errorCallback);
                        }
                    }

                    var field = Lama.createFieldInstance("", data, options, schema, view, connector);
                    if (field) {
                        // hide field while rendering
                        $(el).addClass("alpaca-field-rendering");
                        $(el).addClass("alpaca-hidden");

                        //Lama.fieldInstances[field.getId()] = field;

                        // mechanism for looking up field instances by id
                        //field.allFieldInstances = function () {
                        //   return Lama.fieldInstances;
                        //};

                        // allow callbacks defined through view
                        if (Lama.isEmpty(callback)) {
                            callback = field.view.render;
                        }
                        if (Lama.isEmpty(renderedCallback)) {
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

                            // reveal field after rendering
                            $(el).removeClass("alpaca-field-rendering");
                            $(el).removeClass("alpaca-hidden");

                            // if there was a previous field that needs to be cleaned up, do so now
                            if (field._oldFieldEl) {
                                //$(field._oldFieldEl).remove();
                            }


                            renderedCallback(field);
                        };

                        if (!Lama.isEmpty(callback)) {
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
             * @param {Lama.connector} connector The field connector to be bound into the field.
             * @param {Function} errorCallback Error callback.
             *
             * @returns {Lama.Field} New field instance.
             */
            createFieldInstance: function (prefix, data, options, schema, view, connector) {

                var errorCallback = Lama.defaultErrorCallback;
                // make sure options and schema are not empty
                if (Lama.isValEmpty(options, true)) {
                    options = {};
                }
                if (Lama.isValEmpty(schema, true)) {
                    schema = {};
                }
                if (Lama.isUndefined(schema.required)) {
                    schema.required = false;
                }

                // options can be a string that identifies the kind of field to construct (i.e. "text")
                if (options && Lama.isString(options)) {
                    var fieldType = options;
                    options = {};
                    options.type = fieldType;
                }
                if (!options.type) {
                    // if nothing passed in, we can try to make a guess based on the type of data
                    if (!schema.type) {
                        schema.type = Lama.getSchemaType(data);
                    }
                    if (!schema.type) {
                        if (data && Lama.isArray(data)) {
                            schema.type = "array";
                        }
                        else {
                            schema.type = "object"; // fallback
                        }
                    }

                    // using what we now about schema, try to guess the type
                    options.type = Lama.guessOptionsType(schema);
                }
                // find the field class registered for this field type
                var component = Lama.getFieldComponent(prefix + options.type);
                if (!component) {
                    errorCallback({
                        "message": "Unable to find field class for type: " + options.type + " (" + schema.type + ")",
                        "reason": "FIELD_INSTANTIATION_ERROR"
                    });
                    return null;
                }
                if (schema.type == "object" && Lama.isUndefined(data)) {
                    data = {};
                } else if (schema.type == "array" && Lama.isUndefined(data)) {
                    data = [];
                }

                // if we have data, bind it in
                return {
                    component,
                    props: { data, options, schema, view, connector, errorCallback }
                };
                //return new FieldClass(el, data, options, schema, view, connector, errorCallback);
            },

        });


    /**
     * Creates an empty data object for a given JSON schema.
     *
     * @param schema
     * @returns {string}
     */
    Lama.createEmptyDataInstance = function (schema) {
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
    };

    Lama.defaultView = {

    };


    Lama.DEFAULT_ERROR_CALLBACK = function (error) {
        if (error && error.message) {
            // log to debug
            Lama.logError(JSON.stringify(error));

            // error out
            throw new Error("Lama caught an error with the default error handler: " + JSON.stringify(error));

        }
    };

    /**
     * Default error callback handler for Lama.
     *
     * This error handler will be used if an "error" argument isn't passed in to the constructor for an Lama field.
     *
     * @param error
     */
    Lama.defaultErrorCallback = Lama.DEFAULT_ERROR_CALLBACK;

    /**
     * Utility method that throws a general error and dispatches to the default error handler.
     *
     * @param message
     */
    Lama.throwDefaultError = function (message) {
        if (message && Lama.isObject(message)) {
            message = JSON.stringify(message);
        }

        var err = {
            "message": message
        };

        Lama.defaultErrorCallback(err);
    };

    /**
     * Utility method that throws an error back to the given callback handler.
     *
     * @param message
     * @param errorCallback
     */
    Lama.throwErrorWithCallback = function (message, errorCallback) {
        if (message && Lama.isObject(message)) {
            message = JSON.stringify(message);
        }

        var err = {
            "message": message
        };

        if (errorCallback) {
            errorCallback(err);
        }
        else {
            Lama.defaultErrorCallback(err);
        }
    };

    ///////////////////////////////////////////////////////////////////////////////////////////
    //
    // LOGGER
    //
    ///////////////////////////////////////////////////////////////////////////////////////////

    Lama.DEBUG = 0;
    Lama.INFO = 1;
    Lama.WARN = 2;
    Lama.ERROR = 3;

    // by default, logging only shows warnings and above
    // to debug, set Lama.logLevel = Lama.DEBUG
    Lama.logLevel = Lama.WARN;

    Lama.logDebug = function (obj) {
        Lama.log(Lama.DEBUG, obj);
    };
    Lama.logInfo = function (obj) {
        Lama.log(Lama.INFO, obj);
    };
    Lama.logWarn = function (obj) {
        Lama.log(Lama.WARN, obj);
    };
    Lama.logError = function (obj) {
        Lama.log(Lama.ERROR, obj);
    };

    Lama.LOG_METHOD_MAP = {
        0: 'debug',
        1: 'info',
        2: 'warn',
        3: 'error'
    };

    Lama.log = function (level, obj) {

        if (Lama.logLevel <= level) {
            var method = Lama.LOG_METHOD_MAP[level];

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
    };


    $.lama = window.Lama = Lama;

    /**
     * jQuery friendly method for binding a field to a DOM element.
     * @ignore
     */
    $.fn.lama = function () {
        var args = Lama.makeArray(arguments);

        // append this into the front of args
        var newArgs = [].concat(this, args);

        // invoke Lama against current element
        var ret = Lama.apply(this, newArgs);
        if (typeof (ret) === "undefined") {
            // as per jQuery's pattern, assume we hand back $el
            ret = $(this);
        }

        return ret;
    };



    // eslint-disable-next-line no-undef
})(jQuery);

export default window.Lama;