const FamilyTree = require('../../lib/Association/FamilyTree');
const documents = require('./documents');


module.exports = () => {
    const parameters = {
        items: documents,
        options:{
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
        }
    }
    const familyTree = new FamilyTree( parameters )
    if( familyTree ) console.log('familyTree:::', familyTree)
    else console.log('familyTree: DOEST EXITST?!::')
    // assert.equal( expected.withErrors, JSON.stringify(evaluated) );
    // console.log('RULE --- Formula --- execute.withErrors ---> Success!!!!!!!!!');
};
