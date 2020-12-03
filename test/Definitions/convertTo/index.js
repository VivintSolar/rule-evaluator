const RuleEvaluator = require('../../../index');
const assert = require('assert');
const associationObject = require('../associationObject');

const expected = JSON.stringify({
    contractType: 'PPA',
    numberCondition: 80,
    numberCondition1: 1200,
    booleanCondition: 'Yes'
});


module.exports = () => {

    const conditionValues = {
        contractType: "ppa",
        numberCondition: 80,
        numberCondition1: 365.7599882956804,
        booleanCondition: "Yes"
    };

    const ruleEvaluator = new RuleEvaluator( associationObject );


    const convertedConditionValues = Object.assign({},
        ...Object.keys( conditionValues ).map( key => ({
            [ key ]: ruleEvaluator.convertToDisplayValue( key, conditionValues[key] )
        }))
    );

    assert.strictEqual( expected, JSON.stringify(convertedConditionValues) );
    console.log('Definitions --- convertToDisplayValue ---> Success!!!!!!!!!');
};
