const Evaluator = require('../../../index');
const expected = JSON.parse(require('./expected-results'));
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

    assert.equal( JSON.stringify(expected.value), JSON.stringify(evaluated.value) );
    console.log('RULE --- evaluateRule ---> Success!!!!!!!!!');
};
