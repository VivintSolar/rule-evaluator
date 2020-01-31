


// getAppliedConditions
module.exports = ( statements, dataType, allowableConditions ) => {
    let appliedConditions = null;
    statements.map( statement => {
        if( [ 'formula', 'template string' ].includes( dataType ) && allowableConditions && allowableConditions !== 'none' ){
            allowableConditions.map( id => {
                const substring = dataType === 'template string' ? `{${id}}` : id;
                if( statement.value.includes( substring ) ){
                    if( !appliedConditions ) appliedConditions = [];
                    if( !appliedConditions.includes(id) ) {
                        appliedConditions.push( id )
                    }
                }
            })
        }
        if(statement.condition){
            if( !appliedConditions ) appliedConditions = [];
            statement.condition.map( condition => {
                if(!appliedConditions.includes( condition.left) ){
                    appliedConditions.push(condition.left)
                }
            })
        }
    });
    return appliedConditions;
};