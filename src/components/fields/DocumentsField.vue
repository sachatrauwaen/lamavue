
<script>
import ArrayBaseField from "./ArrayBaseField.vue";

let DocumentsField = {
  name: "DocumentsField",
  extends: ArrayBaseField,
  computed: {
    props() {
      let self = this;
      return {
        schema: {
          title: self.schema.title,
          type: "array",
          items: {
            type: "object",
            properties: {
              Title: {
                title: "Title",
                type: "string",
              },
              File: {
                title: "File",
                type: "string",
              },
            },
          },
        },
        options: {
          items: {
            fields: {
              Title: {
                type: "text",
              },
              File: {
                type: "file",
              },
            },
          },
        },
        view: this.view,
        connector: this.connector,
      };
    },
  },
  methods: {},
  created() {},
  components: {},
  builder: {
    props() {
      return {
        schema: {
          type: "array",
          properties: {},
        },
        options: {},
      };
    },
    fromBuilder(field) {
      return {
        schema: {
          title: field.label,
          type: "array",
        },
        options: {
          type: "documents",
        },
      };
    },
    toBuilder(def) {
      return {
        label: def.schema.title,
        fieldType: "documents",
      };
    },
  },
};

export default DocumentsField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
