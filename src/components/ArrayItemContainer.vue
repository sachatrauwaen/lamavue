<template>
  <div class="card" style="margin-bottom:10px;">
    <div class="card-header">
      <div style="float:left">
        <button
          class="btn btn-link btn-sm"
          aria-expanded="true"
          aria-controls="collapseOne"
          @click.stop.prevent="showBody"
        >{{headerLabel}}</button>
      </div>
      <div style="float:right">
        <slot name="toolbar"></slot>
      </div>
    </div>
    <div v-if="show" class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Lama from "../lama";

export default {
  name: "ArrayItemContainer",
  props: {
    value: {},
    data: {},
    schema: {},
    options: {},
    connector: {},
    errorCallback: {},
    messages: {},
    show:{}
  },
  data() {
    return {
      //showBody: false
    };
  },
  computed: {
    headerLabel() {
      if (!this.value) return "[empty item]";
      if (!Lama.isObject(this.value)) return this.value;
          let keys = Object.keys(this.schema.properties);
          let firstKey = keys[0];
          let l = this.value[firstKey];
        if (Lama.isObject(l)) {
            if (l[this.options.titleField]) {
                l = l[this.options.titleField];
                if (Lama.isObject(l) && l[this.connector.currentCulture]) {
                    l = l[this.connector.currentCulture];
                }
                else {
                    l = l[Object.keys(l)[0]]
                }
            } else {
                l = l[Object.keys(l)[0]];
            }
        }
      return l ? l : "[empty item]";
    }
  },
  methods: {
    showBody() {
      //this.showBody = !this.showBody;
      this.$emit("show-body");      
    }
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
