
<script>
    import ObjectBaseField from "./ObjectBaseField.vue";
    import Lama from "../../lama";

    let LinkField = {
        name: "LinkField",
        extends: ObjectBaseField,
        data() {
            return {};
        },
        computed: {
             model: {
                get() {
                    return this.modelValue;
                },
                set(val) {
                    let newVal = Object.assign({}, val);
                    if (this.options.multilanguageLink) {
                        newVal.url = Lama.isObject(newVal.url) ? Object.assign({}, newVal.url) : {};
                        if (newVal.type == "page")
                            newVal.url[this.connector.currentCulture] = newVal && newVal.page && newVal.page[this.connector.currentCulture] ? newVal.page[this.connector.currentCulture].url : "";
                        else if (newVal.type == "file")
                            newVal.url[this.connector.currentCulture] = newVal && newVal.file && newVal.file[this.connector.currentCulture] ? newVal.file[this.connector.currentCulture] : "";
                        else if (newVal.type == "email")
                            newVal.url[this.connector.currentCulture] = newVal && newVal.email && newVal.email[this.connector.currentCulture] ? 'mailto:' + newVal.email[this.connector.currentCulture] : "";
                        else if (newVal.type == "phone")
                            newVal.url[this.connector.currentCulture] = newVal && newVal.phone && newVal.phone[this.connector.currentCulture] ? 'tel:' + newVal.phone[this.connector.currentCulture] : "";
                    } else {
                        if (newVal.type == "page")
                            newVal.url = newVal && newVal.page ? newVal.page.url : "";
                        else if (newVal.type == "file")
                            newVal.url = newVal && newVal.file ? newVal.file : "";
                        else if (newVal.type == "email")
                            newVal.url = newVal && newVal.email ? 'mailto:' + newVal.email : "";
                        else if (newVal.type == "phone")
                            newVal.url = newVal && newVal.phone ? 'tel:' + newVal.phone : "";
                    }
                    this.$emit("update:modelValue", newVal);
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
                                enum : ["url", "page", "file", "email", "phone"]
                            },
                            url: {
                                title: "Url",
                                type: "string"
                            },
                            page: {
                                title: "Page",
                                type: "string"
                            },
                            file: {
                                title: "File",
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
                            text: {
                                type: 'text',
                                multilanguage: self.options.multilanguageLink
                            },
                            type: {
                                type:"select"
                            },
                            url: {
                                type: 'text',
                                multilanguage: self.options.multilanguageLink,
                                dependencies:
                                {
                                    type: ["url"]
                                }
                            },
                            page: {
                                type: "page",
                                multilanguage: self.options.multilanguageLink,
                                dependencies:
                                {
                                    type: ["page"]
                                }
                            },
                            file: {
                                type: "file",
                                multilanguage: self.options.multilanguageLink,
                                uploadfolder: self.options.uploadfolder,
                                overwrite: self.options.overwrite,
                                dependencies:
                                {
                                    type: ["file"]
                                }
                            },
                            email: {
                                type: "text",
                                multilanguage: self.options.multilanguageLink,
                                dependencies:
                                {
                                    type: ["email"]
                                }
                            },
                            phone: {
                                type: "text",
                                multilanguage: self.options.multilanguage,
                                dependencies:
                                {
                                    type: ["phone"]
                                }
                            },
                            newWindow: {
                                rightLabel: "Open in new window",
                                dependencies:
                                {
                                    type: ["url", "page", "file"]
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
                        properties: {
                            uploadfolder: {
                                "title": "File Upload Folder",
                                "type": "string"
                            },
                            overwrite: {
                                "type": "boolean"
                            },
                            multilanguageLink: {
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
                        }
                    },
                    options: {
                        fields: {
                            overwrite: {
                                rightLabel: "File Overwrite",
                            },
                            multilanguageLink: {
                                rightLabel: "Multi language",
                            },
                        },
                    }
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
                        type: "object"
                    },
                    options: {
                        type: "link",
                        uploadfolder: field.uploadfolder,
                        overwrite: field.overwrite,
                        multilanguageLink: field.multilanguageLink,
                        dependencies: optDeps,
                    }
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
                    fieldType: "link",
                    uploadfolder: def.options.uploadfolder,
                    overwrite: def.options.overwrite,
                    multilanguageLink: def.options.multilanguageLink,
                    dependencies: deps,
                };
            }
        }
    };
    export default LinkField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
