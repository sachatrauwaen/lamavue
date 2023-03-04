<template>
    <control v-bind="props" v-slot="flags">
        <vue-ctk-date-time-picker :only-date="true"
                                  :auto-close="true"
                                  :no-label="true"
                                  :no-header="true"
                                  :no-button-now="true"
                                  format="YYYY-MM-DDT00:00:00"
                                  :locale="locale"
                                  formatted="ll"
                                  v-model="model"
                                  :class="{'is-invalid':flags.invalid && flags.touched}"
                                  :placeholder="options.placeholder" />
    </control>
</template>

<script>
    import Lama from "../../lama";
    import ControlField from "./ControlField.vue";
    import Control from "./Control.vue";
    import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
    import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";

    let DateField = {
        name: "DateField",
        extends: ControlField,
        props: {
            value: {
                type: String
            }
        },
        computed: {
            locale() {
                return this.connector.currentCulture.substring(0, 2);
            }
        },
        methods: {
            pad(number) {
                if (number < 10) {
                    return '0' + number;
                }
                return number;
            },
            init() {
                if (Lama.isEmpty(this.model) && this.schema.default == "today") {
                    let now = new Date();
                    this.model = now.getUTCFullYear() +
                        '-' + this.pad(now.getUTCMonth() + 1) +
                        '-' + this.pad(now.getUTCDate());
                } else if (Lama.isEmpty(this.model) && this.schema.default) {
                    this.model = this.schema.default;
                }
            }
        },
        components: { Control, VueCtkDateTimePicker },
        builder: {
            props() {
                return {
                    schema: {
                        type: "object",
                        properties: {
                            placeholder: {
                                title: "Placeholder",
                                type: "string"
                            }
                        }
                    },
                    options: {}
                };
            },
            fromBuilder(field) {
                return {
                    schema: {
                        type: "string",
                    },
                    options: {
                        type: "date",
                        placeholder: field.placeholder,
                    }
                };
            },
            toBuilder(def) {
                return {
                    fieldType: "date",
                    placeholder: def.options.placeholder
                };
            }
        }
    };

    export default DateField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
