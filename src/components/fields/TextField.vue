<template>
  <control v-bind="props" v-slot="flags">
    <input
      type="text"
      :class="[styles.formControl, { 'is-invalid': flags.invalid && flags.touched }]"
      :pattern="pattern"
      :aria-describedby="options.label"
      v-model="model"
      :placeholder="options.placeholder"
      :readonly="schema.readonly"
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
    modelValue: {
      type: String,
      default: ''
    },
    view: {},
  },
  computed: {
      pattern() {
          return this.options.pattern;
      }
  },
  methods: {},
  computed: {
    styles() {
      if (this.view && this.view.styles) {
        return this.view.styles;
      }
      return {
        formControl: 'form-control',
      };
    }
  },
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
              pattern: {
                  title: "Pattern (reg.exp.)",
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
          pattern: field.pattern,
        },
      };
    },
    toBuilder(def) {
      return {
        fieldType: "text",
        placeholder: def.options.placeholder,
        pattern: def.options.pattern,
      };
    },
  },
};

export default TextField;
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
