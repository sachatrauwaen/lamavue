import Vue from 'vue'
import App from './Builder.vue'
import './lama'
//import Container from './components/Container.vue'

import './components/AddressField.vue'

import './BaseView'
import Bootstap4View from './Bootstap4View'
import  './DefaultConnector'

Bootstap4View.register();

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')


// eslint-disable-next-line no-undef
$("#lama").lama({
  "schema": {
    "title": "What do you think of Alpaca?",
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "title": "Name",
        required: true
      },
      "amount": {
        "type": "number",
        "title": "Amount",
        required: true
      },
      "ranking": {
        "type": "string",
        "title": "Ranking",
        "enum": ['excellent', 'not too shabby', 'alpaca built my hotrod']
      },
      "adr": {
        "type": "object",
        "title": "Adress"
      },
      obj: {
        "title": "What do you think of Alpaca?",
        "type": "object",
        "properties": {
          "name2": {
            "type": "string",
            "title": "Name"
          },
          "ranking2": {
            "type": "string",
            "title": "Ranking",
            "enum": ['excellent', 'not too shabby', 'alpaca built my hotrod']
          },
        },
        "dependencies": {
          "ranking2": ["name2"]
        }
      },
      arr: {
        "title": "What do you think of Lama?",
        "type": "array",
        "items": {
          "title": "Ice Cream",
          "type": "string"
        },
      },
      arrobj: {
        "title": "What do you think of Lama?",
        "type": "array",
        "items": {

          "type": "object",
          "properties": {
            "name2": {
              "type": "string",
              "title": "Name"
            },
            "ranking2": {
              "type": "string",
              "title": "Ranking",
              "enum": ['excellent', 'not too shabby', 'alpaca built my hotrod']
            },
          }
        },
      }
    }
  },
  "options": {
    "fields": {
      "name": {
        type: "text",
        multilanguage: true
      },
      "ranking": {
        "dependencies": {
          "name": "x"
        }
      },
      "adr": {
        "type": "address"

      },
    }
  },

  "view": "bootstrap4-create",

  "connector": {
    currentCulture: "fr-FR",
    connect() {

    },
    loadAll: function (resources, onSuccess) {
      onSuccess();
    }
  }
});

