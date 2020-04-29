<template>
  <div>
    <ValidationObserver >
      <div>
        <form-field v-model="model" v-bind="props"></form-field>
      </div>
    </ValidationObserver>
    {{model}}
  </div>
</template>

<script>
import Field from "./Field.vue";
import Lama from "../lama";
import BaseView from '../BaseView';
import Bootstap4View from '../Bootstap4View';
import DefaultConnector from '../DefaultConnector';

Lama.registerView(BaseView);
Bootstap4View.register();
Lama.registerConnectorClass("default", DefaultConnector);


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
  components: {formField: Field}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
