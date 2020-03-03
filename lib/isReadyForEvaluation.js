
const { } = require('./utilities/util');

const REQUIRED_CONDITION_MISSING = "REQUIRED_CONDITION_MISSING";
const REQUIRED_CONDITION_PARAMETER_MISSING = "REQUIRED_CONDITION_PARAMETER_MISSING";
const REQUIRED_RULE_DEPENDENCY_MISSING = "REQUIRED_RULE_DEPENDENCY_MISSING";


module.exports = (function( ){

    if( !this.strictMode ) return true;

    let errorsByType = {
        [ REQUIRED_CONDITION_MISSING ]: {
            id: REQUIRED_CONDITION_MISSING,
            name: 'Required Condition Input Missing'
        },
        [ REQUIRED_CONDITION_PARAMETER_MISSING ]: {
            id: REQUIRED_CONDITION_PARAMETER_MISSING,
            name: 'Required Condition Parameter Input Missing'
        },
        [ REQUIRED_RULE_DEPENDENCY_MISSING ]: {
            id: REQUIRED_RULE_DEPENDENCY_MISSING,
            name: 'Required Rule Dependency Missing from Association'
        }
    };
    errorsByType = Object.assign({},
        ...Object.keys( errorsByType ).map( errorType => ({
            [ errorType ]: Object.assign({},
                errorsByType[ errorType ], {
                    hasErrors: () => !!errorsByType[ errorType ].items,
                    getMessage: () => (
                        errorsByType[errorType].name + "; " +
                        errorsByType[errorType].items.join(", ")
                    )
                })
        }))
    );

    const addErrorItem = ( errorType, item ) => {
        if( errorsByType[errorType] ){
            if( !errorsByType[errorType].items ) errorsByType[errorType].items = [];
            errorsByType[errorType].items.push( item );
        }
    };

    if( this.appliedConditions ){
        this.appliedConditionIds.map( id => {
            const conditionDefinition = this.appliedConditions[id];
            if( !this.conditions.hasOwnProperty( conditionDefinition.id ) ){
                addErrorItem( REQUIRED_CONDITION_MISSING, conditionDefinition.name )
            }
        })
    }
    if( this.ruleDependencies ){
        this.ruleDependencies.map( ruleId => {
            const rule = this.getRule( ruleId );
            if( !rule ){
                addErrorItem( REQUIRED_RULE_DEPENDENCY_MISSING, ruleId )
            }
        })
    }
    if( this.parameterIds ){
        this.parameterIds.map( paramId => {
            const conditionDefinition = this.appliedConditions[ paramId ];
            if( conditionDefinition && !this.conditions.hasOwnProperty( conditionDefinition.id ) ){
                addErrorItem( REQUIRED_CONDITION_PARAMETER_MISSING, conditionDefinition.name )
            }
        })
    }

    Object.values( errorsByType ).map( errorObj => {
        if( errorObj.hasErrors() ){
            this.addError( errorObj.getMessage() );
        }
    })

});