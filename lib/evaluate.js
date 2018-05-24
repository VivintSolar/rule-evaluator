
const mergeStatements = require('./mergeStatements');


module.exports = (function( conditions ){
    this.conditions = conditions;

    const { template } = this;

    const {
        statements,
        exceptions
    } = this.evaluateStatements();


    const statement = mergeStatements({
        statements,
        exceptions,
        template
    });

    this.exceptions = statement.exceptions;
    this.description = statement.description;
    this.source = statement.source;

    this.value = statement.value;
    this.condition = statement.conditions;

    return statement;

});
