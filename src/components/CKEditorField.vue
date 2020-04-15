<template>
  <control v-bind="props">
    <ckeditor v-model="model" :config="editorConfig"></ckeditor>
  </control>
</template>

<script>
//import Vue from 'vue';
import TextField from "./TextField.vue";
import Control from "./Control.vue";
import Lama from "../lama";
import CKEditor from 'ckeditor4-vue';


let CKEditorField = {
  name: "CKEditorField",
  extends: TextField,
  props: {},
  data(){
    return {
      editorConfig:{}
    };
  },
  computed: {},
  methods: {},
  components: { Control, ckeditor: CKEditor.component },
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
          title: field.label,
          type: "string",
          required: field.required
        },
        options: {
          type: "ckeditor",
          placeholder: field.placeholder
        }
      };
    },
    toBuilder(def) {
      return {
        label: def.schema.title,
        fieldType: "ckeditor",
        required: def.schema.required,
        placeholder: def.options.placeholder
      };
    }
  }
};

export default CKEditorField;

Lama.registerFieldComponent("ckeditor", CKEditorField);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
