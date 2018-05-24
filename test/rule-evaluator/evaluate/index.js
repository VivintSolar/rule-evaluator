const Evaluator = require('../../../index');
const expected = require('./expected-results');
const assert = require('assert');
const assocObj = require('../../associationObject');


module.exports = () => {
    const evaluator = new Evaluator( assocObj );

    const ruleId = 'testRequirementObject';

    const conditions = {
        testConditionEnum: 'option1',
        testConditionNumber: 5
    };

    const evaluated = evaluator.evaluate( ruleId, conditions );


    assert.equal( expected, JSON.stringify(evaluated) );
    console.log('RE --- evaluateRule ---> Success!!!!!!!!!');
};
