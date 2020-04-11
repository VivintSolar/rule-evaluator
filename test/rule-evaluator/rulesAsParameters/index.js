const RuleEvaluator = require('../../../index');
const assocObject = require('./associationObject');
const assert = require('assert');
const formulaAsTemplateStringParameterDefaults = require('./expected/formulaAsTemplateStringParameter-defaults');
const formulaAsTemplateStringParameterConditions = require('./expected/formulaAsTemplateStringParameter-conditions');
const outputJsonFile = require('../../utilities/outputJsonFile');
const path = require("path");

const outputPath = path.resolve('./output');

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

    outputJsonFile( outputPath, "testTemplateString - defaults", evaluated1, true);


    assert.equal( formulaAsTemplateStringParameterDefaults, JSON.stringify( evaluated1 ) );
    console.log('RE --- formulaAsTemplateStringParameter - defaults ---> Success!!!!!!!!!');

    ruleEvaluator.clearConditions();
    conditions.numberConditionForTestFormula = 4;
    conditions.numberConditionForTestTemplateString = 4;

    const evaluated2 = ruleEvaluator.evaluate(ruleId, conditions);


    outputJsonFile( outputPath, "testTemplateString - with conditions", evaluated2 );

    assert.equal( formulaAsTemplateStringParameterConditions, JSON.stringify( evaluated2 ) );
    console.log('RE --- formulaAsTemplateStringParameter - targeted value w/ condition ---> Success!!!!!!!!!');

    let results = {};
    const addToResults = (identifier, item) => results[identifier] = item;
    const ruleId2 = "testTemplateString2";

    const ruleEvaluator2 = new RuleEvaluator(assocObject);

    addToResults( "Empty Conditions", ruleEvaluator2.evaluate( ruleId2 ) );
    const executeWithTestNumberCondition = ( count ) => {
        for( let i = 0; i < count; i++ ){
            const conditions = { testNumberCondition: i };
            const ruleEvaluator3 = new RuleEvaluator(assocObject);
            addToResults( `With Condition = ${i}`, ruleEvaluator3.evaluate(ruleId2, conditions) )
        }
    };

    executeWithTestNumberCondition(4);

    // console.log('results:::::',results);

    outputJsonFile( outputPath, "testTemplateString2", results);

};