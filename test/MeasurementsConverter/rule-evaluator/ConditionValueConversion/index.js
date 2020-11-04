



const RuleEvaluator = require('../../../../index');
const assert = require('assert');
const associationObjectV2 = require('./Data/associationObjectV2');
// const outputJsonFile = require('../../../utilities/outputJsonFile');
const path = require('path');

// const outputPath = path.resolve('./output');

const expected = require('./Data/expected')


// outputJsonFile( outputPath, 'TemplateStringRuleEvaluation1', evaluated, true )

module.exports = () => {
    const ruleEvaluator = new RuleEvaluator( associationObjectV2 );
    const conditions = {
        // need to check how the client handles rounding off like this to potentially keep it consistent.
        // also it might be helpful to look into how google does its translation in the search
       numberCondition: {
           // value: 393.701, // is ~10meters (=10.0000054) will this cause any problems if were trying for 10?
           value: 393.701, // is ~10meters (=10.0000054) will this cause any problems if were trying for 10?
           units: "in"
       },
        numberCondition2: {
            value: 32.8084, // is ~10meters (=10.00000032) will this cause any problems if were trying for 10?
            units: "ft",
            roundTo: 2
        }
    };
    const ruleId = 'templateStringRule';

    const evaluated = ruleEvaluator.evaluate( ruleId, conditions );

    assert.strictEqual( JSON.stringify(evaluated), expected.default );
    console.log('MC -- RE -- ConditionValueConversion -- Default ---> Success!!!!!!!!!');
}
