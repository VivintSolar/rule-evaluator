
const deconstruct = require('../utilities/deconstructFormula');

// executeFormula
const operators = {
    '+': {
        symbol: '+',
        precedence: 1,
        calculate: ( left, right ) => left + right
    },
    '-':{
        symbol: '-',
        precedence: 1,
        calculate: ( left, right ) => left - right,
    },
    '*': {
        symbol: '*',
        precedence: 2,
        calculate: ( left, right ) => left * right
    },
    '/':{
        symbol: '/',
        precedence: 2,
        calculate: ( left, right ) => left / right
    }
};

const adjustByOperatorPrecedence = ( formulaElements ) => {
    const adjust = ( elements ) => {
        let adjusted = [], prevOp, needsAdjustment, prevElem, operator;
        elements.map( element => {
            if( Array.isArray( element ) || ( !Array.isArray( element ) && !operators[ element ]) ){
                if( Array.isArray( element ) ) element = adjust( element );
                if( prevOp && operator && prevOp.precedence < operator.precedence ){
                    needsAdjustment = true;
                    element = [ adjusted[ adjusted.length - 1 ], operator.symbol, element];
                    adjusted[ adjusted.length - 1 ] = element;
                } else {
                    if( operator ) adjusted.push( operator.symbol );
                    adjusted.push(element)
                }
                prevElem = element;
            } else {
                prevOp = operator;
                operator = operators[ element ];
            }
        });
        if( !needsAdjustment ) return adjusted;
        else return adjust( adjusted )
    };
    return adjust( formulaElements );


};

module.exports = (function( formula, conds, params ){
    this.appliedConditions = conds || this.appliedConditions;
    this.conditions = params || this.conditions;
    let errors;

    const addToErrors = ( message ) => {
        if( !errors ) errors = [];
        if( !errors.includes( message ) ){
            errors.push( message );
        }
    };

    const missingParameterValues = this.errorHandler.getMissingParameters(formula);



    const executeAll = (elements) => {
        let result = null,
            operation = null,
            error = null;
        const execute = ( element ) => {
            if( Array.isArray(element) ){
                let executed = executeAll( element );
                if( executed !== null && !isNaN( executed ) ) {
                    if( result === null ) result = 0 + executed;
                    else result = operators[ operation ].calculate( result, executed );
                }
                return result;
            }
            if( operators[element] ){
                return operation = element;
            }
            if(isNaN( element )){
                const definition = this.getDefinitions( element );
                if( definition && !missingParameterValues.includes( element )  ){
                    element = this.getConditionValue( definition, {convertResults: "all"} );
                }
            } else {
                element = JSON.parse(element);
            }
            if( !operation ) {
                result = element;
            } else {
                result = operators[ operation ].calculate( result, element )
            }
        };

        elements.map( element => {
            execute( element );
        });

        return result;
    };

    const formulaElements = deconstruct(formula);

    const adjustedFormulaElements = adjustByOperatorPrecedence(formulaElements);

    const all = executeAll( adjustedFormulaElements );

    if( missingParameterValues.length > 0 ){
        return null;
    }
    return all;
});
