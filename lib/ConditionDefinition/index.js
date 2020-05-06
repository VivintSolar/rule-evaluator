const Definition = require('../Definition');
const initializeConditionDefinition = require('./initializeConditionDefinition');
const getApplyTo = require('./getters/getApplyTo');


class ConditionDefinition extends Definition {
    constructor( definition ){
        super( definition );
        this.initializeConditionDefinition( definition );
    }


}

ConditionDefinition.prototype.initializeConditionDefinition = initializeConditionDefinition;
ConditionDefinition.prototype.getApplyTo = getApplyTo;


module.exports = ConditionDefinition;
