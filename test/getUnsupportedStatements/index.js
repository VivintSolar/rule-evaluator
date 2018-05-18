const RuleEvaluator = require('../../index');
const expected = require('./expected-results');
const assert = require('assert');
const assocObj = require('../associationObject');


module.exports = () => {
    const ruleEvaluator = new RuleEvaluator( assocObj );

    const ruleId = 'testRequirementObject';
    const supportedConditions = [ 'testConditionNumber', 'testConditionEnum' ];

    const statements = ruleEvaluator.getUnsupportedStatements( ruleId, supportedConditions);


    assert.equal( expected, JSON.stringify(statements) );
    console.log(' getUnsupportedStatements ---> Success!!!!!!!!!');
};