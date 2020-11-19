const RuleEvaluator = require('../../../index');
const assocObject = require('./associationObject');
const assert = require('assert');
const expected = require('./expected-results');

// nullResults
module.exports = () => {

    const ruleEvaluator = new RuleEvaluator(assocObject);
    const rulesToTest = [...Object.keys(assocObject.ahj.rules), 'fakeRule'];

    const results = {};
    rulesToTest.map(ruleId => {
        results[ruleId] = ruleEvaluator.evaluate(ruleId, {
            serviceElevation: 3
        });
    });

    assert.equal(expected, JSON.stringify(results));
    console.log('RE --- nullResults ---> Success!!!!!!!!!');

};
