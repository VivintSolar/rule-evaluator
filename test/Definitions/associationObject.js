const NumberCondition = require('../utilities/definitions/conditions/numberCondition');
const NumberCondition1 = require('../utilities/definitions/conditions/numberCondition1');
const ContractType = require('../utilities/definitions/conditions/contractType');
const BooleanCondition = require('../utilities/definitions/conditions/booleanCondition');

const Definitions = require('../../lib/Definitions');

const definitions = new Definitions({});

const numberCondition = new NumberCondition({});
const numberCondition1 = new NumberCondition1({});
const contractType = new ContractType({});
const booleanCondition = new BooleanCondition({});

numberCondition.setRange({
    min: 0,
    max: 100
});

numberCondition1.setUnits("m");
numberCondition1.setDisplayUnitsAs("ft");
booleanCondition.setDisplay(["Yes", "No"]);

definitions.addDefinition( numberCondition );
definitions.addDefinition( numberCondition1 );
definitions.addDefinition( booleanCondition );
definitions.addDefinition( contractType );


module.exports = {
    ahj:{},
   definitions: definitions.toRawDefinitions()
};
