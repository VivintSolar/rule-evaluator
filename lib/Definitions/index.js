const initializeDefinitions = require('./initializeDefinitions');
const getDefinitions = require('./getters/getDefinitions');
const addDefinition = require('./setters/addDefinition');
const toRawDefinitions = require('./getters/toRawDefinitions');


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


module.exports = Definitions;

