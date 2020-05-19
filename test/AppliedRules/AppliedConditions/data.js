const ServiceElevation = require('../../utilities/definitions/conditions/serviceElevation');
const NumberCondition = require('../../utilities/definitions/conditions/numberCondition');
const DWGAutomationNumberCondition = require('../../utilities/definitions/conditions/dwgAutomationNumberCondition');
const NumberRule = require('../../utilities/definitions/rules/NumberRule');
const DWGAutomationTemplateStringRule = require('../../utilities/definitions/rules/DWGAutomationTemplateStringRule');
const DWGAutomationNumberRule = require('../../utilities/definitions/rules/DWGAutomationNumberRule');
const SnowLoad = require('../../utilities/definitions/rules/SnowLoad');
const Definitions = require('../../../lib/Definitions');

const serviceElevation = new ServiceElevation({});
const numberCondition = new NumberCondition({});
const dwgAutomationNumberCondition = new DWGAutomationNumberCondition({});
const dwgAutomationTemplateStringRule = new DWGAutomationTemplateStringRule({});
const dwgAutomationNumberRule = new DWGAutomationNumberRule({});
const snowLoad = new SnowLoad({});
const numberRule = new NumberRule({});

dwgAutomationTemplateStringRule.setAllowableRuleParameters([ snowLoad.id ]);
snowLoad.setRuleAsParameter([ dwgAutomationTemplateStringRule.id ]);

snowLoad.setAllowableConditions([ serviceElevation.id ]);
serviceElevation.setApplyTo([ snowLoad.id ]);

dwgAutomationNumberRule.setAllowableConditions([ dwgAutomationNumberCondition.id ]);
dwgAutomationNumberCondition.setApplyTo([ dwgAutomationNumberRule.id ]);

numberRule.setAllowableConditions([ numberCondition.id ]);
numberCondition.setApplyTo([ numberRule.id ]);

const definitions = new Definitions({});
definitions.addDefinition( serviceElevation );
definitions.addDefinition( dwgAutomationNumberCondition );
definitions.addDefinition( dwgAutomationTemplateStringRule );
definitions.addDefinition( dwgAutomationNumberRule );
definitions.addDefinition( numberRule );
definitions.addDefinition( numberCondition );
definitions.addDefinition( snowLoad );

const associationObject = {
        ahj: {
            serviceNumber: "555555",
            rules: {
                [ dwgAutomationTemplateStringRule.id ]: {
                    statements: [
                        {value: "Template string value w/ {snowLoad}"}
                    ]
                },
                [ dwgAutomationNumberRule.id ]: {
                    statements: [
                        {
                            value: 1,
                            condition: [
                                {
                                    left: dwgAutomationNumberCondition.id,
                                    operator: "=",
                                    right: 1
                                }
                            ]
                        },
                        {
                            value: 2,
                            condition: [
                                {
                                    left: dwgAutomationNumberCondition.id,
                                    operator: "=",
                                    right: 2
                                }
                            ]
                        }
                    ]
                },
                [ numberRule.id ]: {
                    statements: [
                        {
                            value: 100,
                            condition: [
                                {
                                    left: numberCondition.id,
                                    operator: "=",
                                    right: 10
                                }
                            ]
                        },
                        {
                            value: 200,
                            condition: [
                                {
                                    left: numberCondition.id,
                                    operator: "=",
                                    right: 20
                                }
                            ]
                        }
                    ]
                },
                [ snowLoad.id ]: {
                    statements: [
                        {
                            value: 20,
                            condition: [
                                {
                                    left:  serviceElevation.id,
                                    operator: "<=",
                                    right: 2000
                                }
                            ]
                        },
                        {
                            value: 50,
                            condition: [
                                {
                                    left: serviceElevation.id,
                                    operator: ">",
                                    right: 2000
                                }
                            ]
                        }
                    ]
                }
            }
        },
        definitions: definitions.toRawDefinitions()
    };


// associationObject
module.exports = {
    associationObject,
    numberRule,
    serviceElevation,
    dwgAutomationNumberCondition,
    numberCondition,
    dwgAutomationNumberRule,
    dwgAutomationTemplateStringRule,
    snowLoad
};