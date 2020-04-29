<template>
  <div>
    <div ref="lama"></div>   
  </div>
</template>

<script>

//import Vue from "vue";
//import CKEditor from "ckeditor4-vue";

//Vue.use(CKEditor);

export default {
  name: "Lama",
  props: {
    data: {},
    schema: {},
    options: {},
    messages: {},
    connector: {}
  },
  data() {
    return {
     
    };
  },
  mounted() {
    const lamaContainer = this.$refs.lama;
    // eslint-disable-next-line no-undef
    $(lamaContainer).lama({
      schema: this.schema,
      options: this.options,
      view: {
        id: "my-view3",
        //"parent": "bootstrap-create",
        components: {}
      },
      connector: {
        connect() {},
        loadAll: function(resources, onSuccess) {
          onSuccess();
        }
      }
    });
  },
  components: {}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
