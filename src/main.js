import Vue from 'vue'
import App from './App.vue'
//import Lama from "./lama";

Vue.config.productionTip = false

// eslint-disable-next-line no-undef
if ($("#demoapp").length) {
  new Vue({
    render: h => h(App),
  }).$mount('#demoapp')
}

/*
var app = Lama.mount("#demoappx", {
  "schema": {
    "title": "What do you think of Alpaca?",
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "title": "Name",
        required: true
      }
    }
  },
  "options":{

  }
});

setTimeout(function(){   
    app.validate(()=>{alert('ok'); console.log(app.getValue());}, ()=>{alert('ko')});
 }, 3000);
*/
/*
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
*/
