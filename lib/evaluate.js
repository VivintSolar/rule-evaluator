

module.exports = (function( conditions ){

    this.errors = null;

    this.conditions = conditions;

    const {
        statements,
        exceptions
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

    return Object.assign({},
        statement,
        { errors: this.errors }
    );

});
