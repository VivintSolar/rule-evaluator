const _RuleConditionDefinition = require('./_RuleConditionDefinition');
const initializeRuleConditionDefinition = require('./initializeRuleConditionDefinition');


class RuleConditionDefinition extends _RuleConditionDefinition {
    constructor( definition ){
        super( definition );
        this.initializeRuleConditionDefinition( definition );
    }


}

RuleConditionDefinition.prototype.initializeRuleConditionDefinition = initializeRuleConditionDefinition;



module.exports = RuleConditionDefinition;
