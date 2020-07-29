
// addStatement
module.exports = (function( statement ){
    if(this.validateStatement(statement)){
        const statements = [ ...this.statements||[], statement ];
        this.initializeStatements( statements );
    }
});
