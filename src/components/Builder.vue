<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <lama-form v-bind="props" v-model="fields" :debug="debug"></lama-form>
                <div class="form-group">
                    <select class="form-control" v-model="schemaType">
                        <option value="object">Object</option>
                        <option value="array">array</option>
                    </select>
                </div>
            </div>
            <div class="col-md-6">
                <lama-form ref="demoForm" v-bind="demoProps" v-model="demo" :debug="debug"></lama-form>
                <div v-if="debug">
                    <hr />
                    schema = {{ value.schema }}
                    <hr />
                    options = {{ value.options }}
                </div>
            </div>
        </div>
        <hr />
    </div>
</template>

<script>
    import LamaForm from "./Form.vue";
    import Lama from "../lama";
    import builderUtils from "../builderUtils";

    import BuilderField from "./BuilderField.vue";
    import LazyTextField from "./fields/LazyTextField.vue";

    Lama.registerFieldComponent("builder", BuilderField);
    Lama.registerFieldComponent("lazytext", LazyTextField);

    export default {
        name: "Builder",
        props: {
            value: {},
            connector: {},
            debug: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                demo: {},
            };
        },
        computed: {
            fields: {
                get() {
                    let fields = [];
                    if (this.schemaProperties && this.schemaProperties) {
                        for (const key in this.schemaProperties) {
                            const sch = this.schemaProperties[key];
                            const opt = this.optionsFields[key] || {};
                            let type = opt.type;
                            if (!opt.type) {
                                type = Lama.guessOptionsType(sch);
                            }
                            let field = {
                                fieldName: key,
                                label: sch.title,
                                fieldType: type,
                            };
                            if (type) {
                                let builderComponent = Lama.getFieldComponent(type);
                                if (
                                    builderComponent &&
                                    builderComponent.builder &&
                                    builderComponent.builder.toBuilder
                                ) {
                                    field = builderComponent.builder.toBuilder({
                                        schema: sch,
                                        options: opt,
                                    });
                                    while (builderComponent.extends) {
                                        builderComponent = builderComponent.extends;
                                        if (
                                            builderComponent.builder &&
                                            builderComponent.builder.toBuilder
                                        ) {
                                            let extendField = builderComponent.builder.toBuilder({
                                                schema: sch,
                                                options: opt,
                                            });
                                            field = Object.assign(extendField, field);
                                        }
                                    }
                                    field.fieldName = key;
                                }
                            }
                            fields.push(field);
                        }
                    }
                    return fields;
                },
                set(val) {
                    let props = {};
                    let fields = {};
                    for (let index = 0; index < val.length; index++) {
                        const field = val[index];
                        if (Lama.isEmpty(field.fieldName)) field.fieldName = 'field' + index;
                        if (field.fieldType) {
                            let builderComponent = Lama.getFieldComponent(field.fieldType);
                            let builder = builderComponent.builder.fromBuilder(field);
                            while (builderComponent.extends) {
                                builderComponent = builderComponent.extends;
                                if (
                                    builderComponent.builder &&
                                    builderComponent.builder.fromBuilder
                                ) {
                                    let extendBuilder = builderComponent.builder.fromBuilder(field);
                                    builder.schema = Object.assign(extendBuilder.schema, builder.schema);
                                    builder.options = Object.assign(extendBuilder.options, builder.options);
                                }
                            }
                            props[field.fieldName] = builder.schema;
                            fields[field.fieldName] = builder.options;
                        } else {
                            props[field.fieldName] = {
                                title: field.label,
                                type: field.fieldType,
                            };
                            fields[field.fieldName] = {};
                        }
                    }
                    this.$emit("input", {
                        schema:
                            this.schemaType == "array"
                                ? {
                                    //title: "What do you think of Alpaca?",
                                    type: "array",
                                    items: { type: "object", properties: props },
                                }
                                : {
                                    //title: "What do you think of Alpaca?",
                                    type: "object",
                                    properties: props,
                                },
                        options:
                            this.schemaType == "array"
                                ? {  items: { fields: fields } }
                                : { fields: fields },
                    });
                },
            },
            schemaType: {
                get() {
                    if (this.value.schema && this.value.schema.type)
                        return this.value.schema.type;
                    else return "object";
                },
                set(val) {
                    let props = this.schemaProperties;
                    let fields = this.optionsFields;
                    this.demo = val == "array" ? [] : {};
                    this.$emit("input", {
                        schema:
                            val == "array"
                                ? {
                                    //title: "What do you think of Alpaca?",
                                    type: "array",
                                    items: { type: "object", properties: props },
                                }
                                : {
                                    //title: "What do you think of Alpaca?",
                                    type: "object",
                                    properties: props,
                                },
                        options:
                            val == "array" ? { items: { fields: fields } } : { fields: fields },
                    });
                },
            },
            demoProps() {
                let demoSchema = JSON.parse(JSON.stringify(this.value.schema || {}));
                demoSchema.type = demoSchema.type || "object";
                demoSchema.properties = demoSchema.properties || {};
                return {
                    schema: demoSchema,
                    options: JSON.parse(JSON.stringify(this.value.options || {})),
                    connector: this.connector,
                };
            },
            props() {
                return builderUtils.getObjectProps();
            },
            schemaProperties() {
                if (this.value.schema && this.value.schema.type)
                    return this.value.schema.type == "array"
                        ? this.value.schema.items.properties
                        : this.value.schema.properties;
                else return {};
            },
            optionsFields() {
                if (this.value.schema && this.value.schema.type && this.value.options)
                    return this.value.schema.type == "array"
                        ? this.value.options.items.fields
                        : this.value.options.fields;
                else return {};
            },
        },
        methods: {
            /*
            fieldProps() {
                let defautProps = {
                    type: "object",
                    properties: {
                        fieldname: {
                            type: "string",
                            title: "Field Name",
                            required: true,
                            default:''
                        },
                        label: {
                            type: "string",
                            title: "Label",
                            required: true,
                        },
                        fieldType: {
                            type: "string",
                            title: "Field Type",
                            enum: this.fieldTypes,
                        },
                    },
                };

                return defautProps;
            },
            */
        },
        components: { LamaForm },
        mounted() {
            this.$refs.demoForm.init();
        }
    };
</script>

<style>
</style>
