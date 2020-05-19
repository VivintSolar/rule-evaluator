const RuleEvaluator = require('../../../index');
const expected = require('./expected-results');
const assert = require('assert');
const associationObject = require('./associationObject');

module.exports = () => {
    const ruleEvaluator = new RuleEvaluator( associationObject );


    const results = ruleEvaluator.evaluateAll();

    assert.equal( expected, JSON.stringify(results) );
    console.log('AppliedRules --- SortType ---> Success!!!!!!!!!');
};
