const RuleEvaluator = require('../../../../index');
const assert = require('assert');
const { associationObject } = require('../../AppliedConditions/data');

const expected = JSON.stringify({
    ruleIds: [ 'dwgAutomationTemplateStringRule', 'dwgAutomationNumberRule' ],
    rulesAppliedInSet: [ 'dwgAutomationTemplateStringRule', 'dwgAutomationNumberRule' ]
});


module.exports = () => {

    const viewId = "dwgAutomation";


    const ruleEvaluator = new RuleEvaluator( associationObject );

    ruleEvaluator.defineSetByView( viewId );

    const results = {
        ruleIds: ruleEvaluator.ruleIds,
        rulesAppliedInSet: ruleEvaluator.getRulesAppliedInSet()
    };

    assert.equal( expected, JSON.stringify(results) );
    console.log('AppliedRulesSet --- defineSetByView ---> Success!!!!!!!!!');
};
