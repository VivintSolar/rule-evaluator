const Evaluator = require('../../../../index');
const expected = require('./expected-results');
const assert = require('assert');
const assocObj = require('./associationObject');


module.exports = () => {
    const evaluator = new Evaluator( assocObj );

    const params = {
        rules:[
            "acSystemSizeCalcParameter",
            "addonsAllowed",
            "allowableModules",
            "batteryAvailable",
            "batteryRequired"
        ]
    };

    const evaluated = evaluator.batchEvaluate( params.rules, params.conditions );

    assert.equal( expected, JSON.stringify(evaluated) );
    console.log('RE --- Batch Evaluate Simple ---> Success!!!!!!!!!');
};
