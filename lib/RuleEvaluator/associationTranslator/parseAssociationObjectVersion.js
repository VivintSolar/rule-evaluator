


// parseAssociationObjectVersion
module.exports = ( associationObject ) => {
    if( associationObject.hasOwnProperty("v2") || associationObject.documents ) return "v2";
    if( associationObject.hasOwnProperty("v1") || associationObject.ahj ) return "v1";
}
