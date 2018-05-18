
// Calculator

const calculate = {
    "=": ( input, curRight ) => ( input === curRight ),
    ">": ( input, curRight ) => ( input > curRight ),
    "<": ( input, curRight ) => ( input < curRight ),
    "!=": ( input, curRight ) => ( input !== curRight ),
    ">=": ( input, curRight ) => ( input >= curRight ),
    "<=": ( input, curRight ) => ( input <= curRight )
};

module.exports = (function( left, operator, curRight ){



    let input = this._conditions[ left ];
    const definition = this._definitions.conditions[ left ];
    const { dataType } = definition.template;

    if( dataType === 'date' ){
        input = new Date( input ).getTime();
        curRight = new Date( curRight ).getTime()
    }

    if( this._evaluationType === "applied" && Array.isArray( input ) ){
        return input.some( left => calculate[ operator ]( left, curRight ) )
    }

    if( this._evaluationType !== "applied" ){
        return calculate[ operator ]( input, curRight );
    }

});