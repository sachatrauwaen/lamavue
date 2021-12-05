<script>
import VueSelectBaseField from "./VueSelectBaseField.vue";

let PageField = {
  name: "PageField",
  extends: VueSelectBaseField,
  props: {},
  data() {
    return {
      query: {
        type: "page",
        search: "",
      },
    };
  },
  computed: {},
  methods: {
    reduce(option) {
      return {
        id: option.value,
        url: option.url,
      };
    },
  },
  components: {},
  builder: {
    props() {
      return {
        schema: {
          type: "object",
          properties: {
            placeholder: {
              title: "Placeholder",
              type: "string",
            },
          },
        },
        options: {
          fields: {},
        },
      };
    },
    fromBuilder(field) {
      return {
        schema: {
          type: "string",
        },
        options: {
          type: "page",
          placeholder: field.placeholder,
        },
      };
    },
    toBuilder(def) {
      return {
        fieldType: "page",
        placeholder: def.options.placeholder,
      };
    },
  },
};

export default PageField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>