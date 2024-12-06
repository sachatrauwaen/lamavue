<template>
    <control v-bind="props">
        <file-browser v-model="fileObj" v-bind="fileBrowserProps"></file-browser>
    </control>
</template>

<script>
    import ControlField from "./ControlField.vue";
    import Control from "./Control.vue";
    import FileBrowser from "./FileBrowser.vue";

    let FileField = {
        name: "FileBrowserField",
        extends: ControlField,
        props: {
            value: {
                type: Object
            }
        },
        data() {
            return {
                file: {}
            };
        },
        computed: {
            fileBrowserProps() {
                return {
                    baseFolder: this.options.uploadfolder,
                    overwrite: this.options.overwrite,
                    onlyImages: true,
                    connector: this.connector,
                    showFolderSelector: false,
                    showFileSelector: true,
                    secure: this.options.secure,
                    deleteFile: this.options.deleteFile,
                    replaceOnUpload: this.options.replaceOnUpload
                }
            },
            fileObj: {
                get() {
                    return this.model
                        ? {
                            id: this.model.id,
                            url: this.model.url,
                            filename: this.model.filename
                        }
                        : null;
                },
                set(val) {
                    if (val) {
                        this.model = {
                            id: val.id,
                            filename: val.filename,
                            url: val.url
                        };
                    } else {
                        this.model = null;
                    }
                }
            }
        },
        methods: {

        },
        components: { Control, FileBrowser },
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
                            replaceOnUpload: {
                                "type": "boolean"
                            },
                            deleteFile: {
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
                            replaceOnUpload: {
                                rightLabel: "Replace on upload",
                            },
                            deleteFile: {
                                rightLabel: "Delete file",
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
                        type: "filebrowser",
                        uploadfolder: field.uploadfolder,
                        overwrite: field.overwrite,
                        secure: field.secure,
                        replaceOnUpload: field.replaceOnUpload,
                        deleteFile: field.deleteFile
                    }
                };
            },
            toBuilder(def) {
                return {
                    fieldType: "filebrowser",
                    uploadfolder: def.options.uploadfolder,
                    overwrite: def.options.overwrite,
                    secure: def.options.secure,
                    replaceOnUpload: def.options.replaceOnUpload,
                    deleteFile: def.options.deleteFile
                };
            }
        }
    };

    export default FileField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
