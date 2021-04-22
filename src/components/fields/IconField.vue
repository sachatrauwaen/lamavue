<template>
  <control v-bind="props" v-slot="flags">
    <vue-select
      v-model="model"
      :placeholder="options.placeholder"
      :reduce="(icon) => icon.value"
      style="margin-bottom: 10px"
      :options="filteredIcons"
      :filterable="true"
      :filterBy="filterBy"
      :class="{ 'is-invalid': flags.invalid && flags.touched }"
      
    >
      <template #selected-option="option">
        <font-awesome-icon :icon="option.label" />
        <span :class="option.value"></span>
        <span style="margin-left: 0.5rem">{{ option.label }}</span>
      </template>
      <template v-slot:option="option">
        <font-awesome-icon :icon="option.label" />
        <span :class="option.value"></span>
        {{ option.label }}
      </template>
    </vue-select>
  </control>
</template>

<script>
import ControlField from "./ControlField.vue";
import Control from "./Control.vue";
import VueSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
//import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);

let TextField = {
  name: "IconField",
  extends: ControlField,
  props: {
    value: {
      type: String,
    },
  },
  data() {
    return {
      icons: { ...fas /*, ...fab*/ },
    };
  },
  computed: {
    filteredIcons() {
      return Object.keys(this.icons)
        .filter((key) => key !== "faFontAwesomeLogoFull" && this.icons[key].iconName)
        .map((key) => {
          return {
            value: this.icons[key].prefix + " " + this.icons[key].iconName,
            label: this.icons[key].iconName,
          };
        });
    },
  },
  methods: {
    filterBy(option, label, search) {
      return label.indexOf(search.toLowerCase()) > -1;
    },
  },
  components: { Control, VueSelect, FontAwesomeIcon },
  builder: {
    props() {
      return {
        schema: {
          type: "object",
          properties: {
            placeholder: {
              title: "Placeholder",
              type: "string",
            },
          },
        },
        options: {
          fields: {},
        },
      };
    },
    fromBuilder(field) {
      return {
        schema: {
          type: "string",
        },
        options: {
          type: "icon",
          placeholder: field.placeholder,
        },
      };
    },
    toBuilder(def) {
      return {
        fieldType: "icon",
        placeholder: def.options.placeholder,
      };
    },
  },
};

export default TextField;
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
