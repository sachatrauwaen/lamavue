import Lama from './lama'

export default {
    getObjectProps() {
        let types = [];
        const fieldClassRegistry = Lama.fieldClassRegistry;
        for (const key in fieldClassRegistry) {
            if (fieldClassRegistry[key].builder) {
                types.push(key);
            }
        }
        return {
            schema: {
                title: "Builder",
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        fieldName: {
                            type: "string",
                            title: "Field Name",
                            required: true
                        },
                        label: {
                            type: "string",
                            title: "Label",
                            required: true
                        },
                        fieldType: {
                            type: "string",
                            title: "Field Type",
                            enum: types
                        }
                    }
                }
            },
            options: {
                items: {
                    type: "builder",
                    fields: {}
                }
            }
        };
    },
    objectFromBuilder(field) {
        let props = {};
        let fields = {};
        if (field.fields) {
            for (let i = 0; i < field.fields.length; i++) {
                const f = field.fields[i];
                if (!f.fieldName) f.fieldName="field"+i;
                if (f.fieldType) {
                    let builderComponent = Lama.getFieldComponent(f.fieldType);
                    let d = builderComponent.builder.fromBuilder(f);
                    props[f.fieldName] = d.schema;
                    fields[f.fieldName] = d.options;
                } else {
                    props[f.fieldName] = {
                        title: f.label
                    };
                    fields[f.fieldName] = {};
                }
            }
        }
        return {
            schema: {
                title: field.label,
                type: "object",
                properties: props
            },
            options: {
                fields: fields
            }
        };
    },
    objectToBuilder(def) {
        let fields = [];
        if (def.schema && def.schema.properties) {
            for (const key in def.schema.properties) {
                const f = def.schema.properties[key];
                if (f) {
                    let opt = {};
                    if (def.options.fields && def.options.fields) {
                        opt = def.options.fields[key] || {};
                    }
                    let type = opt.type;
                    if (!type && f.type) {
                        type = Lama.guessOptionsType(f);
                    }
                    if (type) {
                        let builderComponent = Lama.getFieldComponent(type);
                        let d = builderComponent.builder.toBuilder({
                            schema: f,
                            options: opt
                        });
                        d.fieldName = key;
                        fields.push(d);
                    } else {
                        fields.push({
                            fieldName: key,
                            label: f.title
                        });
                    }
                } else {
                    fields.push({
                        fieldName: "new"
                    });
                }
            }
        }
        return {
            label: def.schema.title,
            fieldType: "object",
            fields: fields
        };
    }


}