const Evaluator = require('../../../../index');
const expected = require('./expected-results');
const assert = require('assert');
const associationObjectV2 = require('./associationObjectV2');


const conditions = {
    singleParam:{
        squareFootage: 2000 / 3.28084
    },
    withConditions:{
        squareFootage: {
            value: 1800,
            units: "ft"
        },
        systemSizeAc: 100,
        serviceElevation: {
            value: 2223,
            units: "in"
        }
    }
}


module.exports = () => {
    const evaluated = {},
        ruleEvaluator = new Evaluator( associationObjectV2 ),
        ruleId = 'alternativeMaxACSystemSizeCalculation';

    evaluated.singleParam = ruleEvaluator.evaluate( ruleId, conditions.singleParam );

    evaluated.withConditions = ruleEvaluator.evaluate( ruleId, conditions.withConditions );

    evaluated.withErrors = ruleEvaluator.evaluate( ruleId );

    assert.strictEqual( expected, JSON.stringify(evaluated) );
    console.log('AppliedRules --- Formulas --- ConvertParametersToDisplayValue ---> Success!!!!!!!!!');
};
