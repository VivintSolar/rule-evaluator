const parseAssociationObjectVersion = require('./parseAssociationObjectVersion');

const apiVersionTranslator = require('./apiVersionTranslator')

// translateAssociationObject
module.exports = ( associationObject, toVersion ) => {
    const apiVersion = parseAssociationObjectVersion( associationObject );
    const translator = (apiVersionTranslator[apiVersion]||{})[ toVersion ];
    if( apiVersion === toVersion ) return associationObject;
    if( translator ) return translator( associationObject );
    throw new Error(`Failed to translate from '${ apiVersion }' to '${ toVersion }'! No translator found!`)
}
