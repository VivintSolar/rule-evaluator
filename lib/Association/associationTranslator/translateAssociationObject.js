const parseAssociationObjectVersion = require('./parseAssociationObjectVersion');

const apiVersionTranslator = require('./apiVersionTranslator');

const attachApiVersion = (associationObject, apiVersion) => Object.assign({}, associationObject, { apiVersion })

// translateAssociationObject
module.exports = ( associationObject, toVersion ) => {
    const apiVersion = parseAssociationObjectVersion( associationObject );
    const translator = (apiVersionTranslator[apiVersion]||{})[ toVersion ];
    if( apiVersion === toVersion ) return attachApiVersion( associationObject, apiVersion);
    if( translator ) return attachApiVersion( translator( associationObject ), apiVersion);
    throw new Error(`Failed to translate from '${ apiVersion }' to '${ toVersion }'! No translator found!`)
}
