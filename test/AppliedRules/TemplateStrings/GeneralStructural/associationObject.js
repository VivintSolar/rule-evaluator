module.exports = {
    ahj:{
        rules:{
            generalStructural:{
                statements: [
                    {
                        value: "4. ROOF LIVE LOAD = [LiveLoad] psf TYPICAL- 0 psf UNDER NEW PV SYSTEM. 5. GROUND SNOW LOAD = {snowLoad} psf 6. WIND SPEED = [WindSpeed] mph 7. EXPOSURE CATEGORY = [ExposureCategory]",
                        onConflict: "union"
                    },
                    {
                        condition: [
                            {
                                left: "mountingSystemType",
                                operator: "=",
                                right: "ecoFastenRockIt"
                            }
                        ],
                        value: '1. THE SOLAR PANELS ARE TO BE MOUNTED TO THE ROOF FRAMING USING THE ROCK-IT SYSTEM BY ECOFASTEN. THE MOUNTING FEET ARE TO BE SPACED AS SHOWN IN THE DETAILS- AND MUST BE STAGGERED TO ADJACENT FRAMING MEMBERS TO SPREAD OUT THE ADDITIONAL LOAD. 2. UNLESS NOTED OTHERWISE- MOUNTING ANCHORS SHALL BE 5/16" LAG SCREWS WITH A MINIMUM OF 2 1/2" PENETRATION INTO ROOF FRAMING. 3. THE PORPOSED PV SYSTEM ADDS 3.0 psf TO THE ROOF FRAMING SYSTEM.',
                        onConflict: "union"
                    },
                    {
                        condition: [
                            {
                                left: "mountingSystemType",
                                operator: "=",
                                right: "uniracSFM"
                            }
                        ],
                        value: '1. THE SOLAR PANELS ARE TO BE MOUNTED TO THE ROOF FRAMING USING THE SFM SYSTEM BY UNIRAC. THE MOUNTING FEET ARE TO BE SPACED AS SHOWN IN THE DETAILS- AND MUST BE STAGGERED TO ADJACENT FRAMING MEMBERS TO SPREAD OUT THE ADDITIONAL LOAD. 2. UNLESS NOTED OTHERWISE- MOUNTING ANCHORS SHALL BE 5/16" LAG SCREWS WITH A MINIMUM OF 2 1/2" PENETRATION INTO ROOF FRAMING. 3. THE PORPOSED PV SYSTEM ADDS 3.0 psf TO THE ROOF FRAMING SYSTEM.',
                        onConflict: "union"
                    },
                    {
                        condition: [
                            {
                                left: "mountingSystemType",
                                operator: "=",
                                right: "msiDoubleRail"
                            }
                        ],
                        value: '1. THE SOLAR PANELS ARE TO BE MOUNTED TO THE ROOF FRAMING USING THE DOUBLE-RAILED SYSTEM BY MSI. THE MOUNTING FEET ARE TO BE SPACED AS SHOWN IN THE DETAILS- AND MUST BE STAGGERED TO ADJACENT FRAMING MEMBERS TO SPREAD OUT THE ADDITIONAL LOAD. 2. UNLESS NOTED OTHERWISE- MOUNTING ANCHORS SHALL BE 5/16" LAG SCREWS WITH A MINIMUM OF 2 1/2\\" PENETRATION INTO ROOF FRAMING. 3. THE PORPOSED PV SYSTEM ADDS 3.0 psf TO THE ROOF FRAMING SYSTEM.',
                        onConflict: "union"
                    },
                    {
                        condition: [
                            {
                                left: "mountingSystemType",
                                operator: "=",
                                right: "msiTripleRail"
                            }
                        ],
                        value: '1. THE SOLAR PANELS ARE TO BE MOUNTED TO THE ROOF FRAMING USING THE TRIPLE-RAILED SYSTEM BY MSI. THE MOUNTING FEET ARE TO BE SPACED AS SHOWN IN THE DETAILS- AND MUST BE STAGGERED TO ADJACENT FRAMING MEMBERS TO SPREAD OUT THE ADDITIONAL LOAD. 2. UNLESS NOTED OTHERWISE- MOUNTING ANCHORS SHALL BE 5/16" LAG SCREWS WITH A MINIMUM OF 2 1/2" PENETRATION INTO ROOF FRAMING. 3. THE PORPOSED PV SYSTEM ADDS 3.0 psf TO THE ROOF FRAMING SYSTEM. ',
                        onConflict: "union"
                    }
                ]
            },
            snowLoad: {
                statements: [
                    {
                        value: 30,
                        onConflict: "standard"
                    }
                ],
                id: "snowLoad",
                source: {
                    id: "8cc558a4-9a97-4ef5-9e34-f535d3e0c21c",
                    name: "Connecticut",
                    type: "State"
                },
                name: "Snow Load"
            }
        }
    },
    definitions:{
        rules: {
            generalStructural: {
                template: {
                    onConflict: "union",
                    dataType: "template string"
                },
                description: "Standard structural notes located on the Cover Sheet.",
                id: "generalStructural",
                name: "General Structural",
                allowableConditions: [
                    "mountingSystemType",
                    "snowLoad"
                ],
                rule: true,
                tags: [
                    "templateView",
                    "templateExportView"
                ]
            },
            snowLoad: {
                applyTo: [
                    "generalStructural"
                ],
                template: {
                    range: {
                        min: 0
                    },
                    units: "psf",
                    onConflict: "standard",
                    dataType: "number"
                },
                condition: true,
                description: "Design snow loads shall be determined in accordance with Chapter 7 of ASCE 7",
                id: "snowLoad",
                name: "Snow Load",
                allowableConditions: [
                    "serviceElevation"
                ],
                rule: true,
                tags: [
                    "structuralRuleGroup",
                    "permitDesignView",
                    "permittingView",
                    "structuralView",
                    "structuralRole"
                ]
            }
        },
        conditions:{
            snowLoad: {
                applyTo: [
                    "generalStructural"
                ],
                template: {
                    range: {
                        min: 0
                    },
                    units: "psf",
                    onConflict: "standard",
                    dataType: "number"
                },
                condition: true,
                description: "Design snow loads shall be determined in accordance with Chapter 7 of ASCE 7",
                id: "snowLoad",
                name: "Snow Load",
                allowableConditions: [
                    "serviceElevation"
                ],
                rule: true,
                tags: [
                    "permittingView"
                ]
            },
            mountingSystemType: {
                applyTo: [
                    "generalStructural"
                ],
                template: {
                    items: [
                        {
                            name: "MSI",
                            id: "msi"
                        },
                        {
                            name: "MSI Double Rail",
                            id: "msiDoubleRail"
                        },
                        {
                            name: "MSI Triple Rail",
                            id: "msiTripleRail"
                        },
                        {
                            name: "EcoFasten",
                            id: "ecofasten"
                        },
                        {
                            name: "ECOX",
                            id: "ecox"
                        },
                        {
                            name: "Rock-it",
                            id: "rockIt"
                        },
                        {
                            name: "Unirac",
                            id: "unirac"
                        },
                        {
                            name: "Ballast",
                            id: "ballast"
                        },
                        {
                            name: "EcoFasten(Rock-It)",
                            id: "ecoFastenRockIt"
                        },
                        {
                            name: "Unirac(SFM)",
                            id: "uniracSFM"
                        },
                        {
                            name: "Unirac(RMDT)",
                            id: "uniracRMDT"
                        },
                        {
                            name: "Sunmodo",
                            id: "sunmodo"
                        }
                    ],
                    onConflict: "standard",
                    dataType: "enum"
                },
                condition: true,
                description: "Type of Racking Used for Placing Modules",
                id: "mountingSystemType",
                name: "Mounting System Type"
            }
        }
    }
};