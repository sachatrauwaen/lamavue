<template>
  <div>
    <ValidationObserver ref="validationobserver">
      <div>
        <form-field v-model="model" v-bind="props"></form-field>
      </div>
    </ValidationObserver>
    {{model}}
  </div>
</template>

<script>
import Vue from 'vue'
import FormField from "./Field.vue";
import Lama from "../lama";
Vue.use(Lama);

export default {
  name: "Form",
  props: {
    schema: {},
    options: {},
    view: {},
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
    props() {
      let connector = this.connector || Lama.getConnectorClass("default");
      let view = this.view || Lama.defaultView;
      return {
        schema: this.schema,
        options: this.options,
        view: view,
        connector: connector
      };
    },
    label() {
      return this.schema.title;
    }
  },
  methods: {
    validate(successCallback, errorCallBack){
      this.$refs.validationobserver.validate().then(success => {
        if (success) {
          if (successCallback) successCallback();
        } else{
          if (errorCallBack) errorCallBack();
        }
      });
    }
  },
  components: { FormField }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
