<template>
  <div>
    <vue-select
      v-if="showFolderSelector"
      v-model="folder"
      label="name"
      style="margin-bottom: 10px"
      :filterable="true"
      :clearable="false"
      :options="folders"
      :reduce="(option) => option.id"
      @input="folderChange"
    ></vue-select>
    <vue-select
      v-if="showFileSelector"
      v-model="model"
      label="filename"
      style="margin-bottom: 10px"
      :options="files"
      :filterable="true"
    >
      <template #option="{ filename, thumbUrl }">
        <div
          style="
            height: 20px;
            width: 20px;
            margin-right: 5px;
            display: inline-block;
          "
        >
          <img
            :src="thumbUrl"
            :alt="filename"
            class="img-fluid"
          />
        </div>
        <span>{{ filename }}</span>
      </template>
    </vue-select>
    <input
      v-if="showUpload"
      ref="input"
      type="file"
      name="image"
      :accept="accept"
      @change="setImage"
      class="form-control-file normalFileUpload"
      style="margin-bottom: 10px"
    />
    <div
      v-if="showOverwrite"
      style="position: absolute; top: 80px; right: 5px"
    >
      <input type="checkbox" v-model="doOverwrite" />
      <label class="">Overwrite</label>
    </div>
  </div>
</template>

<script>
import VueSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Lama from "../../lama";

export default {
  name: "ImageBrowser",
  props: {
    value: {},
    connector: {},
    baseFolder: {},
    accept: {},
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },
    fileMaxSize: {
      type: Number,
      default: 0,
    },
    showFolderSelector: {
      type: Boolean,
      default: true,
    },
    showFileSelector: {
      type: Boolean,
      default: true,
    },
    showUpload: {
      type: Boolean,
      default: true,
    },
    showOverwrite: {
      type: Boolean,
      default: false,
    },
    overwrite: {
      type: Boolean,
      default: false,
    },
    secure: {
      type: Boolean,
      default: false,
    },
    requireMinSize: {
        type: Boolean,
        default: false,
    },
    resizeOnUpload: {
        type: Boolean,
        default: false,
    },
      resizeWidth: {
          type: Number,
          default: 0,
      },
      resizeHeight: {
          type: Number,
          default: 0,
      },
  },
  data() {
    return {
      folders: [],
      folder: null,
      files: [],
      fileId: -1,
      doOverwrite: false,
    };
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
  methods: {
    folderChange() {
      this.fetchFiles();
    },
    fetchFolders() {
      //let self=this;
      let config = {
        query: {
          type: "folders",
          folder: this.baseFolder,
          secure: this.secure,
        },
      };
      this.connector.loadDataSource(
        config,
        (data) => {
          this.folders = data;
          if (data.length) {
            this.folder = data[0].id;
            this.fetchFiles();
          }
        },
        () => {}
      );
    },
    fetchFiles() {
      let config = {
        query: {
          type: "images",
          folder: this.baseFolder,
          secure: this.secure,
        },
      };
      this.connector.loadDataSource(
        config,
        (data) => {
          this.files = data;
        },
        () => {}
      );
    },
    setImage(e) {
      const file = e.target.files[0];
      if (this.fileMaxSize && file.size > this.fileMaxSize) {
        alert(
          "Please upload a smaller file, max size is " +
            this.fileMaxSize +
            " bytes"
        );
        return;
      }
      if (file.type.indexOf("image/") === -1) {
        alert("Please select an image file");
        return;
      }
      let config = {
        file: file,
        name: file.name,
        folder: this.baseFolder,
        overwrite: this.doOverwrite,
        secure: this.secure,
        width: this.width,
        height: this.height,
      };
        let self = this;
        if (this.requireMinSize) {
            
            var _URL = window.URL || window.webkitURL;

            var img = new Image();
            var objectUrl = _URL.createObjectURL(file);
            img.onload = function () {
                //alert(this.width + " " + this.height);
                _URL.revokeObjectURL(objectUrl);
                if (this.width < self.width || this.height < self.height) {
                    self.$refs.input.value = null;
                    alert("Image to small : " + this.width + "x" + this.height + " (min required " + self.width +"x"+self.height +")");
                } else {
                    self.uploadImage(config);
                }
            };
            img.src = objectUrl;
        } else {
            self.uploadImage(config);
        }

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
      uploadImage(config) {

          if (this.resizeOnUpload) {
              //var resizedImage;
              var self = this;
              // Read in file
              var file = config.file;

              var _URL = window.URL || window.webkitURL;
              var objectUrl = _URL.createObjectURL(file);


              //var reader = new FileReader();
              //reader.onload = function (readerEvent) {
                  var image = new Image();
                  image.onload = function () {

                      var canvas = document.createElement('canvas');

                      var MAX_WIDTH = self.resizeWidth;
                      var MAX_HEIGHT = self.resizeHeight;
                      var width = this.width;
                      var height = this.height;

                      if (width > height) {
                          if (width > MAX_WIDTH) {
                              height *= MAX_WIDTH / width;
                              width = MAX_WIDTH;
                          }
                      } else {
                          if (height > MAX_HEIGHT) {
                              width *= MAX_HEIGHT / height;
                              height = MAX_HEIGHT;
                          }
                      }
                      canvas.width = width;
                      canvas.height = height;
                      canvas.getContext('2d').drawImage(image, 0, 0, width, height);
                      //resizedImage = canvas.toDataURL('image/jpeg');

                      canvas.toBlob((blob) => {
                          config.file = blob;
                          self.upload(config);
                      }, Lama.toMine(config.name));
                  }
                  //image.src = readerEvent.target.result;
                  image.src = objectUrl;
              //}
              //reader.readAsDataURL(file);

          } else {
              this.upload(config)
          }
      },
      
      upload(config) {
          this.connector.upload(
              config,
              (data) => {
                  this.files.push(data);
                  this.model = data;
                  this.updateImageVersion();
              },
              (message) => {
                  alert(message);
              }
          );
      },
      updateImageVersion() {
          this.imageVersion = Date.now();
      },
  },
  watch: {
    value(val) {
      if (val && val.folderId) {
        this.folder = this.value.folderId;
        this.fetchFiles();
      }
    },
  },
  created() {
    this.fetchFolders();
    this.doOverwrite = this.overwrite;
  },
  components: {
    VueSelect,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
