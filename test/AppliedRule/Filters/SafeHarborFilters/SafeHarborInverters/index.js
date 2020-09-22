const Evaluator = require('../../../../../index');
const expectedResults = require('./expected-results');
const assert = require('assert');
const assocObj = require('../associationObject');


module.exports = () => {
    const ruleId = 'allowableInverters';

    const ruleEvaluator1 = new Evaluator( assocObj );
    const conditions1 = { contractType: "ppa", leadSource: "mph" }
    const evaluated1 = ruleEvaluator1.evaluate( ruleId, conditions1 );

    assert.strictEqual( JSON.stringify(evaluated1), expectedResults.contractType.ppa.leadSource.mph );
    console.log('FILTER::SafeHarborInverters --- contractType=ppa, leadSource=mph ---> Success!!!!!!!!!');

    const ruleEvaluator2 = new Evaluator( assocObj );
    const conditions2 = { contractType: "loan", leadSource: "direct" }
    const evaluated2 = ruleEvaluator2.evaluate( ruleId, conditions2 );

    assert.strictEqual( JSON.stringify(evaluated2), expectedResults.contractType.loan.leadSource.direct );
    console.log('FILTER::SafeHarborInverters --- contractType=loan, leadSource=direct ---> Success!!!!!!!!!');

    const ruleEvaluator3 = new Evaluator( assocObj );
    const conditions3 = { contractType: "cash", leadSource: "homebuilder"}
    const evaluated3 = ruleEvaluator3.evaluate( ruleId, conditions3 );

    assert.strictEqual( JSON.stringify(evaluated3), expectedResults.contractType.cash.leadSource.homebuilder );
    console.log('FILTER::SafeHarborInverters --- contractType=cash, leadSource=homebuilder ---> Success!!!!!!!!!');
};
