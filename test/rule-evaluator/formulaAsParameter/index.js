const RuleEvaluator = require('../../../index');
const assocObject = require('./associationObject');
const assert = require('assert');
const expected = require('./expected-results');
const expected2 = require('./expected-results2');
const outputJsonFile = require('../../utilities/outputJsonFile');
const path = require("path");

const outputPath = path.resolve('./output');

// formulaAsParameter
module.exports = () => {

    const ruleEvaluator = new RuleEvaluator(assocObject);

    const ruleId = "testTemplateString";

    let conditions = {
        numberConditionForTestFormula: 0,
        numberConditionForTestTemplateString: 0,
        testStringCondition: "| this is my sub-string |",
        contractType: 'loan',
        serviceElevation: 2000,
        squareFootage: 1600,
    };

    const evaluated1 = ruleEvaluator.evaluate(ruleId, conditions);

    // console.log(evaluated1);
    //
    // outputJsonFile( outputPath, "RE After Eval # 1", ruleEvaluator, true);


    assert.equal( expected, JSON.stringify( evaluated1 ) );
    console.log('RE --- formulaAsParameter - defaults ---> Success!!!!!!!!!');

    ruleEvaluator.clearConditions();
    conditions.numberConditionForTestFormula = 4;
    conditions.numberConditionForTestTemplateString = 4;

    const evaluated2 = ruleEvaluator.evaluate(ruleId, conditions);

    assert.equal( expected2, JSON.stringify( evaluated2 ) );
    console.log('RE --- formulaAsParameter - targeted value w/ condition ---> Success!!!!!!!!!');

    ruleEvaluator.clearConditions();
    conditions = {
        numberConditionForTestFormula: 0
    };
    const evaluated3 = ruleEvaluator.evaluate(ruleId, conditions);

    console.log('evaluated3:::::',evaluated3);

};