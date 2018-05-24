const RuleEvaluator = require('../../../index');
const expected = require('./expected-results');
const assert = require('assert');
const assocObj = require('../../associationObject');


module.exports = () => {
    const ruleEvaluator = new RuleEvaluator( assocObj );

    const ruleId = 'testRequirementObject';
    const siteConditions = {
        testConditionEnum: [ 'option1' ],
        testConditionNumber:[ 4, 10, 15 ]
    };

    const statements = ruleEvaluator.getPossibleStatements( ruleId, siteConditions );

    assert.equal( expected, JSON.stringify( statements ) );
    assert.equal( JSON.stringify( ruleEvaluator.rules[ ruleId ].supported ), JSON.stringify( statements ) );
    console.log('RE --- getPossibleStatements ---> Success!!!!!!!!!');
};
