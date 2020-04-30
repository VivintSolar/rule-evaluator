// const calculator = require('./calculator');


class Definition {
    constructor( definition ){

    }
    initialize( definition ){
        const { id, name, tags, applyTo, allowableConditions, ruleAsParameter, allowableParameters, template } = definition;
        const {} = template;
        this.id = id;
        this.name = name;
        this.tags = tags;
        this.template = template;

    }

    getItems(){

    }


}

// Rule.prototype.initializeRule = initializeRule;

module.exports = Definition;
