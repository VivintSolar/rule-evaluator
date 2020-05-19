const RuleEvaluator = require('../../../index');
const expected = require('./expected-results');
const assert = require('assert');
const { associationObject } = require('../AppliedConditions/data');


module.exports = () => {

    const tagId = "dwgAutomation";

    const ruleEvaluator = new RuleEvaluator( associationObject );

    const result = ruleEvaluator.evaluateByTag( tagId );

    const ruleEvaluator1 = new RuleEvaluator( associationObject );

    const conditions1 = {
        dwgAutomationNumberCondition: 1,
        serviceElevation: 2500
    };

    const result1 = ruleEvaluator1.evaluateByTag( tagId, conditions1 );

    const results = [ result, result1 ];

    assert.equal( expected, JSON.stringify(results) );
    console.log('AppliedRules --- evaluateByTag ---> Success!!!!!!!!!');


};
