
const {
    REQUIRED_CONDITION_MISSING,
    REQUIRED_CONDITION_PARAMETER_MISSING,
    REQUIRED_RULE_DEPENDENCY_MISSING,
    REQUIRED_RULE_PARAMETER_MISSING
} = require('./types');


//initializeDefinitions
module.exports = (function(){
    this.types = {
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
        },
        [ REQUIRED_RULE_PARAMETER_MISSING ]: {
            id: REQUIRED_RULE_PARAMETER_MISSING,
            name: 'Required Rule Parameter Input Missing'
        }
    };

    this.types = Object.assign({},
        ...Object.keys( this.types ).map( errorType => ({
            [ errorType ]: Object.assign({}, {
                    hasErrors: () => !!this.types[ errorType ].items,
                    addItem: ( item ) => {
                        if( !this.types[errorType].items ) this.types[errorType].items = [];
                        this.types[errorType].items.push( item );
                    },
                    getMessage: () => (
                        this.types[errorType].name + "; " +
                        this.types[errorType].items.map( item => (item.name||item.id)).join(", ")
                    )
                },
                this.types[ errorType ]
            )
        }))
    );
});