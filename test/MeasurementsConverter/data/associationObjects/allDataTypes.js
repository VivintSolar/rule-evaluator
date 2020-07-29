const ObjectOfSupportedTypesAppliedRule = require('../../../utilities/AppliedRule/ObjectOfSupportedTypesAppliedRule');
const OrderedListAppliedRule = require('../../../utilities/AppliedRule/OrderedListAppliedRule');
const BooleanAppliedRule = require('../../../utilities/AppliedRule/BooleanAppliedRule');






const objectRule = new ObjectOfSupportedTypesAppliedRule();
const objectRuleDefinitionObject = objectRule.toRawDefinition();
const objectAppliedRuledObject = objectRule.toAppliedRuleObject();

const orderedListRule = new OrderedListAppliedRule();
const orderedListAppliedRuleObject  = orderedListRule.toAppliedRuleObject();
const orderedListRuleDefinitionObject  = orderedListRule.toRawDefinition();

const basicBooleanRule = new BooleanAppliedRule({
    id: "basicBooleanRule",
    name: "Basic Boolean Rule"
});
const basicBooleanAppliedRuleObject  = JSON.parse(JSON.stringify(basicBooleanRule.toAppliedRuleObject()));
const basicBooleanRuleDefinitionObject  = JSON.parse(JSON.stringify(basicBooleanRule.toRawDefinition()));


const customDisplayBooleanRule = new BooleanAppliedRule({
    id: "customDisplayBooleanRule",
    name: "Custom Display Boolean Rule"
});
customDisplayBooleanRule.setDisplay(["YES", "NO"]);
const customDisplayBooleanAppliedRuleObject  = customDisplayBooleanRule.toAppliedRuleObject();
const customDisplayBooleanRuleDefinitionObject  = customDisplayBooleanRule.toRawDefinition();


module.exports = {
    ahj: {
        rules:{
            [ objectAppliedRuledObject.id ]: objectAppliedRuledObject,
            [ orderedListAppliedRuleObject.id ]: orderedListAppliedRuleObject,
            [ basicBooleanAppliedRuleObject.id ]: basicBooleanAppliedRuleObject,
            [ customDisplayBooleanAppliedRuleObject.id ]: customDisplayBooleanAppliedRuleObject
        }
    },
    definitions:{
        rules:{
            [ objectRuleDefinitionObject.id ]: objectRuleDefinitionObject,
            [ orderedListRuleDefinitionObject.id ]: orderedListRuleDefinitionObject,
            [ basicBooleanRuleDefinitionObject.id ]: basicBooleanRuleDefinitionObject,
            [ customDisplayBooleanRuleDefinitionObject.id ]: customDisplayBooleanRuleDefinitionObject
        }
    }
}
