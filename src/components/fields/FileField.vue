<template>
  <control v-bind="props" v-slot="flags">
      <input       
        ref="input"
        type="file"
        name="file"        
        @change="setFile"
        class="form-control-file"
        style="margin-bottom:10px"
      />
      <input
      type="text"
      class="form-control"
      :aria-describedby="options.label"
      v-model="model"
      :class="{'is-invalid':flags.invalid && flags.touched}"
       style="margin-bottom:10px"
    />
    
  </control>
</template>

<script>
import ControlField from "./ControlField.vue";
import Control from "./Control.vue";
import FileBrowser from "./FileBrowser.vue";

let FileField = {
  name: "FileField",
  extends: ControlField,
  props: {
    value: {
      type: String
    }
  },
  data() {
    return {
      file: {}
    };
  },
  computed: {
   
  },
  methods: {
    setFile(e) {
      const file = e.target.files[0];
      if (file.type.indexOf("image/") === -1) {
        alert("Please select an image file");
        return;
      }
      let config = {
        query: {
          folder: this.baseFolder
        }
      };
      this.connector.upload(
        config,
        data => {
            this.model = data.url;
        },
        () => {}
      );

    },
    showFileChooser() {
      this.$refs.input.click();
    }    
  },
  components: { Control, FileBrowser },
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
            },
            multilanguage: {
              title: "Multi language",
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
          type: "string",
          required: field.required
        },
        options: {
          type: "file",
          multilanguage: field.multilanguage
        }
      };
    },
    toBuilder(def) {
      return {
        label: def.schema.title,
        fieldType: "file",
        required: def.schema.required,
        multilanguage: def.options.multilanguage
      };
    }
  }
};

export default FileField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
