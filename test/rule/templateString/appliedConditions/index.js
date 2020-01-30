const Evaluator = require('../../../../index');
const expected = require('./expected-results');
const expected2 = require('./expected-results2');
const assert = require('assert');
const assocObj = require('./associationObject');


//Applied Conditions Test
module.exports = () => {
    const evaluator = new Evaluator( assocObj );

    const ruleId = 'kennyTemplateString';

    const ruleEvaluator = evaluator.getRule( ruleId );

    let conditions = {
        contractType: "ppa",
        systemSizeDc: 1225,
        designFactor: 50,
        cecAcSystemSize: 55,
        systemSizeAc: 50
    };

    const evaluated = ruleEvaluator.evaluate( conditions );

    console.log(JSON.stringify(evaluated))

    // assert.equal( expected, JSON.stringify(evaluated) );
    // console.log('RULE ---Applied Conditions 1 ---> Success!!!!!!!!!');

    // To get default statement
    // conditions = {
    //     contractType: "ppa",
    //     systemSizeDc: 1225,
    //     systemSizeAc: 50
    // };
    //
    // const evaluated2 = ruleEvaluator.evaluate( conditions );
    //
    //
    // assert.equal( expected2, JSON.stringify(evaluated2) );
    // console.log('RULE ---Applied Conditions 2 ---> Success!!!!!!!!!');

};
