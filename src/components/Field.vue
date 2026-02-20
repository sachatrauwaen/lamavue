<template>
  <div>
    <component
      ref="comp"
      :is="fieldComponent"
      :key="fieldProps.options.type"
      v-model="model"
      v-bind="fieldProps"
    ></component>
  </div>
</template>

<script>
import Lama from "../lama";

export default {
  name: "FormField",
  props: {
    modelValue: {},
    data: {},
    schema: {},
    options: {},
    view: {},
    connector: {},
  },
  emits: ['update:modelValue'],
  computed: {
    field() {
      let field = Lama.createFieldInstance(
        "",
        this.data,
        this.options,
        this.schema,
        this.view,
        this.connector
      );
      return field;
    },
    model: {
      get() {
        if (this.options.multilanguage) {
            if (Lama.isObject(this.modelValue)) {
                if (Object.prototype.hasOwnProperty.call(this.modelValue, this.connector.currentCulture)) {
                    return this.modelValue[this.connector.currentCulture];
                } else if (Object.prototype.hasOwnProperty.call(this.modelValue, this.connector.defaultCulture)) {
                        return this.modelValue[this.connector.defaultCulture];
                } else {
                    return null;
                }
            } else {
                return this.modelValue;
            }
        } else {
          return this.modelValue;
        }
      },
      set(val) {
        if (this.options.multilanguage) {
          let valueObject = {};
            if (Lama.isObject(this.modelValue) && (
                Object.prototype.hasOwnProperty.call(this.modelValue, this.connector.currentCulture) ||
                Object.prototype.hasOwnProperty.call(this.modelValue, this.connector.defaultCulture)
            )) {
            valueObject = this.modelValue;
          } else if (!Lama.isEmpty(this.modelValue)
              && this.connector.defaultCulture
              && this.connector.defaultCulture != this.connector.currentCulture) {
              valueObject[this.connector.defaultCulture] = this.modelValue;
          }
          valueObject[this.connector.currentCulture] = val;
          this.$emit("update:modelValue", valueObject);
        } else {
          this.$emit("update:modelValue", val);
        }
      },
    },
    fieldComponent() {
      return this.field.component;
    },
    fieldProps() {
      return this.field.props;
    },
  },
  methods: {
    init() {
      if (this.$refs.comp) this.$refs.comp.init();
      }
  },
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
