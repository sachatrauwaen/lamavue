<script>
    import Lama from "../../lama";
    import Control from "./Control.vue";

    let ControlField = {
        name: "ControlField",
        data() {
            return {};
        },
        props: {
            modelValue: {},
            data: {},
            schema: {},
            options: {},
            view: {},
            connector: {}
        },
        emits: ['update:modelValue'],
        computed: {
            model: {
                get() {
                    return this.modelValue;
                },
                set(val) {
                    this.$emit("update:modelValue", val);
                }
            },
            props() {
                return {
                    schema: this.schema,
                    options: this.options,
                    view: this.view,
                    connector: this.connector
                };
            }
        },
        methods: {
            init() {
                if (Lama.isValEmpty(this.model) && this.schema.default) {
                    this.model = this.schema.default;
                }
            }
        },
        components: { Control },
        builder: {
            props() {
                return {
                    schema: {
                        type: "object",
                        properties: {
                            default: {
                                title: "Default",
                                type: "string",
                            },
                            required: {
                                type: "boolean",
                            },
                            readonly: {
                                type: "boolean",
                            },
                            hidden: {
                                type: "boolean",
                            },
                            helper: {
                                title: "Helper",
                                type: "string",
                            },
                            multilanguage: {
                                type: "boolean",
                            },
                            width: {
                                title: "Width",
                                type: "string",
                                default: "full",
                                required: true,
                                enum: ["full", "1/2", "1/3"],
                            },
                            dependencies: {
                                type: "array",
                                title: "Show conditions",
                                items: {
                                    type: "object",
                                    properties: {
                                        fieldname: {
                                            title: "Field",
                                            type: "string",
                                        },
                                        values: {
                                            title: "Values (or)",
                                            type: "string",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    options: {
                        fields: {
                            required: {
                                rightLabel: "Required",
                            },
                            readonly: {
                                rightLabel: "Readonly",
                            },
                            hidden: {
                                rightLabel: "Hidden",
                            },
                            multilanguage: {
                                rightLabel: "Multi language",
                                hidden: Lama.options.multilanguage === false,
                            },
                            width: {
                                type: "select",
                                optionLabels: ["Full width", "1/2 width", "1/3 width"],
                            },
                        },
                    },
                };
            },
            fromBuilder(field) {
                let optDeps = {};
                if (field.dependencies) {
                    for (let index = 0; index < field.dependencies.length; index++) {
                        const d = field.dependencies[index];
                        optDeps[d.fieldname] = Array.isArray(d.values) ? d.values.join(',') : (d.values || '');
                    }
                }
                return {
                    schema: {
                        title: field.label,
                        default: field.default,
                        required: field.required,
                        readonly: field.readonly,
                    },
                    options: {
                        hidden: field.hidden,
                        multilanguage: field.multilanguage,
                        dependencies: optDeps,
                        helper: field.helper,
                        width: field.width,
                    },
                };
            },
            toBuilder(def) {
                let deps = [];
                if (def.options.dependencies) {
                    for (const key in def.options.dependencies) {
                        let d = def.options.dependencies[key];
                        let vals;
                        if (Array.isArray(d)) {
                            vals = d.map(v => String(v));
                        } else if (typeof d === 'string' && d.indexOf(',') >= 0) {
                            vals = d.split(',').map(v => v.trim());
                        } else {
                            vals = d != null ? [String(d)] : [];
                        }
                        deps.push({
                            fieldname: key,
                            values: vals,
                        });
                    }
                }
                return {
                    label: def.schema.title,
                    default: def.schema.default,
                    required: def.schema.required,
                    readonly: def.schema.readonly,
                    hidden: def.options.hidden,
                    helper: def.options.helper,
                    multilanguage: def.options.multilanguage,
                    width: def.options.width || 'full',
                    dependencies: deps,
                };
            },
        },
    };
    export default ControlField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>