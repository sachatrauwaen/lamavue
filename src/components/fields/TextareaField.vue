<template>
  <control v-bind="props" v-slot="flags">
    <textarea
      class="form-control"
      :aria-describedby="options.label"
      v-model="model"
      :placeholder="options.placeholder"
      :rows="options.rows"
      :cols="options.cols"
      :class="{'is-invalid':flags.invalid && flags.touched}"
    />
  </control>
</template>

<script>
import TextField from "./TextField.vue";
import Control from "./Control.vue";

let TextareaField = {
  name: "TextareaField",
  extends: TextField,
  props: {},
  computed: {},
  methods: {},
  components: { Control },
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
          title: field.label,
          type: "string",
          required: field.required
        },
        options: {
          type: "textarea",
          placeholder: field.placeholder
        }
      };
    },
    toBuilder(def) {
      return {
        label: def.schema.title,
        fieldType: "textarea",
        required: def.schema.required,
        placeholder: def.options.placeholder
      };
    }
  }
};

export default TextareaField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
