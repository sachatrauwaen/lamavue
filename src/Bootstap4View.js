import AddressField from './components/fields/AddressField.vue'
import ArrayField from './components/fields/ArrayField.vue'
import CheckboxField from './components/fields/CheckboxField.vue'
import CKEditorField from './components/fields/CKEditorField.vue'
import CountryField from './components/fields/CountryField.vue'
import DateField from './components/fields/DateField.vue'
import FileField from './components/fields/FileField.vue'
import FileBrowserField from './components/fields/FileBrowserField.vue'
import ImageField from './components/fields/ImageField.vue'
import ImageBrowserField from './components/fields/ImageBrowserField.vue'
//import ImageIdBrowserField from './components/fields/ImageIdBrowserField.vue'
import NumberField from './components/fields/NumberField.vue'
import ObjectField from './components/fields/ObjectField.vue'
import RadioField from './components/fields/RadioField.vue'
import SelectField from './components/fields/SelectField.vue'
import TextField from './components/fields/TextField.vue'
import ColorField from './components/fields/ColorField.vue'
import TextareaField from './components/fields/TextareaField.vue'
import IconField from './components/fields/IconField.vue'
import GuidField from './components/fields/GuidField.vue'
import RelationField from './components/fields/RelationField.vue'
import PageField from './components/fields/PageField.vue'
import LinkField from './components/fields/LinkField.vue'
import UrlField from './components/fields/UrlField.vue'
import GalleryField from './components/fields/GalleryField.vue'
import DocumentsField from './components/fields/DocumentsField.vue'

import Lama from "./lama";

export default {

    register() {
        //Lama.registerFieldComponent("textarea", () => import('./components/TextareaField.vue') );

        Lama.registerFieldComponent("address", AddressField);
        Lama.registerFieldComponent("array", ArrayField);
        Lama.registerDefaultSchemaFieldMapping("array", "array");
        Lama.registerFieldComponent("checkbox", CheckboxField);
        Lama.registerDefaultSchemaFieldMapping("boolean", "checkbox");
        Lama.registerFieldComponent("ckeditor", CKEditorField);
        Lama.registerFieldComponent("color", ColorField);
        Lama.registerFieldComponent("country", CountryField);
        Lama.registerFieldComponent("date", DateField);
        Lama.registerFieldComponent("documents", DocumentsField);
        Lama.registerFieldComponent("file", FileField);
        Lama.registerFieldComponent("filebrowser", FileBrowserField);
        Lama.registerFieldComponent("gallery", GalleryField);
        Lama.registerFieldComponent("guid", GuidField);
        Lama.registerFieldComponent("icon", IconField);
        Lama.registerFieldComponent("image", ImageField);
        Lama.registerFieldComponent("imagebrowser", ImageBrowserField);
        //Lama.registerFieldComponent("imageidbrowser", ImageIdBrowserField);
        Lama.registerFieldComponent("link", LinkField);
        Lama.registerFieldComponent("url", UrlField);
        Lama.registerFieldComponent("number", NumberField);
        Lama.registerDefaultSchemaFieldMapping("number", "number");
        Lama.registerFieldComponent("object", ObjectField);
        Lama.registerDefaultSchemaFieldMapping("object", "object");
        Lama.registerFieldComponent("page", PageField);
        Lama.registerFieldComponent("radio", RadioField);
        Lama.registerFieldComponent("relation", RelationField);
        Lama.registerFieldComponent("select", SelectField);
        Lama.registerFieldComponent("textarea", TextareaField);
        Lama.registerFieldComponent("text", TextField);
        Lama.registerDefaultSchemaFieldMapping("string", "text");

        Lama.registerView({
            "id": "bootstrap4-edit",
            "parent": "base",
            "type": "edit",
            "ui": "bootstrap4",
            "title": "Bootstrap4 view",
            "displayReadonly": false,
            "components": {

            },
            //"callbacks": callbacks,
            "styles": {
                layoutRow: "form-row",
                layoutColumn: ["col-1", "col-2", "col-3"]

            },
            "horizontal": false
        });

        
        Lama.registerView({
            "id": "bootstrap4-create",
            "parent": "bootstrap4-edit",
            "title": "Create View for Bootstrap 4",
            "ui": "bootstrap4",
            "type": "create",
            "displayReadonly": false
        });
        
        
    }
}