const AppliedRules = require('../AppliedRules');
const initializeAssociation = require('./initializeAssociation');
const getDesignedAhj = require('./getters/getDesignedAhj');
const FamilyTree = require('../FamilyTree');




class Association extends AppliedRules {
    constructor( associationObject ){
        const { ahj, definitions, conditions } = associationObject;
        const { rules } = ahj||{};
        super({ rules, definitions, conditions  });
        this.initializeAssociation( ahj );
    }


}

Association.prototype.initializeAssociation = initializeAssociation;
Association.prototype.getDesignedAhj = getDesignedAhj;
Association.prototype.FamilyTree = FamilyTree;


module.exports = Association;

