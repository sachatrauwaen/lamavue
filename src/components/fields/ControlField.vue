<script>
    import Lama from "../../lama";
    import Control from "./Control.vue";

    let ControlField = {
        name: "ControlField",
        data() {
            return {};
        },
        props: {
            value: {},
            data: {},
            schema: {},
            options: {},
            view: {},
            connector: {}
        },
        computed: {
            model: {
                get() {
                    return this.value;
                },
                set(val) {
                    this.$emit("input", val);
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
                            dependencies: {
                                type: "array",
                                title: "Dependencies",
                                items: {
                                    type: "object",
                                    properties: {
                                        fieldname: {
                                            title: "Field",
                                            type: "string",
                                        },
                                        values: {
                                            title: "Values (value1, value2, ...)",
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
                        optDeps[d.fieldname] = d.values;
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
                        helper: field.helper
                    },
                };
            },
            toBuilder(def) {
                let deps = [];
                if (def.options.dependencies) {
                    for (const key in def.options.dependencies) {
                        const d = def.options.dependencies[key];
                        deps.push({
                            fieldname: key,
                            values: d,
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