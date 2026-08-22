<template>
  <div class="form-group mb-3">
    <label class="form-label" v-if="showLabel && label">{{label}}</label>
    <span v-if="badge" class="badge badge-dark" style="float:right">{{badge}}</span>
    <div ref="provider">
        <slot v-bind="flags"></slot>
        <small v-if="options.helper" class="form-text text-muted">{{options.helper}}</small>
        <div v-if="flags.errors.length" class="invalid-feedback" style="display:block">
            <span v-for="(error, index) in flags.errors" :key="index">{{error}}</span>
        </div>
    </div>
  </div>
</template>

<script>
import { z } from 'zod';

export default {
  name: "Control",
  inject: {
    _formValidation: { default: null }
  },
  props: {
    schema: {},
    options: {},
    messages: {},
    connector: {},
    view: {},
    showLabel: { type: Boolean, default: true }
  },
  data() {
    return {
      touched: false,
      validated: false,
      errors: []
    };
  },
  computed: {
    label() {
      return (this.options.label || this.schema.title) + (this.schema.required ? ' *' : '');
    },
    badge() {
      return this.options.multilanguage ? this.connector.currentCulture.substring(0, 2).toUpperCase() : "";
    },
    fieldName() {
      return this.options.label || this.schema.title || 'Field';
    },
    zodSchema() {
      if (!this.schema.required) {
        return null;
      }
      var name = this.fieldName;
      var schemaType = this.schema.type;
      if (schemaType === 'number' || schemaType === 'integer') {
        return z.number({ required_error: name + ' is required', invalid_type_error: name + ' must be a number' });
      }
      if (schemaType === 'boolean') {
        return z.any();
      }
      if (schemaType === 'array') {
        return z.array(z.any()).min(1, { message: name + ' is required' });
      }
      return z.string({ required_error: name + ' is required' }).min(1, { message: name + ' is required' });
    },
    flags() {
      var invalid = this.errors.length > 0;
      return {
        errors: this.errors,
        invalid: invalid,
        valid: !invalid,
        touched: this.touched
      };
    }
  },
  mounted() {
    if (this._formValidation) {
      this._formValidation.register(this);
    }
    if (this.$refs.provider) {
      this.$refs.provider.addEventListener('focusout', this._onFocusOut, true);
      // Bubble phase only: a capture listener here would schedule validation before the
      // field's own @input handler, and the resulting re-render would overwrite the
      // character the user just typed before the handler could read it.
      this.$refs.provider.addEventListener('input', this._onInput, false);
      this.$refs.provider.addEventListener('change', this._onInput, false);
    }
    if (this.$parent && 'model' in this.$parent) {
      this._unwatchParent = this.$parent.$watch('model', this._onValueChange);
    }
  },
  beforeUnmount() {
    if (this._formValidation) {
      this._formValidation.unregister(this);
    }
    if (this.$refs.provider) {
      this.$refs.provider.removeEventListener('focusout', this._onFocusOut, true);
      this.$refs.provider.removeEventListener('input', this._onInput, false);
      this.$refs.provider.removeEventListener('change', this._onInput, false);
    }
    if (this._unwatchParent) {
      this._unwatchParent();
    }
  },
  methods: {
    _onFocusOut() {
      if (!this.touched) {
        this.touched = true;
      }
      this.runValidation();
    },
    _onInput() {
      if (this.touched || this.validated) {
        this.$nextTick(this.runValidation);
      }
    },
    _onValueChange() {
      if (this.touched || this.validated) {
        this.runValidation();
      }
    },
    _getFieldValue() {
      if (this.$parent && 'model' in this.$parent) {
        return this.$parent.model;
      }
      return undefined;
    },
    _setErrors(errors) {
      var changed = errors.length !== this.errors.length;
      for (var i = 0; !changed && i < errors.length; i++) {
        changed = errors[i] !== this.errors[i];
      }
      if (changed) {
        this.errors = errors;
      }
    },
    runValidation() {
      if (!this.zodSchema) {
        this._setErrors([]);
        return true;
      }
      var value = this._getFieldValue();
      var result = this.zodSchema.safeParse(value);
      if (result.success) {
        this._setErrors([]);
        return true;
      }
      this._setErrors(result.error.issues.map(function(issue) {
        return issue.message;
      }));
      return false;
    },
    validate() {
      this.validated = true;
      return this.runValidation();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
