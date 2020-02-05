

module.exports = (function( conditions ){

    this.errors = null;

    this.conditions = conditions;

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
