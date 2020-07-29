
const {
    expected:{
        convertToDisplayValue: {
            defPointSetbacks: defPointSetbackExpected
        }
    },
    associationObject
} = require('../../data');
const RuleEvaluator = require('../../../../lib');
const assert = require('assert');



module.exports = () => {
    const ruleEvaluator = new RuleEvaluator(associationObject);
    const evaluated = ruleEvaluator.evaluate( "defPointSetbacks" );
    const converted = ruleEvaluator.convertToDisplayValue( "defPointSetbacks", evaluated.value )

    assert.equal( JSON.stringify(converted), defPointSetbackExpected[0] );
    console.log(`RuleEvaluator -- Measurements --- convertToDisplayValue ---> Success!!!!!!!!!`);
};
