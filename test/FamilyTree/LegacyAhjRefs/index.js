const AssociationTree = require('../../../lib/Association/AssociationTree');
const RuleEvaluator = require('../../../lib/RuleEvaluator');
const { generateAhj, service4780507 } = require('../AssociationData');
const expectedLegacyAhjRefs = require('./expectedLegacyAhjRefs');
const expectedLegacyAhjRefs2 = require('./expectedLegacyAhjRefs2');


const assert = require('assert');


module.exports = () => {
    const ahjObject = generateAhj();
    const associationTree = new AssociationTree( ahjObject );
    const legacyAhjRefs = associationTree.getLegacyAhjRefs();
    assert.equal( JSON.stringify(legacyAhjRefs), expectedLegacyAhjRefs );
    console.log(`LegacyAhjRefs -- AssociationTree ---> Success!!!!!!!!!`);

    const ruleEvaluator = new RuleEvaluator( service4780507 );
    const legacyAhjRefs2 = ruleEvaluator.getLegacyAhjRefs();

    assert.equal( JSON.stringify(legacyAhjRefs2), expectedLegacyAhjRefs2 );
    console.log(`LegacyAhjRefs -- RuleEvaluator ---> Success!!!!!!!!!`);


};
