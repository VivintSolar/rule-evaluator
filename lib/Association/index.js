const AppliedRules = require('../AppliedRules');
const initializeAssociation = require('./initializeAssociation');
const getDesignedAHJ = require('./getters/getDesignedAHJ');
const AssociationTree = require('./AssociationTree');




class Association extends AppliedRules {
    constructor( associationObject ){
        const { ahj, definitions, conditions } = associationObject;
        const { rules } = ahj||{};
        super({ rules, definitions, conditions  });
        this.initializeAssociation( ahj );
    }


}

Association.AssociationTree = AssociationTree;
Association.prototype.initializeAssociation = initializeAssociation;
Association.prototype.getDesignedAHJ = getDesignedAHJ;


module.exports = Association;

