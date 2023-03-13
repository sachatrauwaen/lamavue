<template>
    <control v-bind="props">
        <!--<template v-if="showImageEditor">
        <image-editor :imageUrl="value.rawUrl || value.url"
                      :ratio="ratio"
                      :cropperData="value.crop"
                      @cancel="cancelImageEditor"
                      @save="saveImageEditor"></image-editor>
    </template>
    
    <div v-show="!showImageEditor">-->
        <div v-if="connector.viewType=='create' && options.disabledOnCreate">
            {{getMessage('imageAfterItemCreated')}}
        </div>
        <div v-else>
            <image-browser v-model="model" v-bind="fileBrowserProps" @change="imageChange"></image-browser>
            <!--<div class="btn-group" role="group" aria-label="Basic example">
    <button v-if="imageSrc"
            type="button"
            class="btn btn-secondary"
            @click.prevent="remove">
        Delete
    </button>
    <button v-if="imageSrc && options.showCropper" type="button" class="btn btn-secondary" @click.prevent="edit">Edit</button>
    </div>
    -->
            <div>
                <!--<a v-if="imageSrc" href="#" @click.prevent="edit" title="Edit Image">-->
                <img v-if="imageSrc" :src="imageSrc" alt="Image" style="margin: 10px 0;max-height:200px;" class="img-fluid" />
                <!--</a>-->
            </div>
            <!--</div>-->
        </div>
    </control>
</template>

<script>
    //import Vue from "vue";
    import Lama from "../../lama";
    import ControlField from "./ControlField.vue";
    import Control from "./Control.vue";
    import ImageEditor from "./ImageEditor.vue";
    import VueCropper from "vue-cropperjs";
    import "cropperjs/dist/cropper.css";
    import ImageBrowser from "./ImageIdBrowser.vue";

    let ImageIdBrowserField = {
        name: "ImageIdBrowserField",
        extends: ControlField,
        props: {
            value: {
                
            }
        },
        data() {
            return {
                showImageEditor: false,
                imageVersion: Date.now(),
                imageSrc: ''
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
                    showOverwrite: false,
                    overwrite: true,
                    width: this.options.width,
                    height: this.options.height,
                    accept: this.options.accept,
                    fileMaxSize: this.options.fileMaxSize                    
                }
            },
            //imageSrc() {
            //    if (this.value) return this.value.url + (this.value.url.indexOf('data:') == 0 ? '' : "?v=" + this.imageVersion);
            //    else return "";
            //},
            
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
            imageChange(image) {
                this.imageSrc = image.url;
            },
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
                });
            },
            remove() {
                this.model = null;
            },
            getMessage(key) {
                return Lama.getMessage(this.view, key, this.connector.currentCulture);
            }
        },
        components: { Control, VueCropper, ImageBrowser, ImageEditor },
        builder: {
            props() {
                return {
                    schema: {
                        type: "object",
                        properties: {                            
                            showUpload: {
                                "type": "boolean"
                            },
                            uploadfolder: {
                                "title": "Upload Folder",
                                "type": "string"
                            },
                            showCropper: {
                                "type": "boolean"
                            },
                            width: {
                                "title": "Width",
                                "type": "number"
                            },
                            height: {
                                "title": "Height",
                                "type": "number"
                            },
                            accept: {
                                "title": "Accept",
                                "type": "string",
                                "default": "image/*"
                            },
                            fileMaxSize: {
                                "title": "max size (bytes)",
                                "type": "number",
                                "default": 0
                            },
                            disabledOnCreate: {
                                "type": "boolean"
                            }
                        }
                    },
                    options: {
                        fields: {
                            showUpload: {
                                rightLabel: "Show upload",
                            },
                            showCropper: {
                                rightLabel: "Show cropper",
                            },
                            disabledOnCreate: {
                                rightLabel: "Disabled on create"
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
                        type: "imageidbrowser",
                        uploadfolder: field.uploadfolder,
                        showUpload: field.showUpload,
                        width: field.width,
                        height: field.height,
                        accept: field.accept,
                        fileMaxSize: field.fileMaxSize,
                        disabledOnCreate: field.disabledOnCreate
                    }
                };
            },
            toBuilder(def) {
                return {
                    fieldType: "imageidbrowser",
                    uploadfolder: def.options.uploadfolder,
                    showUpload: def.options.showUpload,
                    width: def.options.width,
                    height: def.options.height,
                    accept: def.options.accept,
                    fileMaxSize: def.options.fileMaxSize,
                    disabledOnCreate: def.options.disabledOnCreate
                };
            }
        }
    };

    export default ImageIdBrowserField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
