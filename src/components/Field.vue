<template>
  <div>
    <component
      ref="comp"
      :is="fieldComponent"
      v-model="model"
      v-bind="props"
    ></component>
  </div>
</template>

<script>
import Lama from "../lama";

export default {
  name: "FormField",
  props: {
    value: {},
    schema: {},
    options: {},
    view: {},
    connector: {},
  },
  computed: {
    field() {
      let field = Lama.createFieldInstance(
        "",
        this.data,
        this.options,
        this.schema,
        this.view,
        this.connector
        //this.errorCallback
      );
      return field;
    },
    /* model: {
              get() {
                return this.value;
              },
              set(val) {
                this.$emit("input", val);
              }
            }, */
    model: {
      get() {
        if (this.options.multilanguage) {
            if (Lama.isObject(this.value)) {
                if (Object.prototype.hasOwnProperty.call(this.value, this.connector.currentCulture)) {
                    return this.value[this.connector.currentCulture];
                } else if (Object.prototype.hasOwnProperty.call(this.value, this.connector.defaultCulture)) {
                    //let val = this.value[this.connector.defaultCulture];
                    //if (Lama.isString(val))
                    //    return this.value[this.connector.defaultCulture] + ' [' + this.connector.defaultCulture.substring(0, 2).toUpperCase() + ']';
                    //else
                        return this.value[this.connector.defaultCulture];
                } else {
                    return null;
                }
            } else {
                return this.value;
            }
        } else {
          return this.value;
        }
      },
      set(val) {
        if (this.options.multilanguage) {
          let valueObject = {};
            if (Lama.isObject(this.value) && (
                Object.prototype.hasOwnProperty.call(this.value, this.connector.currentCulture) ||
                Object.prototype.hasOwnProperty.call(this.value, this.connector.defaultCulture)
            )) {
            //valueObject = Lama.mergeObject(this.value, valueObject);
            valueObject = this.value;            
          } else if (!Lama.isEmpty(this.value)
              && this.connector.defaultCulture
              && this.connector.defaultCulture != this.connector.currentCulture) {
              this.$set(valueObject, this.connector.defaultCulture, this.value);
          }
          this.$set(valueObject, this.connector.currentCulture, val);
          this.$emit("input", valueObject);
        } else {
          this.$emit("input", val);
        }
      },
    },
    fieldComponent() {
      return this.field.component;
    },
    props() {
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