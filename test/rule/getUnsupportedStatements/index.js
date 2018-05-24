const Evaluator = require('../../../index');
const expected = require('./expected-results');
const assert = require('assert');
const assocObj = require('../../associationObject');


module.exports = () => {
    const evaluator = new Evaluator( assocObj );

    const ruleId = 'testRequirementObject';

    const ruleEvaluator = evaluator.getRule( ruleId );

    const supportedConditions = [ 'testConditionEnum', 'testConditionNumber' ];

    const statements = ruleEvaluator.getUnsupportedStatements( supportedConditions );

    assert.equal( expected, JSON.stringify( statements ) );
    console.log('RULE --- getUnsupportedStatements ---> Success!!!!!!!!!');
};
