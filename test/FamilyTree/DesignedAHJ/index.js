const AssociationTree = require('../../../lib/Association/AssociationTree');
const RuleEvaluator = require('../../../lib/RuleEvaluator');
const { generateAhj, service4780507 } = require('../AssociationData');
const expectedDesignedAhj1 = 'b743593b-d368-c1a4-d96c-44d0c226e44a';
const expectedDesignedAhj2 = '193a4aa7-4299-4755-964d-ff27f1df3b75';


const assert = require('assert');


module.exports = () => {
    const ahjObject = generateAhj();
    const associationTree = new AssociationTree( ahjObject );
    const designedAHJ1 = associationTree.getDesignedAHJ( ahjObject );
    assert.equal( designedAHJ1, expectedDesignedAhj1 );
    console.log(`DesignedAhj -- AssociationTree ---> Success!!!!!!!!!`);

    const ruleEvaluator = new RuleEvaluator( service4780507 );
    const designedAHJ2 = ruleEvaluator.getDesignedAHJ();

    assert.equal( designedAHJ2, expectedDesignedAhj2 );
    console.log(`DesignedAhj -- RuleEvaluator ---> Success!!!!!!!!!`);


};
