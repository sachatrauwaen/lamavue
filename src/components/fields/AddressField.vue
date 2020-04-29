
<script>
import ObjectField from "./ObjectField.vue";

let AddressField = {
  name: "AddressField",
  extends: ObjectField,
  data() {
    return {};
  },
  computed: {
    props() {
      return {
        schema: {
          title: "Address",
          type: "object",
          properties: {
            street: {
              title: "Street",
              type: "string"
            },
            number: {
              title: "House Number",
              type: "string"
            },
            city: {
              title: "City",
              type: "string"
            },
            state: {
              title: "State",
              type: "string",
              enum: [
                "AL",
                "AK",
                "AS",
                "AZ",
                "AR",
                "CA",
                "CO",
                "CT",
                "DE",
                "DC",
                "FM",
                "FL",
                "GA",
                "GU",
                "HI",
                "ID",
                "IL",
                "IN",
                "IA",
                "KS",
                "KY",
                "LA",
                "ME",
                "MH",
                "MD",
                "MA",
                "MI",
                "MN",
                "MS",
                "MO",
                "MT",
                "NE",
                "NV",
                "NH",
                "NJ",
                "NM",
                "NY",
                "NC",
                "ND",
                "MP",
                "OH",
                "OK",
                "OR",
                "PW",
                "PA",
                "PR",
                "RI",
                "SC",
                "SD",
                "TN",
                "TX",
                "UT",
                "VT",
                "VI",
                "VA",
                "WA",
                "WV",
                "WI",
                "WY"
              ]
            },
            postalcode: {
              title: "Postal Code",
              type: "string"
            },
            country: {
              title: "Country",
              type: "string"
            },
            latitude: {
              title: "Latitude",
              type: "number"
            },
            longitude: {
              title: "Longitude",
              type: "number"
            }
          }
        },
        options: {
          fields: {
            search: {
              fieldClass: "googlesearch"
            },
            street: {
              fieldClass: "street"
            },
            number: {
              fieldClass: "number"
            },
            city: {
              fieldClass: "city"
            },
            postalcode: {
              fieldClass: "postalcode"
            },
            state: {
              optionLabels: [
                "ALABAMA",
                "ALASKA",
                "AMERICANSAMOA",
                "ARIZONA",
                "ARKANSAS",
                "CALIFORNIA",
                "COLORADO",
                "CONNECTICUT",
                "DELAWARE",
                "DISTRICTOFCOLUMBIA",
                "FEDERATEDSTATESOFMICRONESIA",
                "FLORIDA",
                "GEORGIA",
                "GUAM",
                "HAWAII",
                "IDAHO",
                "ILLINOIS",
                "INDIANA",
                "IOWA",
                "KANSAS",
                "KENTUCKY",
                "LOUISIANA",
                "MAINE",
                "MARSHALLISLANDS",
                "MARYLAND",
                "MASSACHUSETTS",
                "MICHIGAN",
                "MINNESOTA",
                "MISSISSIPPI",
                "MISSOURI",
                "MONTANA",
                "NEBRASKA",
                "NEVADA",
                "NEWHAMPSHIRE",
                "NEWJERSEY",
                "NEWMEXICO",
                "NEWYORK",
                "NORTHCAROLINA",
                "NORTHDAKOTA",
                "NORTHERNMARIANAISLANDS",
                "OHIO",
                "OKLAHOMA",
                "OREGON",
                "PALAU",
                "PENNSYLVANIA",
                "PUERTORICO",
                "RHODEISLAND",
                "SOUTHCAROLINA",
                "SOUTHDAKOTA",
                "TENNESSEE",
                "TEXAS",
                "UTAH",
                "VERMONT",
                "VIRGINISLANDS",
                "VIRGINIA",
                "WASHINGTON",
                "WESTVIRGINIA",
                "WISCONSIN",
                "WYOMING"
              ],
              fieldClass: "state",
              hidden: true
            },
            country: {
              type: "country",
              fieldClass: "country"
            },
            latitude: {
              fieldClass: "lat"
            },
            longitude: {
              fieldClass: "lng"
            }
          }
        },
        view: this.view,
        connector: this.connector
      };
    }
  },
  methods: {},
  created() {},
  components: {},
  builder: {
    props() {
      return {
        schema: {
          type: "object",
          properties: {}
        },
        options: {}
      };
    },
    fromBuilder(field) {
      return {
        schema: {
          title: field.label,
          type: "object"
        },
        options: {
          type: "address"
        }
      };
    },
    toBuilder(def) {
      return {
        label: def.schema.title,
        fieldType: "address"
      };
    }
  }
};

export default AddressField;


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
