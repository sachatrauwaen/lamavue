
import './components/TextField.vue'
//import './components/MLTextField.vue'
import './components/TextareaField.vue'
//import './components/MLTextareaField.vue'
import './components/CKEditorField.vue'
import './components/ObjectField.vue'
import './components/ArrayField.vue'
import  './components/RadioField.vue'
import  './components/CheckboxField.vue'
import  './components/SelectField.vue'
import  './components/CountryField.vue'
import  './components/NumberField.vue'
import  './components/DateField.vue'
import  './components/ImageField.vue'
import  './components/BuilderField.vue'

import Lama from "./lama";

export default {

    register() {

        
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
                layoutColumn:[ "col-1", "col-2", "col-3", ]

            },
            "horizontal": false
        });

        // eslint-disable-next-line no-undef
        Lama.registerView({
            "id": "bootstrap4-create",
            "parent": "bootstrap4-edit",
            "title": "Create View for Bootstrap 4",
            "ui": "bootstrap4",
            "type": "create",
            "displayReadonly": false
        });
    

        // eslint-disable-next-line no-undef
        Lama.defaultView= "bootstrap4";

    }


}