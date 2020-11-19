const RuleEvaluator = require('../../../../index');
const expected = require('../expected');
const assert = require('assert');
const associationObjectV1 = require('../../Data/associationObjectV1');


module.exports = () => {
    const ruleEvaluatorV1 = new RuleEvaluator( associationObjectV1 );

    assert.strictEqual( expected, JSON.stringify( ruleEvaluatorV1.ahj ) );
    console.log('ASSOCIATION -- Initialization -- AssociationObjectV1 ---> Success!!!!!!!!!');
};
