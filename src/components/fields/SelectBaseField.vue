<template>
  <control v-bind="props">
    <select :class="[styles.formControl]" 
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" 
      :disabled="schema.readonly" >
      <option v-if="!schema.required" value="">{{options.noneLabel || "None"}}</option>
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
    modelValue: {
      type: String
    },
    schema: {},
    options: {},
    view: {},
    connector: {}
  },
  emits: ['update:modelValue'],
  computed: {  
    items(){
      return this.schema.enum.map( (v, index) => {
        return {
          value: v,
          label: this.label(index)
        };
      })
    },
    styles() {
      if (this.view && this.view.styles) {
        return this.view.styles;
      }
      return {
        formControl: 'form-control',
      };
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