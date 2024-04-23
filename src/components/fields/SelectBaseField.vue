<template>
  <control v-bind="props">
    <select class="form-control" v-model="model">
      <option v-for="option in items" :key="option.value" :value="option.value">{{option.label}}</option>
    </select>
  </control>
</template>

<script>
import ControlField from "./ControlField.vue";

let SelectField = {
  name: "SelectBaseField",
  extends: ControlField,
  props: {
    value: {
      type: String
    },
    schema: {},
    options: {},
    view: {},
    connector: {}
  },
  computed: {  
    items(){
      return this.schema.enum.map( (v, index) => {
        return {
          value: v,
          label: this.label(index)
        };
      })
    }
  },
  methods: {
    label(index) {
      return this.options.optionLabels && this.options.optionLabels[index]
        ? this.options.optionLabels[index]
        : this.schema.enum[index];
    }
  },
  components: {}
  
};

export default SelectField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>