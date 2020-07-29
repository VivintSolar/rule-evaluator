
// initializeStatements
module.exports = (function( statements ){
    this.statements = statements;
    this.initializeAppliedConditions( );
    this.initializeRuleDependencies( );
});
