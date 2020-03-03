const Evaluator = require('../../../../index');
const expected = require('./expected-results');
const assert = require('assert');
const assocObj = require('./associationObject');


module.exports = () => {
    const evaluator = new Evaluator( assocObj );

    let ruleId = 'epbbFormula';

    let ruleEvaluator = evaluator.getRule( ruleId );

    let conditions = {
        designFactor: 55.6,
        systemAdjustmentFactor: 0.846,
        dcPtcSystemSize: 11.3958
    };

    let evaluated = ruleEvaluator.evaluate( conditions );
    assert.equal( expected.epbbFormula, JSON.stringify(evaluated) );
    console.log('RULE --- Formula Order Of Operations Epbb Formula Example ---> Success!!!!!!!!!');

    ruleId = 'orderTest';

    ruleEvaluator = evaluator.getRule( ruleId );
    evaluator.clearConditions();
    conditions = {
        scenarios: 1
    };

    evaluated = ruleEvaluator.evaluate( conditions );
    assert.equal( expected.scenario1, JSON.stringify(evaluated) );
    console.log('RULE --- Formula Order Of Operations Scenario 1 ---> Success!!!!!!!!!');

    ruleId = 'orderTest';

    ruleEvaluator = evaluator.getRule( ruleId );
    evaluator.clearConditions();
    conditions = {
        scenarios: 2
    };

    evaluated = ruleEvaluator.evaluate( conditions );
    assert.equal( expected.scenario2, JSON.stringify(evaluated) );
    console.log('RULE --- Formula Order Of Operations Scenario 2 ---> Success!!!!!!!!!');

    ruleId = 'orderTest';

    ruleEvaluator = evaluator.getRule( ruleId );
    evaluator.clearConditions();
    conditions = {
        scenarios: 3
    };

    evaluated = ruleEvaluator.evaluate( conditions );
    assert.equal( expected.scenario3, JSON.stringify(evaluated) );
    console.log('RULE --- Formula Order Of Operations Scenario 3 ---> Success!!!!!!!!!');

    ruleId = 'orderTest';

    ruleEvaluator = evaluator.getRule( ruleId );
    evaluator.clearConditions();
    conditions = {
        scenarios: 4
    };

    evaluated = ruleEvaluator.evaluate( conditions );
    assert.equal( expected.scenario4, JSON.stringify(evaluated) );
    console.log('RULE --- Formula Order Of Operations Scenario 4 ---> Success!!!!!!!!!');

    ruleId = 'orderTest';

    ruleEvaluator = evaluator.getRule( ruleId );
    evaluator.clearConditions();
    conditions = {
        scenarios: 5
    };

    evaluated = ruleEvaluator.evaluate( conditions );
    assert.equal( expected.scenario5, JSON.stringify(evaluated) );
    console.log('RULE --- Formula Order Of Operations Scenario 5 ---> Success!!!!!!!!!');

    ruleId = 'orderTest';

    ruleEvaluator = evaluator.getRule( ruleId );
    evaluator.clearConditions();
    conditions = {
        scenarios: 6
    };

    evaluated = ruleEvaluator.evaluate( conditions );
    assert.equal( expected.scenario6, JSON.stringify(evaluated) );
    console.log('RULE --- Formula Order Of Operations Scenario 6 ---> Success!!!!!!!!!');
};
