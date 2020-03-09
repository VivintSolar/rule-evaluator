
const {
    REQUIRED_CONDITION_PARAMETER_MISSING,
    REQUIRED_RULE_DEPENDENCY_MISSING,
    REQUIRED_RULE_PARAMETER_MISSING
} = require('./types');

const initializeTypesDefinition = require('./initializeTypesDefinition');

class RuleErrorHandler {
    constructor({ getRuleAttribute }) {
        this.addItem = this.addItem.bind(this);
        this.hasErrors = this.hasErrors.bind(this);
        this.getMessages = this.getMessages.bind(this);
        this.getMissingParameters = this.getMissingParameters.bind(this);
        this.getAllMissingParameters = this.getAllMissingParameters.bind(this);
        this.joinHandler = this.joinHandler.bind(this);
        this.getRuleAttribute = getRuleAttribute;
        this.types = {};
        this.initializeTypesDefinition();
    }

    getAllMissingParameters(){
        return [
            ...(this.types[REQUIRED_CONDITION_PARAMETER_MISSING].items||[]).map( ({id}) => id ),
            ...(this.types[REQUIRED_RULE_DEPENDENCY_MISSING].items||[]).map( ({id}) => id ),
            ...(this.types[REQUIRED_RULE_PARAMETER_MISSING].items||[]).map( ({id}) => id )
        ];
    }

    getMissingParameters( string ){
        const dataType = this.getRuleAttribute("dataType");
        const allMissingParameters = this.getAllMissingParameters();

        return allMissingParameters.filter( missingParamId => (
            string.includes( dataType === "template string" ? `{${missingParamId}}` : missingParamId )
        ));
    }

    addItem(errorType, item){
        if( this.types[ errorType ] ){
            this.types[ errorType ].addItem( item );
        } else {
            console.error('Invalid Type Provided to RuleErrorHandler.addItem Type: ' + errorType)
        }
    }

    getMessages(){
        return Object.values( this.types ).reduce( ( messages, errorDefinition) => {
            if( errorDefinition.hasErrors() ){
                messages = [ ...messages, errorDefinition.getMessage() ]
            }
            return messages;
        }, [])
    }

    hasErrors(){
        return Object.values( this.types ).some( errorDefinition => errorDefinition.hasErrors() )
    }

    joinHandler({ types }){
        Object.values( types ).map( typeDef => {
            if( this.types[typeDef.id].items || typeDef.items ){
                this.types[typeDef.id].items = [ ...this.types[typeDef.id].items||[], ...typeDef.items||[]]
            }
        })
    }

}

RuleErrorHandler.prototype.initializeTypesDefinition = initializeTypesDefinition;

module.exports = RuleErrorHandler;