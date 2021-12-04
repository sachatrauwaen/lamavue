<template>
    <div>
        <component ref="comp" :is="fieldComponent" v-model="model" v-bind="props"></component>
    </div>
</template>

<script>
    import Lama from "../lama";

    export default {
        name: "FormField",
        props: {
            value: {},
            schema: {},
            options: {},
            view: {},
            connector: {}
        },
        computed: {
            field() {
                let field = Lama.createFieldInstance(
                    "",
                    this.data,
                    this.options,
                    this.schema,
                    this.view,
                    this.connector
                    //this.errorCallback
                );
                return field;
            },
            /* model: {
              get() {
                return this.value;
              },
              set(val) {
                this.$emit("input", val);
              }
            }, */
            model: {
                get() {
                    if (this.options.multilanguage) {
                        return Lama.isObject(this.value)
                            ? this.value[this.connector.currentCulture]
                            : this.value;
                    } else {
                        return this.value;
                    }
                },
                set(val) {
                    if (this.options.multilanguage) {
                        let valueObject = {};
                        valueObject[this.connector.currentCulture] = val;
                        if (Lama.isObject(this.value)) {
                            valueObject = Lama.mergeObject(this.value, valueObject);
                        }
                        this.$emit("input", valueObject);
                    } else {
                        this.$emit("input", val);
                    }
                }
            },
            fieldComponent() {
                return this.field.component;
            },
            props() {
                return this.field.props;
            }
        },
        methods: {
            init() {
                this.$refs.comp.init();
                
            }
        },
        components: {}
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>