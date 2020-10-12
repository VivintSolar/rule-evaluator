const AppliedRules = require('../AppliedRules');
const initializeAssociation = require('./initializeAssociation');
const getDesignedAHJ = require('./getters/getDesignedAHJ');
const getLegacyAhjRefs = require('./getters/getLegacyAhjRefs');
const AssociationTree = require('./AssociationTree');




class Association extends AppliedRules {
    constructor( associationObject ){
        const { ahj, definitions, conditions, options, timeStamps } = associationObject;
        const { rules } = ahj||{};
        super({ rules, definitions, conditions, options });
        this.getAssociationV1 = this.getAssociationV1.bind(this);
        this.associationV1 = { ahj, definitions, conditions, options, timeStamps };
        this.initializeAssociation( ahj );
    }

    getAssociationV1(){
        return this.associationV1;
    }


}

Association.AssociationTree = AssociationTree;
Association.prototype.initializeAssociation = initializeAssociation;
Association.prototype.getDesignedAHJ = getDesignedAHJ;
Association.prototype.getLegacyAhjRefs = getLegacyAhjRefs;


module.exports = Association;

