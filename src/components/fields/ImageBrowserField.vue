<template>
    <control v-bind="props">
        <template v-if="showImageEditor">
            <image-editor :imageUrl="value.rawUrl || value.url"
                          :ratio="ratio"
                          :cropperData="value.crop"
                          @cancel="cancelImageEditor"
                          @save="saveImageEditor"></image-editor>
        </template>
        <div v-show="!showImageEditor">
            <image-browser v-model="imageFile" v-bind="fileBrowserProps"></image-browser>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button v-if="imageSrc"
                        type="button"
                        class="btn btn-secondary"
                        @click.prevent="remove">
                    Delete
                </button>
                <button v-if="imageSrc && options.showCropper" type="button" class="btn btn-secondary" @click.prevent="edit">Edit</button>
            </div>
            <div>
                <a v-if="imageSrc" href="#" @click.prevent="edit" title="Edit Image">
                    <img :src="imageSrc" alt="Image" style="margin: 10px 0;max-height:200px;" class="img-fluid" />
                </a>
            </div>
        </div>
    </control>
</template>

<script>
    //import Vue from "vue";
    import ControlField from "./ControlField.vue";
    import Control from "./Control.vue";
    import ImageEditor from "./ImageEditor.vue";
    import VueCropper from "vue-cropperjs";
    import "cropperjs/dist/cropper.css";
    import ImageBrowser from "./ImageBrowser.vue";
    import Lama from "../../lama";

    let ImagexField = {
        name: "ImageBrowserField",
        extends: ControlField,
        props: {
            value: {
                type: Object
            }
        },
        data() {
            return {
                showImageEditor: false,
                imageVersion: Date.now()
            };
        },
        computed: {
            fileBrowserProps() {
                return {
                    connector: this.connector,
                    baseFolder: this.options.uploadfolder,
                    showFolderSelector: false,
                    showFileSelector: true,
                    showUpload: this.options.showUpload,
                    showOverwrite: this.options.showOverwrite,
                    overwrite: this.options.overwrite,
                    width: this.options.width,
                    height: this.options.height,
                    accept: this.options.accept,
                    fileMaxSize: this.options.fileMaxSize,
                    requireMinSize: this.options.requireMinSize,
                    resizeOnUpload: this.options.resizeOnUpload,
                    resizeWidth: this.options.resizeWidth,
                    resizeHeight: this.options.resizeHeight
                }
            },
            imageSrc() {
                if (this.value) return this.value.url + (this.value.url.indexOf('data:') == 0 ? '' : "?v=" + this.imageVersion);
                else return "";
            },
            imageFile: {
                get() {
                    return this.model
                        ? {
                            id: this.model.id,
                            url: this.model.rawUrl || this.model.url,
                            filename: this.model.filename,
                            width: this.model.width,
                            height: this.model.height
                        }
                        : null;
                },
                set(val) {
                    if (val) {
                        this.model = {
                            id: val.id,
                            filename: val.filename,
                            width: val.width,
                            height: val.height,
                            url: val.url,
                            rawUrl: val.url,
                            cropUrl: val.url
                        };
                        if (this.options.showCropper){
                            this.showImageEditor=true;
                        }
                    } else {
                        this.model = null;
                    }
                }
            },
            ratio(){
                if (this.options.width && this.options.height)
                    return this.options.width/this.options.height;
                else
                    return 0;                
            },
            isEdited(){
                return this.model.url != this.model.rawUrl;
            }
        },
        methods: {
            showFileChooser() {
                this.$refs.input.click();
            },
            edit() {
                if (this.options.showCropper) {
                    this.showImageEditor = true;
                }
            },
            cancelImageEditor() {
                this.showImageEditor = false;
                if(!this.isEdited){
                    this.model = null;
                }
            },
            updateImageVersion() {
                this.imageVersion = Date.now();
            },
            saveImageEditor(cropCanvas, cropData) {
                this.showImageEditor = false;
                // this.model = {
                //   id: this.model.id,
                //   url: this.model.url,
                //   filename: this.model.filename,
                //   width: this.model.width,
                //   height: this.model.height,
                //   cropUrl: cropCanvas.toDataURL('image/jpeg'),
                //   crop: cropData
                // };

                var canvas = document.createElement('canvas');
                

                var MAX_WIDTH = this.options.width;
                var MAX_HEIGHT = this.options.height;
                var width = cropCanvas.width;
                var height = cropCanvas.height;

                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(cropCanvas, 0, 0, width, height);

                canvas.toBlob((blob) => {
                    let config = {
                        file: blob,
                        name: this.model.filename,
                        folder: this.options.cropfolder,
                        hidden: true
                    };
                    this.connector.upload(
                        config,
                        (data) => {
                            this.model = {
                                id: this.model.id,
                                filename: this.model.filename,
                                width: this.model.width,
                                height: this.model.height,
                                rawUrl: this.model.rawUrl,
                                url: data.url,
                                //url: cropCanvas.toDataURL('image/jpeg'),
                                crop: cropData,
                                cropUrl: data.url
                            };
                            this.updateImageVersion();
                        },
                        () => { }
                    );
                }, Lama.toMine(this.model.filename));
            },            
            remove() {
                this.model = null;
            }
        },
        components: { Control, VueCropper, ImageBrowser, ImageEditor },
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
                            cropfolder: {
                                "title": "Crop Folder",
                                "type": "string"
                            },
                            showUpload: {
                                "type": "boolean"
                            },
                            showOverwrite: {
                                "type": "boolean"
                            },
                            overwrite: {
                                "type": "boolean"
                            },
                            showCropper: {
                                "type": "boolean"
                            },
                            requireMinSize: {
                                "type": "boolean"
                            },
                            width: {
                                "title": "Width (for cropper & min. size)",
                                "type": "number"
                            },
                            height: {
                                "title": "Height (for cropper & min. size)",
                                "type": "number"
                            },
                            resizeOnUpload: {
                                "type": "boolean"
                            },
                            resizeWidth: {
                                "title": "Max upload width",
                                "type": "number"
                            },
                            resizeHeight: {
                                "title": "Max upload height",
                                "type": "number"
                            },
                            accept: {
                                "title": "Accept (see html accept attribute of input)",
                                "type": "string",
                                "default": "image/*"
                            },
                            fileMaxSize: {
                                "title": "max size (bytes)",
                                "type": "number",
                                "default": 0
                            },
                            
                        }
                    },
                    options: {
                        fields: {
                            showUpload: {
                                rightLabel: "Show upload",
                            },
                            showOverwrite: {
                                rightLabel: "Show overwrite",
                            },
                            overwrite: {
                                rightLabel: "Overwrite",
                            },
                            showCropper: {
                                rightLabel: "Show cropper",
                            },
                            requireMinSize: {
                                rightLabel: "Require min. size",
                            },
                            resizeOnUpload: {
                                rightLabel: "Resize on upload",
                            },
                            resizeWidth: {
                                dependencies:
                                {
                                    resizeOnUpload: [true]
                                }
                            },
                            resizeHeight: {
                                dependencies:
                                {
                                    resizeOnUpload: [true]
                                }
                            },
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
                        type: "imagebrowser",
                        uploadfolder: field.uploadfolder,
                        cropfolder: field.cropfolder,
                        showUpload: field.showUpload,
                        showOverwrite: field.showOverwrite,
                        overwrite: field.overwrite,
                        showCropper: field.showCropper,
                        width: field.width,
                        height: field.height,
                        accept: field.accept,
                        fileMaxSize: field.fileMaxSize,
                        requireMinSize: field.requireMinSize,
                        resizeOnUpload: field.resizeOnUpload,
                        resizeWidth: field.resizeWidth,
                        resizeHeight: field.resizeHeight
                    }
                };
            },
            toBuilder(def) {
                return {
                    fieldType: "imagebrowser",
                    uploadfolder: def.options.uploadfolder,
                    cropfolder: def.options.cropfolder,
                    showUpload: def.options.showUpload,
                    showOverwrite: def.options.showOverwrite,
                    overwrite: def.options.overwrite,
                    showCropper: def.options.showCropper,
                    width: def.options.width,
                    height: def.options.height,
                    accept: def.options.accept,
                    fileMaxSize: def.options.fileMaxSize,
                    requireMinSize: def.options.requireMinSize,
                    resizeOnUpload: def.options.resizeOnUpload,
                    resizeWidth: def.options.resizeWidth,
                    resizeHeight: def.options.resizeHeight
                };
            }
        }
    };

    export default ImagexField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
