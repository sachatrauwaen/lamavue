<template>
    <div class="form-row row">
        <div v-for="(value, key) in fields" :key="key" :class="[colClass(key), 'lama-type-'+itemProps(key).options.type, 'lama-field-'+key]">
            <form-field v-show="visible(key)" ref="field" :modelValue="model[key]" v-bind="itemProps(key)" @update:modelValue="propChange(key, $event)"></form-field>
        </div>
    </div>
</template>

<script>
    import { defineAsyncComponent } from "vue";
    import Lama from "../lama";

    export default {
        name: "Fields",
        props: {
            modelValue: {},
            data: {},
            schema: {},
            options: {},
            view: {},
            connector: {}
        },
        emits: ['update:modelValue'],
        computed: {
            fields() {
                let fields = {};
                for (let key in this.schema.properties) {
                    var data = this.modelValue && this.modelValue[key] ? this.modelValue[key] : undefined;
                    var schema =
                        this.schema && this.schema.properties && this.schema.properties[key]
                            ? this.schema.properties[key]
                            : {};
                    var options =
                        this.options && this.options.fields && this.options.fields[key]
                            ? this.options.fields[key]
                            : {};
                    if (!options.label) {
                        options.label = schema.title || "";
                    }
                    var view =
                        this.view && this.view.fields && this.view.fields[key]
                            ? this.view.fields[key]
                            : this.view;
                    fields[key] = Lama.createFieldInstance(
                        "",
                        data,
                        options,
                        schema,
                        view,
                        this.connector
                    );
                }
                return fields;
            },
            visibleFields() {
                let fields = {};
                for (let key in this.fields) {
                    if (this.visible(key)) {
                        fields[key] = this.fields[key];
                    }
                }
                return fields;
            },
            model: {
                get() {
                    return this.modelValue || {};
                },
                set(val) {
                    this.$emit("update:modelValue", val);
                }
            }
        },
        methods: {
            colClass(key) {
                let w = this.itemProps(key).options.width;
                if (w === '1/2') return 'col-12 col-md-6';
                if (w === '1/3') return 'col-12 col-md-4';
                return 'col-12';
            },
            propChange(key, value) {
                let obj = this.model;
                obj[key] = value;
                this.$emit("update:modelValue", obj);
            },
            itemProps(key) {
                return this.fields[key].props;
            },
            visible(key) {
                var opt = this.itemProps(key).options;
                if (opt.hidden) return false;
                if (opt.dependencies) {
                    let ok = true;
                    for (const prop in opt.dependencies) {
                        const val = opt.dependencies[prop];
                        let valok = false;
                        if (val) {
                            if (Lama.isArray(val)) {
                                for (var idx = 0; idx < val.length; idx++) {
                                    if (val[idx] === '__empty__') {
                                        valok = valok || Lama.isValEmpty(this.model[prop]);
                                    } else if (val[idx] === '__notempty__') {
                                        valok = valok || !Lama.isValEmpty(this.model[prop]);
                                    } else {
                                        valok = valok || this.model[prop] == val[idx];
                                    }
                                }
                            } else if (typeof val === 'string' && val.indexOf(',') >= 0) {
                                let vals = val.split(',');
                                for (var i = 0; i < vals.length; i++) {
                                    let v = vals[i].trim();
                                    if (v === '__empty__') valok = valok || Lama.isValEmpty(this.model[prop]);
                                    else if (v === '__notempty__') valok = valok || !Lama.isValEmpty(this.model[prop]);
                                    else if (v === 'true') valok = valok || this.model[prop] === true;
                                    else if (v === 'false') valok = valok || this.model[prop] === false;
                                    else if (Lama.isArray(this.model[prop])) valok = valok || this.model[prop].indexOf(v) >= 0;
                                    else valok = valok || this.model[prop] == v;
                                    
                                }
                            } else {
                                if (val === '__empty__') valok = Lama.isValEmpty(this.model[prop]);
                                else if (val === '__notempty__') valok = !Lama.isValEmpty(this.model[prop]);
                                else if (val === 'true') valok = this.model[prop] === true;
                                else if (val === 'false') valok = this.model[prop] === false;
                                else if (Lama.isArray(this.model[prop])) valok = valok || this.model[prop].indexOf(val) >= 0;
                                else valok = this.model[prop] == val;
                            }
                        } else {
                            valok = valok || this.model[prop] == true;
                        }
                        ok = ok && valok;
                    }
                    return ok;
                }

                if (this.schema.dependencies && this.schema.dependencies[key]) {
                    let ok = true;
                    for (let i = 0; i < this.schema.dependencies[key].length; i++) {
                        const prop = this.schema.dependencies[key][i];
                        ok = ok && this.model[prop];
                    }
                    return ok;
                }
                return true;
            },
            init() {
                if (this.$refs.field){
                for (var i = 0; i < this.$refs.field.length; i++) {
                    this.$refs.field[i].init();
                }
                }
            }
        },
        components: {
            FormField: defineAsyncComponent(() => import("./Field.vue"))
        },
    };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
