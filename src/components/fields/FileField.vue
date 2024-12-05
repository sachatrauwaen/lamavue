<template>
    <control v-bind="props" v-slot="flags">
        <input ref="input"
               type="file"
               name="file"
               @change="setFile"
               class="form-control-file"
               style="margin-bottom:10px" />
        <input type="text"
               class="form-control normalFileUpload"
               :aria-describedby="options.label"
               v-model="model"
               :class="{'is-invalid':flags.invalid && flags.touched}"
               style="margin-bottom:10px" :disabled="options.deleteOld ? 'disabled':''" />
        <button v-if="options.deleteOld && value" type="button" class="btn btn-secondary" @click.prevent="deleteFile">Delete</button>
    </control>
</template>

<script>
    import ControlField from "./ControlField.vue";
    import Control from "./Control.vue";    

    let FileField = {
        name: "FileField",
        extends: ControlField,
        props: {
            value: {
                type: String
            }
        },
        data() {
            return {
                file: {}
            };
        },
        computed: {

        },
        methods: {
            setFile(e) {
                const file = e.target.files[0];
                let config = {
                    file: file,
                    name: file.name,
                    old: this.value,
                    secure: this.options.secure,
                    //folder: this.baseFolder,
                    folder: this.options.uploadfolder,
                    overwrite: this.options.overwrite,
                    deleteOld: this.options.deleteOld,
                };
                this.connector.upload(
                    config,
                    (data) => {
                        this.model = data.url;

                        //this.updateImageVersion();
                    },
                    (message) => {
                      alert(message);
                    }
                );
            },
            showFileChooser() {
                this.$refs.input.click();
            },
            deleteFile() {
                let config = {
                    url: this.value,
                    folder: this.options.uploadfolder,
                };
                this.connector.deleteFile(
                    config,
                    () => {
                        this.model = '';

                        //this.updateImageVersion();
                    },
                    (message) => {
                        alert(message);
                    }
                );
            }
        },
        components: { Control },
        builder: {
            props() {
                return {
                    schema: {
                        type: "object",
                        properties: {
                            uploadfolder: {
                                "title": "Upload Folder",
                                "type": "string"
                            },
                            overwrite: {
                                "type": "boolean"
                            },
                            secure: {
                                "type": "boolean"
                            },
                            deleteOld: {
                                "type": "boolean"
                            }
                        }
                    },
                    options: {
                        fields: {
                            overwrite: {
                                rightLabel: "Overwrite",
                            },
                            secure: {
                                rightLabel: "Secure",
                            },
                            deleteOld: {
                                rightLabel: "Delete old version",
                            }
                        }
                    }
                };
            },
            fromBuilder(field) {
                return {
                    schema: {
                        type: "string",
                    },
                    options: {
                        type: "file",
                        uploadfolder: field.uploadfolder,
                        overwrite: field.overwrite,
                        secure: field.secure,
                        deleteOld: field.deleteOld,
                    }
                };
            },
            toBuilder(def) {
                return {
                    fieldType: "file",
                    uploadfolder: def.options.uploadfolder,
                    overwrite: def.options.overwrite,
                    secure: def.options.secure,
                    deleteOld: def.options.deleteOld,
                };
            }
        }
    };

    export default FileField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
