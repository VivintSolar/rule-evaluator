

// getPossibleStatements

const evalType = 'supported';

module.exports = (function( siteConditions ){

    if( siteConditions ) {
        this.siteConditions = siteConditions;
    }


    const {
        statements
    } = this.evaluateStatements( evalType );

    this.supported = statements;

    return statements;
});
