<template>
  <div class="form-group">
    <label v-if="showLabel && label" for>{{label}}</label>
    <span v-if="badge" class="badge badge-dark" style="float:right">{{badge}}</span>
    <ValidationProvider
      :name="options.label"
      :rules="{ required: schema.required }"
      v-slot="flags"
      slim
    >
      <slot v-bind="flags"></slot>
      <div v-if="flags.errors" class="invalid-feedback">
        <span v-for="(error, index) in flags.errors" :key="index">{{error}}</span>
      </div>
    </ValidationProvider>
  </div>
</template>

<script>
export default {
  name: "Control",
  props: {
    schema: {},
    options: {},
    messages: {},
    connector: {},
    errors: {},
    showLabel:{type: Boolean,default: true}
  },
  computed: {
    label() {
      return this.options.label || this.schema.title;
    },
    badge() {
      return this.options.multilanguage ? this.connector.currentCulture.substring(0, 2).toUpperCase() : "";
    }
  },
  methods: {},
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
