<template>
  <container v-bind="props">
    <list ref="list" v-model="model" v-bind="props"></list>
  </container>
</template>

<script>
import Container from "../Container.vue";
import List from "../List.vue";
import builderUtils from "../../builderUtils";

let ArrayBaseField = {
  name: "ArrayBaseField",
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Array
    },
    schema: {},
    options: {},
    connector: {},
    view: {}
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
        connector:this.connector
      };
    }
  },
  methods: {
    init() {
            this.$refs.list.init();

        }
  },
  components: { Container, List },
  builder: {
    props() {
      return {
        schema: {
          type: "object",
          properties: {
          }
        },
        options: {
          fields: {
            fields:{
            }
          }
        }
      };
    },
    fromBuilder(field) {
      let def = builderUtils.objectFromBuilder(field);
      def.schema.title="";
      return {
        schema: {
          title: field.label,
          type: "array",
          
        },
        options: {          
        }
      };
    },
    toBuilder(def) {
        return {
          label: def.schema.title,
          fieldType: "array",
        };      
    }
  }
};

export default ArrayBaseField;


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
