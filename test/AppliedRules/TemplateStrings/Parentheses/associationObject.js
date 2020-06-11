module.exports = {
    ahj:{
        rules:{
            generalStructural:{
                statements: [
                    {
                        value: "(()()(SNOW LOAD = ({snowLoad}) MOUNTING ((SYSTEM TYPE)) = ({mountingSystemType})"
                    }
                ]
            },
            pvSystemInformation: {
                statements: [
                    {
                        condition: [
                            {
                                left: "totalInverterQuantity",
                                operator: "=",
                                right: 2
                            }
                        ],
                        value: "SYSTEM SIZE - {systemSizeDc}kW DC | {cecAcSystemSize}kW CEC AC MODULE TYPE & AMOUNT - ({totalModuleQuantity}) {moduleManufacturer} {moduleModel} MODULE DIMENSIONS: (L/W/H) INVERTER - ({totalInverterQuantity}) {inverterManufacturer} {inverterModel1} AND {inverterModel2} INTERCONNECTION METHOD (GRID-TIED): {interconnectionMethod}",
                        onConflict: "standard"
                    },
                    {
                        condition: [
                            {
                                left: "totalInverterQuantity",
                                operator: "=",
                                right: 3
                            }
                        ],
                        value: "SYSTEM SIZE - {systemSizeDc}kW DC | {cecAcSystemSize}kW CEC AC MODULE TYPE & AMOUNT - ({totalModuleQuantity}) {moduleManufacturer} {moduleModel} MODULE DIMENSIONS: (L/W/H) INVERTER - ({totalInverterQuantity}) {inverterManufacturer} {inverterModel1}, {inverterModel2} AND {inverterModel3} INTERCONNECTION METHOD (GRID-TIED): {interconnectionMethod}",
                        onConflict: "standard"
                    },
                    {
                        condition: [
                            {
                                left: "batteryDcSystemSize",
                                operator: ">",
                                right: 0
                            }
                        ],
                        value: "SYSTEM SIZE - {systemSizeDc}kW DC | {cecAcSystemSize}kW CEC AC MODULE TYPE & AMOUNT - ({totalModuleQuantity}) {moduleManufacturer} {moduleModel} MODULE DIMENSIONS: (L/W/H) INVERTER: ({totalInverterQuantity}) {inverterManufacturer} {inverterModel1} PV BATTERY STORAGE - (1) LG CHEM RESU10H WITH {batteryDcSystemSize}kW DC | {batteryStorageCapacity}kWh PV STORAGE CAPACITY INTERCONNECTION METHOD (GRID-TIED): {interconnectionMethod} ",
                        onConflict: "standard"
                    },
                    {
                        condition: [
                            {
                                left: "batteriesDesigned",
                                operator: ">=",
                                right: 1
                            }
                        ],
                        value: "SYSTEM SIZE - {systemSizeDc}kW DC | {cecAcSystemSize}kW CEC AC MODULE TYPE & AMOUNT - ({totalModuleQuantity}) {moduleManufacturer} {moduleModel} MODULE DIMENSIONS: (L/W/H) INVERTER: ({totalInverterQuantity}) {inverterManufacturer} {inverterModel1} PV BATTERY STORAGE - ({batteriesDesigned}) LG CHEM RESU10H WITH {batteryDcSystemSize}kW DC | {batteryStorageCapacity}kWh PV STORAGE CAPACITY INTERCONNECTION METHOD (GRID-TIED): {interconnectionMethod} ",
                        onConflict: "standard"
                    },
                    {
                        value: "SYSTEM SIZE - {systemSizeDc}kW DC | {cecAcSystemSize}kW CEC AC MODULE TYPE & AMOUNT - ({totalModuleQuantity}) {moduleManufacturer} {moduleModel} MODULE DIMENSIONS: (L/W/H) INVERTER: ({totalInverterQuantity}) {inverterManufacturer} {inverterModel1} INTERCONNECTION METHOD (GRID-TIED): {interconnectionMethod} ",
                        onConflict: "standard"
                    }
                ]
            }
        }
    },
    definitions:{
        rules: {
            pvSystemInformation: {
                template: {
                    onConflict: "standard",
                    dataType: "template string"
                },
                description: "General list of equipment for the PV System located on the Cover Sheet",
                id: "pvSystemInformation",
                name: "Pv System Information",
                allowableConditions: [
                    "systemSizeDc",
                    "cecAcSystemSize",
                    "inverterManufacturer",
                    "interconnectionMethod",
                    "batteryDcSystemSize",
                    "batteryStorageCapacity",
                    "moduleManufacturer",
                    "moduleModel",
                    "inverterModel1",
                    "inverterModel2",
                    "inverterModel3",
                    "totalModuleQuantity",
                    "totalInverterQuantity",
                    "moduleLength",
                    "moduleWidth",
                    "moduleHeight"
                ],
                rule: true,
                tags: [
                    "templateView",
                    "templateExportView"
                ]
            },
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
                rule: true
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
                description: "Design snow loads shall be determined in accordance with Chapter 7 of ASCE 7",
                id: "snowLoad",
                name: "Snow Load",
                rule: true
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
            },
            systemSizeDc: {
                applyTo: [
                    "pvSystemInformation"
                ],
                template: {
                    range: {
                        min: 0
                    },
                    dataType: "number",
                    units: "KW"
                },
                condition: true,
                description: "DC System Size",
                id: "systemSizeDc",
                name: "DC System Size"
            },
            cecAcSystemSize: {
                applyTo: [
                    "pvSystemInformation"
                ],
                template: {
                    units: "KW",
                    dataType: "number"
                },
                condition: true,
                description: "CEC-AC System Size",
                id: "cecAcSystemSize",
                name: "CEC-AC System Size"
            },
            inverterManufacturer: {
                applyTo: [
                    "pvSystemInformation"
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
                name: "Inverter Manufacturer"
            },
            interconnectionMethod:{
                applyTo: [
                    "pvSystemInformation"
                ],
                template: {
                    items: [
                        {
                            name: "Load Breaker",
                            id: "loadBreaker"
                        },
                        {
                            name: "Center-Fed",
                            id: "centerFed"
                        },
                        {
                            name: "Supply Breaker",
                            id: "supplyBreaker"
                        },
                        {
                            name: "Sub Panel",
                            id: "subPanel"
                        },
                        {
                            name: "Supply Tap",
                            id: "supplyTap"
                        },
                        {
                            name: "RMA",
                            id: "rma"
                        },
                        {
                            name: "Solar Ready",
                            id: "solarReady"
                        },
                        {
                            name: "Redirected Main",
                            id: "redirectedMain"
                        },
                        {
                            name: "Load Breaker - Feed Thru with Sub with Disc",
                            id: "loadBreakerFeedThruWithSubWithDisc"
                        },
                        {
                            name: "Utility Supply Tap UG",
                            id: "utilitySupplyTapUg"
                        },
                        {
                            name: "Supply Tap in the Meter Can",
                            id: "supplyTapInMeterCan"
                        },
                        {
                            name: "Load Breaker - Feed Thru",
                            id: "loadBreakerFeedThru"
                        },
                        {
                            name: "Supply Tap on Split Bus",
                            id: "supplyTapOnSplitBus"
                        },
                        {
                            name: "Protected Load Side Tap",
                            id: "protectedLoadSideTap"
                        },
                        {
                            name: "Supply Breaker - Split Bus",
                            id: "supplyBreakerSplitBus"
                        },
                        {
                            name: "Protected Load Tap - On Feed Thru",
                            id: "protectedLoadTapOnFeedThru"
                        },
                        {
                            name: "Load Tap - Dual Main",
                            id: "loadTapDualMain"
                        },
                        {
                            name: "Utility Supply Tap",
                            id: "utilitySupplyTap"
                        }
                    ],
                    dataType: "enum"
                },
                condition: true,
                description: "Interconnection Method",
                id: "interconnectionMethod",
                name: "Interconnection Method",
                tags: [
                    "electrical",
                    "design",
                    "surveyor"
                ]
            },
            batteryDcSystemSize: {
                applyTo: [
                    "pvSystemInformation"
                ],
                condition: true,
                template: {
                    range: {
                        max: null,
                        min: null
                    },
                    units: null,
                    onConflict: null,
                    dataType: "number"
                },
                description: "Total DC system size of the battery(ies) designed. (BatteriesDesigned * BatteryModelDcSystemSize) ",
                id: "batteryDcSystemSize",
                name: "Battery Dc System Size",
            },
            batteryStorageCapacity: {
                applyTo: [
                    "pvSystemInformation"
                ],
                condition: true,
                template: {
                    range: {
                        max: null,
                        min: null
                    },
                    units: null,
                    onConflict: null,
                    dataType: "number"
                },
                description: "Total kWh of storage capacity from the battery(ies) designed. (BatteriesDesigned * BatteryModelKwhStorageCapacity)",
                id: "batteryStorageCapacity",
                name: "Battery Storage Capacity"
            },
            moduleManufacturer: {
                applyTo: [
                    "pvSystemInformation"
                ],
                condition: true,
                template: {
                    onConflict: null,
                    dataType: "string"
                },
                description: "Module manufacturer designed with",
                id: "moduleManufacturer",
                name: "Module Manufacturer",
                tags: [
                    "templateView",
                    "templateExportView"
                ]
            },
            moduleModel: {
                applyTo: [
                    "pvSystemInformation"
                ],
                condition: true,
                template: {
                    onConflict: null,
                    dataType: "string"
                },
                description: "Module model designed with",
                id: "moduleModel",
                name: "Module Model",
            },
            inverterModel1: {
                applyTo: [
                    "pvSystemInformation"
                ],
                condition: true,
                template: {
                    onConflict: null,
                    dataType: "string"
                },
                description: "First inverter model number designed with",
                id: "inverterModel1",
                name: "Inverter Model 1"
            },
            inverterModel2: {
                condition: true,
                template: {
                    onConflict: null,
                    dataType: "string"
                },
                description: "Second inverter model number designed with",
                id: "inverterModel2",
                name: "Inverter Model 2",
                tags: [
                    "templateView",
                    "templateExportView"
                ]
            },
            totalModuleQuantity: {
                applyTo: [
                    "pvSystemInformation"
                ],
                condition: true,
                template: {
                    range: {
                        max: null,
                        min: null
                    },
                    units: null,
                    onConflict: null,
                    dataType: "number"
                },
                description: "Total number of new modules designed with",
                id: "totalModuleQuantity",
                name: "Total Module Quantity"
            },
            totalInverterQuantity: {
                applyTo: [
                    "pvSystemInformation"
                ],
                condition: true,
                template: {
                    range: {
                        max: "4",
                        min: "1"
                    },
                    units: null,
                    onConflict: null,
                    dataType: "number"
                },
                description: "Total number of new inverters designed with",
                id: "totalInverterQuantity",
                name: "Total Inverter Quantity"
            },
            inverterModel3: {
                applyTo: [
                    "pvSystemInformation"
                ],
                condition: true,
                template: {
                    onConflict: null,
                    dataType: "string"
                },
                description: "Third inverter model number designed with",
                id: "inverterModel3",
                name: "Inverter Model 3"
            },
            moduleLength: {
                condition: true,
                template: {
                    range: {
                        max: null,
                        min: null
                    },
                    units: "m",
                    onConflict: null,
                    dataType: "number",
                    displayUnitsAs: "in"
                },
                description: "Module specifications - Length",
                id: "moduleLength",
                name: "Module Length",
                tags: [
                    "templateView"
                ]
            },
            moduleWidth: {
                applyTo: [
                    "pvSystemInformation"
                ],
                condition: true,
                template: {
                    range: {
                        max: null,
                        min: null
                    },
                    units: "m",
                    onConflict: null,
                    dataType: "number",
                    displayUnitsAs: "in"
                },
                description: "Module specifications - Width",
                id: "moduleWidth",
                name: "Module Width"
            },
            moduleHeight: {
                applyTo: [
                    "pvSystemInformation"
                ],
                condition: true,
                template: {
                    range: {
                        max: null,
                        min: null
                    },
                    units: "m",
                    onConflict: null,
                    dataType: "number",
                    displayUnitsAs: "in"
                },
                description: "Module specifications - Height (Thickness)",
                id: "moduleHeight",
                name: "Module Height"
            },
            batteriesDesigned: {
                applyTo: [
                    "pvSystemInformation"
                ],
                template: {
                    step: 1,
                    dataType: "number"
                },
                condition: true,
                description: "Batteries Designed",
                id: "batteriesDesigned",
                name: "Batteries Designed"
            },
        }
    }
};