const RuleEvaluator = require('../../../../index');
const expected = require('../expected');
const assert = require('assert');
const associationObjectV1 = require('../../Data/associationObjectV1');
const outputJsonFile = require('../../../utilities/outputJsonFile')
const path = require('path');
const outputPath = path.resolve('./output');


module.exports = () => {
    const ruleEvaluatorV1 = new RuleEvaluator( associationObjectV1 );
    const evaluatedV1 = ruleEvaluatorV1.evaluateAll();

    outputJsonFile( outputPath, 'testResults', evaluatedV1, true);

    assert.strictEqual( expected, JSON.stringify( evaluatedV1 ) );
    console.log('ASSOCIATION -- EvaluateAll -- AssociationObjectV1 ---> Success!!!!!!!!!');
};
