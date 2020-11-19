const { objectRestSpread } = require('../../utilities/util');


//updateConditions
module.exports = (function( updateObject, hard ){
    this.conditions = Object.assign({},
        !hard ? this.conditions : {},
        ...Object.keys(updateObject||{}).map( conditionId => {
            let value = updateObject[ conditionId ];
            if( typeof value === 'object'){
                const { value: _value, rest: options } = objectRestSpread( value, [ "value" ]);
                value = _value;
                if( Object.keys( options ).length > 0 ) this.updateOptions( options, conditionId );
            }
            return {
                [ conditionId ]: value
            }
        })
    )
})
