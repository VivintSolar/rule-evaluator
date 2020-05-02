
module.exports = (function({
   statements,
   timeStamp,
   definitions,
   getRule,
   getGlobalAttributes,
   updateGlobalAttributes
}){
    this.statements = statements;
    this.siteConditions = null;
    this.description = null;
    this.unsupported = null;
    this.supported = null;
    this.exceptions = null;
    this.tags = tags;
    this.timeStamp = timeStamp;
    this.errors = null;
    this.getRule = getRule;
    this.getGlobalAttributes = getGlobalAttributes;
    this.updateGlobalAttributes = updateGlobalAttributes;
    this.initialize = true;

    if( definitions ){
        this.initializeAppliedConditions( definitions );
        this.getRuleDependencies( definitions );
    }

});