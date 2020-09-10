const Evaluator = require('../../../../index');
const expectedContractTypePPA = require('./expected-contract-type-ppa-results');
const assert = require('assert');
const assocObj = require('./associationObject');


module.exports = () => {
    const ruleEvaluator = new Evaluator( assocObj );

    const ruleId = 'allowableInverters';

    const conditions = { contractType: "ppa" }

    const evaluatedContractTypePPA = ruleEvaluator.evaluate( ruleId, conditions );

    console.log('evaluatedContractTypePPA::',evaluatedContractTypePPA)

    assert.strictEqual( JSON.stringify(evaluatedContractTypePPA), expectedContractTypePPA );
    console.log('RULE --- filter & all unique results ---> Success!!!!!!!!!');

    // const ruleEvaluator2 = new Evaluator( assocObj );
    //
    //
    // const evaluatedContractTypePPA = ruleEvaluator2.evaluate( ruleId, conditions );
    //
    // assert.strictEqual( JSON.stringify(evaluatedContractTypePPA), expectedContractTypePPA );
    //
    // console.log('RULE --- filter & PPA contract type ---> Success!!!!!!!!!');

};
