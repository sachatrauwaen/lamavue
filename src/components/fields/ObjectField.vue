<template>
  <container v-model="model" v-bind="props">
    <fields v-model="model" v-bind="props"></fields>
  </container>
</template>

<script>
import Container from "../Container.vue";
import Fields from "../Fields.vue";

import builderUtils from "../../builderUtils";

let ObjectField = {
  name: "ObjectField",
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
  methods: {},
  components: { Container, Fields },
  builder: {
    props() {
      return {
        schema: {
          type: "object",
          properties: {
            fields: {
              title: "Fields",
              type: "array",
              items: builderUtils.getObjectProps().schema.items
            }
          }
        },
        options: {
          fields: {
            fields:{
              
              items: builderUtils.getObjectProps().options.items
            }
          }
        }
      };
    },
    fromBuilder(field) {
      return builderUtils.objectFromBuilder(field);
    },
    toBuilder(def) {
      return builderUtils.objectToBuilder(def);
    }
  }
};

export default ObjectField;


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
