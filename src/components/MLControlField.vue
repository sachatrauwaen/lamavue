<script>
import Lama from "../lama";

let MLControlField = {
  name: "MLControlField",
  props: {
    value: {
      type: Object
    }
  },
  computed: {
    model: {
      get() {
        return Lama.isObject(this.value)
          ? this.value[this.connector.currentCulture]
          : this.value;
      },
      set(val) {
        let valueObject = {};
        valueObject[this.connector.currentCulture] = val;
        if (Lama.isObject(this.value)) {
          valueObject = Lama.mergeObject(this.value, valueObject);
        }
        this.$emit("input", valueObject);
      }
    },
    props() {
      return {
        schema: this.schema,
        options: this.options,
        badge: this.connector.currentCulture
      };
    }
  },
};
export default MLControlField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>