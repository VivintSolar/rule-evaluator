
module.exports = {
    ahj:{
        rules:{
            acSystemSizeCalcParameter: {
                statements: [
                    {
                        value: "nominal",
                        onConflict: "standard"
                    }
                ]
            },
            addonsAllowed: {
                statements: [
                    {
                        value: true,
                        onConflict: "standard"
                    }
                ]
            },
            allowableModules: {
                statements: [
                    {
                        value: {
                            _type: "contain"
                        },
                        onConflict: "filter"
                    }
                ]
            },
            batteryAvailable: {
                statements: [
                    {
                        value: false,
                        onConflict: "standard"
                    }
                ]
            },
            batteryRequired: {
                statements: [
                    {
                        value: false,
                        onConflict: "standard"
                    }
                ]
            }
        }
    },
    definitions: {
        conditions:{
            systemType: {
                applyTo: [
                    "addonsAllowed"
                ],
                template: {
                    items: [
                        {
                            name: "New System",
                            id: "new"
                        },
                        {
                            name: "Add On",
                            id: "addOn"
                        },
                        {
                            name: "3rd Party Add On",
                            id: "thirdPartyAddOn"
                        },
                        {
                            name: "VSLR Add On",
                            id: "vslrAddOn"
                        }
                    ],
                    dataType: "enum"
                },
                condition: true,
                description: "Type of System to Install",
                id: "systemType",
                name: "System Type"
            },
            contractType: {
                applyTo: [
                    "allowableModules",
                    "batteryAvailable",
                    "batteryRequired"
                ],
                template: {
                    items: [
                        {
                            name: "Cash",
                            id: "cash"
                        },
                        {
                            name: "Loan",
                            id: "loan"
                        },
                        {
                            name: "PPA",
                            id: "ppa"
                        },
                        {
                            name: "Lease",
                            id: "lease"
                        },
                        {
                            name: "Zero-Lease",
                            id: "zeroLease"
                        }
                    ],
                    dataType: "enum"
                },
                condition: true,
                description: "Sales Force Contract Type Field",
                id: "contractType",
                name: "Contract Type"
            }
        },
        rules:{
            acSystemSizeCalcParameter: {
                template: {
                    units: null,
                    items: [
                        {
                            name: "Nominal",
                            id: "nominal"
                        },
                        {
                            name: "Max",
                            id: "max"
                        }
                    ],
                    onConflict: "standard",
                    dataType: "enum"
                },
                description: "To note whether or not we will use the nominal or max AC output for the inverter.",
                id: "acSystemSizeCalcParameter",
                name: "Ac System Size Calc Parameter",
                rule: true
            },
            addonsAllowed: {
                template: {
                    onConflict: "standard",
                    dataType: "boolean",
                    display: [
                        "Yes",
                        "No"
                    ]
                },
                description: "Add-ons Allowed",
                id: "addonsAllowed",
                name: "Add-ons Allowed",
                allowableConditions: [
                    "systemType"
                ],
                rule: true
            },
            allowableModules: {
                template: {
                    onConflict: "standard",
                    imports: [
                        {
                            filter: {
                                ITEM_CLASS: [
                                    "Modules"
                                ]
                            },
                            action: "getInventory",
                            fieldFormatter: {
                                name: "MANUFACTURER_NAME + MANUFACTURER_PART_NUM",
                                id: "ITEM_NUMBER"
                            },
                            field: "items"
                        }
                    ],
                    dataType: "filter",
                    items: [
                        {
                            ITEM_NUMBER: "V304511",
                            DESCRIPTION: "LGE-LG 315 Watt Black/Black - LG315N1K-V5- ITC26",
                            UOM: "EA",
                            ITEM_CLASS: "Modules",
                            CATEGORY: "Cash_Loan",
                            CATALOG_NAME: "VS Design Catalog",
                            ITEM_STATUS: "Active",
                            ORGANIZATION: "MD02",
                            MANUFACTURER_PART_NUM: "LG315N1K-V5-ITC26",
                            MANUFACTURER_NAME: "LG",
                            IS_SERIALIZABLE: "FALSE",
                            PRODUCT_TYPE: "Monocrystalline",
                            PRODUCT_CLASS: "",
                            name: "LG LG315N1K-V5-ITC26",
                            id: "V304511"
                        },
                        {
                            ITEM_NUMBER: "V303884",
                            DESCRIPTION: "JKS-320M Half Cut Cell - JKM320M-60HBL- ITC30",
                            UOM: "EA",
                            ITEM_CLASS: "Modules",
                            CATEGORY: "ITC 30",
                            CATALOG_NAME: "VS Design Catalog",
                            ITEM_STATUS: "Active",
                            ORGANIZATION: "MD02",
                            MANUFACTURER_PART_NUM: "JKM320M-60HBL",
                            MANUFACTURER_NAME: "Jinko Solar",
                            IS_SERIALIZABLE: "FALSE",
                            PRODUCT_TYPE: "Monocrystalline",
                            PRODUCT_CLASS: "",
                            name: "Jinko Solar JKM320M-60HBL",
                            id: "V303884"
                        }
                    ]
                },
                editDisabled: true,
                description: "List of Modules Available for Design and Installation",
                id: "allowableModules",
                name: "Allowable Modules",
                allowableConditions: [
                    "contractType"
                ],
                rule: true
            },
            batteryAvailable: {
                template: {
                    onConflict: "standard",
                    dataType: "boolean",
                    display: [
                        "Yes",
                        "No"
                    ]
                },
                description: "Indicates if a battery option is available, but does not imply it is required.",
                id: "batteryAvailable",
                name: "Battery Available",
                allowableConditions: [
                    "contractType"
                ],
                rule: true
            },
            batteryRequired: {
                template: {
                    onConflict: "standard",
                    dataType: "boolean",
                    display: [
                        "Yes",
                        "No"
                    ]
                },
                description: "Indicates if a battery option is required.",
                id: "batteryRequired",
                name: "Battery Required",
                allowableConditions: [
                    "contractType"
                ],
                rule: true
            }
        }
    },

};
