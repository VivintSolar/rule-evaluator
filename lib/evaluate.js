

module.exports = (function( conditions ){

    this.errors = null;

    const globalAttributes = this.getGlobalAttributes( ["conditions", "strictMode"] );
    this.strictMode = globalAttributes.strictMode;

    if( conditions ){
        this.conditions = this.updateGlobalAttributes({ conditions }).conditions;
    } else {
        this.conditions = globalAttributes.conditions;
    }

    this.isReadyForEvaluation();

    if( this.ruleDependencies ){
        this.ruleDependencies.map( ruleId => {
            const dependency = this.getRule( ruleId );
            dependency.evaluate();
            if( dependency.errors ){
                this.joinErrorHandler( dependency.errorHandler )
            }
            else {
                this.conditions = this.updateGlobalAttributes({
                    conditions: {
                        [ ruleId ]: dependency.value
                    }
                }).conditions;
            }
        });
    }


    const {
        statements,
        exceptions // ive been noticing some evaluations dont have the proper exceptions, especially for formula and template strings.
    } = this.evaluateStatements();


    const statement = this.mergeStatements({
        statements,
        exceptions
    });

    this.exceptions = statement.exceptions;
    this.description = statement.description;
    this.source = statement.source;

    this.value = statement.value;
    this.condition = statement.conditions;
    this.formula = statement.formula;
    this.templateString = statement.templateString;

    return Object.assign({},
        statement,
        { errors: this.errors }
    );

});
