<template>
    <div>
        <div>
            <form-field ref="formField" v-model="model" v-bind="props"></form-field>
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
        data() {
            return {
                hasErrors: false,
                allErrors: []
            };
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
            _findControls(component, controls) {
                if (component.$options.name === 'Control') {
                    controls.push(component);
                }
                if (component.$children) {
                    for (var i = 0; i < component.$children.length; i++) {
                        this._findControls(component.$children[i], controls);
                    }
                }
            },
            validate(successCallback, errorCallBack) {
                var controls = [];
                this._findControls(this, controls);
                var errors = [];
                var allValid = true;
                for (var i = 0; i < controls.length; i++) {
                    var valid = controls[i].validate();
                    if (!valid) {
                        allValid = false;
                        errors = errors.concat(controls[i].errors);
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
