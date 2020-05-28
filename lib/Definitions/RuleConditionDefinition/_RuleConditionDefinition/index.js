const RuleDefinition = require('../../RuleDefinition');

const _initializeRuleConditionDefinition = require('./_initializeRuleConditionDefinition');
const getApplyTo = require('./getters/getApplyTo');
const setApplyTo = require('./setters/setApplyTo');


class _RuleConditionDefinition extends RuleDefinition {
    constructor( definition ){
        super( definition );
        this._initializeRuleConditionDefinition( definition );
    }


}

_RuleConditionDefinition.prototype._initializeRuleConditionDefinition = _initializeRuleConditionDefinition;
_RuleConditionDefinition.prototype.getApplyTo = getApplyTo;
_RuleConditionDefinition.prototype.setApplyTo = setApplyTo;


module.exports = _RuleConditionDefinition;
