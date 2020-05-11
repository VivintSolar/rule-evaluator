const RuleEvaluator = require('../../../index');
const assert = require('assert');
const associationObject = require('../associationObject');

const expected = JSON.stringify({
    contractType: 'ppa',
    numberCondition: 80,
    numberCondition1: 1200.0000384,
    booleanCondition: true
});


module.exports = () => {

    const conditionValues = {
        contractType: "ppa",
        numberCondition: 80,
        numberCondition1: 365.76,
        booleanCondition: true
    };

    const ruleEvaluator = new RuleEvaluator( associationObject );


    const convertedConditionValues = Object.assign({},
        ...Object.keys( conditionValues ).map( key => ({
            [ key ]: ruleEvaluator.convertToDisplayValue( key, conditionValues[key] )
        }))
    );



    assert.equal( expected, JSON.stringify(convertedConditionValues) );
    console.log('Definitions --- convertToDisplayValue ---> Success!!!!!!!!!');
};
