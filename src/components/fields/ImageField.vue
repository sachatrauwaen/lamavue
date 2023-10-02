<template>
  <control v-bind="props" v-slot="flags">
    <template v-if="showImageEditor">
      <image-editor
        :imageUrl="value"
        :cropperData="{}"
        @cancel="cancelImageEditor"
        @save="saveImageEditor"
      ></image-editor>
    </template>
    <div v-show="!showImageEditor">
      <input
        ref="input"
        type="file"
        name="image"
        accept="image/*"
        @change="setImage"
        class="form-control-file normalFileUpload"
        style="margin-bottom: 10px"
      />
      <input
        type="text"
        class="form-control"
        :aria-describedby="options.label"
        v-model="model"
        :class="{ 'is-invalid': flags.invalid && flags.touched }"
        style="margin-bottom: 10px"
      />
      <div>
        <a v-if="value" href="#" @click.prevent="edit" title="Edit Image">
          <img
            :src="imageSrc"
            alt="Image"
            style="margin: 10px 0; max-height:200px;"
            class="img-fluid"
          />
        </a>
      </div>
    </div>
  </control>
</template>

<script>
//import Vue from "vue";
import ControlField from "./ControlField.vue";
import Control from "./Control.vue";
import ImageEditor from "./ImageEditor.vue";
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
    import FileBrowser from "./FileBrowser.vue";
    import Lama from "../../lama";

let ImageField = {
  name: "ImageField",
  extends: ControlField,
  props: {
    value: {
      type: String,
    },
  },
  data() {
    return {
      showImageEditor: false,
      imageVersion : new Date().getTime()
    };
  },
  computed: {
    imageSrc() {
      return this.value +"?v="+ this.imageVersion;
    },
  },
  methods: {
    setImage(e) {
      const file = e.target.files[0];
      if (file.type.indexOf("image/") === -1) {
        alert("Please select an image file");
        return;
      }
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

      /*
      if (typeof FileReader === "function") {
        const reader = new FileReader();
        reader.onload = event => {
          this.model = {
            url: event.target.result,
          };
          // rebuild cropperjs with the updated source
          //this.$refs.cropper.replace(event.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
      */
    },
    showFileChooser() {
      this.$refs.input.click();
    },
    edit() {
      this.showImageEditor = true;
    },
    cancelImageEditor() {
      this.showImageEditor = false;
    },
    saveImageEditor(canvas) {
      this.showImageEditor = false;

      canvas.toBlob((blob) => {
        let config = {
          file: blob,
          name: this.model,
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
      }, Lama.toMine(this.model));
    },
    remove() {
      this.model = null;
    },    
    updateImageVersion(){
      this.imageVersion=new Date().getTime();
    }
  },
  components: { Control, VueCropper, FileBrowser, ImageEditor },
  builder: {
    props() {
      return {
        schema: {
          type: "object",
          properties: {
            
          },
        },
        options: {},
      };
    },
    fromBuilder() {
      return {
        schema: {         
          type: "string",         
        },
        options: {
          type: "image",          
        },
      };
    },
    toBuilder() {
      return {       
        fieldType: "image",       
      };
    },
  },
};

export default ImageField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>
