
// Calculator

const calculate = {
    "=": ( input, curRight ) => ( input === curRight ),
    ">": ( input, curRight ) => ( input > curRight ),
    "<": ( input, curRight ) => ( input < curRight ),
    "!=": ( input, curRight ) => ( input !== curRight ),
    ">=": ( input, curRight ) => ( input >= curRight ),
    "<=": ( input, curRight ) => ( input <= curRight )
};

module.exports = (function( left, operator, curRight, calculatorType ){

    const {
        siteConditions,
        conditions,
        appliedConditions
    } = this;

    const getInput = () => {
        if( calculatorType === 'conditions' ) return this.getConditionValue( left );
        return ( this[ calculatorType ] || {} )[ left ];
    }

    let input = getInput();
    const { dataType } = appliedConditions[ left ].template;

    if( dataType === 'date' ){
        input = new Date( input ).getTime();
        curRight = new Date( curRight ).getTime()
    }

    const calculator = {
        siteConditions:() => {
            if( !siteConditions || !Array.isArray( input ) ) return false;
            return input.some( left => calculate[ operator ]( left, curRight ) )
        },
        conditions:() => {
            if( !conditions ) return false;
            return calculate[ operator ]( input, curRight );
        }
    };

    return calculator[ calculatorType ]();

});
