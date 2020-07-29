const {
    expected: {
        deconstruct: {
            measurements: expectedMeasurementsDeconstruct
        }
    }
} = require('./data');
const Measurements = require('../../lib/Measurements');
const assert = require('assert');


module.exports = () => {
    const deconstructed = Measurements.deconstruct( 6, 'm', 'in');
    assert.equal( JSON.stringify(deconstructed), expectedMeasurementsDeconstruct[0] );
    console.log(`RuleEvaluator -- Measurements --- deconstruct ---> Success!!!!!!!!!`);
};
