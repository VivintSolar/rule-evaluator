module.exports = {
    ahj: {
        rules: {
            allowableModules: {
                "statements": [
                    {
                        "condition": [
                            {
                                "left": "leadSource",
                                "operator": "=",
                                "right": "MPH"
                            }
                        ],
                        "onConflict": "filter",
                        "value": {
                            "_type": "contain",
                            "LEAD_SOURCE": [
                                "MPH"
                            ]
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "leadSource",
                                "operator": "=",
                                "right": "Homebuilder"
                            }
                        ],
                        "onConflict": "filter",
                        "value": {
                            "_type": "contain",
                            "LEAD_SOURCE": [
                                "Homebuilder"
                            ]
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "leadSource",
                                "operator": "!=",
                                "right": "Homebuilder"
                            },
                            {
                                "left": "leadSource",
                                "operator": "!=",
                                "right": "MPH"
                            }
                        ],
                        "onConflict": "filter",
                        "value": {
                            "_type": "contain",
                            "LEAD_SOURCE": [
                                "Direct"
                            ]
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "contractType",
                                "operator": "=",
                                "right": "ppa"
                            },
                            {
                                "left": "isSpecialPurchaseSafeHarbor",
                                "operator": "=",
                                "right": false
                            }
                        ],
                        "onConflict": "filter",
                        "value": {
                            "_size": 1,
                            "_type": "sort",
                            "ITC_CODE": [
                                "30",
                                "26",
                                "22"
                            ]
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "contractType",
                                "operator": "=",
                                "right": "lease"
                            },
                            {
                                "left": "isSpecialPurchaseSafeHarbor",
                                "operator": "=",
                                "right": false
                            }
                        ],
                        "onConflict": "filter",
                        "value": {
                            "_size": 1,
                            "_type": "sort",
                            "ITC_CODE": [
                                "30",
                                "26",
                                "22"
                            ]
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "contractType",
                                "operator": "=",
                                "right": "zeroLease"
                            },
                            {
                                "left": "isSpecialPurchaseSafeHarbor",
                                "operator": "=",
                                "right": false
                            }
                        ],
                        "onConflict": "filter",
                        "value": {
                            "_size": 1,
                            "_type": "sort",
                            "ITC_CODE": [
                                "30",
                                "26",
                                "22"
                            ]
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "contractType",
                                "operator": "=",
                                "right": "ppa"
                            },
                            {
                                "left": "isSpecialPurchaseSafeHarbor",
                                "operator": "=",
                                "right": true
                            }
                        ],
                        "onConflict": "filter",
                        "value": {
                            "_size": 1,
                            "_type": "sort",
                            "ITC_CODE": [
                                "22",
                                "26",
                                "30"
                            ]
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "contractType",
                                "operator": "=",
                                "right": "lease"
                            },
                            {
                                "left": "isSpecialPurchaseSafeHarbor",
                                "operator": "=",
                                "right": true
                            }
                        ],
                        "onConflict": "filter",
                        "value": {
                            "_size": 1,
                            "_type": "sort",
                            "ITC_CODE": [
                                "22",
                                "26",
                                "30"
                            ]
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "contractType",
                                "operator": "=",
                                "right": "zeroLease"
                            },
                            {
                                "left": "isSpecialPurchaseSafeHarbor",
                                "operator": "=",
                                "right": true
                            }
                        ],
                        "onConflict": "filter",
                        "value": {
                            "_size": 1,
                            "_type": "sort",
                            "ITC_CODE": [
                                "22",
                                "26",
                                "30"
                            ]
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "contractType",
                                "operator": "=",
                                "right": "cash"
                            }
                        ],
                        "onConflict": "filter",
                        "value": {
                            "_size": 1,
                            "_type": "sort",
                            "ITC_CODE": [
                                "22",
                                "26",
                                "30"
                            ]
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "contractType",
                                "operator": "=",
                                "right": "loan"
                            }
                        ],
                        "onConflict": "filter",
                        "value": {
                            "_size": 1,
                            "_type": "sort",
                            "ITC_CODE": [
                                "22",
                                "26",
                                "30"
                            ]
                        }
                    },
                    {
                        "onConflict": "filter",
                        "value": {
                            "_type": "contain"
                        }
                    }
                ]
            },
            allowableInverters: {
                "statements": [
                    {
                        "condition": [
                            {
                                "left": "leadSource",
                                "operator": "=",
                                "right": "MPH"
                            }
                        ],
                        "onConflict": "filter",
                        "value": {
                            "_type": "contain",
                            "LEAD_SOURCE": [
                                "MPH"
                            ]
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "leadSource",
                                "operator": "=",
                                "right": "Homebuilder"
                            }
                        ],
                        "onConflict": "filter",
                        "value": {
                            "_type": "contain",
                            "LEAD_SOURCE": [
                                "Homebuilder"
                            ]
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "leadSource",
                                "operator": "!=",
                                "right": "Homebuilder"
                            },
                            {
                                "left": "leadSource",
                                "operator": "!=",
                                "right": "MPH"
                            }
                        ],
                        "onConflict": "filter",
                        "value": {
                            "_type": "contain",
                            "LEAD_SOURCE": [
                                "Direct"
                            ]
                        }
                    },
                    {
                        "onConflict": "filter",
                        "value": {
                            "_type": "contain"
                        }
                    }
                ]
            }
        }
    },
    definitions: {
        rules: {
            allowableModules: {
                "allowableConditions": [
                    "contractType",
                    "leadSource",
                    "isSpecialPurchaseSafeHarbor"
                ],
                "description": "List of Modules Available for Design and Installation",
                "editDisabled": true,
                "id": "allowableModules",
                "name": "Allowable Modules",
                "rule": true,
                "tags": [
                    "allowableEquipmentRuleGroup",
                    "permitDesignView",
                    "proposalView",
                    "electricalView",
                    "structuralView",
                    "surveyor",
                    "design",
                    "permit"
                ],
                "template": {
                    "dataType": "filter",
                    "imports": [
                        {
                            "action": "getInventory",
                            "field": "items",
                            "fieldFormatter": {
                                "id": "ITEM_NUMBER",
                                "name": "MANUFACTURER_NAME + MANUFACTURER_PART_NUM"
                            },
                            "filter": {
                                "ITEM_CLASS": [
                                    "Modules"
                                ]
                            }
                        }
                    ],
                    "item": {
                        "ITC_CODE": {
                            "dataType": "enum",
                            "items": [
                                {
                                    "id": "30",
                                    "name": "30"
                                },
                                {
                                    "id": "26",
                                    "name": "26"
                                },
                                {
                                    "id": "22",
                                    "name": "22"
                                }
                            ],
                            "name": "ITC_CODE"
                        },
                        "LEAD_SOURCE": {
                            "dataType": "enum",
                            "items": [
                                {
                                    "id": "Homebuilder",
                                    "name": "Homebuilder"
                                },
                                {
                                    "id": "MPH",
                                    "name": "MPH"
                                },
                                {
                                    "id": "Direct",
                                    "name": "Direct"
                                }
                            ],
                            "name": "LEAD_SOURCE"
                        }
                    },
                    "onConflict": "standard"
                }
            },
            allowableInverters: {
                "allowableConditions": [
                    "contractType",
                    "leadSource",
                    "isSpecialPurchaseSafeHarbor"
                ],
                "description": "List of Available Inverter Types Available for Design and Install",
                "editDisabled": true,
                "id": "allowableInverters",
                "name": "Allowable Inverters",
                "rule": true,
                "tags": [
                    "allowableEquipmentRuleGroup",
                    "electricalView",
                    "permitDesignView",
                    "proposalView",
                    "structuralView",
                    "surveyor",
                    "design",
                    "permit"
                ],
                "template": {
                    "dataType": "filter",
                    "imports": [
                        {
                            "action": "getInventory",
                            "field": "items",
                            "fieldFormatter": {
                                "id": "ITEM_NUMBER",
                                "name": "MANUFACTURER_NAME + MANUFACTURER_PART_NUM"
                            },
                            "filter": {
                                "PRODUCT_TYPE": [
                                    "Inverter"
                                ]
                            }
                        }
                    ],
                    "item": {
                        "ITC_CODE": {
                            "dataType": "enum",
                            "items": [
                                {
                                    "id": "30",
                                    "name": "30"
                                },
                                {
                                    "id": "26",
                                    "name": "26"
                                },
                                {
                                    "id": "22",
                                    "name": "22"
                                }
                            ],
                            "name": "ITC_CODE"
                        },
                        "LEAD_SOURCE": {
                            "dataType": "enum",
                            "items": [
                                {
                                    "id": "Homebuilder",
                                    "name": "Homebuilder"
                                },
                                {
                                    "id": "MPH",
                                    "name": "MPH"
                                },
                                {
                                    "id": "Direct",
                                    "name": "Direct"
                                }
                            ],
                            "name": "LEAD_SOURCE"
                        }
                    },
                    "onConflict": "standard"
                }
            },
            contractType: {
                "applyTo": [
                    "overSizing",
                    "electricalServiceChangeRequired",
                    "otherFiles",
                    "electricalServiceChangeAllowed",
                    "systemSizeRestraintsDC",
                    "customElectricalDiagramRequired",
                    "powerClerkLimitToUsageRequired",
                    "allowableModules",
                    "testNumberRuleKenny"
                ],
                "condition": true,
                "description": "Sales Force Contract Type Field",
                "id": "contractType",
                "name": "Contract Type",
                "tags": [
                    "permit",
                    "design",
                    "surveyor"
                ],
                "template": {
                    "dataType": "enum",
                    "items": [
                        {
                            "id": "cash",
                            "name": "Cash"
                        },
                        {
                            "id": "loan",
                            "name": "Loan"
                        },
                        {
                            "id": "ppa",
                            "name": "PPA"
                        },
                        {
                            "id": "lease",
                            "name": "Lease"
                        },
                        {
                            "id": "zeroLease",
                            "name": "Zero-Lease"
                        }
                    ]
                }
            },
            leadSource: {
                "applyTo": [
                    "allowableInverters",
                    "allowableModules"
                ],
                "condition": true,
                "description": "Lead Source",
                "id": "leadSource",
                "name": "Lead Source",
                "template": {
                    "dataType": "enum",
                    "items": [
                        {
                            "id": "Homebuilder",
                            "name": "Homebuilder"
                        },
                        {
                            "id": "MPH",
                            "name": "MPH"
                        },
                        {
                            "id": "Direct",
                            "name": "Direct"
                        }
                    ],
                    "onConflict": null,
                    "units": null
                }
            },
            isSpecialPurchaseSafeHarbor: {
                "applyTo": [
                    "allowableInverters"
                ],
                "condition": true,
                "description": "Is Special Purchase Safe Harbor",
                "id": "isSpecialPurchaseSafeHarbor",
                "name": "Is Special Purchase Safe Harbor",
                "template": {
                    "dataType": "boolean",
                    "display": [
                        "Yes",
                        "No"
                    ],
                    "onConflict": null
                }
            }
        }
    }
};
