<template>
  <div class="toolbar btn-group btn-group-sm" role="group" aria-label="Toolbar">
    <button
      type="button"
      v-if="index >=0"
      :disabled="index ==0"
      class="btn btn-secondary"
      title="Up"
      @click="up"
    >
      <font-awesome-icon icon="arrow-up" fixed-width />
    </button>
    <button
      type="button"
      v-if="index >=0"
      :disabled="index+1 == model.length"
      class="btn btn-secondary"
      title="Down"
      @click="down"
    >
      <font-awesome-icon icon="arrow-down" fixed-width />
    </button>
    <button type="button" class="btn btn-secondary" title="Add" @click="add">
      <font-awesome-icon icon="plus" fixed-width />
    </button>
    <button type="button" v-if="index >=0" class="btn btn-secondary" title="Remove" @click="remove">
      <font-awesome-icon icon="minus" fixed-width />
    </button>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "Toolbar",
  emits: ['update:modelValue', 'show-body', 'added'],
  components: { FontAwesomeIcon },
  props: {
    schema: {},
    options: {},
    messages: {},
    connector: {},
    modelValue: {
      type: Array
    },
    index: {}
  },
  computed: {
    model: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit("update:modelValue", val);
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
      this.$emit("update:modelValue", this.model);
    },
    down() {
      this.array_move(this.model, this.index, this.index + 1);
      this.$emit("update:modelValue", this.model);
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
        this.$emit("update:modelValue", this.model);
        this.$emit("added");
    },
    remove() {
      this.model.splice(this.index, 1);
      this.$emit("update:modelValue", this.model);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toolbar.btn-group .btn {
  padding: 0.15rem 0.35rem;
  font-size: 0.7rem;
}
.toolbar .btn svg {
  width: 0.7rem;
  height: 0.7rem;
}
</style>
