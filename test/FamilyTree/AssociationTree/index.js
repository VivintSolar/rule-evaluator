const AssociationTree = require('../../../lib/Association/AssociationTree');
const documents = require('./documents');
const expectedElements = require('./expectedElements');
const expectedTree = require('./expectedTree');

const assert = require('assert');


module.exports = () => {
    const parametersElementsFromDocuments = { items: documents };
    const associationTreeElementsFromDocuments = new AssociationTree( parametersElementsFromDocuments );
    console.log('Elements',JSON.stringify(associationTreeElementsFromDocuments.getElements()));

    assert.equal( expectedElements, JSON.stringify(associationTreeElementsFromDocuments.getElements()) );
    console.log('AssociationTree -- ElementsFromDocuments ---> Success!!!!!!!!!');


    const parametersElementsToTree = { elements: associationTreeElementsFromDocuments.getElements() };
    const associationTreeElementsToTree = new AssociationTree( parametersElementsToTree );

    const tree = associationTreeElementsToTree.getTree();
    console.log(JSON.stringify( tree ));


    assert.equal(expectedTree, JSON.stringify(tree) );
    console.log('AssociationTree --- parametersElementsToTree ---> Success!!!!!!!!!');
};
