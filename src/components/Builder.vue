<template>
  <div class="builder-root">
    <!-- Tab Bar -->
    <ul class="nav nav-tabs mb-0">
      <li class="nav-item">
        <a class="nav-link" :class="{ active: activeTab === 'design' }" href="#" @click.prevent="activeTab = 'design'">Design</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" :class="{ active: activeTab === 'preview' }" href="#" @click.prevent="switchToPreview">Preview</a>
      </li>
      <li class="nav-item ml-auto">
        <select class="form-control form-control-sm mt-1" v-model="schemaType" style="width:120px">
          <option value="object">Object</option>
          <option value="array">Array</option>
        </select>
      </li>
    </ul>

    <!-- Design Tab -->
    <div v-show="activeTab === 'design'" class="builder-design">
      <!-- Left: Toolbox -->
      <div class="builder-toolbox">
        <div class="builder-panel-header">Toolbox</div>
        <VueDraggable
          v-model="toolboxItems"
          :group="{ name: 'fields', pull: 'clone', put: false }"
          :sort="false"
          :clone="cloneField"
          class="builder-toolbox-list"
        >
          <div v-for="item in toolboxItems" :key="item.type" class="builder-toolbox-item">
            <span class="builder-toolbox-icon">+</span>
            {{ item.label }}
          </div>
        </VueDraggable>
      </div>

      <!-- Center: Canvas -->
      <div class="builder-canvas">
        <div class="builder-panel-header">Form Fields</div>
        <VueDraggable
          v-model="internalFields"
          group="fields"
          class="builder-canvas-list"
          @end="onDragEnd"
        >
          <div
            v-for="(field, index) in internalFields"
            :key="field._uid"
            class="builder-canvas-card"
            :class="{ 'builder-canvas-card--selected': selectedIndex === index }"
            @click="selectedIndex = index"
          >
            <div class="builder-canvas-card-body">
              <span class="builder-canvas-card-label">{{ field.label || field.fieldName || 'Untitled' }}</span>
              <span class="badge badge-secondary ml-2">{{ field.fieldType || '?' }}</span>
            </div>
            <button class="btn btn-sm btn-outline-danger builder-canvas-card-delete" @click.stop="removeField(index)" title="Remove">&times;</button>
          </div>
        </VueDraggable>
        <div v-if="!internalFields.length" class="builder-canvas-empty">
          Drag fields from the toolbox to start building your form
        </div>
      </div>

      <!-- Right: Properties -->
      <div class="builder-properties">
        <div class="builder-panel-header">Properties</div>
        <div v-if="selectedField" class="builder-properties-content">
          <div class="form-group">
            <label>Field Name</label>
            <input class="form-control form-control-sm" v-model="selectedField.fieldName" @input="emitUpdate" />
          </div>
          <div class="form-group">
            <label>Label</label>
            <input class="form-control form-control-sm" v-model="selectedField.label" @input="emitUpdate" />
          </div>
          <div class="form-group">
            <label>Field Type</label>
            <select class="form-control form-control-sm" v-model="selectedField.fieldType" @change="onFieldTypeChange">
              <option v-for="t in availableTypes" :key="t" :value="t">{{ t }}</option>
            </select>
          </div>
          <hr />
          <fields
            v-if="selectedField.fieldType && selectedBuilderProps"
            v-model="internalFields[selectedIndex]"
            v-bind="selectedBuilderProps"
          ></fields>
        </div>
        <div v-else class="builder-properties-empty">
          Select a field to edit its properties
        </div>
      </div>
    </div>

    <!-- Preview Tab -->
    <div v-if="activeTab === 'preview'" class="builder-preview">
      <lama-form ref="demoForm" v-bind="demoProps" v-model="demo" :debug="debug"></lama-form>
      <div v-if="debug">
        <hr />
        schema = {{ modelValue.schema }}
        <hr />
        options = {{ modelValue.options }}
      </div>
    </div>
  </div>
</template>

<script>
import { VueDraggable } from 'vue-draggable-plus';
import LamaForm from "./Form.vue";
import Fields from "./Fields.vue";
import Lama from "../lama";
import builderUtils from "../builderUtils";

import BuilderField from "./BuilderField.vue";
import LazyTextField from "./fields/LazyTextField.vue";

Lama.registerFieldComponent("builder", BuilderField);
Lama.registerFieldComponent("lazytext", LazyTextField);

let uidCounter = 0;

