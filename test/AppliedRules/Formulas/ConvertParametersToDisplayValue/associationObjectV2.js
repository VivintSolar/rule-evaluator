const associationObjectTemplate = require('../../../associationObject');
const { set } = require('../../../../lib/utilities/util');

const updateObject = {
    squareFootage: {
        'template.units': 'm',
        'template.displayUnitsAs': 'ft'
    },
    serviceElevation: {
        'template.units': 'm',
        'template.displayUnitsAs': 'in'
    },
    systemSizeAc:{
        'template.units': 'KW',
    }
};

const ruleOfInterest = 'alternativeMaxACSystemSizeCalculation';
const ruleDefinition = associationObjectTemplate.definitions.rules[ ruleOfInterest ];
const conditionDefinitions = ruleDefinition.allowableConditions.map( conditionId => {
    const conditionDefinition = JSON.parse(JSON.stringify(associationObjectTemplate.definitions.conditions[ conditionId ]))
    if( updateObject[ conditionId ] ){
        Object.keys( updateObject[ conditionId ] ).forEach( path => {
            const updateValue = updateObject[ conditionId ][ path ];
            set( path, updateValue, conditionDefinition);
        })
    }
    return conditionDefinition;
});

const ahjDocument = {
    id: 'ahjIdGuid',
    latitude: 27.7806527,
    longitude: -82.6913532,
    name: 'AHJ City Document',
    type: 'City',
    rules: {
        [ ruleOfInterest ]: JSON.parse(JSON.stringify(associationObjectTemplate.ahj.rules[ ruleOfInterest ]))
    }
};

const documents = [
    ahjDocument,
    ruleDefinition,
    ...conditionDefinitions
];

const authorityInfo = {
    serviceId: "1111111",
    latitude: 27.7806527,
    longitude: -82.6913532,
    City: "AHJ City Document",
    place: "incorporatedPlace"
};

module.exports = {
    documents,
    authorityInfo
};
