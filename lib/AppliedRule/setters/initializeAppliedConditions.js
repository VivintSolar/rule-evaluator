const { unique } = require('../../utilities/util');


// initializeAppliedConditions
module.exports = (function( ){
    this.appliedConditionIds = null;
    this.appliedConditions = null;
    this.parameterIds = null;
    const addToAppliedConditionIds = ( conditionId ) => {
        if( !this.appliedConditionIds ) this.appliedConditionIds = [];
        if(!this.appliedConditionIds.includes( conditionId ) ){
            this.appliedConditionIds.push( conditionId )
        }
    };
    const addToParameterIds = ( conditionId ) => {
        if( !this.parameterIds ) this.parameterIds = [];
        if(!this.parameterIds.includes( conditionId ) ){
            this.parameterIds.push( conditionId )
        }
    };
    if( this.statements ){
        this.statements.map( statement => {
            if( [ 'formula', 'template string' ].includes( this.dataType ) && this.allowableConditions && this.allowableConditions !== 'none' ){
                this.allowableConditions.map( id => {
                    const substring = this.dataType === 'template string' ? `{${id}}` : id;
                    if( statement.value.includes( substring ) ) addToParameterIds(id);
                })
            }
            if(statement.condition){
                statement.condition.map( condition => addToAppliedConditionIds(condition.left))
            }
        });
    }

    this.appliedConditions = (!this.appliedConditionIds && !this.parameterIds) ? null : this.getDefinitions( unique([ ...this.appliedConditionIds||[], ...this.parameterIds||[] ]) );

});
