const initializeDefinitions = require('./initializeDefinitions');
const getDefinitions = require('./getters/getDefinitions');
const addDefinition = require('./setters/addDefinition');
const toRawDefinitions = require('./getters/toRawDefinitions');
const getItems = require('./getters/getItems');
const getName = require('./getters/getName');
const getDataType = require('./getters/getDataType');
const getDisplayAs = require('./getters/getDisplayAs');
const getDisplayUnitsAs = require('./getters/getDisplayUnitsAs');
const getItem = require('./getters/getItem');
const getRange = require('./getters/getRange');
const getUnits = require('./getters/getUnits');
const convertToDisplayValue = require('./getters/convertToDisplayValue');
const convertFromDisplayValue = require('./getters/convertFromDisplayValue');
const validateValue = require('./getters/validateValue');
const updateOptions = require('./setters/updateOptions');
const updateDefinition = require('./setters/updateDefinition');


class Definitions {
    constructor( parameters ){
        this.getDefinitions = this.getDefinitions.bind(this);
        this.initializeDefinitions( parameters );
    }






}

Definitions.prototype.initializeDefinitions = initializeDefinitions;
Definitions.prototype.getDefinitions = getDefinitions;
Definitions.prototype.addDefinition = addDefinition;
Definitions.prototype.toRawDefinitions = toRawDefinitions;
Definitions.prototype.getItems = getItems;
Definitions.prototype.getName = getName;
Definitions.prototype.getDataType = getDataType;
Definitions.prototype.getDisplayAs = getDisplayAs;
Definitions.prototype.getDisplayUnitsAs = getDisplayUnitsAs;
Definitions.prototype.getItem = getItem;
Definitions.prototype.getRange = getRange;
Definitions.prototype.getUnits = getUnits;
Definitions.prototype.validateValue = validateValue;
Definitions.prototype.convertFromDisplayValue = convertFromDisplayValue;
Definitions.prototype.convertToDisplayValue = convertToDisplayValue;
Definitions.prototype.updateOptions = updateOptions;
Definitions.prototype.updateDefinition = updateDefinition;

module.exports = Definitions;

