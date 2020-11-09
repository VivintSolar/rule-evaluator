const Definitions = require('../Definitions');
const initializeAppliedRules = require('./initializeAppliedRules');
const getAppliedConditions = require('./getters/getAppliedConditions');
const getRulesAppliedInSet = require('./getters/getRulesAppliedInSet');
const evaluate = require('./getters/evaluate');
const batchEvaluate = require('./getters/batchEvaluate');
const evaluateAll = require('./getters/evaluateAll');
const evaluateSet = require('./getters/evaluateSet');
const getAppliedStatement = require('./getters/getAppliedStatement');
const getPossibleStatements = require('./getters/getPossibleStatements');
const getUnsupportedStatements = require('./getters/getUnsupportedStatements');
const defineSet = require('./setters/defineSet');
const defineSetByTag = require('./setters/defineSetByTag');
const defineSetByView = require('./setters/defineSetByView');
const getRulesByTag = require('./getters/getRulesByTag');
const getRuleIdsByTag = require('./getters/getRuleIdsByTag');
const getAllAppliedConditions = require('./getters/getAllAppliedConditions');
const getAppliedConditionsBySet = require('./getters/getAppliedConditionsBySet');
const getAppliedConditionsByTag = require('./getters/getAppliedConditionsByTag');
const evaluateByTag = require('./getters/evaluateByTag');
const getConditionValue = require('./getters/getConditionValue');
const updateGlobalAttributes = require('./setters/updateGlobalAttributes');
const updateConditions = require('./setters/updateConditions');



class AppliedRules extends Definitions {
    constructor( parameters ){
        super( parameters );
        this.getGlobalAttributes = this.getGlobalAttributes.bind(this);
        this.updateGlobalAttributes = this.updateGlobalAttributes.bind(this);
        this.getRule = this.getRule.bind( this );
        this.initializeAppliedRules( parameters );
    }
    clearConditions(){
        this.conditions = null;
        return this.conditions;
    }
    getGlobalAttributes(attributeNames){
        if( typeof attributeNames === 'string' ) return this[ attributeNames ];
        if( Array.isArray( attributeNames ) ) return Object.assign({},
            ...attributeNames.map( attributeName => ({
                [ attributeName ]: this.getGlobalAttributes( attributeName )
            }))
        );
    }
    getRule( ruleId ){
      if( !this.rules[ ruleId ] ) return null;
      return this.rules[ ruleId ];
    }


}

AppliedRules.prototype.initializeAppliedRules = initializeAppliedRules;
AppliedRules.prototype.getAppliedConditions = getAppliedConditions;
AppliedRules.prototype.getAppliedConditionsByTag = getAppliedConditionsByTag;
AppliedRules.prototype.getAppliedConditionsBySet = getAppliedConditionsBySet;
AppliedRules.prototype.getAllAppliedConditions = getAllAppliedConditions;
AppliedRules.prototype.evaluateByTag = evaluateByTag;
AppliedRules.prototype.getRulesAppliedInSet = getRulesAppliedInSet;
AppliedRules.prototype.getRuleIdsByTag = getRuleIdsByTag;
AppliedRules.prototype.getRulesByTag = getRulesByTag;
AppliedRules.prototype.evaluateSet = evaluateSet;
AppliedRules.prototype.evaluateAll = evaluateAll;
AppliedRules.prototype.batchEvaluate = batchEvaluate;
AppliedRules.prototype.evaluate = evaluate;
AppliedRules.prototype.getUnsupportedStatements = getUnsupportedStatements;
AppliedRules.prototype.getPossibleStatements = getPossibleStatements;
AppliedRules.prototype.getAppliedStatement = getAppliedStatement;
AppliedRules.prototype.defineSet = defineSet;
AppliedRules.prototype.defineSetByView = defineSetByView;
AppliedRules.prototype.defineSetByTag = defineSetByTag;
AppliedRules.prototype.updateGlobalAttributes = updateGlobalAttributes;
AppliedRules.prototype.getConditionValue = getConditionValue;
AppliedRules.prototype.updateConditions = updateConditions;




module.exports = AppliedRules;

