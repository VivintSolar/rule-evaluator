const Evaluator = require('../../../../index');
const expected = require('./expected-results');
const expected2 = require('./expected-results2');
const expected3 = require('./expected-results3');
const assert = require('assert');
const assocObj = require('./associationObject');


module.exports = () => {
    const evaluator = new Evaluator( assocObj );

    let ruleId = 'epbbFormula';

    let ruleEvaluator = evaluator.getRule( ruleId );

    let conditions = {
        systemSizeDc: 0,
        designFactor: 55,
        cecAcSystemSize: 6.653
    };

    let evaluated = ruleEvaluator.evaluate( conditions );

    assert.equal( expected, JSON.stringify(evaluated) );
    console.log('RULE --- Formula --- Formula Parenthesis 1 ---> Success!!!!!!!!!');

    ruleId = 'epbbFormula2';

    ruleEvaluator = evaluator.getRule( ruleId );
    evaluator.clearConditions();
    conditions = {
        cecAcSystemSize: 4
    };

    evaluated = ruleEvaluator.evaluate( conditions );

    assert.equal( expected2, JSON.stringify(evaluated) );
    console.log('RULE --- Formula --- Formula Parenthesis 2 ---> Success!!!!!!!!!');

    ruleId = 'epbbFormula3';

    ruleEvaluator = evaluator.getRule( ruleId );
    evaluator.clearConditions();
    conditions = {
        designFactor: 55.6,
        systemAdjustmentFactor: 0.846,
        dcPtcSystemSize: 11.3958
    };

    evaluated = ruleEvaluator.evaluate( conditions );
    assert.equal( expected3, JSON.stringify(evaluated) );
    console.log('RULE --- Formula --- Formula Parenthesis 3 ---> Success!!!!!!!!!');
};
