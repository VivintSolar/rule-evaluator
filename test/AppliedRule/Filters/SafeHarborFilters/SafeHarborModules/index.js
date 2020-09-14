const Evaluator = require('../../../../../index');
const expectedResults = require('./expected-results');
const assert = require('assert');
const assocObj = require('../associationObject');


module.exports = () => {
    const ruleId = 'allowableModules';

    const ruleEvaluator1 = new Evaluator( assocObj );
    const conditions1 = { contractType: "ppa", leadSource: "mph", isSpecialPurchaseSafeHarbor: true }
    const evaluated1 = ruleEvaluator1.evaluate( ruleId, conditions1 );

    assert.strictEqual( JSON.stringify(evaluated1), expectedResults.isSpecialPurchaseSafeHarbor.true.contractType.ppa.leadSource.mph );
    console.log('FILTER::SafeHarborModules --- isSpecialPurchaseSafeHarbor=true, contractType=ppa, leadSource=mph ---> Success!!!!!!!!!');

    const ruleEvaluator2 = new Evaluator( assocObj );
    const conditions2 = { contractType: "lease", leadSource: "direct", isSpecialPurchaseSafeHarbor: false }
    const evaluated2 = ruleEvaluator2.evaluate( ruleId, conditions2 );

    assert.strictEqual( JSON.stringify(evaluated2), expectedResults.isSpecialPurchaseSafeHarbor.false.contractType.lease.leadSource.direct );
    console.log('FILTER::SafeHarborModules --- isSpecialPurchaseSafeHarbor=false, contractType=lease, leadSource=direct ---> Success!!!!!!!!!');

    const ruleEvaluator3 = new Evaluator( assocObj );
    const conditions3 = { contractType: "cash", leadSource: "homebuilder"}
    const evaluated3 = ruleEvaluator3.evaluate( ruleId, conditions3 );

    assert.strictEqual( JSON.stringify(evaluated3), expectedResults.contractType.cash.leadSource.homebuilder );
    console.log('FILTER::SafeHarborModules --- contractType=cash, leadSource=homebuilder ---> Success!!!!!!!!!');
};
