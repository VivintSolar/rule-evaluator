const RuleEvaluator = require('../../index');
const expected = require('./expected-results');
const assert = require('assert');
const assocObj = require('../associationObject');


module.exports = () => {
    const ruleEvaluator = new RuleEvaluator( assocObj );

    const ruleId = 'testRequirementObject';
    const clientConditions = {
        testConditionEnum: ['option1'],
        testConditionNumber:[ 4, 10, 15 ]
    };

    const statements = ruleEvaluator.getPossibleStatements( ruleId, clientConditions );

    assert.equal( expected, JSON.stringify(statements) );
    console.log(' getPossibleStatements ---> Success!!!!!!!!!');
}