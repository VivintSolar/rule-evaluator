const {
    serviceElevation,
    dwgAutomationNumberCondition,
    numberCondition
} = require('./data');

const tagAppliedConditions = JSON.stringify([
    serviceElevation.id,
    dwgAutomationNumberCondition.id
]);

module.exports = {
    allAppliedConditions: JSON.stringify([
        serviceElevation.id,
        dwgAutomationNumberCondition.id,
        numberCondition.id
    ]),
    numberRuleAppliedConditions:JSON.stringify([
        numberCondition.id
    ]),
    tagAppliedConditions,
    setAppliedConditions: tagAppliedConditions
};
