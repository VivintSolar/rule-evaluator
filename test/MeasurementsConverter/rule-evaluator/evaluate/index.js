
const {
    expected:{
        convertToDisplayValue: {
            evaluateAllTypes: evaluateAllTypesExpected
        }
    },
    associationObjects:{
        allDataTypes: allDataTypesAssociationObject
    }
} = require('../../data');
const RuleEvaluator = require('../../../../lib');
const assert = require('assert');



module.exports = () => {
    const options = {
        convertResults: "all"
    }
    const convertAllRuleEvaluator = new RuleEvaluator({ ...allDataTypesAssociationObject, options });
    const convertAllEvaluated = convertAllRuleEvaluator.evaluateAll();

    const defaultRuleEvaluator = new RuleEvaluator( allDataTypesAssociationObject );
    const defaultEvaluated = defaultRuleEvaluator.evaluateAll();


    const results = {
        convertAll:{
            orderedListRule: convertAllEvaluated.orderedListRule.value,
            objectOfSupportedTypesRule: convertAllEvaluated.objectOfSupportedTypesRule.value,
            basicBooleanRule: convertAllEvaluated.basicBooleanRule.value,
            customDisplayBooleanRule: convertAllEvaluated.customDisplayBooleanRule.value
        },
        default:{
            orderedListRule: defaultEvaluated.orderedListRule.value,
            objectOfSupportedTypesRule: defaultEvaluated.objectOfSupportedTypesRule.value,
            basicBooleanRule: defaultEvaluated.basicBooleanRule.value,
            customDisplayBooleanRule: defaultEvaluated.customDisplayBooleanRule.value
        }
    }

    assert.strictEqual( JSON.stringify(results), evaluateAllTypesExpected );
    console.log(`RuleEvaluator -- Measurements --- evaluate ---> Success!!!!!!!!!`);
};
