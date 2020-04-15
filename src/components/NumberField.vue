<template>
  <control v-bind="props" v-slot="flags">
    <input
      type="number"
      class="form-control"
      :aria-describedby="options.label"
      v-model.number="model"
      :class="{'is-invalid':flags.invalid && flags.touched}"
    />
  </control>
</template>

<script>
import ControlField from "./ControlField.vue";
import Lama from "../lama";

let NumberField = {
  name: "NumberField",
  extends: ControlField,
  props: {
    value: {
      type: Number
    }
  },
  computed: {},
  methods: {},
  components: {},
  builder: {
    props() {
      return {
        schema: {
          type: "object",
          properties: {
            required: {
              title: "Required",
              type: "boolean"
            },
            placeholder: {
              title: "Field Placeholder",
              description: "Field placeholder.",
              type: "number"
            }
          }
        },
        options: {}
      };
    },
    fromBuilder(field) {
      return {
        schema: {
          type: "number",
          title: field.label,
          required: field.required,
          placeholder: field.placeholder
        },
        options: {
          placeholder: field.placeholder
        }
      };
    },
    toBuilder(def) {
      return {
        label: def.schema.title,
        fieldType: "number",
        required: def.schema.required,
        placeholder: def.options.placeholder
      };
    }
  }
};

export default NumberField;

Lama.registerFieldComponent("number", NumberField);
Lama.registerDefaultSchemaFieldMapping("number", "number");
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
