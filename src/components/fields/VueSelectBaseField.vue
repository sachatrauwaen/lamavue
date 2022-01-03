<template>
  <control v-bind="props">
    <vue-select
      v-model="model"
      label="text"
      :multiple="multiple"
      :placeholder="options.placeholder"
      style="margin-bottom: 10px"
      :clearable="true"
      :options="items"
      :reduce="reduce"
      :filterable="true"
    ></vue-select>
  </control>
</template>

<script>
import VueSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import ControlField from "./ControlField.vue";

let VueSelectBaseField = {
  name: "VueSelectBaseField",
  extends: ControlField,
  props: {},
  data() {
    return {
     
      items: [],
    };
  },
  computed: {
    multiple() {
      return this.schema.type == "array";
    },
    query() {
      return {
        type: "",
      };
    }
  },
  methods: {
    fetchOptions() {
      let self = this;
      let config = {
        query: this.query,
      };
      this.connector.loadDataSource(
        config,
        (data) => {
          self.items = data.map(self.map);
          //loading(false);
        },
        () => {
          //loading(false);
        }
      );
    },
    map(item) {
      return item;
    },
    reduce(option) {
      return option.value;
    },
  },
  components: {
    VueSelect,
  },
  created() {
    this.fetchOptions();
  },
};

export default VueSelectBaseField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>