<template>
    <container v-bind="props">
        <input type="file" multiple @change="setFile" style="margin-bottom:10px;" />
        <list ref="list" v-model="model" v-bind="props"></list>
    </container>
</template>
<script>
import ArrayBaseField from "./ArrayBaseField.vue";

let GalleryField = {
  name: "GalleryField",
  extends: ArrayBaseField,
  computed: {
    props() {
      let self = this;
      return {
        schema: {
          title: self.schema.title,
          type: "array",
          items: {
            type: "object",
            properties: {
              Image: {
                title: "Image",
                type: "string",
              },
            },
          },
        },
        options: {
          items: {
            fields: {
              Image: {
                type: "image",
              },
            },
          },
        },
        view: this.view,
        connector: this.connector,
      };
    },
  },
  methods: {
      setFile(e) {
          const files = e.target.files;
          let val = this.model || [];
          for (var i = 0; i < files.length; i++) {
              let config = {
                  file: files[i],
                  name: files[i].name,
                  folder: this.baseFolder,
              };
              this.connector.upload(
                  config,
                  (data) => {
                      val.push({ Image: data.url });
                      this.model = val;
                      //this.updateImageVersion();
                  },
                  () => { }
              );
          }
      },
  },
  created() {},
  components: {},
  builder: {
    props() {
      return {
        schema: {
          type: "array",
          properties: {},
        },
        options: {},
      };
    },
    fromBuilder(field) {
      return {
        schema: {
          title: field.label,
          type: "array",
        },
        options: {
          type: "gallery",
        },
      };
    },
    toBuilder(def) {
      return {
        label: def.schema.title,
        fieldType: "gallery",
      };
    },
  },
};

export default GalleryField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
