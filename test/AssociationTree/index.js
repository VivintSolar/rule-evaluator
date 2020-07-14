const AssociationTree = require('../../lib/Association/AssociationTree');
const documents = require('./documents');


module.exports = () => {
    const parameters = { items: documents };
    const associationTree = new AssociationTree( parameters );
    if( associationTree ) console.log('associationTree:::', associationTree)
    else console.log('associationTree: DOEST EXITST?!::')
    // assert.equal( expected.withErrors, JSON.stringify(evaluated) );
    // console.log('RULE --- Formula --- execute.withErrors ---> Success!!!!!!!!!');
};
