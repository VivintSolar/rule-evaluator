const RuleEvaluator = require('../../../index');
const expected = require('./expected-results');
const assert = require('assert');
const { associationObject, numberRule } = require('./data');


module.exports = () => {

    const ruleEvaluator = new RuleEvaluator( associationObject );
    const allAppliedConditions = ruleEvaluator.getAllAppliedConditions();

    assert.equal( expected.allAppliedConditions, JSON.stringify(allAppliedConditions) );
    console.log('AppliedRules --- getAllAppliedConditions ---> Success!!!!!!!!!');

    const ruleEvaluator1 = new RuleEvaluator( associationObject );
    const numberRuleAppliedConditions = ruleEvaluator1.getAppliedConditions( numberRule.id );

    assert.equal( expected.numberRuleAppliedConditions, JSON.stringify(numberRuleAppliedConditions) );
    console.log('AppliedRules --- numberRuleAppliedConditions ---> Success!!!!!!!!!');

    const dwgAutomation  = 'dwgAutomation';
    const ruleEvaluator2 = new RuleEvaluator( associationObject );
    const tagAppliedConditions = ruleEvaluator2.getAppliedConditionsByTag( dwgAutomation );

    assert.equal( expected.tagAppliedConditions, JSON.stringify(tagAppliedConditions) );
    console.log('AppliedRules --- getAppliedConditionsByTag ---> Success!!!!!!!!!');

    const ruleEvaluator3 = new RuleEvaluator( associationObject );
    ruleEvaluator3.defineSetByView( dwgAutomation );
    const setAppliedConditions = ruleEvaluator3.getAppliedConditionsBySet();

    assert.equal( expected.setAppliedConditions, JSON.stringify(setAppliedConditions) );
    console.log('AppliedRules --- getAppliedConditionsBySet ---> Success!!!!!!!!!');

};
