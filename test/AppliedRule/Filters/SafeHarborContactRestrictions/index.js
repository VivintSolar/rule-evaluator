const Evaluator = require('../../../../index');
const expectedAllUnique = require('./expected');
const assert = require('assert');
const associationObject = require('./associationObject');


module.exports = () => {
    const ruleEvaluator = new Evaluator( associationObject );

    const ruleId = 'allowableModules';

    const evaluatedAllUnique = ruleEvaluator.evaluate( ruleId );

    assert.strictEqual( JSON.stringify(evaluatedAllUnique), expectedAllUnique );
    console.log('RULE --- filter & all unique results ---> Success!!!!!!!!!');

};
