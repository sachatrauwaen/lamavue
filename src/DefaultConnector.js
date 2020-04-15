import Lama from "./lama";

let defaultConnector = {
    currentCulture: "fr-FR",
    connect() {

    },
    loadAll: function (resources, onSuccess) {
        onSuccess();
    },
    getMessage() {

    },
    /**
         * Loads data source (value/text) pairs from a remote source.
         * This default implementation allows for config to be a string identifying a URL.
         *
         * @param config
         * @param successCallback
         * @param errorCallback
         * @returns {*}
         */
    loadDataSource: function (config, successCallback, errorCallback) {
        //return this._handleLoadDataSource(config, successCallback, errorCallback);

        if (config && config.query && config.query) {
            if (config.query.type == "folders") {
                successCallback([{ value: "1", label: "Files" }]);
            }

            if (config.query.type == "files") {
                successCallback([{ value: "https://agontuk.github.io/assets/images/berserk.jpg", label: "berserk.jpg" }]);
            }
        }
        else {
            errorCallback();
        }


    },
}

export default defaultConnector;

Lama.registerConnectorClass("default", defaultConnector);