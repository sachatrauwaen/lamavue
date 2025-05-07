<template>
    <control v-bind="props">

        <vue-select v-model="model"
                    label="text"
                    :multiple="options.many"
                    :placeholder="options.placeholder"
                    style="margin-bottom:10px"
                    @search="fetchOptions"
                    :clearable="true"
                    :options="items"
                    :reduce="reduce"
                    :filterable="false"></vue-select>

    </control>
</template>

<script>
    import VueSelect from "vue-select";
    import "vue-select/dist/vue-select.css";
    import ControlField from "./ControlField.vue";

    function debounce(func, timeout = 300) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, timeout);
        };
    }

    let DynamicVueSelectBaseField = {
        name: "DynamicVueSelectBaseField",
        extends: ControlField,
        props: {
        },
        data() {
            return {
                query: {
                    type: '',
                    search: ''
                },
                items: []
            };
        },
        computed: {
            multiple() {
                return this.schema.type == 'array';
            }
        },
        methods: {
            fetchOptions(search, loading) {

                if (search.length) {
                    loading(true);
                    //$.debounce(300, saveInput);

                    this.search(loading, search, this);
                    
                }
            },
            search: debounce((loading, search, vm) => {
                vm.query.search = search;
                let config = {
                    query: vm.query
                };
                vm.connector.loadDataSource(
                    config,
                    data => {
                        vm.items = data;
                        loading(false);
                    },
                    () => {
                        loading(false);
                    }
                );
            }),
            reduce(option){
                return option.value;
            }
        },
        components: {
            VueSelect
        }

    };

    export default DynamicVueSelectBaseField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>