<template>
    <control v-bind="props" v-slot="flags">
        
        <div class="form-check form-check-inline" v-for="c in items" :key="c">
            <input type="checkbox"
                   class="form-check-input"
                   :aria-describedby="options.label"
                   :value="c"
                   :checked="isChecked(c)"
                   @change="toggleValue(c, $event)"
                   :class="{'is-invalid':flags.invalid && flags.touched}"
                   :placeholder="options.placeholder"
                   :readonly="schema.readonly" />
            <label class="form-check-label">{{optionLabel(c)}}</label>
        </div>
    </control>
</template>

<script>
    import ControlField from "./ControlField.vue";

    let CheckBoxField = {
        name: "CheckBoxListField",
        extends: ControlField,
        emits: ['update:modelValue'],
        props: {
            modelValue: {
                type: Array
            }
        },
        computed: {
            label() {
                return this.options.label || this.schema.title || this.options.rightLabel;
            },
            model: {
                get() {
                    return this.modelValue || [];
                },
                set(val) {
                    this.$emit("update:modelValue", val);
                }
            },
            items() {
                return this.schema.enum;
            }
        },
        methods: {
            isChecked(value) {
                return Array.isArray(this.modelValue) && this.modelValue.indexOf(value) > -1;
            },
            toggleValue(value, event) {
                let arr = Array.isArray(this.modelValue) ? this.modelValue.slice() : [];
                if (event.target.checked) {
                    if (arr.indexOf(value) < 0) arr.push(value);
                } else {
                    arr = arr.filter(v => v !== value);
                }
                this.$emit('update:modelValue', arr);
            },
            optionLabel(value) {
                let idx = this.schema.enum.indexOf(value);
                return (this.options.optionLabels && this.options.optionLabels[idx]) || value;
            },
            init() {
                if (Lama.isValEmpty(this.model) && this.schema.default) {
                    this.model = this.schema.default;
                }
            }
        },
        components: {},
        builder: {
            props() {
                return {
                    schema: {
                        type: "object",
                        properties: {
                            options: {
                                title: "Options",
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        value: {
                                            type: "string",
                                            title: "Value"
                                        },
                                        label: {
                                            type: "string",
                                            title: "Label"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    options: {}
                };
            },
            fromBuilder(field) {
                let _enum = [];
                let optionLabels = [];
                if (field.options) {
                    _enum = field.options.map(o => {
                        return o.value;
                    });
                    optionLabels = field.options.map(o => {
                        return o.label;
                    });
                }
                return {
                    schema: {
                        type: "array",
                        enum: _enum
                    },
                    options: {
                        type: "checkboxlist",
                        optionLabels: optionLabels
                    }
                };
            },
            toBuilder(def) {
                return {
                    fieldType: "checkboxlist",
                    options: def.schema.enum.map((a, i) => {
                        return {
                            value: a,
                            label: def.options.optionLabels ? def.options.optionLabels[i] : a
                        };
                    })
                };
            }
        }
    };

    export default CheckBoxField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
