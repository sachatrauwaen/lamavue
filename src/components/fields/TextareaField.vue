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
    fromBuilder() {
      return {
        schema: {          
          type: "string",          
        },
        options: {
          type: "textarea",          
        }
      };
    },
    toBuilder() {
      return {
        fieldType: "textarea",
      };
    }
  }
};

export default TextareaField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
