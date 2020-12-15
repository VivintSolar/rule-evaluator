const { REQUIRED_RULE_DEPENDENCY_MISSING } = require('../../RuleErrorHandler/types');


// getAppliedConditions
module.exports = (function( ){

    const uniqueAppliedConditions = [];
    const joinAppliedConditions = ( appliedConditions ) => appliedConditions.map( appliedConditionId => addToAppliedConditions( appliedConditionId ) );
    const addToAppliedConditions = (appliedConditionId) => {
        if( !uniqueAppliedConditions.includes( appliedConditionId ) ) {
            uniqueAppliedConditions.push( appliedConditionId );
        }
    };


    if( this.appliedConditions && typeof this.appliedConditions === 'object' ) {
        joinAppliedConditions( Object.keys( this.appliedConditions ) );
    }

    if( this.ruleDependencyIds && this.parameterIds ){
        this.ruleDependencyIds.map( ruleId => {
            if( this.parameterIds.includes( ruleId ) ){
                const ruleDependency = this.getRule( ruleId );
                if( !ruleDependency ) {
                    this.addError( REQUIRED_RULE_DEPENDENCY_MISSING, { name: ruleId, id: ruleId } )
                } else {
                    const dependencyAllowableConditions = ruleDependency.getAppliedConditions();
                    if( dependencyAllowableConditions.length > 0 ) joinAppliedConditions( dependencyAllowableConditions );
                }
            }
        })
    }

    return uniqueAppliedConditions;
});
