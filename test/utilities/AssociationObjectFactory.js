
const definitionsFactory = require('./definitions/factory');
const Definitions = require('../../lib/Definitions');


class AssociationObjectFactory {
    constructor(associationObject) {
        this.associationObject = associationObject || {};
        this.definitions = undefined;
        this.ahj = undefined;
    }
    initializeDefinitionsWithBatch( batch ){
        const _definitions = this.definitionsFactory.generateDefinitions(batch, true);
        this.definitions = new Definitions({definitions: _definitions});
    }
    build(){
        this.associationObject = {};
        if( this.definitions ) this.associationObject.definitions = this.definitions.toRawDefinitions();
        if( this.ahj ) this.associationObject.ahj = this.ahj;
        return this.associationObject;
    }
    addStatementToAppliedRule( id, statement ){
        if( !this.ahj ) this.ahj = { };
        if( !this.ahj.rules ) this.ahj.rules = { };
        if( !this.ahj.rules[ id ] ) this.ahj.rules[ id ] = { id, statements:[] };
        this.ahj.rules[ id ].statements.push( statement );
    }
    batchAddStatementToAppliedRule( batch ) {
        batch.map( ({id, statement }) =>  this.addStatementToAppliedRule(id, statement ))
    }
};

AssociationObjectFactory.prototype.definitionsFactory = definitionsFactory;

module.exports = AssociationObjectFactory;