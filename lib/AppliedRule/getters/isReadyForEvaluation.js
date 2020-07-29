
const {
    REQUIRED_CONDITION_MISSING,
    REQUIRED_CONDITION_PARAMETER_MISSING,
    REQUIRED_RULE_DEPENDENCY_MISSING
} = require('../../RuleErrorHandler/types');




module.exports = (function( ){

    this.initializeErrorHandler();

    if( this.appliedConditionIds ){
        this.appliedConditionIds.map( conditionId => {
            const { id, name } = (this.appliedConditions||{})[conditionId]||{};
            if( id && !(this.conditions||{}).hasOwnProperty( id ) ){

                this.addError( REQUIRED_CONDITION_MISSING, { id, name } )
            }
        })
    }
    if( this.ruleDependencyIds ){
        this.ruleDependencyIds.map( ruleId => {
            const { name, id } = this.getRule( ruleId )||{};
            if( !id ){
                this.addError( REQUIRED_RULE_DEPENDENCY_MISSING, { name, id } )
            }
        })
    }
    if( this.parameterIds ){
        this.parameterIds.map( paramId => {
            const { id, name } = (this.appliedConditions||{})[ paramId ]||{};
            if( id && !(this.conditions||{}).hasOwnProperty( id ) ){
                this.addError( REQUIRED_CONDITION_PARAMETER_MISSING, { id, name } )
            }
        })
    }

    return !this.errors;

});
