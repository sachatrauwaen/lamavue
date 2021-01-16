<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <lama-form v-bind="props" v-model="model" :debug="debug"></lama-form>
      </div>
      <div class="col-md-6">
        <lama-form v-bind="demoProps" v-model="demo" :debug="debug"></lama-form>
        <div v-if="debug">
        <hr />
        schema = {{ value.schema }}
        <hr />
        options = {{ value.options }}
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import LamaForm from "./Form.vue";
import Lama from "../lama";
import builderUtils from "../builderUtils";

import BuilderField from "./BuilderField.vue";

Lama.registerFieldComponent("builder", BuilderField);

export default {
  name: "Builder",
  props: {
    value: {},
    connector: {},
    debug:{
      "type" : Boolean,
      "default": false
    }
  },
  data() {
    return {
      demo: {},
    };
  },
  computed: {
    model: {
      get() {
        let fields = [];
        if (this.value.schema && this.value.schema.properties) {
          for (const key in this.value.schema.properties) {
            const sch = this.value.schema.properties[key];
            const opt = this.value.options.fields[key] || {};
            let field = {
              fieldName: key,
              label: sch.title,
              fieldType: type,
            };
            let type = opt.type;
            if (!opt.type) {
              type = Lama.guessOptionsType(sch);
            }
            if (type) {
              let builderComponent = Lama.getFieldComponent(type);
              if (
                builderComponent &&
                builderComponent.builder &&
                builderComponent.builder.toBuilder
              ) {
                field = builderComponent.builder.toBuilder({
                  schema: sch,
                  options: opt,
                });
                field.fieldName = key;
              }
            }
            fields.push(field);
          }
        }
        return fields;
      },
      set(val) {
        let props = {};
        let fields = {};
        for (let index = 0; index < val.length; index++) {
          const field = val[index];
          if (field.fieldType) {
            let builderComponent = Lama.getFieldComponent(field.fieldType);
            let builder = builderComponent.builder.fromBuilder(field);
            props[field.fieldName] = builder.schema;
            fields[field.fieldName] = builder.options;
          } else {
            props[field.fieldName] = {
              title: field.label,
              type: field.fieldType,
            };
            fields[field.fieldName] = {};
          }
        }
        this.$emit("input", {
          schema: {
            title: "What do you think of Alpaca?",
            type: "object",
            properties: props,
          },
          options: { fields: fields },
        });
        //this.$emit("input", val);
      },
    },
    demoProps() {
      let demoSchema = JSON.parse(JSON.stringify(this.value.schema || {}));
      demoSchema.type = demoSchema.type || "object";
      demoSchema.properties = demoSchema.properties || {};
      return {
        schema: demoSchema,
        options: JSON.parse(JSON.stringify(this.value.options)),
        connector: this.connector,
      };
    },
    props() {
      return builderUtils.getObjectProps();
    },
  },
  methods: {
    fieldProps() {
      let defautProps = {
        type: "object",
        properties: {
          fieldname: {
            type: "string",
            title: "Field Name",
            required: true,
          },
          label: {
            type: "string",
            title: "Label",
            required: true,
          },
          fieldType: {
            type: "string",
            title: "Field Type",
            enum: this.fieldTypes,
          },
        },
      };

      return defautProps;
    },
  },
  components: { LamaForm },
};
</script>

<style>
</style>
