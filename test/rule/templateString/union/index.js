const Evaluator = require('../../../../index');
const expected = require('./expected-results');
const assert = require('assert');
const assocObj = require('./associationObject');

// Template String Union
module.exports = () => {
    const evaluator = new Evaluator( assocObj );

    const ruleId = 'generalElectrical';

    const ruleEvaluator = evaluator.getRule( ruleId );

    let conditions = {
        inverterManufacturer: "enphase",
    };

    const evaluated = ruleEvaluator.evaluate( conditions );

    assert.equal( expected, JSON.stringify(evaluated) );
    console.log('RULE --- Template String --- UNION 1 ---> Success!!!!!!!!!');
};