const Evaluator = require('../../../index');
const expected = require('./expected-results');
const assert = require('assert');
const assocObj = require('../../associationObject');


module.exports = () => {
    const evaluator = new Evaluator( assocObj );

    const ruleId = 'testRequirementObject';

    const clientConditions = {
        testConditionEnum: ['option1'],
        testConditionNumber:[ 4, 10, 15 ]
    };

    const ruleEvaluator = evaluator.getRule( ruleId );

    const statements = ruleEvaluator.getPossibleStatements( clientConditions );

    assert.equal( expected, JSON.stringify(statements) );
    console.log('RULE --- getPossibleStatements ---> Success!!!!!!!!!');
};
