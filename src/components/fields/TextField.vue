<template>
  <control v-bind="props" v-slot="flags">
    <input
      type="text"
      class="form-control"
      :aria-describedby="options.label"
      v-model="model"
      :class="{ 'is-invalid': flags.invalid && flags.touched }"
      :placeholder="options.placeholder"
    />
  </control>
</template>

<script>
import ControlField from "./ControlField.vue";
import Control from "./Control.vue";

let TextField = {
  name: "TextField",
  extends: ControlField,
  props: {
    value: {
      type: String,
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
          type: "text",
          placeholder: field.placeholder,
        },
      };
    },
    toBuilder(def) {
      return {
        fieldType: "text",
        placeholder: def.options.placeholder,
      };
    },
  },
};

export default TextField;
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
