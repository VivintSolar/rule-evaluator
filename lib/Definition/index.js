const initializeDefinition = require('./initializeDefinition');
const getItems = require('./getters/getItems');
const getName = require('./getters/getName');
const getAllowableConditions = require('./getters/getAllowableConditions');
const getApplyTo = require('./getters/getApplyTo');
const getDataType = require('./getters/getDataType');
const getDisplayAs = require('./getters/getDisplayAs');
const getDisplayUnitsAs = require('./getters/getDisplayUnitsAs');
const getImports = require('./getters/getImports');
const getItem = require('./getters/getItem');
const getRange = require('./getters/getRange');
const getRuleAsParameter = require('./getters/getRuleAsParameter');
const getStep = require('./getters/getStep');
const getTags = require('./getters/getTags');
const getTemplate = require('./getters/getTemplate');
const getTemplates = require('./getters/getTemplates');
const getUnits = require('./getters/getUnits');


class Definition {
    constructor( definition ){
        this.initializeDefinition( definition );
    }


}

Definition.prototype.initializeDefinition = initializeDefinition;
Definition.prototype.getItems = getItems;
Definition.prototype.getName = getName;
Definition.prototype.getAllowableConditions = getAllowableConditions;
Definition.prototype.getApplyTo = getApplyTo;
Definition.prototype.getDataType = getDataType;
Definition.prototype.getDisplayAs = getDisplayAs;
Definition.prototype.getDisplayUnitsAs = getDisplayUnitsAs;
Definition.prototype.getImports = getImports;
Definition.prototype.getItem = getItem;
Definition.prototype.getRange = getRange;
Definition.prototype.getRuleAsParameter = getRuleAsParameter;
Definition.prototype.getStep = getStep;
Definition.prototype.getTags = getTags;
Definition.prototype.getTemplate = getTemplate;
Definition.prototype.getTemplates = getTemplates;
Definition.prototype.getUnits = getUnits;

module.exports = Definition;
