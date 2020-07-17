const AssociationTree = require('../../../lib/Association/AssociationTree');
const RuleEvaluator = require('../../../lib/RuleEvaluator');
const { generateAssociationObject, service4780507 } = require('../AssociationData');
const expectedDesignedAhj = 'b743593b-d368-c1a4-d96c-44d0c226e44a';


const assert = require('assert');


module.exports = () => {
    const associationObject = generateAssociationObject();
    const associationTree = new AssociationTree( associationObject );
    const designedAhj = associationTree.getDesignedAHJ( associationObject );
    assert.equal( designedAhj, expectedDesignedAhj );
    console.log(`DesignedAhj -- AssociationTree ---> Success!!!!!!!!!`);

    const ruleEvaluator = new RuleEvaluator( service4780507 );
    const designedAHJ = ruleEvaluator.getDesignedAhj();


    console.log('designedAHJ --->: ', designedAHJ)


};
