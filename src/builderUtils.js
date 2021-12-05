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
                    let builder = builderComponent.builder.fromBuilder(f);
                    while (builderComponent.extends) {
                        builderComponent = builderComponent.extends;
                        if (
                            builderComponent.builder &&
                            builderComponent.builder.fromBuilder
                        ) {
                            let extendBuilder = builderComponent.builder.fromBuilder(f);
                            builder.schema = Object.assign(extendBuilder.schema, builder.schema);
                            builder.options = Object.assign(extendBuilder.options, builder.options);
                        }
                    }
                    props[f.fieldName] = builder.schema;
                    fields[f.fieldName] = builder.options;
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
                const sch = def.schema.properties[key];
                if (sch) {
                    let opt = {};
                    if (def.options.fields && def.options.fields) {
                        opt = def.options.fields[key] || {};
                    }
                    let type = opt.type;
                    if (!type && sch.type) {
                        type = Lama.guessOptionsType(sch);
                    }
                    if (type) {
                        let builderComponent = Lama.getFieldComponent(type);
                        let field = builderComponent.builder.toBuilder({
                            schema: sch,
                            options: opt
                        });
                        while (builderComponent.extends) {
                            builderComponent = builderComponent.extends;
                            if (
                                builderComponent.builder &&
                                builderComponent.builder.toBuilder
                            ) {
                                let extendField = builderComponent.builder.toBuilder({
                                    schema: sch,
                                    options: opt,
                                });
                                field = Object.assign(extendField, field);
                            }
                        }
                        field.fieldName = key;
                        fields.push(field);
                    } else {
                        fields.push({
                            fieldName: key,
                            label: sch.title
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