
module.exports = (function({
   id,
   name,
   statements,
   allowableConditions,
   allowableRuleParameters,
   appliedConditions,
   template,
   tags,
   timeStamp,
   definitions,
   getRule,
   getGlobalAttributes,
   updateGlobalAttributes
}){
    this.id = id;
    this.name = name;
    this.statements = statements;
    this.template = template;
    this.dataType = (template||{}).dataType;
    this.siteConditions = null;
    this.description = null;
    this.unsupported = null;
    this.supported = null;
    this.allowableConditions = allowableConditions;
    this.allowableRuleParameters = allowableRuleParameters;
    this.appliedConditions = appliedConditions;
    this.exceptions = null;
    this.tags = tags;
    this.timeStamp = timeStamp;
    this.errors = null;
    this.getRule = getRule;
    this.getGlobalAttributes = getGlobalAttributes;
    this.updateGlobalAttributes = updateGlobalAttributes;

    if( definitions ){
        this.getAppliedConditions( definitions );
        this.getRuleDependencies( definitions );
    }

});