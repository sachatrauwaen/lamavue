<template>
  <div class="form-group">
    <label v-if="showLabel && label" >{{label}}</label>
    <span v-if="badge" class="badge badge-dark" style="float:right">{{badge}}</span>
    <ValidationProvider :name="options.label"
                        :rules="{ required: schema.required }"
                        v-slot="flags" tag="div">
        <slot v-bind="flags"></slot>
        <small v-if="options.helper" class="form-text text-muted">{{options.helper}}</small>        
        <div v-if="flags.errors.length" class="invalid-feedback" style="display:block">
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
    //errors: {},
    showLabel:{type: Boolean,default: true}
  },
  computed: {
    label() {
          return (this.options.label || this.schema.title) + (this.schema.required ?' *':'');
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
