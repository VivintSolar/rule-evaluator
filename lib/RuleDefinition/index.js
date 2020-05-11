const Definition = require('../Definition');
const initializeRuleDefinition = require('./initializeRuleDefinition');
const getAllowableConditions = require('./getters/getAllowableConditions');
const getRuleAsParameter = require('./getters/getRuleAsParameter');
const getAllowableRuleParameters = require('./getters/getAllowableRuleParameters');
const setAllowableConditions = require('./setters/setAllowableConditions');
const setRuleAsParameter = require('./setters/setRuleAsParameter');
const setAllowableRuleParameters = require('./setters/setAllowableRuleParameters');


class RuleDefinition extends Definition {
    constructor( definition ){
        super( definition );
        this.initializeRuleDefinition( definition );
    }


}

RuleDefinition.prototype.initializeRuleDefinition = initializeRuleDefinition;
RuleDefinition.prototype.getAllowableConditions = getAllowableConditions;
RuleDefinition.prototype.getRuleAsParameter = getRuleAsParameter;
RuleDefinition.prototype.getAllowableRuleParameters = getAllowableRuleParameters;
RuleDefinition.prototype.setAllowableConditions = setAllowableConditions;
RuleDefinition.prototype.setRuleAsParameter = setRuleAsParameter;
RuleDefinition.prototype.setAllowableRuleParameters = setAllowableRuleParameters;


module.exports = RuleDefinition;
