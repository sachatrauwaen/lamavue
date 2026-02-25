<template>
    <control v-bind="props" v-slot="flags">
        <VueDatePicker
            v-model="model"
            :enable-time-picker="false"
            :auto-apply="true"
            :time-config="{ enableTimePicker: false, startTime: { hours: 0, minutes: 0 } }"
            :formats="{ input: 'dd/MM/yyyy' }"
            :class="{'is-invalid':flags.invalid && flags.touched}"
            :locale="dpLocale"
            :disabled="schema.readonly"
            model-type="iso"
            :teleport="true"
            text-input
        />
    </control>
</template>

<script>
    import Lama from "../../lama";
    import ControlField from "./ControlField.vue";
    import Control from "./Control.vue";
    import { VueDatePicker } from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'
    import { nl, enUS, de, fr } from "date-fns/locale"

    let DateField = {
        name: "DateField",
        extends: ControlField,
        props: {
            modelValue: {
                type: String
            }
        },
        data() {
            return {
                d:null
            }
        },
        mounted() {
            console.log(fr);
        },
        computed: {           
            dpLocale() {
                switch (this.connector.currentCulture.substring(0, 2)) {
                    case 'nl':
                        return nl;
                    case 'en':
                        return enUS;
                    case 'de':
                        return de;
                    case 'fr':
                        return fr;
                }
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
