const RuleEvaluator = require('../../../../index');
const { expectedV2 } = require('../expected');
const assert = require('assert');
const associationObjectV2 = require('../../Data/associationObjectV2');

module.exports = () => {
    const ruleEvaluatorV2 = new RuleEvaluator( associationObjectV2 );
    const evaluatedV2 = ruleEvaluatorV2.evaluateAll();

    assert.strictEqual( expectedV2, JSON.stringify( evaluatedV2 ) );
    console.log('ASSOCIATION -- EvaluateAll -- AssociationObjectV2 ---> Success!!!!!!!!!');
};
