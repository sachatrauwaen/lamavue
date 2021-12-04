<script>
    import VueSelectBaseField from "./VueSelectBaseField.vue";

    let RelationField = {
        name: "RelationField",
        extends: VueSelectBaseField,
        props: {
        },
        data() {
            return {
                query: {
                    type: "data",
                    search: ''
                },
            };
        },
        computed: {

        },
        methods: {
        },
        components: {},
         builder: {
            props() {
                return {
                    schema: {
                        type: "object",
                        properties: {
                            
                            many: {
                                type: "boolean",
                            },
                            dataKey: {
                                title: "Data key",
                                type: "string",
                            },
                            valueField: {
                                title: "Value field",
                                type: "string",
                            },
                            textField: {
                                title: "TextField",
                                type: "string",
                            },
                            placeholder: {
                                title: "Placeholder",
                                type: "string",
                            },
                        },
                    },
                    options: {
                        fields: {
                            many: {
                                rightLabel: "Many"
                            },
                        },
                    },
                };
            },
            fromBuilder(field) {
                return {
                    schema: {
                        type: "string",
                    },
                    options: {
                        type: "relation",
                        placeholder: field.placeholder,
                        many: field.many,
                        
                        dataKey: field.dataKey,
                        valueField: field.valueField,
                        textField: field.textField,
                    },
                };
            },
            toBuilder(def) {
                return {
                    fieldType: "relation",
                    placeholder: def.options.placeholder,
                    many: def.options.many,
                    dataKey: def.options.dataKey,
                    valueField: def.options.valueField,
                    textField: def.options.textField,
                };
            },
        },
    };

    export default RelationField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>