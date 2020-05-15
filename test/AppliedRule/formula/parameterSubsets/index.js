const Evaluator = require('../../../../index');
const expected = require('./expected-results');
const assert = require('assert');
const assocObj = require('./associationObject');

// this order matters for test
const conditionSet = [
    "cecAcSystemSize",
    "systemSizeDc",
    "designFactor",
    "dcPtcSystemSize",
    "powerclerkProductionAmount",
    "powerclerkUsageOffsetPercentage",
    "systemAdjustmentFactor",
    "usageAmount"
];

const conditionValues = {
    "cecAcSystemSize": 1,
    "systemSizeDc": 1,
    "designFactor": 1,
    "dcPtcSystemSize": 1,
    "powerclerkProductionAmount": 1,
    "powerclerkUsageOffsetPercentage": 1,
    "systemAdjustmentFactor": 1,
    "usageAmount": 1
};

module.exports = () => {
    let conditions = {};
    const test1 = conditionSet.map( conditionId => {
        const evaluator = new Evaluator( assocObj );
        const ruleEvaluator = evaluator.getRule( 'epbbFormula' );
        conditions = Object.assign({}, conditions, { [ conditionId ]: conditionValues[ conditionId ]});
        return ruleEvaluator.evaluate( conditions );
    });

    conditions = {};
    const test2 = conditionSet.map( conditionId => {
        const evaluator = new Evaluator( assocObj );
        const ruleEvaluator = evaluator.getRule( 'epbbFormula2' );
        conditions = Object.assign({}, conditions, { [ conditionId ]: conditionValues[ conditionId ]});
        return ruleEvaluator.evaluate( conditions );
    });

    const evaluations = { test1, test2 };

    assert.equal( expected, JSON.stringify(evaluations) );
    console.log('RULE --- Formula --- Parameter Subsets ---> Success!!!!!!!!!');
};
