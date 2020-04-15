<template>
  <div>
    <vue-select
      class
      v-model="folder"
      placeholder="Folder"
      style="margin-bottom:10px"
      @search="fetchFolders"
      :filterable="false"
      :options="folders"
    ></vue-select>
    <vue-select
      class
      v-model="model"
      placeholder="File"
      style="margin-bottom:10px"
      @search="fetchFiles"
      :options="files"
      :filterable="false"
    ></vue-select>
  </div>
</template>

<script>
import VueSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default {
  name: "FileBrowser",
  props: {
    value:{},
    schema: {},
    options: {},
    connector: {}
  },
  data() {
    return {
      folders: [],
      folder: "",
      files: [],
      file: ""
    };
  },
  computed:{
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    },
  },
  methods: {
    fetchFolders(search, loading) {
      //let self=this;
      loading(true);
      let config = {
        query: {
          type: "folders",
          folder: this.folder
        }
      };
      this.connector.loadDataSource(
        config,
        data => {
          this.folders = data;
          loading(false);
        },
        () => {
          loading(false);
        }
      );
    },
    fetchFiles(search, loading) {
      loading(true);
      let config = {
        query: {
          type: "files",
          folder: this.folder
        }
      };
      this.connector.loadDataSource(
        config,
        data => {
          this.files = data;
        },
        () => {}
      );
      loading(false);
    }
  },
  components: {
    VueSelect
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
