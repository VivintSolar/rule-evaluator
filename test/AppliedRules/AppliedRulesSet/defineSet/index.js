const RuleEvaluator = require('../../../../index');
const assert = require('assert');
const { associationObject } = require('../../AppliedConditions/data');

const expected = JSON.stringify({
    ruleIds: [ 'numberRule', 'snowLoad', 'fakeRule' ],
    rulesAppliedInSet: [ 'numberRule', 'snowLoad' ]
});


module.exports = () => {

    const rulesSet = [ "numberRule", "snowLoad", "fakeRule" ];


    const ruleEvaluator = new RuleEvaluator( associationObject );

    ruleEvaluator.defineSet( rulesSet );

    const results = {
        ruleIds: ruleEvaluator.ruleIds,
        rulesAppliedInSet: ruleEvaluator.getRulesAppliedInSet()
    };

    assert.equal( expected, JSON.stringify(results) );
    console.log('AppliedRulesSet --- defineSet ---> Success!!!!!!!!!');
};
