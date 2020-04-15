<template>
  <control v-bind="props" v-slot="flags">
    <div class="form-check">
      <input
        type="checkbox"
        class="form-check-input"
        :aria-describedby="options.label"
        v-model="model"
        :class="{'is-invalid':flags.invalid && flags.touched}"
        :placeholder="options.placeholder"
      />
      <label class="form-check-label">{{options.rightLabel}}</label>
    </div>
  </control>
</template>

<script>
import ControlField from "./ControlField.vue";
import Lama from "../lama";

let CheckBoxField = {
  name: "CheckBoxField",
  extends: ControlField,
  props: {
    value: {
      type: Boolean
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
            }
          }
        },
        options: {}
      };
    },
    fromBuilder(field) {
      return {
        schema: {
          title: field.label,
          type: "boolean",
          required: field.required
        },
        options: {}
      };
    },
    toBuilder(def) {
      return {
        label: def.schema.title,
        fieldType: "checkbox",
        required: def.schema.required
      };
    }
  }
};

export default CheckBoxField;

Lama.registerFieldComponent("checkbox", CheckBoxField);
Lama.registerDefaultSchemaFieldMapping("boolean", "checkbox");
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
