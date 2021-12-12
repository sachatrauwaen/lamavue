<script>
import VueSelectBaseField from "./VueSelectBaseField.vue";

let RelationField = {
  name: "RelationField",
  extends: VueSelectBaseField,
  props: {},
  data() {
    return {};
  },
  computed: {
    query() {
      return {
        type: "relation",
        action: this.options.dataService.action,
        dataKey: this.options.dataService.data.dataKey,
        valueField: this.options.dataService.data.valueField,
        textField: this.options.dataService.data.textField,
      };
    },
  },
  methods: {
    // map(item) {
    //   return {
    //     value: item[this.options.dataService.data.valueField],
    //     text: item[this.options.dataService.data.textField],
    //   };
    // },
  },
  components: {},
  builder: {
    props() {
      return {
        schema: {
          type: "object",
          properties: {
            many: {
              type: "boolean",
            },
            dataKey: {
              title: "Data key",
              type: "string",
            },
            valueField: {
              title: "Value field",
              type: "string",
            },
            textField: {
              title: "TextField",
              type: "string",
            },
            placeholder: {
              title: "Placeholder",
              type: "string",
            },
          },
        },
        options: {
          fields: {
            many: {
              rightLabel: "Many",
            },
          },
        },
      };
    },
    fromBuilder(field) {
      return {
        schema: {
          type: field.many ? "array" : "string",
        },
        options: {
          type: "select2",
          placeholder: field.placeholder,
          dataService: {
            action: "LookupData",
            data: {
              dataKey: field.dataKey,
              valueField: field.valueField,
              textField: field.textField,
            },
          },
        },
      };
    },
    toBuilder(def) {
      let builder = {
        fieldType: "relation",
        placeholder: def.options.placeholder,
        many: def.schema.type == "array",
      };
      if (
        def.options &&
        def.options.dataService &&
        def.options.dataService.data
      ) {
        builder.dataKey = def.options.dataService.data.dataKey;
        builder.valueField = def.options.dataService.data.valueField;
        builder.textField = def.options.dataService.data.textField;
      }
      return builder;
    },
  },
};

export default RelationField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>