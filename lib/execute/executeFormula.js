
// executeFormula

const deconstruct = (formula) => {
    let TWS = formula[formula.length - 1] === " ";
    let i = 0;
    const main = () => {
        let arr = [];
        let startIndex = i;
        const addWord = () => {
            if ( i - 1 > startIndex ) {
                arr.push( formula.slice( startIndex, i - 1 ) );
            }
        };
        while ( i < formula.length ) {
            switch( formula[ i++ ] ) {
                case " ":
                    addWord();
                    startIndex = i;
                    continue;
                case "(":
                    arr.push( main() );
                    startIndex = i;
                    continue;
                case ")":
                    addWord();
                    return arr;
            }
        }
        if( !TWS ){
            i = i + 1;
            addWord();
        }
        return arr;
    };
    return main();
};


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
    const appliedConditions = this.appliedConditions || conds;
    const conditions = this.conditions || params;
    let errors;

    const addToErrors = ( message ) => {
        if( !errors ) errors = [];
        if( !errors.includes( message ) ){
            errors.push( message );
        }
    };


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
                if( appliedConditions && appliedConditions[element] !== undefined &&
                    conditions && conditions[element] !== undefined){
                    element = conditions[element]
                } else {
                    error = `Required Parameter Missing ${(appliedConditions||{})[element] ? appliedConditions[element].name : element}`;
                    addToErrors( error );
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

        if( error ){
            return null;
        }
        return result;
    };

    const formulaElements = deconstruct(formula);

    const adjustedFormulaElements = adjustByOperatorPrecedence(formulaElements);

    const all = executeAll( adjustedFormulaElements );

    if( errors ){
        errors.map( error => this.addError( error ));
        return null;
    }
    return all;
});