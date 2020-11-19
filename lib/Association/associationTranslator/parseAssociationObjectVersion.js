const apiVersions = [ "v1", "v2" ]

const isV1 = associationObject => associationObject.hasOwnProperty("v1") || associationObject.ahj

const isV2 = associationObject => associationObject.hasOwnProperty("v2") || associationObject.documents

// parseAssociationObjectVersion
module.exports = ( associationObject ) => {
    if( associationObject.apiVersion && apiVersions.includes( associationObject.apiVersion ) ) {
        return associationObject.apiVersion;
    }
    else if( isV2( associationObject ) ) return "v2";
    else if( isV1( associationObject ) ) return "v1";

}
