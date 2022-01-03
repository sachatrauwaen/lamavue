<script>
import ObjectBaseField from "./ObjectBaseField.vue";

import builderUtils from "../../builderUtils";

let ObjectField = {
  name: "ObjectField",
  extends: ObjectBaseField,
  props: {
    
  },
  computed: {
   
  },
  methods: {
   
  },
  builder: {
    props() {
      return {
        schema: {
          type: "object",
          properties: {
            fields: {
              title: "Fields",
              type: "array",
              items: builderUtils.getObjectProps().schema.items,
            },
          },
        },
        options: {
          fields: {
            fields: {
              items: builderUtils.getObjectProps().options.items,
            },
          },
        },
      };
    },
    fromBuilder(field) {
      return builderUtils.objectFromBuilder(field);
    },
    toBuilder(def) {
      return builderUtils.objectToBuilder(def);
    },
  },
};

export default ObjectField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
