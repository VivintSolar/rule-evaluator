const RuleEvaluator = require('../../../index');
const assocObject = require('./associationObject');
const assert = require('assert');
const formulaAsTemplateStringParameterDefaults = require('./expected/formulaAsTemplateStringParameter-defaults');
const formulaAsTemplateStringParameterConditions = require('./expected/formulaAsTemplateStringParameter-conditions');
const templateStringExpectedResults = require('./expected/templateStringExpectedResults');
const path = require("path");
const evaluateWithNumberByRange = require('../../utilities/evaluateWithNumberByRange');


// rulesAsParameters
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

    assert.equal( formulaAsTemplateStringParameterDefaults, JSON.stringify( evaluated1 ) );
    console.log('RE --- formulaAsTemplateStringParameter - defaults ---> Success!!!!!!!!!');


    ruleEvaluator.clearConditions();
    conditions.numberConditionForTestFormula = 4;
    conditions.numberConditionForTestTemplateString = 4;

    const evaluated2 = ruleEvaluator.evaluate(ruleId, conditions);

    assert.equal( formulaAsTemplateStringParameterConditions, JSON.stringify( evaluated2 ) );
    console.log('RE --- formulaAsTemplateStringParameter - targeted value w/ condition ---> Success!!!!!!!!!');


    const ruleId2 = "testTemplateString2";
    const ruleId3 = "testTemplateStringNested";

    const results = {
        ...evaluateWithNumberByRange( ruleId2, "testNumberCondition", assocObject, [-1, 3]),
        ...evaluateWithNumberByRange( ruleId3, "testNumberCondition2", assocObject, [-1, 3]),
        ...evaluateWithNumberByRange( ruleId3, ["testNumberCondition2", "testNumberCondition"], assocObject, [-1, 3]),
    };

    assert.equal( templateStringExpectedResults, JSON.stringify( results ) );
    console.log('RE --- rules as template string parameters ---> Success!!!!!!!!!');

};