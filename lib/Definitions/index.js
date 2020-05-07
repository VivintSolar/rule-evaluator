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


class Definitions {
    constructor( definitions ){
        this.getDefinitions = this.getDefinitions.bind(this);
        this.initializeDefinitions( definitions );
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


module.exports = Definitions;

