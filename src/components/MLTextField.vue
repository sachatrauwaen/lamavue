
<script>
import TextField from "./TextField.vue";
import MLControlField from "./MLControlField.vue";
import Lama from "../lama";

let MLTextField = {
  name: "MLTextField",
  extends: TextField,
  mixins:[MLControlField],
  methods: {},
  builder: {
    props() {
      return TextField.builder.props();      
    },
    fromBuilder(field) {
      let def = TextField.builder.fromBuilder(field);
      def.options.type="mltext";
      return def;
    },
    toBuilder(def) {
      let f = TextField.builder.toBuilder(def);
      f.fieldType= "mltext";
      return f;
    }
  }
};

export default MLTextField;

Lama.registerFieldComponent("mltext", MLTextField);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
