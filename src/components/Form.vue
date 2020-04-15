<template>
  <div>
    <ValidationObserver >
      <div>
        <field v-model="model" v-bind="props"></field>
      </div>
    </ValidationObserver>
    {{model}}
  </div>
</template>

<script>
import Vue from "vue";
import Field from "./Field.vue";
Vue.component("field", Field);

export default {
  name: "Form",
  props: {
    data: {},
    schema: {},
    options: {},    
    view:{},
    connector: {},
    value: {}
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
    props(){
      return {
        schema: this.schema,
        options:this.options,
        view: this.view,
        connector:this.connector
      };
    },
    label() {
      return this.schema.title;
    }
  },
  methods: {},
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
