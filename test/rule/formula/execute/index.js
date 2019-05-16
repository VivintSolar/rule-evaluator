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
    console.log('RULE --- execute.singleParam ---> Success!!!!!!!!!');

    conditions = {
        squareFootage: 1800,
        systemSizeAc: 100,
        serviceElevation: 2223
    };

    evaluated = ruleEvaluator.evaluate( conditions );

    assert.equal( expected.withConditions, JSON.stringify(evaluated) );
    console.log('RULE --- execute.withConditions ---> Success!!!!!!!!!');

    evaluated = ruleEvaluator.evaluate( null );

    assert.equal( expected.withErrors, JSON.stringify(evaluated) );
    console.log('RULE --- execute.withErrors ---> Success!!!!!!!!!');
};
