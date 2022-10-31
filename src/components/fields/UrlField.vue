<template>
    <control v-bind="props" v-slot="flags">
        <vue-bootstrap-typeahead v-model="model" :data="items" :serializer="s => s.url" 
                                 :class="{ 'is-invalid': flags.invalid && flags.touched }" >
            <template slot="suggestion" slot-scope="{ data, htmlText }">
                <span>{{data.text}}</span>&nbsp;
                <small>({{ data.url }})</small>
            </template>
        </vue-bootstrap-typeahead>
    </control>
</template>

<script>
    import ControlField from "./ControlField.vue";
    import Control from "./Control.vue";
    import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'

    let UrlField = {
        name: "UrlField",
        extends: ControlField,
        props: {
            value: {
                type: String,
                default: ''
            },
        },
        data() {
            return {
                items: [],
                pageUrl:''
            };
        },
        computed: {
            //model: {
            //    get() {
            //        return this.value || '';
            //    },
            //    set(val) {
            //        this.$emit("input", val);
            //    }
            //},
            query() {
                return {
                    type: "page",
                };
            },
        },
        methods: {
            pageChange() {
                //this.model = this.page;
            },
            fetchOptions() {
                let self = this;
                let config = {
                    query: this.query,
                };
                this.connector.loadDataSource(
                    config,
                    (data) => {
                        self.items = data.map(self.map);
                        //loading(false);
                    },
                    () => {
                        //loading(false);
                    }
                );
            },
            map(item) {
                return item;
            },
            reduce(option) {
                return option.url;
            }
        },
        created() {
            this.fetchOptions();
        },
        components: { Control, VueBootstrapTypeahead },
        builder: {
            props() {
                return {
                    schema: {
                        type: "object",
                        properties: {
                            placeholder: {
                                title: "Placeholder",
                                type: "string",
                            },
                        },
                    },
                    options: {
                        fields: {

                        },
                    },
                };
            },
            fromBuilder(field) {
                return {
                    schema: {
                        type: "string"
                    },
                    options: {
                        type: "url",
                        placeholder: field.placeholder,
                    },
                };
            },
            toBuilder(def) {
                return {
                    fieldType: "url",
                    placeholder: def.options.placeholder,
                };
            },
        },
    };

    export default UrlField;
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
