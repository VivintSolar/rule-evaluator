const Evaluator = require('../../../index');
const expected = require('./expected-results');
const assert = require('assert');
const assocObj = require('../../associationObject');


module.exports = () => {
    const evaluator = new Evaluator( assocObj );

    const ruleId = 'testRequirementObject';

    const conditions = {
        testConditionNumber: 2,
        testConditionEnum: 'option2'
    };

    const ruleEvaluator = evaluator.getRule( ruleId );

    const statements = ruleEvaluator.getAppliedStatement( conditions, 'attrName3' );

    assert.equal( expected, JSON.stringify(statements) );
    console.log('RULE --- getAppliedStatement ---> Success!!!!!!!!!');
};
