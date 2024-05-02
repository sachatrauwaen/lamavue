<template>
  <control v-bind="props" v-slot="flags">
    <input
      type="number"
      class="form-control"
      :aria-describedby="options.label"
      v-model.number="model"
      :class="{'is-invalid':flags.invalid && flags.touched}"
      :placeholder="options.placeholder"
      :readonly="schema.readonly"
    />
  </control>
</template>

<script>
import ControlField from "./ControlField.vue";

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
          type: "number",
        },
        options: {
          placeholder: field.placeholder
        }
      };
    },
    toBuilder(def) {
      return {
        fieldType: "number",
        placeholder: def.options.placeholder
      };
    }
  }
};

export default NumberField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
