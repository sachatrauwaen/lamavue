export default {
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

        console.log("loadDataSource");
        console.log(config);

        if (config && config.query && config.query) {
            if (config.query.type == "folders") {
                successCallback([{ id: "1", name: "Files", url: "/Files" }]);
            }

            if (config.query.type == "files") {
                var files = [{ id: "1", url: "https://agontuk.github.io/assets/images/berserk.jpg", name: "berserk.jpg", folderId: "1" }];
                successCallback(files.filter((f) => {
                    if (config.query.folder)
                        return f.folderId == config.query.folder;
                    else
                        return false;
                }).map(f => {
                    return {
                        id: f.id,
                        filename: f.name,
                        url: f.url
                    };
                }));
            }
        }
        else {
            errorCallback();
        }


    },
    // eslint-disable-next-line no-unused-vars
    upload(config, successCallback, errorCallback) {
        successCallback({ id:"2", url: "https://agontuk.github.io/assets/images/berserk.jpg", filename: "berserk.jpg" });
    }
}



