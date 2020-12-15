
module.exports = (function({
   statements,
   timeStamp,
   getRule,
   getGlobalAttributes,
   updateGlobalAttributes,
   getDefinitions,
   definitions,
   options
}){
    this.siteConditions = null;
    this.description = null;
    this.unsupported = null;
    this.supported = null;
    this.exceptions = null;
    this.timeStamp = timeStamp;
    this.errors = null;
    this.getRule = getRule;
    this.getGlobalAttributes = getGlobalAttributes || this.getGlobalAttributes;
    this.updateGlobalAttributes = updateGlobalAttributes || this.updateGlobalAttributes;
    this.appliedRuleAttributes = [ "id", "name", "statements" ];

    this.definitions = definitions;
    this.getDefinitions = getDefinitions || this.getDefinitions;
    this.options = options;

    this.initializeErrorHandler();
    this.initializeStatements( statements );

});
