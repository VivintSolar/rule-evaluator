const FamilyTree = require('../../FamilyTree');

class AssociationTree extends FamilyTree {
    constructor( params ){
        const  options = {
            mapBy:{
                child: "source.id",
                item: "id",
                element: "id"
            },
            aliases:{
                children: "inherit",
                parents: "parents",
                descendents: "descendents",
                ancestors: "ancestors"
            },
            elementFields: [ "id", "name", "type", "State", "inherit" ]
        };
        super( { ...params, options } );
    }
}


module.exports = AssociationTree;

