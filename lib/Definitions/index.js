const initializeDefinitions = require('./initializeDefinitions');
const get = require('./getters/get');
const add = require('./setters/add');


class Definitions {
    constructor( definitions ){
        this.initializeDefinitions( definitions );
    }


}

Definitions.prototype.initializeDefinitions = initializeDefinitions;
Definitions.prototype.get = get;
Definitions.prototype.add = add;


module.exports = Definitions;

