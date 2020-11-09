



const RuleEvaluator = require('../../../../index');
const measurements = require('../../../../lib/Measurements');
const assert = require('assert');
const associationObjectV2 = require('./Data/associationObjectV2');
const path = require('path');

const expected = require('./Data/expected')


module.exports = () => {
    const ruleEvaluator = new RuleEvaluator( associationObjectV2 );
    const conditions = {
        // need to check how the client handles rounding off like this to potentially keep it consistent.
        // also it might be helpful to look into how google does its translation in the search
       numberCondition: {
           // value: 393.701, // is ~10meters (=10.0000054) will this cause any problems if were trying for 10?
           value: measurements.reconstruct(10, 'm', 'in'), // is ~10meters (=10.0000054) will this cause any problems if were trying for 10?
           units: "in",
           roundTo: 4
       },
        numberCondition2: {
            value: measurements.reconstruct(10, 'm', 'ft'), // is ~10meters (=10.00000032) will this cause any problems if were trying for 10?
            units: "ft",
            roundTo: 2
        }
    };
    const ruleId = 'templateStringRule';

    const evaluated = ruleEvaluator.evaluate( ruleId, conditions );

    assert.strictEqual( JSON.stringify(evaluated), expected.default );
    console.log('MC -- RE -- ConditionValueConversion -- Default ---> Success!!!!!!!!!');
}
