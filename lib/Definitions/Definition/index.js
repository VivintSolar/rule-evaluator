const initializeDefinition = require('./initializeDefinition');
const getItems = require('./getters/getItems');
const getName = require('./getters/getName');
const getDataType = require('./getters/getDataType');
const getDisplayAs = require('./getters/getDisplayAs');
const getDisplayUnitsAs = require('./getters/getDisplayUnitsAs');
const getImports = require('./getters/getImports');
const getItem = require('./getters/getItem');
const getRange = require('./getters/getRange');
const getStep = require('./getters/getStep');
const getTags = require('./getters/getTags');
const getTemplate = require('./getters/getTemplate');
const getTemplates = require('./getters/getTemplates');
const getUnits = require('./getters/getUnits');
const getOnConflict = require('./getters/getOnConflict');
const toRawDefinition = require('./getters/toRawDefinition');
const convertFromDisplayValue = require('./getters/convertFromDisplayValue');
const convertToDisplayValue = require('./getters/convertToDisplayValue');
const convertNumberToDisplayValue = require('./getters/convertNumberToDisplayValue');
const convertNumberFromDisplayValue = require('./getters/convertNumberFromDisplayValue');
const validateValue = require('./getters/validateValue');
const withinRange = require('./getters/withinRange');

const setItems = require('./setters/setItems');
const setName = require('./setters/setName');
const setDataType = require('./setters/setDataType');
const setDisplay = require('./setters/setDisplay');
const setDisplayUnitsAs = require('./setters/setDisplayUnitsAs');
const setImports = require('./setters/setImports');
const setItem = require('./setters/setItem');
const setRange = require('./setters/setRange');
const setStep = require('./setters/setStep');
const setTags = require('./setters/setTags');
const setTemplate = require('./setters/setTemplate');
const setTemplates = require('./setters/setTemplates');
const setUnits = require('./setters/setUnits');
const setOnConflict = require('./setters/setOnConflict');
const setTemplateAttr = require('./setters/setTemplateAttr');



class Definition {
    constructor( definition ){
        this.initializeDefinition( definition );
    }


}

Definition.prototype.initializeDefinition = initializeDefinition;
Definition.prototype.getItems = getItems;
Definition.prototype.getName = getName;
Definition.prototype.getDataType = getDataType;
Definition.prototype.getDisplayAs = getDisplayAs;
Definition.prototype.getDisplayUnitsAs = getDisplayUnitsAs;
Definition.prototype.getImports = getImports;
Definition.prototype.getItem = getItem;
Definition.prototype.getRange = getRange;
Definition.prototype.getStep = getStep;
Definition.prototype.getTags = getTags;
Definition.prototype.getTemplate = getTemplate;
Definition.prototype.getTemplates = getTemplates;
Definition.prototype.getUnits = getUnits;
Definition.prototype.getOnConflict = getOnConflict;
Definition.prototype.toRawDefinition = toRawDefinition;
Definition.prototype.convertNumberFromDisplayValue = convertNumberFromDisplayValue;
Definition.prototype.convertNumberToDisplayValue = convertNumberToDisplayValue;
Definition.prototype.convertToDisplayValue = convertToDisplayValue;
Definition.prototype.convertFromDisplayValue = convertFromDisplayValue;
Definition.prototype.validateValue = validateValue;
Definition.prototype.withinRange = withinRange;

Definition.prototype.setItems = setItems;
Definition.prototype.setName = setName;
Definition.prototype.setDataType = setDataType;
Definition.prototype.setDisplay = setDisplay;
Definition.prototype.setDisplayUnitsAs = setDisplayUnitsAs;
Definition.prototype.setImports = setImports;
Definition.prototype.setItem = setItem;
Definition.prototype.setRange = setRange;
Definition.prototype.setStep = setStep;
Definition.prototype.setTags = setTags;
Definition.prototype.setTemplate = setTemplate;
Definition.prototype.setTemplates = setTemplates;
Definition.prototype.setUnits = setUnits;
Definition.prototype.setOnConflict = setOnConflict;
Definition.prototype.setTemplateAttr = setTemplateAttr;

module.exports = Definition;
