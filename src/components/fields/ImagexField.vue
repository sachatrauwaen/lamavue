<template>
  <control v-bind="props">
    <template v-if="showImageEditor">
      <image-editor
        :imageUrl="value.url"
        :cropperData="value.crop"
        @cancel="cancelImageEditor"
        @save="saveImageEditor"
      ></image-editor>
    </template>
    <div v-show="!showImageEditor">
      <file-browser v-model="imageFile" v-bind="props"></file-browser>     
      <div class="btn-group" role="group" aria-label="Basic example">       
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


let ImagexField = {
  name: "ImageField",
  extends: ControlField,
  props: {
    value: {
      type: Object
    }
  },
  data() {
    return {
      showImageEditor: false
    };
  },
  computed: {
    imageSrc() {
      if (this.value) return this.value.cropUrl || this.value.url;
      else return "";
    },
    imageFile: {
      get() {
        return this.model
          ? {
              id: this.model.id,
              url: this.model.url,
              filename: this.model.filename,
              width: this.model.width,
              height: this.model.height
            }
          : null;
      },
      set(val) {
        if (val) {
          this.model = {
            id: val.id,
            filename: val.filename,
            width: val.width,
            height: val.height,
            url: val.url
          };
        } else {
          this.model = null;
        }
      }
    }
  },
  methods: {
    showFileChooser() {
      this.$refs.input.click();
    },
    edit() {
      this.showImageEditor = true;
    },
    cancelImageEditor() {
      this.showImageEditor = false;
    },
    saveImageEditor(cropUrl, cropData) {
      this.showImageEditor = false;
      this.model = {
        id: this.model.id,
        url: this.model.url,
        filename: this.model.filename,
        width: this.model.width,
        height: this.model.height,
        cropUrl: cropUrl,
        crop: cropData
      };
    },
    remove() {
      this.model = null;
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
          type: "imagex",
          multilanguage: field.multilanguage
        }
      };
    },
    toBuilder(def) {
      return {
        label: def.schema.title,
        fieldType: "imagex",
        required: def.schema.required,
        multilanguage: def.options.multilanguage
      };
    }
  }
};

export default ImagexField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
