<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <lama-form v-bind="props" v-model="model"></lama-form>
      </div>
      <div class="col-md-6">
        <lama-form v-bind="demoProps" v-model="demo"></lama-form>
        <hr />
        {{schema}}
        <hr />
        {{options}}
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-md-12">
        <textarea v-model="schemaText" style="width:100%;height:300px;"></textarea>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-md-12">
        <textarea v-model="optionsText" style="width:100%;height:300px;"></textarea>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import LamaForm from "./components/Form.vue";
import Lama from "./lama";
import builderUtils from "./builderUtils";

export default {
  name: "Builder",
  data() {
    return {
      demo: {},
      schema: {
        title: "What do you think of Alpaca?",
        type: "object",
        properties: {
          name: {
            type: "string",
            title: "Name",
            required: true
          },
          amount: {
            type: "number",
            title: "Amount",
            required: true
          },
          ranking: {
            type: "string",
            title: "Ranking",
            enum: ["excellent", "not too shabby", "alpaca built my hotrod"]
          }
        }
      },
      options: { fields: {} },
      connector: Lama.getConnectorClass("default")
    };
  },
  props: {},
  computed: {
    model: {
      get() {
        let fields = [];
        for (const key in this.schema.properties) {
          const sch = this.schema.properties[key];
          const opt = this.options.fields[key] || {};
          let field = {
            fieldName: key,
            label: sch.title,
            fieldType: type
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
                options: opt
              });              
              field.fieldName = key;
            }
          }
          fields.push(field);
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
              type: field.fieldType
            };
            fields[field.fieldName] = {};
          }
        }
        this.schema = {
          title: "What do you think of Alpaca?",
          type: "object",
          properties: props
        };
        this.options = { fields: fields };
        //this.$emit("input", val);
      }
    },
    demoProps() {
      return {
        schema: JSON.parse(JSON.stringify(this.schema)),
        options: JSON.parse(JSON.stringify(this.options)),
        connector: this.connector
      };
    },
    props() {
      return builderUtils.getObjectProps();
    },
    schemaText: {
      get() {
        return JSON.stringify(this.schema, undefined, "  ");
      },
      set(val) {
        this.schema = JSON.parse(val);
      }
    },
    optionsText: {
      get() {
        return JSON.stringify(this.options, undefined, "  ");
      },
      set(val) {
        this.options = JSON.parse(val);
      }
    }
  },
  methods: {
    fieldProps() {
      let defautProps = {
        type: "object",
        properties: {
          fieldname: {
            type: "string",
            title: "Field Name",
            required: true
          },
          label: {
            type: "string",
            title: "Label",
            required: true
          },
          fieldType: {
            type: "string",
            title: "Field Type",
            enum: this.fieldTypes
          }
        }
      };

      return defautProps;
    }
  },
  components: { LamaForm }
};

</script>

<style>
</style>
