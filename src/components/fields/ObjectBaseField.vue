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
  emits: ['update:modelValue'],
  props: {
    modelValue: {
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
        return this.modelValue;
      },
      set(val) {
        this.$emit("update:modelValue", val);
      }
    },
    props() {
      return {
        schema: this.schema,
        options: this.options,
        view: this.view,
        connector: this.connector
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
