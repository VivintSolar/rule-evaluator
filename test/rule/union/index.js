const Evaluator = require('../../../index');
const expected = require('./expected-results');
const assert = require('assert');
const assocObj = require('./associationObject');


module.exports = () => {
    const evaluator = new Evaluator( assocObj );

    const ruleId = 'permitOfficeRequirements';

    const ruleEvaluator = evaluator.getRule( ruleId );

    const conditions = {};

    const evaluated = ruleEvaluator.evaluate( conditions );

    console.log(':::::::: evaluated ::::::::\,',evaluated);
    console.log(':::::::: evaluated ::::::::');

    assert.equal( expected, JSON.stringify(evaluated) );
    console.log('RULE --- Union 1---> Success!!!!!!!!!');

};
