const FamilyTree = require('../../lib/Association/FamilyTree');
const documents = require('./documents');


module.exports = () => {
    const parameters = {
        items: documents,
        mapBy:{
            child: "source.id",
        },
        options:{
            aliases:{
                children: "inherit",
                parents: "parents",
                descendents: "descendents",
                ancestors: "ancestors"
            }
        }
    }

    // assert.equal( expected.withErrors, JSON.stringify(evaluated) );
    // console.log('RULE --- Formula --- execute.withErrors ---> Success!!!!!!!!!');
};
