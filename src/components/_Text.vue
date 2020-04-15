<template>
  <ValidationProvider
    :name="options.label"
    :rules="{ required: schema.required }"
    v-slot="{ errors , invalid, touched}"
    slim
  >
    <input
      type="text"
      class="form-control"
      :aria-describedby="options.label"
      v-model="model"
      :class="{'is-invalid':invalid && touched}"
      :placeholder="options.placeholder"
    />
    <div v-if="touched" class="invalid-feedback">
      <span v-for="(error, index) in errors" :key="index">{{error}}</span>
    </div>
  </ValidationProvider>
</template>

<script>
let TextComponent = {
  name: "TextComponent",
  props: {
    value: {
      type: String
    },
    schema: {},
    options: {}
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  },
  methods: {},
  components: {},
  builder: {
    schema: {
      type: "object",
      properties: {
        required: {
          title: "Required",
          type: "boolean"
        },
        placeholder: {
          title: "Field Placeholder",
          description: "Field placeholder.",
          type: "string"
        }
      }
    },
    options: {},
    fromBuilder(field) {
      return {
        schema: {
          title: field.label,
          type: "string",
          required: field.required
        },
        options: {
          placeholder: field.placeholder
        }
      };
    },
    toBuilder(def) {
      return {
        label: def.schema.title,
        fieldType: "text",
        required: def.schema.required,
        placeholder: def.options.placeholder
      };
    }
  }
};

export default TextComponent;

// eslint-disable-next-line no-undef
Lama.registerFieldComponent("text", TextComponent);
// eslint-disable-next-line no-undef
Lama.registerDefaultSchemaFieldMapping("string", "text");
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
