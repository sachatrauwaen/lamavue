<template>
    <div>
        <div>
            <form-field ref="formField" v-model="model" v-bind="formProps"></form-field>
            <div v-if="hasErrors" class="alert alert-danger" role="alert">
                <div v-for="(error, index) in allErrors" :key="index">
                    {{error}}
                </div>
            </div>
        </div>
        <div v-if="debug">
            {{model}}
        </div>
    </div>
</template>

<script>
    import FormField from "./Field.vue";
    import Lama from "../lama";

    export default {
        name: "Form",
        provide() {
            return {
                _formValidation: {
                    register: this.registerValidator,
                    unregister: this.unregisterValidator
                }
            };
        },
        props: {
            schema: {},
            options: {},
            view: {},
            connector: {},
            modelValue: {},
            debug: {
                "type": Boolean,
                "default": false
            }
        },
        emits: ['update:modelValue'],
        data() {
            return {
                validators: [],
                hasErrors: false,
                allErrors: []
            };
        },
        computed: {
            model: {
                get() {
                    return this.modelValue;
                },
                set(val) {
                    this.$emit("update:modelValue", val);
                }
            },
            formProps() {
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
            registerValidator(control) {
                this.validators.push(control);
            },
            unregisterValidator(control) {
                var idx = this.validators.indexOf(control);
                if (idx > -1) {
                    this.validators.splice(idx, 1);
                }
            },
            validate(successCallback, errorCallBack) {
                var errors = [];
                var allValid = true;
                for (var i = 0; i < this.validators.length; i++) {
                    var valid = this.validators[i].validate();
                    if (!valid) {
                        allValid = false;
                        errors = errors.concat(this.validators[i].errors);
                    }
                }
                this.allErrors = errors;
                this.hasErrors = !allValid;
                if (allValid) {
                    if (successCallback) successCallback();
                } else {
                    if (errorCallBack) errorCallBack();
                }
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
