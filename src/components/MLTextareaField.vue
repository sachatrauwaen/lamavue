
<script>
import TextareaField from "./TextareaField.vue";
import MLControlField from "./MLControlField.vue";
import Lama from "../lama";

let MLTextareaField = {
  name: "MLTextareaField",
  extends: TextareaField,
  mixins:[MLControlField],
  methods: {},
  builder: {
    props() {
      return TextareaField.builder.props();      
    },
    fromBuilder(field) {
      let def = TextareaField.builder.fromBuilder(field);
      def.options.type="mltextarea";
      return def;
    },
    toBuilder(def) {
      let f = TextareaField.builder.toBuilder(def);
      f.fieldType= "mltextarea";
      return f;
    }
  }
};

export default MLTextareaField;

Lama.registerFieldComponent("mltextarea", MLTextareaField);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
