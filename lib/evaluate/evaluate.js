
const { REQUIRED_RULE_PARAMETER_MISSING } = require('../RuleErrorHandler/types');

module.exports = (function( conditions ){

    this.errors = null;

    const globalAttributes = this.getGlobalAttributes( ["conditions"] );

    if( conditions ){
        this.conditions = this.updateGlobalAttributes({ conditions }).conditions;
    } else {
        this.conditions = globalAttributes.conditions;
    }

    this.isReadyForEvaluation();

    if( this.ruleDependencyIds ){
        this.updateGlobalAttributes({ seriesEvaluation: true });
        this.ruleDependencyIds.map( ruleId => {
            const dependency = this.getRule( ruleId );
            if( dependency ){
                dependency.evaluate();
                if( dependency.errors ) {
                    this.joinErrorHandler( dependency.errorHandler );
                    this.addError( REQUIRED_RULE_PARAMETER_MISSING, { id: dependency.id, name: dependency.name } )
                } else {
                    this.conditions = this.updateGlobalAttributes({
                        conditions: {
                            [ ruleId ]: dependency.value
                        }
                    }).conditions;
                }
            } else this.addError( REQUIRED_RULE_PARAMETER_MISSING, { id: ruleId, name: ruleId } );
        });
        this.updateGlobalAttributes({ seriesEvaluation: false });
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
        {
            errors: this.errors,
            id: this.id
        }
    );

});
