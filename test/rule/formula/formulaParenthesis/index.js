const Evaluator = require('../../../../index');
const expected = require('./expected-results');
const assert = require('assert');
const assocObj = require('./associationObject');


module.exports = () => {
    const evaluator = new Evaluator( assocObj );

    const ruleId = 'epbbFormula';

    const ruleEvaluator = evaluator.getRule( ruleId );

    let conditions = {
        systemSizeDc: 0,
        designFactor: 55,
        cecAcSystemSize: 6.653
    };

    let evaluated = ruleEvaluator.evaluate( conditions );

    assert.equal( expected, JSON.stringify(evaluated) );
    console.log('RULE --- Formula Parenthesis ---> Success!!!!!!!!!');
};
