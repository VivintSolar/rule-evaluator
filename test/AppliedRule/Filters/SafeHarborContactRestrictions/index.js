const Evaluator = require('../../../../index');
const testCases = require('./testCases');
const assert = require('assert');
const associationObject = require('./associationObject');
const outputJsonFile = require('../../../utilities/outputJsonFile')
const path = require('path')

const outputPath = path.resolve('./output')

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

        outputJsonFile(outputPath, describeEvaluationParameters( ruleId, conditions ), evaluated, index === 0 )

        // console.log(`--- ${ describeEvaluationParameters( ruleId, conditions ) } ---`);
        // console.log( JSON.stringify(evaluated) )
        try{
            assert.strictEqual( JSON.stringify(evaluated), expected );
            console.log( getSuccessMessage( ruleId, conditions ) );
        }catch( err ){
            console.log( getFailureMessage( ruleId, conditions ) );
        }


    })

};
