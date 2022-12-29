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
      v-model="selected"
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
  </div>
</template>

<script>
import VueSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default {
  name: "ImageIdBrowser",
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
    }
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
    selected: {
      get() {
            let filteredFiles = this.files.filter(f => {
                return f.id == this.value;
            });
            return filteredFiles.length ? filteredFiles[0] : null;
      },
      set(val) {
          this.model = val ? val.id : null;
          //this.$emit("change", val);
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
            if (this.selected) {
                this.$emit("change", this.selected);
            }
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
      this.connector.upload(
        config,
        (data) => {
          let f = data;
          this.files.push(f);
          this.selected = f;
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
      this.$emit("change", this.selected);
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
