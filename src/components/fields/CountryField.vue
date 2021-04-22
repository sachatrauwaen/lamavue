
<script>

import SelectBaseField from "./SelectBaseField.vue";
import Lama from "../../lama";

let CountryField = {
  name: "CountryField",
  extends: SelectBaseField,
  props: {
    
  },
  computed: {
    items(){
      let countries = Lama.getMessage(this.view, 'countries');
      let options=[];
      for (const key in countries) {      
          const val = countries[key];
          options.push({
            value: key,
            label: val
          });      
      }
      return options;
    }
  },
  methods: {
  },
  components: {},
  builder: {
    props() {
      return {
        schema: {
          type: "object",
          properties: {
            
          }
        },
        options: {}
      };
    },
    fromBuilder() {     
      return {
        schema: {
          type: "string",
        },
        options: {
          type: "country",
        }
      };
    },
    toBuilder() {
      return {        
        fieldType: "country",
      };
    }
  }
};

export default CountryField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>