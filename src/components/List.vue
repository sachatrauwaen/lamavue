<template>
  <div>
    <div v-for="(item, index) in model" :key="index">
      <array-item-container
        v-model="model[index]"
        v-bind="containerProps(index)"
        @show-body="showBody(index)"
      >
        <template v-slot:toolbar>
          <toolbar
            v-model="model"
            v-bind="toolbarProps(index)"
            @show-body="showBody(index + 1)"
            @added="added(index + 1)"
          ></toolbar>
        </template>
        <form-field
          :ref="el => setFormFieldRef(el, index)"
          :modelValue="model[index]"
          v-bind="itemProps(item)"
          @update:modelValue="itemChange(index, $event)"
        ></form-field>
      </array-item-container>
    </div>
    <toolbar
      v-if="!model.length"
      v-model="model"
      v-bind="toolbarProps(-1)"
      @show-body="showBody(0)"
    ></toolbar>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import Toolbar from "./Toolbar.vue";
import ArrayItemContainer from "./ArrayItemContainer.vue";
import Lama from "../lama";

export default {
  name: "List",
  props: {
    modelValue: {},
    schema: {},
    options: {},
    view: {},
    connector: {},
  },
  emits: ['update:modelValue'],
  data() {
    return {
      showIndex: -1,
      formFieldRefs: [],
    };
  },
  computed: {
    model: {
      get() {
        return this.modelValue || [];
      },
      set(val) {
        this.$emit("update:modelValue", val);
      },
    },
    field() {
      var schema = this.schema && this.schema.items ? this.schema.items : {};
      var options =
        this.options && this.options.items ? this.options.items : {};
      options.label = options.label || schema.title || "";
      var view = this.view && this.view.items ? this.view.items : {};
      let field = Lama.createFieldInstance(
        "",
        null,
        options,
        schema,
        view,
        this.connector
      );
      return field;
    },
  },
  beforeUpdate() {
    this.formFieldRefs = [];
  },
  methods: {
    setFormFieldRef(el, index) {
      if (el) {
        this.formFieldRefs[index] = el;
      }
    },
    toolbarProps(index) {
      return {
        data: this.field.props.data,
        schema: this.field.props.schema,
        options: this.field.props.options,
        view: this.field.props.view,
        index: index,
      };
    },
    itemProps(data) {
      var schema = this.schema && this.schema.items ? this.schema.items : {};
      var options =
        this.options && this.options.items ? this.options.items : {};
      options.label = options.label || schema.title || "";
      var view = this.view ? this.view : {};
      let field = Lama.createFieldInstance(
        "",
        data,
        options,
        schema,
        view,
        this.connector
      );
      return field.props;
    },
    containerProps(index) {
      return {
        data: this.field.props.data,
        schema: this.field.props.schema,
        options: this.field.props.options,
        view: this.field.props.view,
        connector: this.connector,
        index: index,
        show: index == this.showIndex,
      };
    },
    itemChange(index, value) {
      var arr = this.model.slice();
      arr[index] = value;
      this.$emit("update:modelValue", arr);
    },
    showBody(index) {
      this.showIndex = index == this.showIndex ? -1 : index;
    },
    added(index) {
      this.$nextTick(() => {
        if (this.formFieldRefs && this.formFieldRefs.length > 0) {
          this.formFieldRefs[0].init(index);
        }
      });
    },
    init() {
      if (this.formFieldRefs) {
        for (var i = 0; i < this.formFieldRefs.length; i++) {
          if (this.formFieldRefs[i]) this.formFieldRefs[i].init();
        }
      }
    },
  },
  components: {
    Toolbar,
    ArrayItemContainer,
    FormField: defineAsyncComponent(() => import("./Field.vue"))
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