export default {
  name: "Builder",
  emits: ['update:modelValue'],
  props: {
    modelValue: {},
    connector: {},
    debug: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      activeTab: 'design',
      selectedIndex: -1,
      demo: {},
      internalFields: [],
      syncing: false,
      availableTypes: [],
      toolboxItems: [],
    };
  },
  mounted() {
    this.refreshToolbox();
  },
  computed: {
    selectedField() {
      if (this.selectedIndex >= 0 && this.selectedIndex < this.internalFields.length) {
        return this.internalFields[this.selectedIndex];
      }
      return null;
    },
    selectedBuilderProps() {
      if (!this.selectedField || !this.selectedField.fieldType) return null;
      let builderComponent = Lama.getFieldComponent(this.selectedField.fieldType);
      if (!builderComponent) return null;
      let props = {
        schema: { type: "object", properties: {} },
        options: { fields: {} },
      };
      if (builderComponent.builder && builderComponent.builder.props) {
        let extendProps = builderComponent.builder.props();
        if (extendProps.schema && extendProps.schema.properties) {
          props.schema.properties = Object.assign(extendProps.schema.properties, props.schema.properties);
        }
        if (extendProps.options && extendProps.options.fields) {
          props.options.fields = Object.assign(extendProps.options.fields, props.options.fields);
        }
      }
      while (builderComponent.extends) {
        builderComponent = builderComponent.extends;
        if (builderComponent.builder && builderComponent.builder.props) {
          let extendProps = builderComponent.builder.props();
          if (extendProps) {
            if (extendProps.schema && extendProps.schema.properties) {
              props.schema.properties = Object.assign(extendProps.schema.properties, props.schema.properties);
            }
            if (extendProps.options && extendProps.options.fields) {
              props.options.fields = Object.assign(extendProps.options.fields, props.options.fields);
            }
          }
        }
      }
      return props;
    },
    schemaType: {
      get() {
        if (this.modelValue.schema && this.modelValue.schema.type)
          return this.modelValue.schema.type;
        else return "object";
      },
      set(val) {
        let props = this.schemaProperties;
        let fields = this.optionsFields;
        this.demo = val == "array" ? [] : {};
        this.$emit("update:modelValue", {
          schema:
            val == "array"
              ? { type: "array", items: { type: "object", properties: props } }
              : { type: "object", properties: props },
          options:
            val == "array" ? { items: { fields: fields } } : { fields: fields },
        });
      },
    },
    demoProps() {
      let demoSchema = JSON.parse(JSON.stringify(this.modelValue.schema || {}));
      demoSchema.type = demoSchema.type || "object";
      demoSchema.properties = demoSchema.properties || {};
      return {
        schema: demoSchema,
        options: JSON.parse(JSON.stringify(this.modelValue.options || {})),
        connector: this.connector,
      };
    },
    schemaProperties() {
      if (this.modelValue.schema && this.modelValue.schema.type)
        return this.modelValue.schema.type == "array"
          ? this.modelValue.schema.items.properties
          : this.modelValue.schema.properties;
      else return {};
    },
    optionsFields() {
      if (this.modelValue.schema && this.modelValue.schema.type && this.modelValue.options)
        return this.modelValue.schema.type == "array"
          ? this.modelValue.options.items.fields
          : this.modelValue.options.fields;
      else return {};
    },
  },
  watch: {
    modelValue: {
      handler() {
        if (this.syncing) return;
        this.syncFromModel();
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    refreshToolbox() {
      let fieldsFilter = (Lama.options && Lama.options.fields) || [];
      let types = [];
      const reg = Lama.fieldClassRegistry;
      for (const key in reg) {
        if (reg[key].builder && (fieldsFilter.length === 0 || fieldsFilter.includes(key))) {
          types.push(key);
        }
      }
      this.availableTypes = types;
      this.toolboxItems = types.map(t => ({ type: t, label: t }));
    },
    syncFromModel() {
      let fields = [];
      if (this.schemaProperties) {
        for (const key in this.schemaProperties) {
          const sch = this.schemaProperties[key];
          const opt = this.optionsFields[key] || {};
          let type = opt.type;
          if (!opt.type) {
            type = Lama.guessOptionsType(sch);
          }
          let field = {
            fieldName: key,
            label: sch.title,
            fieldType: type,
            _uid: ++uidCounter,
          };
          if (type) {
            let builderComponent = Lama.getFieldComponent(type);
            if (builderComponent && builderComponent.builder && builderComponent.builder.toBuilder) {
              let converted = builderComponent.builder.toBuilder({ schema: sch, options: opt });
              while (builderComponent.extends) {
                builderComponent = builderComponent.extends;
                if (builderComponent.builder && builderComponent.builder.toBuilder) {
                  let extendField = builderComponent.builder.toBuilder({ schema: sch, options: opt });
                  converted = Object.assign(extendField, converted);
                }
              }
              converted.fieldName = key;
              converted._uid = field._uid;
              field = converted;
            }
          }
          fields.push(field);
        }
      }
      this.internalFields = fields;
      if (this.selectedIndex >= this.internalFields.length) {
        this.selectedIndex = this.internalFields.length - 1;
      }
    },
    emitUpdate() {
      this.syncing = true;
      let props = {};
      let fields = {};
      for (let index = 0; index < this.internalFields.length; index++) {
        const field = this.internalFields[index];
        if (Lama.isEmpty(field.fieldName)) field.fieldName = 'field' + index;
        if (field.fieldType) {
          let builderComponent = Lama.getFieldComponent(field.fieldType);
          if (builderComponent && builderComponent.builder && builderComponent.builder.fromBuilder) {
            let builder = builderComponent.builder.fromBuilder(field);
            while (builderComponent.extends) {
              builderComponent = builderComponent.extends;
              if (builderComponent.builder && builderComponent.builder.fromBuilder) {
                let extendBuilder = builderComponent.builder.fromBuilder(field);
                builder.schema = Object.assign(extendBuilder.schema, builder.schema);
                builder.options = Object.assign(extendBuilder.options, builder.options);
              }
            }
            props[field.fieldName] = builder.schema;
            fields[field.fieldName] = builder.options;
          } else {
            props[field.fieldName] = { title: field.label, type: field.fieldType };
            fields[field.fieldName] = {};
          }
        } else {
          props[field.fieldName] = { title: field.label };
          fields[field.fieldName] = {};
        }
      }
      this.$emit("update:modelValue", {
        schema:
          this.schemaType == "array"
            ? { type: "array", items: { type: "object", properties: props } }
            : { type: "object", properties: props },
        options:
          this.schemaType == "array"
            ? { items: { fields: fields } }
            : { fields: fields },
      });
      this.$nextTick(() => { this.syncing = false; });
    },
    cloneField(original) {
      let count = 1;
      let name = original.type + count;
      let existing = this.internalFields.map(f => f.fieldName);
      while (existing.indexOf(name) >= 0) {
        count++;
        name = original.type + count;
      }
      return {
        fieldType: original.type,
        fieldName: name,
        label: original.type,
        _uid: ++uidCounter,
      };
    },
    onDragEnd() {
      this.emitUpdate();
    },
    removeField(index) {
      this.internalFields.splice(index, 1);
      if (this.selectedIndex === index) {
        this.selectedIndex = -1;
      } else if (this.selectedIndex > index) {
        this.selectedIndex--;
      }
      this.emitUpdate();
    },
    onFieldTypeChange() {
      this.emitUpdate();
    },
    switchToPreview() {
      this.activeTab = 'preview';
      this.$nextTick(() => {
        if (this.$refs.demoForm) this.$refs.demoForm.init();
      });
    },
  },
  components: { VueDraggable, LamaForm, Fields },
};
</script>

<style scoped>
.builder-root {
  border: 1px solid #dee2e6;
  border-radius: 4px;
  overflow: hidden;
}

.builder-design {
  display: flex;
  height: 600px;
  border-top: 1px solid #dee2e6;
}

.builder-panel-header {
  padding: 8px 12px;
  font-weight: 600;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #6c757d;
  background: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}

/* Toolbox */
.builder-toolbox {
  width: 200px;
  min-width: 200px;
  border-right: 1px solid #dee2e6;
  display: flex;
  flex-direction: column;
  background: #fff;
}

.builder-toolbox-list {
  flex: 1;
  overflow-y: auto;
  padding: 8px;
}

.builder-toolbox-item {
  padding: 8px 10px;
  margin-bottom: 4px;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  cursor: grab;
  font-size: 13px;
  transition: background 0.15s, box-shadow 0.15s;
}

.builder-toolbox-item:hover {
  background: #e9ecef;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.builder-toolbox-icon {
  display: inline-block;
  width: 18px;
  height: 18px;
  line-height: 16px;
  text-align: center;
  border: 1px solid #adb5bd;
  border-radius: 3px;
  margin-right: 6px;
  font-size: 14px;
  color: #6c757d;
}

/* Canvas */
.builder-canvas {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #f5f6f8;
  min-width: 0;
}

.builder-canvas-list {
  flex: 1;
  overflow-y: auto;
  padding: 12px;
  min-height: 100px;
}

.builder-canvas-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  margin-bottom: 6px;
  background: #fff;
  border: 2px solid #e9ecef;
  border-radius: 6px;
  cursor: pointer;
  transition: border-color 0.15s, box-shadow 0.15s;
}

.builder-canvas-card:hover {
  border-color: #adb5bd;
}

.builder-canvas-card--selected {
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0,123,255,0.15);
}

.builder-canvas-card-body {
  display: flex;
  align-items: center;
  min-width: 0;
}

.builder-canvas-card-label {
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.builder-canvas-card-delete {
  flex-shrink: 0;
  margin-left: 8px;
  font-size: 18px;
  line-height: 1;
  padding: 2px 6px;
}

.builder-canvas-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: #adb5bd;
  font-size: 14px;
  padding: 40px;
  text-align: center;
}

/* Properties */
.builder-properties {
  width: 320px;
  min-width: 320px;
  border-left: 1px solid #dee2e6;
  display: flex;
  flex-direction: column;
  background: #fff;
}

.builder-properties-content {
  flex: 1;
  overflow-y: auto;
  padding: 12px;
}

.builder-properties-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: #adb5bd;
  font-size: 14px;
  padding: 40px;
  text-align: center;
}

/* Preview */
.builder-preview {
  padding: 20px;
  border-top: 1px solid #dee2e6;
}

/* Drag ghost styling */
.sortable-ghost {
  opacity: 0.4;
  background: #e3f2fd;
}

.sortable-chosen {
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
</style>
