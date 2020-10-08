const Evaluator = require('../../../../index');
const testCases = require('./testCases');
const assert = require('assert');
const associationObject = require('./associationObject');

const describeEvaluationParameters = ( ruleId, conditions ) => (
    `${ ruleId } - ${ conditions ? JSON.stringify(conditions) : 'conditions:null' }`
);
const getSuccessMessage = ( ruleId, conditions ) => (
    `Filter - SafeHarborContactRestrictions - ${ describeEvaluationParameters( ruleId, conditions ) } ---> Success!!!!!!!!!`
);
const getFailureMessage = ( ruleId, conditions ) => (
    `Filter - SafeHarborContactRestrictions - ${ describeEvaluationParameters( ruleId, conditions ) } ---> FAILURE !!!!`
);

module.exports = () => {
    testCases.map( (testCase, index) => {
        const { ruleId, conditions, expected } = testCase;
        const ruleEvaluator = new Evaluator( associationObject );
        const evaluated = ruleEvaluator.evaluate( ruleId, conditions );

        assert.strictEqual( JSON.stringify(evaluated), expected );
        console.log( getSuccessMessage( ruleId, conditions ) );
    })

};
