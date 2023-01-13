<script>
import builderUtils from "../../builderUtils";
import ArrayBaseField from "./ArrayBaseField.vue";

let ArrayField = {
  name: "ArrayField",
   extends: ArrayBaseField,
  computed: {
    props() {
      return {
        schema: this.schema,
        options: this.options,
        view: this.view,
        connector:this.connector,
        errorCallback: this.errorCallback
      };
    }
  },
  methods: {},
  builder: {
    props() {
      return {
        schema: {
          type: "object",
          properties: {
            fields: {
              title: "Fields",
              type: "array",
              items: builderUtils.getObjectProps().schema.items
            },
            titleField: {
                title: "Title Field",
                type: "string"
            }
          }
        },
        options: {
          fields: {
            fields:{              
              items: builderUtils.getObjectProps().options.items
            }
          }
        }
      };
    },
    fromBuilder(field) {
      let def = builderUtils.objectFromBuilder(field);
        def.schema.title = "";
        def.options.titleField = field.titleField;
      return {
        schema: {
          title: field.label,
          type: "array",
          items: def.schema
        },
        options: {
          items: def.options          
        }
      };
    },
    toBuilder(def) {
      if (def.schema.items){
        let b = builderUtils.objectToBuilder({schema : def.schema.items, options: def.options.items});      
        return {
          label: def.schema.title,
          fieldType: "array",
          fields: b.fields,
          titleField: def.options.items.titleField
        };
      }else {
        return {
          label: def.schema.title,
          fieldType: "array",
          fields: [],
          titleField: def.options.items.titleField
        };
      }
    }
  }
};

export default ArrayField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
