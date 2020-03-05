const Evaluator = require('../../../../index');
const expected = require('./expected-results');
const assert = require('assert');
const assocObj = require('../../../associationObject');


module.exports = () => {
    const evaluator = new Evaluator( assocObj );

    const ruleId = 'alternativeMaxACSystemSizeCalculation';

    const ruleEvaluator = evaluator.getRule( ruleId );

    let conditions = {
        squareFootage: 2000
    };

    let evaluated = ruleEvaluator.evaluate( conditions );

    assert.equal( expected.singleParam, JSON.stringify(evaluated) );
    console.log('RULE --- Formula --- execute.singleParam ---> Success!!!!!!!!!');

    evaluator.clearConditions();
    conditions = {
        squareFootage: 1800,
        systemSizeAc: 100,
        serviceElevation: 2223
    };

    evaluated = ruleEvaluator.evaluate( conditions );

    assert.equal( expected.withConditions, JSON.stringify(evaluated) );
    console.log('RULE --- Formula --- execute.withConditions ---> Success!!!!!!!!!');

    evaluator.clearConditions();
    evaluated = ruleEvaluator.evaluate( null );

    assert.equal( expected.withErrors, JSON.stringify(evaluated) );
    console.log('RULE --- Formula --- execute.withErrors ---> Success!!!!!!!!!');
};
