
module.exports = (function({
   statements,
   timeStamp,
   getRule,
   getGlobalAttributes,
   updateGlobalAttributes,
   getDefinitions
}){
    this.statements = statements;
    this.siteConditions = null;
    this.description = null;
    this.unsupported = null;
    this.supported = null;
    this.exceptions = null;
    this.timeStamp = timeStamp;
    this.errors = null;
    this.getRule = getRule;
    this.getGlobalAttributes = getGlobalAttributes;
    this.updateGlobalAttributes = updateGlobalAttributes;

    this.getDefinitions = getDefinitions;

    this.initializeAppliedConditions( );
    this.initializeRuleDependencies( );

});