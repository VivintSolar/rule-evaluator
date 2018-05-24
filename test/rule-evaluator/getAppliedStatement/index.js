const RuleEvaluator = require('../../../index');
const expected = require('./expected-results');
const assert = require('assert');
const assocObj = require('../../associationObject');


module.exports = () => {
    const ruleEvaluator = new RuleEvaluator( assocObj );

    const ruleId = 'testRequirementObject';
    const conditions = {
        testConditionNumber: 2,
        testConditionEnum: 'option2'
    };

    const statements = ruleEvaluator.getAppliedStatement( ruleId, conditions, 'attrName3' );


    assert.equal( expected, JSON.stringify(statements) );
    console.log('RE --- getAppliedStatement ---> Success!!!!!!!!!');
};
