

//initializeRuleDefinition
module.exports = (function({
   allowableConditions,
   ruleAsParameter,
   allowableRuleParameters,
}){
    this.allowableConditions = allowableConditions;
    this.ruleAsParameter = ruleAsParameter;
    this.allowableRuleParameters = allowableRuleParameters;
    this.definitionAttributes = [ ...this.definitionAttributes||[], "allowableConditions", "ruleAsParameter", "allowableRuleParameters", "rule"];
    this.rule = true;
});