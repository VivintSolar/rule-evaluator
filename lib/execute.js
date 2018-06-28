

// execute

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

const allowedOperations = [
    '+', '-', '*', '/'
];

const calculate = {
    '+': ( left, right ) => left + right,
    '-':( left, right ) => left - right,
    '*':( left, right ) => left * right,
    '/':( left, right ) => left / right
};


module.exports = (function( formula ){
    const conditions = this.appliedConditions,
        parameters = this.conditions;

    const executeAll = (elements) => {
        let result = null,
            operation = null,
            error = null;
        const execute = ( element ) => {
            if( Array.isArray(element) ){
                return result = ( result || 0 )  + executeAll( element );
            }
            if( allowedOperations.includes( element ) ){
                return operation = element;
            }
            if(isNaN( element )){
                if( conditions && conditions[element] !== undefined &&
                    parameters && parameters[element] !== undefined){
                    element = parameters[element]
                } else {
                    error = true;
                }
            } else {
                element = JSON.parse(element);
            }
            if( !operation ) {
                result = element;
            } else {
                result = calculate[ operation ]( result, element )
            }
        };

        elements.map( element => {
            execute( element )
        });

        if( error ) return formula;
        return result;
    };

    const formulaElements = deconstruct(formula);

    return executeAll( formulaElements );
});