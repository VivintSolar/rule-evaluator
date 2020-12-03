const AssociationV1 = require('../AssociationV1');
const translateAssociationObject = require('../associationTranslator/translateAssociationObject');
const getAssociationInfoV2 = require('./getters/getAssociationInfoV2')
const getDesignedAhjV2 = require('./getters/getDesignedAhjV2')



class AssociationV2 extends AssociationV1 {
    constructor( associationObject ){
        super( translateAssociationObject( associationObject, 'v1' ) );
    }
    getDocument( documentId ){
        const { documents } = this.associationObject||{};
        let document, count = 0;
        while( !document && documents[ count ] ){
            if( documents[ count ].id === documentId ) document = documents[ count ];
            count++;
        }
        return document;
    }
}


AssociationV2.prototype.getDesignedAhjV2 = getDesignedAhjV2;
AssociationV2.prototype.getAssociationInfoV2 = getAssociationInfoV2;


module.exports = AssociationV2;

