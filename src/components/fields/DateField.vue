<template>
  <control v-bind="props" v-slot="flags">
    <vue-ctk-date-time-picker
      :only-date="true"
      :auto-close="true"
      :no-label="true"
      :no-header="true"
      :no-button-now="true"
      format="YYYY-MM-DD"
      formatted="ll"
      v-model="model"
      :class="{'is-invalid':flags.invalid && flags.touched}"
      :placeholder="options.placeholder"
    />
  </control>
</template>

<script>
import ControlField from "./ControlField.vue";
import Control from "./Control.vue";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";

let DateField = {
  name: "DateField",
  extends: ControlField,
  props: {
    value: {
      type: String
    }
  },
  computed: {},
  methods: {},
  components: { Control, VueCtkDateTimePicker },
  builder: {
    props() {
      return {
        schema: {
          type: "object",
          properties: {
            placeholder: {
              title: "Placeholder",
              type: "string"
            }
          }
        },
        options: {}
      };
    },
    fromBuilder(field) {
      return {
        schema: {
          type: "string",
        },
        options: {
          type: "date",
          placeholder: field.placeholder,
        }
      };
    },
    toBuilder(def) {
      return {
        fieldType: "date",
        placeholder: def.options.placeholder
      };
    }
  }
};

export default DateField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
