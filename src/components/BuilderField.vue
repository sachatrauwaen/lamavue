<template>
  <div class>
    <container v-model="model" v-bind="props">
      <fields v-model="model" v-bind="props"></fields>

      <fields v-if="model.fieldType" v-model="model" v-bind="builderProps"></fields>
      {{model.builder}}
    </container>
  </div>
</template>

<script>
import List from "./List.vue";
import Fields from "./Fields.vue";
import Container from "./Container.vue";
let comp = {
  name: "BuilderField",
  props: {
    value: {},
    data: {},
    schema: {},
    options: {},
    connector: {},
    errorCallback: {}
  },
  computed: {
    field() {
      // eslint-disable-next-line no-undef
      let field = Lama.createFieldInstance(
        "",
        this.data,
        this.options,
        this.schema,
        this.view,
        this.connector,
        this.errorCallback
      );
      return field;
    },
    model: {
      get() {
        return this.value;
      },
      set(val) {
        //this.generate(val);
        this.$emit("input", val);
      }
    },
    props() {
      return {
        schema: this.schema,
        options: this.options
      };
    },

    itemcomponent() {
      //var field = this.fields[key];
      var schemaType = this.schema.type;
      var component = null;
      if (schemaType == "object") {
        // eslint-disable-next-line no-undef
        component = Lama.getFieldComponent("object");
      } else if (schemaType == "array") {
        // eslint-disable-next-line no-undef
        component = Lama.getFieldComponent("array");
      } else {
        // eslint-disable-next-line no-undef
        component = Lama.getFieldComponent("control");
      }
      return component;
    },
    controlComponent() {
      var schemaType = this.schema.type;
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

      // eslint-disable-next-line no-undef
      let builderComponent = Lama.getFieldComponent(this.model.fieldType);
      return builderComponent.builder.props();
    }
  },
  methods: {
    label(field) {
      return this.properties[field].title;
    },
    propChange(key, value) {
      this.$set(this.model, key, value);
      this.$emit("input", this.model);
    }
  },
  components: { Fields, Container }
};
export default comp;

// eslint-disable-next-line no-undef
Lama.registerFieldComponent("builder", comp);
// eslint-disable-next-line no-undef
//Lama.registerDefaultSchemaFieldMapping("string", "text");
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>