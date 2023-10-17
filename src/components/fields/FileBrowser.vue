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
      style="position: absolute; bottom: 40px; right: 5px"
    >
      <input type="checkbox" v-model="doOverwrite" />
      <label class="">Overwrite</label>
    </div>
  </div>
</template>

<script>
import VueSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default {
  name: "FileBrowser",
  props: {
    value: {},
    connector: {},
    baseForlder: {},
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
          type: "files",
          //folder: this.folder,
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
          this.files.push(data);
          this.model = data;
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
