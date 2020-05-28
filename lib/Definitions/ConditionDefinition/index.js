const Definition = require('../Definition');
const initializeConditionDefinition = require('./initializeConditionDefinition');
const getApplyTo = require('./getters/getApplyTo');
const setApplyTo = require('./setters/setApplyTo');


class ConditionDefinition extends Definition {
    constructor( definition ){
        super( definition );
        this.initializeConditionDefinition( definition );
    }


}

ConditionDefinition.prototype.initializeConditionDefinition = initializeConditionDefinition;
ConditionDefinition.prototype.getApplyTo = getApplyTo;
ConditionDefinition.prototype.setApplyTo = setApplyTo;


module.exports = ConditionDefinition;
