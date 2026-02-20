<template>
  <control v-bind="props">
    <div class="form-check" v-for="(val, index ) in schema.enum" :key="val">
      <input class="form-check-input" type="radio" v-model="model" :value="val" :readonly="schema.readonly" />
      <label class="form-check-label">{{label(index)}}</label>
    </div>
  </control>
</template>

<script>
import ControlField from "./ControlField.vue";

let RadioField = {
  name: "RadioField",
  extends: ControlField,
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: String
    },
    schema: {},
    options: {},
    connector: {}
  },
  computed: {
    model: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit("update:modelValue", val);
      }
    }
  },
  methods: {
    label(index) {
          return (this.options.optionLabels && this.options.optionLabels[index]) || this.schema.enum[index];
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
          type: "string",
          enum: _enum
        },
        options: {
          type: "radio",
          optionLabels: optionLabels
        }
      };
    },
    toBuilder(def) {
      return {
        fieldType: "radio",
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

export default RadioField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>