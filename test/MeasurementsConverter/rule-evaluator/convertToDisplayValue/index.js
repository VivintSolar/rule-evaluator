
const {
    expected:{
        convertToDisplayValue: {
            defPointSetbacks: defPointSetbackExpected
        }
    },
    associationObjects:{
        defaultDocument: defaultDocumentAssociationObject
    }
} = require('../../data');
const RuleEvaluator = require('../../../../lib');
const assert = require('assert');



module.exports = () => {
    const ruleEvaluator = new RuleEvaluator(defaultDocumentAssociationObject);
    const evaluated = ruleEvaluator.evaluate( "defPointSetbacks" );

    assert.equal( JSON.stringify(evaluated.value), defPointSetbackExpected[0] );
    console.log(`RuleEvaluator -- Measurements --- convertToDisplayValue ---> Success!!!!!!!!!`);
};
