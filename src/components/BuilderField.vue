<template>
  <div class>
    <container v-model="model" v-bind="props">
      <fields ref="fields1" v-model="model" v-bind="props"></fields>
      <fields ref="fields2"
        v-if="model.fieldType"
        v-model="model"
        v-bind="builderProps"
      ></fields>
      {{ model.builder }}
    </container>
  </div>
</template>

<script>
import List from "./List.vue";
import Fields from "./Fields.vue";
import Container from "./Container.vue";
import Lama from "../lama";

export default {
  name: "BuilderField",
  props: {
    value: {},
    schema: {},
    options: {},
    connector: {},
    // errorCallback: {}
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
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
    props() {
      return {
        schema: this.schema,
        options: this.options,
      };
    },
    itemcomponent() {
      var schemaType = this.schema.type;
      var component = null;
      if (schemaType == "object") {
        component = Lama.getFieldComponent("object");
      } else if (schemaType == "array") {
        component = Lama.getFieldComponent("array");
      } else {
        component = Lama.getFieldComponent("control");
      }
      return component;
    },
    controlComponent() {
      var schemaType = this.schema.type;
      var component = null;
      if (schemaType == "object") {
        component = Fields;
      } else if (schemaType == "array") {
        component = List;
      } else {
        component = this.field.component;
      }
      return component;
    },
    itemProps() {
      return this.field.props;
    },
    builderComponent() {
      return null;
      /*
      // eslint-disable-next-line no-undef
      let builderComponent = Lama.getFieldComponent(this.model.fieldType);

      var schemaType = builderComponent.builder.schema.type;
      var component = null;
      if (schemaType == "object") {
        // eslint-disable-next-line no-undef
        component = Fields;
      } else if (schemaType == "array") {
        // eslint-disable-next-line no-undef
        component = List;
      } else {
        // eslint-disable-next-line no-undef
        component = this.field.component;
      }
      return component;
      */
    },
    builderProps() {
      if (!this.model.fieldType) return null;
      let builderComponent = Lama.getFieldComponent(this.model.fieldType);
      let props = {
        schema: {
          type: "object",
          properties: {},
        },
        options: {
          fields: {},
        },
      };
      if (builderComponent.builder && builderComponent.builder.props) {
        let extendProps = builderComponent.builder.props();
        if (extendProps.schema && extendProps.schema.properties) {
          props.schema.properties = Object.assign(
            extendProps.schema.properties,
            props.schema.properties
          );
        }
        if (extendProps.options && extendProps.options.fields) {
          props.options.fields = Object.assign(
            extendProps.options.fields,
            props.options.fields
          );
        }
      }
      while (builderComponent.extends) {
        builderComponent = builderComponent.extends;
        if (builderComponent.builder) {
          let extendProps = builderComponent.builder.props();
          if (extendProps) {
            if (extendProps.schema && extendProps.schema.properties) {
              props.schema.properties = Object.assign(
                extendProps.schema.properties,
                props.schema.properties
              );
            }
            if (extendProps.options && extendProps.options.fields) {
              props.options.fields = Object.assign(
                extendProps.options.fields,
                props.options.fields
              );
            }
          }
        }
      }
      return props;
    },
  },
  methods: {
    label(field) {
      return this.properties[field].title;
    },
    propChange(key, value) {
      this.$set(this.model, key, value);
      this.$emit("input", this.model);
    },
    init() {
        //if (this.$refs.fields1) this.$refs.fields1.init();
        //if (this.$refs.fields2) this.$refs.fields2.init();

    },
  },
  components: { Fields, Container }, 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>