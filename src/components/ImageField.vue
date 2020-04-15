<template>
  <control v-bind="props">
    <template v-if="showImageEditor">
      <image-editor :imageUrl="value.imageUrl" :cropperData="value.cropperData" @close="closeImageEditor" >
      </image-editor>
    </template>
    <template v-else>
      <file-browser v-model="file" v-bind="props" @input="fileChange"></file-browser>
      <input
        ref="input"
        type="file"
        name="image"
        accept="image/*"
        @change="setImage"
        class="form-control-file"
        style="display:none"
      />
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary" @click.prevent="showFileChooser">Upload</button>
        <button
          v-if="imageSrc"
          type="button"
          class="btn btn-secondary"
          @click.prevent="remove"
        >Delete</button>
        <button v-if="imageSrc" type="button" class="btn btn-secondary" @click.prevent="edit">Edit</button>
      </div>
      <div>
        <a v-if="imageSrc" href="#" @click.prevent="edit" title="Edit Image">
          <img :src="imageSrc" alt="Image" style="margin: 10px 0" class="img-fluid" />
        </a>
      </div>      
    </template>
  </control>
</template>

<script>
import Vue from "vue";
import ControlField from "./ControlField.vue";
import Control from "./Control.vue";
import ImageEditor from "./ImageEditor.vue";
import Lama from "../lama";

import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";

import FileBrowser from "./FileBrowser.vue";
import VuejsDialog from "vuejs-dialog";
import "vuejs-dialog/dist/vuejs-dialog.min.css";
Vue.use(VuejsDialog);

Vue.dialog.registerComponent("image-editor", ImageEditor);

let ImageField = {
  name: "ImageField",
  extends: ControlField,
  props: {
    value: {
      type: Object
    }
  },
  data() {
    return {
      file: {},
      showImageEditor: false
    };
  },
  computed: {
    imageSrc() {
      if (this.value) return this.value.cropperUrl || this.value.imageUrl;
      else return "";
    }
  },
  methods: {
    fileChange(file) {
      if (file) this.model = { imageUrl: file.value };
    },
    setImage(e) {
      const file = e.target.files[0];
      if (file.type.indexOf("image/") === -1) {
        alert("Please select an image file");
        return;
      }
      if (typeof FileReader === "function") {
        const reader = new FileReader();
        reader.onload = event => {
          this.model = {
            imageUrl: event.target.result,
            cropperUrl: "",
            cropperData: {}
          };
          // rebuild cropperjs with the updated source
          //this.$refs.cropper.replace(event.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    },
    showFileChooser() {
      this.$refs.input.click();
    },
    edit() {

      this.showImageEditor=true;

      /*
      this.$dialog
        .alert("Image Editor", {
          view: "image-editor", // can be set globally too
          imageUrl: this.value.imageUrl,
          cropperData: this.value.cropperData
          //html: true,
          //animation: 'fade',
          //backdropClose: true
        })
        .then(info => {
          this.model = {
            imageUrl: this.value.imageUrl,
            cropperUrl: info.data.cropperUrl,
            cropperData: info.data.cropperData
          };
        });
        */
    },
    closeImageEditor(){
      this.showImageEditor=false;
    },
    remove() {
      this.model = {
        imageUrl: "",
        cropperUrl: "",
        cropperData: {}
      };
    }
  },
  components: { Control, VueCropper, FileBrowser, ImageEditor },
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
          type: "image",
          multilanguage: field.multilanguage
        }
      };
    },
    toBuilder(def) {
      return {
        label: def.schema.title,
        fieldType: "image",
        required: def.schema.required,
        multilanguage: def.options.multilanguage
      };
    }
  }
};

export default ImageField;

Lama.registerFieldComponent("image", ImageField);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.dg-content-cont--floating {
  position: absolute;
  top: 1%;
  transform: none;
  margin-top: 0;
}
</style>
