const RuleEvaluator = require('../../../../index');
const { expectedV1 } = require('../expected');
const assert = require('assert');
const associationObjectV1 = require('../../Data/associationObjectV1');


module.exports = () => {
    const ruleEvaluatorV1 = new RuleEvaluator( associationObjectV1 );
    const evaluatedV1 = ruleEvaluatorV1.evaluateAll();

    assert.strictEqual( expectedV1, JSON.stringify( evaluatedV1 ) );
    console.log('ASSOCIATION -- EvaluateAll -- AssociationObjectV1 ---> Success!!!!!!!!!');
};
