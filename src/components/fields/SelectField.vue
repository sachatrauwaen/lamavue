
<script>
import SelectBaseField from "./SelectBaseField.vue";

let SelectField = {
  name: "SelectField",
  extends: SelectBaseField,
  props: {
    value: {
      type: String
    },
    schema: {},
    options: {},
    connector: {}
  },
  computed: {  
    items(){
      return this.schema.enum.map( (v, index) => {
        return {
          value: v,
          label: this.label(index)
        };
      })
    }
  },
  methods: {
    label(index) {
      return this.options.optionLabels && this.options.optionLabels[index]
        ? this.options.optionLabels[index]
        : this.schema.enum[index];
    }
  },
  components: {},
  builder: {
    props() {
      return {
        schema: {
          type: "object",
          properties: {
            options: {
              title: "Options",
              type: "array",
              items: {
                type: "object",
                properties: {
                  value: {
                    type: "string",
                    title: "Value"
                  },
                  label: {
                    type: "string",
                    title: "Label"
                  }
                }
              }
            }
          }
        },
        options: {}
      };
    },
    fromBuilder(field) {
      let _enum = [];
      let optionLabels = [];
      if (field.options) {
        _enum = field.options.map(o => {
          return o.value;
        });
        optionLabels = field.options.map(o => {
          return o.label;
        });
      }
      return {
        schema: {
          type: "string",
          enum: _enum
        },
        options: {
          type: "select",
          optionLabels: optionLabels
        }
      };
    },
    toBuilder(def) {
      return {
        fieldType: "select",
        options: def.schema.enum.map((a, i) => {
          return {
            value: a,
            label: def.options.optionLabels ? def.options.optionLabels[i] : a
          };
        })
      };
    }
  }
};

export default SelectField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>