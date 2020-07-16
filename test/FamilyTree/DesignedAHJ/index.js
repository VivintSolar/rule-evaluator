const AssociationTree = require('../../../lib/Association/AssociationTree');
const { generateAssociationObject } = require('../AssociationData');
const expectedDesignedAhj = 'b743593b-d368-c1a4-d96c-44d0c226e44a';

const assert = require('assert');


module.exports = () => {
    const associationObject = generateAssociationObject();
    const associationTree = new AssociationTree( associationObject );
    const designedAhj = associationTree.getDesignedAHJ( associationObject );

    console.log(designedAhj);

    assert.equal( designedAhj, expectedDesignedAhj );
    console.log(`DesignedAhj -- ${ designedAhj } ---> Success!!!!!!!!!`);

};
