<template>
    <control v-bind="props" v-slot="flags">
        <div class="position-relative">
            <input
                type="text"
                class="form-control"
                v-model="model"
                :class="{ 'is-invalid': flags.invalid && flags.touched }"
                :placeholder="options.placeholder"
                list="url-suggestions"
                autocomplete="off"
            />
            <datalist id="url-suggestions">
                <option v-for="item in items" :key="item.url" :value="item.url">
                    {{ item.text }} ({{ item.url }})
                </option>
            </datalist>
        </div>
    </control>
</template>

<script>
    import ControlField from "./ControlField.vue";
    import Control from "./Control.vue";

    let UrlField = {
        name: "UrlField",
        extends: ControlField,
        emits: ['update:modelValue'],
        props: {
            modelValue: {
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
            model: {
                get() {
                    return this.modelValue || '';
                },
                set(val) {
                    this.$emit("update:modelValue", val);
                }
            },
            query() {
                return {
                    type: "page",
                };
            },
        },
        methods: {
            pageChange() {
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
                    },
                    () => {
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
        components: { Control },
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
