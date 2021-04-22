<template>
  <control v-bind="props">
    <template v-if="showImageEditor">
      <image-editor
        :imageUrl="value.rawUrl || value.url"
        :cropperData="value.crop"
        @cancel="cancelImageEditor"
        @save="saveImageEditor"
      ></image-editor>
    </template>
    <div v-show="!showImageEditor">
      <file-browser v-model="imageFile" v-bind="fileBrowserProps"></file-browser>     
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
          <img :src="imageSrc" alt="Image" style="margin: 10px 0;max-height:200px;" class="img-fluid" />
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
  name: "ImageBrowserField",
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
    fileBrowserProps(){
      return{
        onlyImages: true,
        connector: this.connector,
        showFolderSelector: false,
        showFileSelector:true
      }
    },
    imageSrc() {
      if (this.value) return this.value.url;
      else return "";
    },
    imageFile: {
      get() {
        return this.model
          ? {
              id: this.model.id,
              url: this.model.rawUrl || this.model.url,
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
            url: val.url,
            rawUrl: val.url
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
    saveImageEditor(cropCanvas, cropData) {
      this.showImageEditor = false;
      // this.model = {
      //   id: this.model.id,
      //   url: this.model.url,
      //   filename: this.model.filename,
      //   width: this.model.width,
      //   height: this.model.height,
      //   cropUrl: cropCanvas.toDataURL('image/jpeg'),
      //   crop: cropData
      // };

      cropCanvas.toBlob((blob) => {
        
        let config = {
              file:  blob,
              name: this.model.filename,
              folder: this.baseFolder,
              hidden:true
            };
            this.connector.upload(
              config,
              (data) => {
                this.model = {
                  id: this.model.id,
                  url: data.url,
                  filename: this.model.filename,
                  width: this.model.width,
                  height: this.model.height,
                  rawUrl: this.model.rawUrl,
                  cropUrl: data.url,
                  crop: cropData
                };
                this.updateImageVersion();
              },
              () => {}
            );        
        });     
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
          type: "imagebrowser",
        }
      };
    },
    toBuilder() {
      return {
        fieldType: "imagebrowser",
      };
    }
  }
};

export default ImagexField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
