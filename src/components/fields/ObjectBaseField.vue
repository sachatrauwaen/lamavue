<template>
  <container v-model="model" v-bind="props">
    <fields ref="fields" v-model="model" v-bind="props"></fields>
  </container>
</template>

<script>
import Container from "../Container.vue";
import Fields from "../Fields.vue";

let ObjectBaseField = {
  name: "ObjectBaseField",
  props: {
    value: {
      type: Object
    },
    schema: {},
    options: {},
    view: {},
    connector: {}
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    },
    props() {
      return {
        schema: this.schema,
        options: this.options,
        view: this.view,
        connector: this.connector,
        errorCallback: this.errorCallback
      };
    }
  },
    methods: {
        init() {
            this.$refs.fields.init();

        }
    },
  components: { Container, Fields },
  
};

export default ObjectBaseField;


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
