
<script>
    import ObjectBaseField from "./ObjectBaseField.vue";

    let LinkField = {
        name: "LinkField",
        extends: ObjectBaseField,
        data() {
            return {};
        },
        computed: {
             model: {
                get() {
                    return this.value;
                },
                set(val) {
                    if (val.type=="page")
                        val.url = val && val.page ? val.page.url : "";
                    else if (val.type=="email")
                        val.url = val && val.email ? 'mailto:'+val.email : "";
                    else if (val.type=="phone")
                        val.url = val && val.phone ? 'phone:'+val.phone : "";
                    
                    this.$emit("input", val);
                }
            },
            props() {
                let self = this;
                return {
                    schema: {
                        title: self.schema.title,
                        type: "object",
                        properties: {
                            text: {
                                title: "Text",
                                type: 'string'
                            },
                            type: {
                                title: "Type",
                                type: "string",
                                enum : ["url", "page", "email", "phone"]
                            },
                            url: {
                                title: "Url",
                                type: "string"
                            },
                            page: {
                                title: "Page",
                                type: "string"
                            },
                            email: {
                                title: "Email",
                                type: "string"
                            },
                            phone: {
                                title: "Phone",
                                type: "string"
                            },
                            newWindow: {
                                type: "boolean"
                            }
                        }
                    },
                    options: {
                        fields: {
                            type: {
                                type:"select"
                            },
                            url: {
                                type: 'text',
                                dependencies:
                                {
                                    type: ["url"]
                                }
                            },
                            page: {
                                type: "page",
                                dependencies:
                                {
                                    type: ["page"]
                                }
                            },
                            email: {
                                type: "text",
                                dependencies:
                                {
                                    type: ["email"]
                                }
                            },
                            phone: {
                                type: "text",
                                dependencies:
                                {
                                    type: ["phone"]
                                }
                            },
                            newWindow: {
                                rightLabel: "Open in new window",
                                dependencies:
                                {
                                    type: ["url", "page"]
                                }
                            }
                        }
                    },
                    view: this.view,
                    connector: this.connector
                };
            }
        },
        methods: {},
        created() { },
        components: {},
        builder: {
            props() {
                return {
                    schema: {
                        type: "object",
                        properties: {}
                    },
                    options: {}
                };
            },
            fromBuilder(field) {
                return {
                    schema: {
                        title: field.label,
                        type: "object"
                    },
                    options: {
                        type: "link"
                    }
                };
            },
            toBuilder(def) {
                return {
                    label: def.schema.title,
                    fieldType: "link"
                };
            }
        }
    };
    export default LinkField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
