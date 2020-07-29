
const RuleEvaluator = require('../../../lib/RuleEvaluator');
const {
    deconstruct: expectedDeconstruct
} = require('./expected');
const { defPointSetbacks } = require('./documents');


const assert = require('assert');


module.exports = () => {

    const value = 8;
    //inflectionDefinition
    const { units, displayUnitsAs } = defPointSetbacks.template.item.inflection;
    const deconstructed = RuleEvaluator.Measurements.deconstruct( value, units, displayUnitsAs);
    assert.equal( JSON.stringify(deconstructed), expectedDeconstruct );
    console.log(`RuleEvaluator -- Measurements --- deconstruct ---> Success!!!!!!!!!`);


};
