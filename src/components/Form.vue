<template>
    <div>
        <ValidationObserver ref="validationobserver" v-slot="flags">
            <div>
                <form-field ref="formField" v-model="model" v-bind="props"></form-field>
                <div v-if="flags.failed" class="alert alert-danger" role="alert">
                    <template v-for="(v,k) in flags.errors">
                        <div v-for="e in v" :key="e" >
                            {{e}}
                        </div>
                    </template>
                </div>
            </div>
        </ValidationObserver>
        <div v-if="debug">
            {{model}}
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import FormField from "./Field.vue";
    import Lama from "../lama";
    Vue.use(Lama);

    export default {
        name: "Form",
        props: {
            schema: {},
            options: {},
            view: {},
            connector: {},
            value: {},
            debug: {
                "type": Boolean,
                "default": false
            }
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
                let connector = this.connector || Lama.getConnectorClass("default");
                let view = this.view || Lama.defaultView;
                return {
                    schema: this.schema,
                    options: this.options,
                    view: view,
                    connector: connector
                };
            },
            label() {
                return this.schema.title;
            }
        },
        methods: {
            validate(successCallback, errorCallBack) {
                this.$refs.validationobserver.validate().then(success => {
                    if (success) {
                        if (successCallback) successCallback();
                    } else {
                        if (errorCallBack) errorCallBack();
                    }
                });
            },
            init() {
                this.$refs.formField.init();
            }
        },
        components: { FormField }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
