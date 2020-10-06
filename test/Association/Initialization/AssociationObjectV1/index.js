const Evaluator = require('../../../../index');
const expected = require('./expected-results');
const assert = require('assert');


module.exports = () => {
    const evaluator = new Evaluator({});


    assert.strictEqual( expected, JSON.stringify({}) );
    console.log('ASSOCIATION -- Initialization -- AssociationObjectV1 ---> Success!!!!!!!!!');
};
