const Evaluator = require('../../../../index');
const expected = require('./expected-results');
const expected2 = require('./expected-results2');
const assert = require('assert');
const assocObj = require('./associationObject');


//Applied Conditions Test
module.exports = () => {
    const evaluator = new Evaluator( assocObj );

    const ruleId = 'epbbFormula';

    const ruleEvaluator = evaluator.getRule( ruleId );

    let conditions = {
        cecACSystemSize: 16.778124,
        designFactor: 72.3,
        systemAdjustmentFactor: 0.846,
        dcPtcSystemSize: 16.9476,
        usageAmount: 12353,
        powerclerkProductionAmount: 18079,
        powerclerkUsageOffsetPercentage: 146,
        proratedPtcDcSystemSizeCondition: 11.579938204546712
    };

    const evaluated = ruleEvaluator.evaluate( conditions );

    assert.equal( expected, JSON.stringify(evaluated) );
    console.log('RULE --- Formula --- Applied Conditions 1 ---> Success!!!!!!!!!');

    evaluator.clearConditions();
    conditions = {
        cecACSystemSize: 8.67834,
        designFactor: 45.3,
        systemAdjustmentFactor: 0.846,
        dcPtcSystemSize: 8.766,
        usageAmount: 6247,
        powerclerkProductionAmount: 6081,
        powerclerkUsageOffsetPercentage: 97,
        proratedPtcDcSystemSizeCondition: 9.005295510606809
    };

    const evaluated2 = ruleEvaluator.evaluate( conditions );


    assert.equal( expected2, JSON.stringify(evaluated2) );
    console.log('RULE --- Formula --- Applied Conditions 2 ---> Success!!!!!!!!!');

};
