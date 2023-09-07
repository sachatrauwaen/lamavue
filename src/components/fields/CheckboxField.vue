<template>
  <control v-bind="props" v-slot="flags" :showLabel="false">
    <div class="form-check">
      <input
        type="checkbox"
        class="form-check-input"
        :aria-describedby="options.label"
        v-model="model"
        :class="{'is-invalid':flags.invalid && flags.touched}"
        :placeholder="options.placeholder"
      />
      <label v-if="label" class="form-check-label">{{label}}</label>
    </div>
  </control>
</template>

<script>
    import ControlField from "./ControlField.vue";
    import Lama from "../../lama";

let CheckBoxField = {
  name: "CheckBoxField",
  extends: ControlField,
  props: {
    value: {
      type: Boolean
    }
  },
  computed: {
    label() {
      return this.options.label || this.schema.title || this.options.rightLabel;
    },
  },
    methods: {
        init() {
            if (Lama.isValEmpty(this.model) ) {
                this.model = this.schema.default == true || this.schema.default == "true";
            }
        }
    },
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
