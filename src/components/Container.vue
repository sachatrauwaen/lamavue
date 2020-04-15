<template>
  <div>
    <div v-if="schema.title" class="card" style="margin-bottom:10px;">
      <div v-if="showBody || !showHeader" class="card-body">
        <h5>{{schema.title}}</h5>
        <slot></slot>
      </div>
    </div>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Container",
  props: {
    value: {},
    data: {},
    schema: {},
    options: {},
    view:{},
    connector: {}
  },
  data() {
    return {
      showBody: false
    };
  },
  computed: {
    label() {
      return this.schema.title;
    },
    headerLabel() {
      if (!this.value) return "";
      let keys = Object.keys(this.value);
      let l = this.value[keys[0]];
      return l ? l : "[empty item]";
    },
    showHeader() {
      return false; //!!this.$slots.header;
    }
  },
  methods: {},
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
