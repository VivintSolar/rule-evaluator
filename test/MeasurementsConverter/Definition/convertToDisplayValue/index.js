const {
    documents: {
        defPointSetbacks
    },
    parameters: {
        value: {
            convertToDisplayValue: {
                defPointSetbacks: defPointSetbackValues
            }
        }
    },
    expected:{
        convertToDisplayValue: {
            defPointSetbacks: defPointSetbackExpected
        }
    }
} = require('../../data');
const Definition = require('../../../../lib/Definitions/Definition');
const assert = require('assert');


module.exports = () => {
    const defPointSetbacksDefinition = new Definition(defPointSetbacks);
    const value = defPointSetbackValues[0];

    const converted = defPointSetbacksDefinition.convertToDisplayValue(value);

    assert.equal( JSON.stringify(converted), defPointSetbackExpected[0] );
    console.log(`Definition -- Measurements --- convertToDisplayValue ---> Success!!!!!!!!!`);

};
