<template>
  <container v-bind="props">
    <list v-model="model" v-bind="props"></list>
  </container>
</template>

<script>
import Container from "../Container.vue";
import List from "../List.vue";
import builderUtils from "../../builderUtils";

let ArrayField = {
  name: "ArrayField",
  props: {
    value: {
      type: Array
    },
    schema: {},
    options: {},
    connector: {},
    errorCallback: {}
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
        connector:this.connector,
        errorCallback: this.errorCallback
      };
    }
  },
  methods: {},
  components: { Container, List },
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
      let def = builderUtils.objectFromBuilder(field);
      def.schema.title="";
      return {
        schema: {
          title: field.label,
          type: "array",
          items: def.schema
        },
        options: {
          items:  def.options          
        }
      };
    },
    toBuilder(def) {
      let b = builderUtils.objectToBuilder({schema : def.schema.items, options: def.options.items});      
      return {
        label: def.schema.title,
        fieldType: "array",
        fields: b.fields
      };
    }
  }
};

export default ArrayField;


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
