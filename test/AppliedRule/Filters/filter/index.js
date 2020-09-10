const Evaluator = require('../../../../index');
const expectedAllUnique = require('./expected-all-unique-results');
const expectedContractTypePPA = require('./expected-contract-type-results');
const assert = require('assert');
const assocObj = require('./associationObject');


module.exports = () => {
    const ruleEvaluator = new Evaluator( assocObj );

    const ruleId = 'allowableBatteries';

    const evaluatedAllUnique = ruleEvaluator.evaluate( ruleId );

    assert.strictEqual( JSON.stringify(evaluatedAllUnique), expectedAllUnique );
    console.log('RULE --- filter & all unique results ---> Success!!!!!!!!!');

    const ruleEvaluator2 = new Evaluator( assocObj );

    const conditions = { contractType: "ppa"}

    const evaluatedContractTypePPA = ruleEvaluator2.evaluate( ruleId, conditions );

    assert.strictEqual( JSON.stringify(evaluatedContractTypePPA), expectedContractTypePPA );

    console.log('RULE --- filter & PPA contract type ---> Success!!!!!!!!!');

};
