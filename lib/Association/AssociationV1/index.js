const AppliedRules = require('../../AppliedRules');
const getDesignedAhjV1 = require('./getters/getDesignedAhjV1');
const getLegacyAhjRefs = require('./getters/getLegacyAhjRefs');
const AssociationTree = require('../AssociationTree');
const { objectRestSpread } = require('../../utilities/util');



class AssociationV1 extends AppliedRules {
    constructor( parameters ){
        const { apiVersion, associationObject } = objectRestSpread( parameters, [ "apiVersion" ], "associationObject");
        const { ahj, definitions, conditions, options, timeStamp } = associationObject;
        const { rules } = ahj||{};
        super({ rules, definitions, conditions, options, apiVersion });
        this.getAssociationV1 = this.getAssociationV1.bind(this);
        this.apiVersion = apiVersion;
        this.ahj = ahj||{};
        this.associationV1 = {
            ahj,
            definitions: Object.assign({}, definitions, {
                listAll: this.applied
            }),
            conditions,
            timeStamp
        };
    }

    getAssociationV1(){
        return this.associationV1;
    }
    getAssociationInfoV1(){
        return Object.assign({},
          ...Object.keys( this.ahj ).map( field => {
                if( field !== "rules" ) return { [ field ]: this.ahj[ field ] }
            })
        )
    }


}

AssociationV1.AssociationTree = AssociationTree;
AssociationV1.prototype.getDesignedAhjV1 = getDesignedAhjV1;
AssociationV1.prototype.getDesignedAHJ = getDesignedAhjV1;
AssociationV1.prototype.getLegacyAhjRefs = getLegacyAhjRefs;


module.exports = AssociationV1;

