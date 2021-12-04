<template>
  <control v-bind="props">
    <file-browser v-model="fileObj" v-bind="fileBrowserProps"></file-browser>  
  </control>
</template>

<script>
import ControlField from "./ControlField.vue";
import Control from "./Control.vue";
import FileBrowser from "./FileBrowser.vue";

let FileField = {
  name: "FileBrowserField",
  extends: ControlField,
  props: {
    value: {
      type: Object
    }
  },
  data() {
    return {
      file: {}
    };
  },
  computed: {
   fileBrowserProps(){
      return{
        onlyImages: true,
        connector: this.connector,
        showFolderSelector: false,
        showFileSelector:true
      }
    },
    fileObj: {
      get() {
        return this.model
          ? {
              id: this.model.id,
              url: this.model.url,
              filename: this.model.filename
            }
          : null;
      },
      set(val) {
        if (val) {
          this.model = {
            id: val.id,
            filename: val.filename,
            url: val.url
          };
        } else {
          this.model = null;
        }
      }
    }
  },
  methods: {
   
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
    fromBuilder() {
      return {
        schema: {
          type: "string",
        },
        options: {
          type: "filebrowser",
        }
      };
    },
    toBuilder() {
      return {
        fieldType: "filebrowser"
      };
    }
  }
};

export default FileField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
