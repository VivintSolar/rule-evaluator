const Evaluator = require('../../../index');
const expected = require('./expected-results');
const assert = require('assert');
const assocObj = require('../../associationObject');


module.exports = () => {
    const evaluator = new Evaluator( assocObj );

    const ruleId = 'testRequirementObject';

    const ruleEvaluator = evaluator.getRule( ruleId );

    const conditions = {
        testConditionEnum: 'option1',
        testConditionNumber: 5
    };

    const evaluated = ruleEvaluator.evaluate( conditions );


    assert.equal( expected, JSON.stringify(evaluated) );
    console.log('RULE --- evaluateRule ---> Success!!!!!!!!!');
};
