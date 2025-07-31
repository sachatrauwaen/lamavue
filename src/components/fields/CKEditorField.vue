<template>
    <control v-bind="props">
        <ckeditor :value="model" @input="model= $event" :config="editorConfig" @namespaceloaded="onNamespaceLoaded" @ready="onEditorReady" :editor-url="editorUrl" ></ckeditor>
    </control>
</template>

<script>
    //import Vue from 'vue';
    import TextField from "./TextField.vue";
    import Control from "./Control.vue";
    import CKEditor from "ckeditor4-vue";
    //import CKEditor from "./VueCkeditor";

    const basicConfig = {
        toolbar: [
            {
                name: "basicstyles",
                groups: ["basicstyles", "cleanup"],
                items: [
                    "Bold",
                    "Italic",
                    "Underline",
                    "Strike",
                    "Subscript",
                    "Superscript",
                    "-",
                    "RemoveFormat",
                ],
            },
            { name: "styles", items: ["Styles", "Format"] },
            {
                name: "paragraph",
                groups: ["list", "indent", "blocks", "align"],
                items: [
                    "NumberedList",
                    "BulletedList",
                    "-",
                    "Outdent",
                    "Indent",
                    "-",
                    "JustifyLeft",
                    "JustifyCenter",
                    "JustifyRight",
                    "JustifyBlock",
                ],
            },
            { name: "links", items: ["Link", "Unlink"] },

            {
                name: "document",
                groups: ["mode", "document", "doctools"],
                items: ["Maximize", "Source"],
            },
        ],
        // Set the most common block elements.
        format_tags: "p;h1;h2;h3;pre",
        // Simplify the dialog windows.
        removeDialogTabs: "image:advanced;link:advanced",
        // Remove one plugin.
        removePlugins: "elementspath",
        //extraPlugins: "dnnpages",
        //autoGrow_onStartup : true,
        //autoGrow_minHeight : 100,
        //autoGrow_maxHeight : 300,
        height: 150,
        //skin : 'flat',
        customConfig: "",
        stylesSet: [],
        versionCheck: false
    };

    const standardConfig = {
        toolbar: [
            {
                name: "basicstyles",
                groups: ["basicstyles", "cleanup"],
                items: [
                    "Bold",
                    "Italic",
                    "Underline",
                    "Strike",
                    "Subscript",
                    "Superscript",
                    "-",
                    "RemoveFormat",
                ],
            },
            { name: "styles", items: ["Styles", "Format"] },
            {
                name: "paragraph",
                groups: ["list", "indent", "blocks", "align"],
                items: [
                    "NumberedList",
                    "BulletedList",
                    "-",
                    "Outdent",
                    "Indent",
                    "-",
                    "JustifyLeft",
                    "JustifyCenter",
                    "JustifyRight",
                    "JustifyBlock",
                ],
            },
            { name: "links", items: ["Link", "Unlink", "Anchor"] },
            { name: "insert", items: ["Table", "Smiley", "SpecialChar", "Iframe"] },
            {
                name: "document",
                groups: ["mode", "document", "doctools"],
                items: ["Maximize", "ShowBlocks", "Source"],
            },
        ],
        // Set the most common block elements.
        format_tags: "p;h1;h2;h3;pre;div",

        //http://docs.ckeditor.com/#!/guide/dev_allowed_content_rules
        extraAllowedContent: "table tr th td caption[*](*);" + "div span(*);",
        //'a[!href](*);'
        //'img[!src,alt,width,height](*);' +
        //'h1 h2 h3 p blockquote strong em(*);' +
        // Simplify the dialog windows.
        removeDialogTabs: "image:advanced;link:advanced",
        // Remove one plugin.
        removePlugins: "elementspath",
        //extraPlugins: "dnnpages",
        //autoGrow_onStartup : true,
        //autoGrow_minHeight : 100,
        //autoGrow_maxHeight : 300,
        height: 150,
        //skin : 'flat',
        customConfig: "",
        stylesSet: [],
        versionCheck: false
    };

    const fullConfig = {
        toolbar: [
            {
                name: "clipboard",
                items: [
                    "Cut",
                    "Copy",
                    "Paste",
                    "PasteText",
                    "PasteFromWord",
                    "-",
                    "Undo",
                    "Redo",
                ],
            },
            {
                name: "editing",
                items: [
                    "Find",
                    "Replace",
                    "-",
                    "SelectAll",
                    "-",
                    "SpellChecker",
                    "Scayt",
                ],
            },
            {
                name: "insert",
                items: [
                    "EasyImageUpload",
                    "Table",
                    "HorizontalRule",
                    "Smiley",
                    "SpecialChar",
                    "PageBreak",
                    "Iframe",
                ],
            },
            "/",
            {
                name: "basicstyles",
                items: [
                    "Bold",
                    "Italic",
                    "Underline",
                    "Strike",
                    "Subscript",
                    "Superscript",
                    "-",
                    "RemoveFormat",
                ],
            },
            {
                name: "paragraph",
                items: [
                    "NumberedList",
                    "BulletedList",
                    "-",
                    "Outdent",
                    "Indent",
                    "-",
                    "Blockquote",
                    "CreateDiv",
                    "-",
                    "JustifyLeft",
                    "JustifyCenter",
                    "JustifyRight",
                    "JustifyBlock",
                    "-",
                    "BidiLtr",
                    "BidiRtl",
                ],
            },
            { name: "links", items: ["Link", "Unlink", "Anchor"] },

            "/",
            { name: "styles", items: ["Styles", "Format", "Font", "FontSize"] },
            { name: "colors", items: ["TextColor", "BGColor"] },
            {
                name: "tools",
                items: ["Maximize", "ShowBlocks", "-", "About", "-", "Source"],
            },
        ],
        // Set the most common block elements.
        format_tags: "p;h1;h2;h3;pre;div",
        //http://docs.ckeditor.com/#!/api/CKEDITOR.config-cfg-allowedContent
        allowedContentRules: true,
        // Simplify the dialog windows.
        removeDialogTabs: "image:advanced;link:advanced",
        // Remove one plugin.
        removePlugins: "elementspath,image",
        //extraPlugins: "dnnpages",
        //autoGrow_onStartup : true,
        //autoGrow_minHeight : 100,
        //autoGrow_maxHeight : 300,
        height: 150,
        //skin : 'flat',
        customConfig: "",
        stylesSet: [],
        //easyimage_toolbar :['EasyImageAlignLeft', 'EasyImageAlignCenter', 'EasyImageAlignRight']
        versionCheck: false
    };

    const configSets = { basic: basicConfig, standard: standardConfig, full: fullConfig };

    let CKEditorField = {
        name: "CKEditorField",
        extends: TextField,
        props: {},
        data() {
            return {
                commonConfig: {

                }
            };
        },
        computed: {
            model: {
                get() {
                    return this.value || '';
                },
                set(val) {
                    this.$emit("input", val);
                }
            },
            editorConfig() {
                if (this.options.configset) {
                    return Object.assign(this.commonConfig, configSets[this.options.configset]); // clone
                } else {
                    return Object.assign(this.commonConfig, basicConfig); // clone
                }
            },
            editorUrl() {
                if (this.options.local && this.connector.CKEditor && this.connector.CKEditor.editorUrl) {
                    return this.connector.CKEditor.editorUrl;
                } else {
                    return undefined;
                }
            }
        },
        methods: {
            /*eslint no-unused-vars: ["error", { "args": "none" }]*/
            onNamespaceLoaded(CKEDITOR) {
                if (this.connector.CKEditor && this.connector.CKEditor.getConfig) {
                    this.commonConfig = this.connector.CKEditor.getConfig();
                }
            },
            /*eslint no-unused-vars: ["error", { "args": "none" }]*/
            onEditorReady(evt) {
                if (this.connector.CKEditor && this.connector.CKEditor.setRequestHeaders) {
                    evt.editor.on('fileUploadRequest', function (fileUploadRequestEvent) {
                        this.connector.CKEditor.setRequestHeaders(fileUploadRequestEvent.data.fileLoader.xhr);                    
                    });
                }
            }
        },
        components: { Control, ckeditor: CKEditor.component },
        builder: {
            props() {
                return {
                    schema: {
                        type: "object",
                        properties: {
                            configset: {
                                "title": "Config set",
                                "type": "string",
                                "enum": ["basic", "standard", "full"]
                            },
                            local: {
                                "type": "boolean"
                            },
                        },
                    },
                    options: {
                        fields: {
                            configset: {
                                "type": "select"
                            },
                            local: {
                                rightLabel: "Local (not from cloud)",
                            },
                        }
                    },
                };
            },
            fromBuilder(field) {
                return {
                    schema: {
                        type: "string",
                        required: field.required,
                    },
                    options: {
                        type: "ckeditor",
                        configset: field.configset,
                        local: field.local
                    },
                };
            },
            toBuilder(def) {
                return {
                    fieldType: "ckeditor",
                    configset: def.options.configset,
                    local: def.options.local
                };
            },
        },
    };

    export default CKEditorField;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
