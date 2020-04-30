const { pick, unique } = require('../utilities/util');


// getAppliedConditions
module.exports = (function( definitions ){
    this.appliedConditionIds = null;
    this.parameterIds = null;
    this.statements.map( statement => {
        if( [ 'formula', 'template string' ].includes( this.dataType ) && this.allowableConditions && this.allowableConditions !== 'none' ){
            this.allowableConditions.map( id => {
                const substring = this.dataType === 'template string' ? `{${id}}` : id;
                if( statement.value.includes( substring ) ){
                    if( !this.parameterIds ) this.parameterIds = [];
                    if( !this.parameterIds.includes( id ) ) this.parameterIds.push( id );
                }
            })
        }
        if(statement.condition){
            if( !this.appliedConditionIds ) this.appliedConditionIds = [];
            statement.condition.map( condition => {
                if(!this.appliedConditionIds.includes( condition.left) ){
                    this.appliedConditionIds.push( condition.left )
                }
            })
        }
    });

    this.appliedConditions = (!this.appliedConditionIds && !this.parameterIds) ? null : pick(
        definitions.conditions,
        unique([ ...this.appliedConditionIds||[], ...this.parameterIds||[] ])
    );
    
});