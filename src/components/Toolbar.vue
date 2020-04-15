<template>
  <div class="btn-group btn-group-sm" role="group" aria-label="Toolbar">
    <button
      type="button"
      v-if="index >=0"
      :disabled="index ==0"
      class="btn btn-secondary"
      @click="up"
    >Up</button>
    <button
      type="button"
      v-if="index >=0"
      :disabled="index+1 == model.length"
      class="btn btn-secondary"
      @click="down"
    >Down</button>
    <button type="button" class="btn btn-secondary" @click="add">+</button>
    <button type="button" v-if="index >=0" class="btn btn-secondary" @click="remove">-</button>
  </div>
</template>

<script>
export default {
  name: "Toolbar",
  props: {
    data: {},
    schema: {},
    options: {},
    messages: {},
    connector: {},
    value: {
      type: Array
    },
    index: {}
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
  methods: {
    array_move(arr, old_index, new_index) {
      if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
          arr.push(undefined);
        }
      }
      arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
      return arr; // for testing
    },
    up() {
      this.array_move(this.model, this.index, this.index - 1);
      this.$emit("input", this.model);
    },
    down() {
      this.array_move(this.model, this.index, this.index + 1);
      this.$emit("input", this.model);
    },
    add() {
      var schema = this.schema;
      // eslint-disable-next-line no-undef
      var itemData = Lama.createEmptyDataInstance(schema);
      if (this.index < 0) {
        this.model.push(itemData);
      } else {
        this.model.splice(this.index+1, 0, itemData);
      }
      this.$emit("show-body");
      this.$emit("input", this.model);
    },
    remove() {
      this.model.splice(this.index, 1);
      this.$emit("input", this.model);
    }
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
