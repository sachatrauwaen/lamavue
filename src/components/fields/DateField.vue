<template>
    <control v-bind="props" v-slot="flags">
        <VueDatePicker
            v-model="model"
            :enable-time-picker="false"
            :auto-apply="true"
            :locale="locale"
            :format="formatDate"
            :class="{'is-invalid':flags.invalid && flags.touched}"
            :placeholder="options.placeholder"
            :disabled="schema.readonly"
            text-input
        />
    </control>
</template>

<script>
    import Lama from "../../lama";
    import ControlField from "./ControlField.vue";
    import Control from "./Control.vue";
    import VueDatePicker from "@vuepic/vue-datepicker";
    import "@vuepic/vue-datepicker/dist/main.css";

    let DateField = {
        name: "DateField",
        extends: ControlField,
        props: {
            modelValue: {
                type: String
            }
        },
        computed: {
            locale() {
                return this.connector.currentCulture.substring(0, 2);
            }
        },
        methods: {
            formatDate(date) {
                if (!date) return '';
                var d = date instanceof Date ? date : new Date(date);
                return d.getFullYear() + '-' + this.pad(d.getMonth() + 1) + '-' + this.pad(d.getDate());
            },
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
        components: { Control, VueDatePicker },
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
