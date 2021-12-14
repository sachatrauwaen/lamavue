<template>
    <div id="app">
        <ul class="nav nav-tabs">
            <li class="nav-item" v-for="(tab, index) in tabs" :key="index">
                <a class="nav-link"
                   :class="{active: activeTab==index}"
                   href="#"
                   @click="activeTab=index">{{tab}}</a>
            </li>
        </ul>
        <div class="pt-2">
            <div v-show="activeTab==0">
                <builder ref="builder" v-model="model" :connector="connector" :debug="true"></builder>
            </div>
            <div v-show="activeTab==1">
                <textarea v-model="schemaText" style="width:100%;height:300px;"></textarea>
            </div>
            <div v-show="activeTab==2">
                <textarea v-model="optionsText" style="width:100%;height:300px;"></textarea>
            </div>
            <div v-show="activeTab==3">
                <div id="lama"></div>
                <lama-form v-model="demoModel" v-bind="demo"></lama-form>
            </div>
        </div>
        <input type="text" v-model="connector.currentCulture">
    </div>
</template>

<script>
    import Builder from "./components/Builder.vue";
    import LamaForm from "./components/Form.vue";
    import Lama from "./lama";

    export default {
        name: "App",
        data() {
            return {
                activeTab: 0,
                tabs: ["Builder", "Schema", "Options",  "Demo"],
                model: {
                    schema: {
                        type: "object",
                        properties: {}
                    },
                    options: { fields: {} }
                },
                connector: Lama.getConnectorClass("default"),
                demoModel: {},
                demo: {
                    schema: {
                        title: "What do you think of Alpaca?",
                        type: "object",
                        properties: {
                            name: {
                                type: "string",
                                title: "Name",
                                required: true
                            },
                            amount: {
                                type: "number",
                                title: "Amount",
                                required: true
                            },
                            ranking: {
                                type: "string",
                                title: "Ranking",
                                enum: ["excellent", "not too shabby", "alpaca built my hotrod"]
                            },
                            adr: {
                                type: "object",
                                title: "Adress"
                            },
                            obj: {
                                title: "What do you think of Alpaca?",
                                type: "object",
                                properties: {
                                    name2: {
                                        type: "string",
                                        title: "Name"
                                    },
                                    ranking2: {
                                        type: "string",
                                        title: "Ranking",
                                        enum: [
                                            "excellent",
                                            "not too shabby",
                                            "alpaca built my hotrod"
                                        ]
                                    }
                                },
                                dependencies: {
                                    ranking2: ["name2"]
                                }
                            },
                            arr: {
                                title: "What do you think of Lama?",
                                type: "array",
                                items: {
                                    title: "Ice Cream",
                                    type: "string"
                                }
                            },
                            arrobj: {
                                title: "What do you think of Lama?",
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        name2: {
                                            type: "string",
                                            title: "Name"
                                        },
                                        ranking2: {
                                            type: "string",
                                            title: "Ranking",
                                            enum: [
                                                "excellent",
                                                "not too shabby",
                                                "alpaca built my hotrod"
                                            ]
                                        }
                                    }
                                }
                            }
                        }
                    },
                    options: {
                        fields: {
                            name: {
                                type: "text",
                                multilanguage: true
                            },
                            ranking: {
                                dependencies: {
                                    name: "x"
                                }
                            },
                            adr: {
                                type: "address"
                            }
                        }
                    },
                    view: "bootstrap4-create"
                }
            };
        },
        computed: {
            schemaText: {
                get() {
                    return JSON.stringify(this.model.schema, undefined, "  ");
                },
                set(val) {
                    this.model.schema = JSON.parse(val);
                }
            },
            optionsText: {
                get() {
                    return JSON.stringify(this.model.options, undefined, "  ");
                },
                set(val) {
                    this.model.options = JSON.parse(val);
                }
            },
            dataText: {
                get() {
                    return JSON.stringify(this.model.options, undefined, "  ");
                },
                set(val) {
                    this.model.options = JSON.parse(val);
                }
            }
        },
        watch: {
            "model.schema"(val) {
                localStorage.setItem("schema", JSON.stringify(val));
            },
            "model.options"(val) {
                localStorage.setItem("options", JSON.stringify(val));
            }
        },
        created() {
            let schema = localStorage.getItem("schema");
            if (schema) this.model.schema = JSON.parse(schema);
            let options = localStorage.getItem("options");
            if (options) this.model.options = JSON.parse(options);


        },
        components: { Builder, LamaForm }
    };
</script>

<style>
    #app {
        margin-top: 60px;
    }
</style>
