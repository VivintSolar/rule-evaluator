const RuleEvaluator = require('../../../index');
const expected = require('./expected-results');
const assert = require('assert');
const associationObject = require('./associationObject');


module.exports = () => {



    const ruleEvaluator = new RuleEvaluator( associationObject );

    const appliedConditions = ruleEvaluator.getAppliedConditions();



    assert.equal( expected, JSON.stringify(appliedConditions) );
    console.log('AppliedRules --- getAppliedConditions ---> Success!!!!!!!!!');
};
