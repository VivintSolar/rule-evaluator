

// getUnsupportedStatements

const evalType = 'unsupported';

module.exports = (function( supportedConditions ){

    if( supportedConditions ){
        this.supportedConditions = supportedConditions;
    }

    const {
        statements
    } = this.evaluateStatements( evalType );

    this.unsupported = statements;

    return statements;
});
