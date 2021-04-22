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
      class="form-control normalFileUpload"
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
      let config = {
        file: file,
        name: file.name,
        folder: this.baseFolder,
      };
      this.connector.upload(
        config,
        (data) => {
          this.model = data.url;
          this.updateImageVersion();
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
          type: "file"         
        }
      };
    },
    toBuilder() {
      return {       
        fieldType: "file"       
      };
    }
  }
};

export default FileField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
