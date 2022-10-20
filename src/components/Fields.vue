<template>
    <div class="form-row">
        <div v-for="(value, key) in visibleFields" :key="key" class="col-12 col-md-12">
            <form-field ref="field" v-model="model[key]" v-bind="itemProps(key)" @input="propChange(key, $event)"></form-field>
        </div>
    </div>
</template>

<script>
    import Lama from "../lama";
    import FormField from "./Field.vue";

    export default {
        name: "Fields",
        props: {
            value: {},
            data: {},
            schema: {},
            options: {},
            view: {},
            connector: {}
        },
        computed: {
            fields() {
                let fields = {};
                for (let key in this.schema.properties) {
                    var data = this.value && this.value[key] ? this.value[key] : undefined;
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
                    /*
                    if (schema.type =="array"){
                      schema = schema.items;
                      options = options.items ? options.items: {};
                      view = view.items ? view.items: {};
                    }
                    */
                    fields[key] = Lama.createFieldInstance(
                        "",
                        data,
                        options,
                        schema,
                        view,
                        this.connector
                        //this.errorCallback
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
                    return this.value || {};
                },
                set(val) {
                    this.$emit("input", val);
                }
            }
            // columns(){
            //   return this.options.columns || 1;
            // }
        },
        methods: {
            propChange(key, value) {
                let obj = this.model;
                this.$set(obj, key, value);
                this.$emit("input", obj);
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
                        for (var i = 0; i < val.length; i++) {
                            valok = valok || this.model[prop] == true || this.model[prop] == val[i];
                        }
                        ok = ok && valok;
                        //ok = ok && this.model[prop] == val;
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
        //components: { FormField },
        beforeCreate: function () {
            this.$options.components.FormField = FormField
        },
        //mounted() {
        //    for (let key in this.schema.properties) {
        //        //var data = this.value && this.value[key] ? this.value[key] : undefined;
        //        var schema =
        //            this.schema && this.schema.properties && this.schema.properties[key]
        //                ? this.schema.properties[key]
        //                : {};

        //        if (!Object.prototype.hasOwnProperty.call(this.model, key) && schema.default) {
        //            this.model[key] = schema.default;
        //        }
                
        //    }
        //}
       
    };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>