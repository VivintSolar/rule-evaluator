
//parseStatements

module.exports = (function( id, appliedRule ){
    let descriptions;
    const { statements, timeStamp } = appliedRule;

    const definition = this._definitions.rules[id];
    const { dataType } = definition.template;

    const evaluated = statements.filter(statement=>{
        if( this._evaluationType === 'exceptions' && statement.description ){
            if(!descriptions) descriptions = [];
            descriptions.push(statement.description);
        }
        return this.evaluateConditions(statement.condition)
    });
    if( dataType==='object' && this._evaluationType === 'exceptions' ){
        descriptions = this.objectDescriptions(statements)
    }
    return Object.assign(
        descriptions ? { descriptions } : {},
        timeStamp ? { timeStamp } : {},
        mergeStatements({statements:evaluated, definition, swapReferences:true})
    )

});