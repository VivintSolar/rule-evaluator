const NumberCondition = require('../utilities/definitions/conditions/numberCondition');
const Definitions = require('../../lib/Definitions');

const definitions = new Definitions({});

const numberCondition = new NumberCondition({});

numberCondition.setRange({
    min: 0,
    max: 100
});

definitions.addDefinition( numberCondition );
