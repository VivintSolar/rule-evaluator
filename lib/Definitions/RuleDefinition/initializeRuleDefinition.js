

//initializeRuleDefinition
module.exports = (function(parameters){
    const {
        allowableConditions,
        ruleAsParameter,
        allowableRuleParameters,
    } = parameters||{};
    this.allowableConditions = allowableConditions;
    this.ruleAsParameter = ruleAsParameter;
    this.allowableRuleParameters = allowableRuleParameters;
    this.definitionAttributes = [ ...this.definitionAttributes||[], "allowableConditions", "ruleAsParameter", "allowableRuleParameters", "rule"];
    this.rule = true;
});
