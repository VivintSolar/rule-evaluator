
const Inheritance = require('./Inheritance');
const onConflict = require('./onConflict');

const byDocumentTypes = documents => {
    const _documentTypes = { ahjs:[], definitions:[] };
    if( documents ) return documents.reduce( (documentTypes, document) => {
        if( document.rule || document.condition ) documentTypes.definitions.push( document );
        else if( document.type ) documentTypes.ahjs.push( document );
        return documentTypes;
    }, _documentTypes);
    return _documentTypes;
}

const byDefinitionType = definitionDocuments => {
    return definitionDocuments.reduce(( definitions, definition ) => {
        if( definition.condition ){
            if( !definitions.conditions ) definitions.conditions = {};
            definitions.conditions[ definition.id ] = definition;
        }
        if( definition.rule ){
            if( !definitions.rule ) definitions.rules = {};
            definitions.rules[ definition.id ] = definition;
        }
        return definitions;
    },{})
}

module.exports = associationObjectV2 => {
    const { documents: v2Documents, authorityInfo, requestParameters, ...associationObj } = associationObjectV2;
    const { ahjs: ahjDocuments, definitions: definitionDocuments } = byDocumentTypes( v2Documents );
    const definitions = byDefinitionType( definitionDocuments );
    const mergeAhjDocuments = () => {
        const inheritance = new Inheritance({
            documents: ahjDocuments, definitions, authorityInfo, requestParameters
        });
        inheritance.apply();
        inheritance.merge();

        const rules = onConflict.deconstruct({
            rules: inheritance.rules, definitions
        });
        const ahj = Object.assign({},
            inheritance.document, {
                elements: inheritance.elements,
                rules,
                timestamp: requestParameters.date || associationObj.timestamp
            }
        );
        return Object.assign({}, associationObj, { ahj, definitions })
    }
    return mergeAhjDocuments();
}
