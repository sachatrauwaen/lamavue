<template>
  <control v-bind="props" v-slot="flags">
    <div class="form-check">
      <input
        type="checkbox"
        class="form-check-input"
        :aria-describedby="options.label"
        v-model="model"
        :class="{'is-invalid':flags.invalid && flags.touched}"
        :placeholder="options.placeholder"
      />
      <label v-if="options.rightLabel" class="form-check-label">{{options.rightLabel}}</label>
    </div>
  </control>
</template>

<script>
import ControlField from "./ControlField.vue";

let CheckBoxField = {
  name: "CheckBoxField",
  extends: ControlField,
  props: {
    value: {
      type: Boolean
    }
  },
  computed: {},
  methods: {},
  components: {},
  builder: {
    props() {
      return {
        schema: {
          type: "object",
          properties: {
          }
        },
        options: {}
      };
    },
    fromBuilder() {
      return {
        schema: {
          type: "boolean"
        },
        options: {}
      };
    },
    toBuilder() {
      return {
        fieldType: "checkbox",
      };
    }
  }
};

export default CheckBoxField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
