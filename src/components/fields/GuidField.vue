<template>
    <control v-bind="props" v-slot="flags">
        <input type="text"
               class="form-control"
               :aria-describedby="options.label"
               v-model="model"
               :class="{ 'is-invalid': flags.invalid && flags.touched }"
               :placeholder="options.placeholder" />
    </control>
</template>

<script>
    import Lama from "../../lama";
    import ControlField from "./ControlField.vue";
    import Control from "./Control.vue";

    let GuidField = {
        name: "GuidField",
        extends: ControlField,
        props: {
            value: {
                type: String,
            },
        },
        computed: {},
        methods: {
            createGuid() {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                });
            },
        },
        components: { Control },
        created() {
            if (Lama.isEmpty(this.model)) {
                this.model = this.createGuid()
            }
        },
        builder: {
            props() {
                return {
                    schema: {
                        type: "object",
                        properties: {
                            placeholder: {
                                title: "Placeholder",
                                type: "string",
                            },
                        },
                    },
                    options: {
                        fields: {

                        },
                    },
                };
            },
            fromBuilder(field) {
                return {
                    schema: {
                        type: "string",
                    },
                    options: {
                        type: "guid",
                        placeholder: field.placeholder,
                    },
                };
            },
            toBuilder(def) {
                return {
                    fieldType: "guid",
                    placeholder: def.options.placeholder,
                };
            },
        },
    };

    export default GuidField;
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
