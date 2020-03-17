module.exports = {
    ahj: {
        rules: {
            generalElectrical:{
                statements: [
                    {
                        condition: [],
                        description: "If the inverter is Enphase",
                        value: "4. RAPID SHUTDOWN INITIATION TAKES PLACE AT THE AC DISCONNECT. RAPID SHUTDOWN COMMENCES UPON LOSS OF UTILITY SOURCE VOLTAGE. 5. SEE *E.1 AND *E.2 FOR DIAGRAMS CALCULATIONS SCHEDULES AND SPECIFICATIONS.",
                        onConflict: "union"
                    },
                    {
                        condition: [
                            {
                                left: "inverterManufacturer",
                                operator: "=",
                                right: "solarEdge"
                            }
                        ],
                        description: "If the inverter is SolarEdge",
                        value: "4. RAPID SHUTDOWN INITIATION TAKES PLACE WITHIN THE FIRMWARE OF THE INVERTER. RAPID SHUTDOWN COMMENCES UPON LOSS OF UTILITY SOURCE VOLTAGE. 5. SEE *E.1 AND *E.2 FOR DIAGRAMS CALCULATIONS SCHEDULE AND SPECIFICATIONS.",
                        onConflict: "union"
                    },
                    {
                        condition: [
                            {
                                left: "inverterManufacturer",
                                operator: "=",
                                right: "solarEdge"
                            },
                            {
                                left: "batteriesDesigned",
                                operator: ">=",
                                right: 1
                            }
                        ],
                        description: "If designed with battery(ies)",
                        value: "4. RAPID SHUTDOWN INITIATION TAKES PLACE WITHIN THE FIRMWARE OF THE INVERTER. RAPID SHUTDOWN COMMENCES UPON LOSS OF UTILITY SOURCE VOLTAGE. 5. SEE *E.1 AND *E.2 FOR DIAGRAMS CALCULATIONS SCHEDULE AND SPECIFICATIONS. 6. 480.6(A) - BATTERY DISCONNECT MEANS CONTAINED ON BATTERY UNIT. 7. 480.7(D) - BATTERY UNIT CONSTRUCTED OF NONCONDUCTIVE HEAT-RESISTANT MATERIAL. NO ADDITIONAL INSULATION REQUIRED. 8. 480.9(A) - VENTILATION - BATTERY TECHNOLOGY DOES NOT EMIT GASES. ADDITIONAL MECHANICAL VENTILATION NOT REQUIRED.",
                        onConflict: "union"
                    },
                    {
                        value: "1. ALL WIRING MUST BE PROPERLY SUPPORTED BY DEVISCES OR MECHANICAL MEANS DESIGNED AND LISTED FOR SUCH USE. FOR ROOF-MOUNTED SYSTEM WIRING MUST BE PERMANENTLY AND COMPLETELY HELD OFF OF THE ROOF SURFACE. 2. ANY CODE VIOLATIONS EVIDENT IN THE INTERCONNECITON PANEL WILL BE CORRECTED ON INSTALLATION. 3. SYSTEM SHALL BE INSTALLED IN ACCORDANCE WITH ALL RELEVANT CODE.",
                        onConflict: "union"
                    }
                ],
                id: "generalElectrical",
                timeStamp: "2020-03-17T00:44:50.518Z",
                appliedConditions: [
                    "inverterManufacturer",
                    "batteriesDesigned"
                ],
                name: "General Electrical"
            }

        }
    },
    definitions: {
        rules: {
            generalElectrical: {
                template: {
                    onConflict: "union",
                    dataType: "template string"
                },
                description: "General Electrical Notes pertaining to our PV System",
                id: "generalElectrical",
                name: "General Electrical",
                allowableConditions: [
                    "batteriesDesigned",
                    "inverterManufacturer"
                ],
                rule: true,
                tags: [
                    "electricalRuleGroup"
                ]
            }
        },
        conditions: {
            batteriesDesigned: {
                applyTo: [
                    "sitePhoto(S)Required",
                    "systemSizeRestraintsDC"
                ],
                template: {
                    step: 1,
                    dataType: "number"
                },
                condition: true,
                description: "Batteries Designed",
                id: "batteriesDesigned",
                name: "Batteries Designed",
                tags: [
                    "design",
                    "permit"
                ]
            },
            inverterManufacturer: {
                applyTo: [
                    "installersPacket",
                    "daveTemplateString"
                ],
                template: {
                    items: [
                        {
                            name: "Fronius",
                            id: "fronius"
                        },
                        {
                            name: "Solar Edge",
                            id: "solarEdge"
                        },
                        {
                            name: "Enphase",
                            id: "enphase"
                        }
                    ],
                    dataType: "enum"
                },
                condition: true,
                description: "Inverter Manufacturer",
                id: "inverterManufacturer",
                name: "Inverter Manufacturer",
                tags: [
                    "permit",
                    "design",
                    "surveyor"
                ]
            }
        }
    }
};