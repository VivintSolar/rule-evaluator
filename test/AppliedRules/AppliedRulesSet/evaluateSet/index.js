const RuleEvaluator = require('../../../../index');
const assert = require('assert');
const associationObject = require('../../getAppliedConditions/associationObject');

const expected = JSON.stringify([
    {
        dwgAutomationTemplateStringRule: {
            templateString: 'Template string value w/ {snowLoad}',
            exceptions: null,
            conditions: null,
            value: null,
            errors: [
                'Required Condition Input Missing; Service Elevation',
                'Required Rule Parameter Input Missing; Snow Load'
            ],
            id: 'dwgAutomationTemplateStringRule'
        },
        dwgAutomationNumberRule: {
            exceptions: null,
            conditions: null,
            value: null,
            errors: [ 'Required Condition Input Missing; DWG Automation Number Condition' ],
            id: 'dwgAutomationNumberRule'
        }
    },
    {
        dwgAutomationTemplateStringRule: {
            templateString: 'Template string value w/ {snowLoad}',
            exceptions: null,
            conditions: null,
            value: 'Template string value w/ 50',
            errors: null,
            id: 'dwgAutomationTemplateStringRule'
        },
        dwgAutomationNumberRule: {
            exceptions: null,
            conditions: [ {
                left: "dwgAutomationNumberCondition",
                operator: "=",
                right: 1
            } ],
            value: 1,
            errors: null,
            id: 'dwgAutomationNumberRule'
        }
    }
]);


module.exports = () => {

    const viewId = "dwgAutomation";


    const ruleEvaluator = new RuleEvaluator( associationObject );

    ruleEvaluator.defineSetByView( viewId );

    const result = ruleEvaluator.evaluateSet();

    const ruleEvaluator1 = new RuleEvaluator( associationObject );

    const conditions1 = {
        dwgAutomationNumberCondition: 1,
        serviceElevation: 2500
    };
    ruleEvaluator1.defineSetByView( viewId );
    const result1 = ruleEvaluator.evaluateSet( conditions1 );


    const results = [ result, result1 ];
    console.log('results::',results);

    assert.equal( expected, JSON.stringify(results) );
    console.log('AppliedRulesSet --- evaluateSet ---> Success!!!!!!!!!');
};