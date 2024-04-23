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
          ref="formField"
          v-model="model[index]"
          v-bind="itemProps(item)"
          @input="itemChange(index, $event)"
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
import Toolbar from "./Toolbar.vue";
import ArrayItemContainer from "./ArrayItemContainer.vue";
import Lama from "../lama";
import FormField from "./Field.vue";

export default {
  name: "List",
  props: {
    value: {},
    schema: {},
    options: {},
    view: {},
    connector: {},
  },
  data() {
    return {
      showIndex: -1,
    };
  },
  computed: {
    model: {
      get() {
        return this.value || [];
      },
      set(val) {
        this.$emit("input", val);
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
        this.connector,
        this.errorCallback
      );
      return field;
    },
  },
  methods: {
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
      // eslint-disable-next-line no-undef
      let field = Lama.createFieldInstance(
        "",
        data,
        options,
        schema,
        view,
        this.connector,
        this.errorCallback
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
      this.$set(this.model, index, value);
      this.$emit("input", this.model);
    },
    showBody(index) {
      this.showIndex = index == this.showIndex ? -1 : index;
      },
      added(index) {
          this.$nextTick(() => {
            if (this.$refs.formField && this.$refs.formField.length > 0) {
                  this.$refs.formField[0].init(index);
              }
          })
      },
    init() {
      if (this.$refs.formField) {
        for (var i = 0; i < this.$refs.formField.length; i++) {
          this.$refs.formField[i].init();
        }
      }
    },
  },
  components: { Toolbar, ArrayItemContainer },
  beforeCreate: function () {
    this.$options.components.FormField = FormField;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
