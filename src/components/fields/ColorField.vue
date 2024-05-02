<template>
  <control v-bind="props" v-slot="flags">
    <input
      type="color"
      class="form-control"
      :aria-describedby="options.label"
      v-model="model"
      :class="{ 'is-invalid': flags.invalid && flags.touched }"
      :placeholder="options.placeholder"
      :disabled="schema.readonly"
    />
  </control>
</template>

<script>
import ControlField from "./ControlField.vue";
import Control from "./Control.vue";

let ColorField = {
  name: "ColorField",
  extends: ControlField,
  props: {
    value: {
       type: String,
       default:''
    },
  },
  computed: {},
  methods: {},
  components: { Control },
  builder: {
    props() {
      return {
        schema: {
          type: "object",
          properties: {
            placeholder: {
              title: "Placeholder",
              type: "string",
            },
          },
        },
        options: {
          fields: {
            
          },
        },
      };
    },
    fromBuilder(field) {
      return {
        schema: {
          type: "string",
        },
        options: {
          type: "color",
          placeholder: field.placeholder,
        },
      };
    },
    toBuilder(def) {
      return {
        fieldType: "color",
        placeholder: def.options.placeholder,
      };
    },
  },
};

export default ColorField;
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
