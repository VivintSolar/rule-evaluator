const RuleEvaluator = require('../../../../index');
const expected = require('../expected');
const assert = require('assert');
const associationObjectV2 = require('../../Data/associationObjectV2');


module.exports = () => {
    const ruleEvaluatorV2 = new RuleEvaluator( associationObjectV2 );

    assert.strictEqual( expected, JSON.stringify( ruleEvaluatorV2.ahj ) );
    console.log('ASSOCIATION -- Initialization -- AssociationObjectV2 ---> Success!!!!!!!!!');
};
