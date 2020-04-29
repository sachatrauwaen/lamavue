<script>
import Control from "./Control.vue";

let ControlField = {
  name: "ControlField",
  data() {
    return {};
  },
  props: {
    value: {},
    data: {},
    schema: {},
    options: {},
    view: {},
    connector: {}
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    },
    props() {
      return {
        schema: this.schema,
        options: this.options,
        view: this.view,
        connector: this.connector
      };
    }
  },
  methods: {},
  components: { Control }
};
export default ControlField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>