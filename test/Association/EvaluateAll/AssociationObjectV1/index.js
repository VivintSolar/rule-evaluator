const RuleEvaluator = require('../../../../index');
const expected = require('../expected');
const assert = require('assert');
const associationObjectV1 = require('../../Data/associationObjectV1');

module.exports = () => {
    const ruleEvaluatorV1 = new RuleEvaluator( associationObjectV1 );
    const evaluatedV1 = ruleEvaluatorV1.evaluateAll();

    assert.strictEqual( expected, JSON.stringify( evaluatedV1 ) );
    console.log('ASSOCIATION -- EvaluateAll -- AssociationObjectV1 ---> Success!!!!!!!!!');
};
