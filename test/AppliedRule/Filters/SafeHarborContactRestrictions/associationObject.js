

const inverterItems = [
    {
        "id": "V303643",
        "name": "V303643 - Direct - Cash - 26",
        "LEAD_SOURCE": "Direct",
        "CONTRACT_RESTRICTIONS": "Cash",
        "ITC_CODE": "26"
    },
    {
        "id": "V303643",
        "name": "V303643 - Direct - Loan - 26",
        "LEAD_SOURCE": "Direct",
        "CONTRACT_RESTRICTIONS": "Loan",
        "ITC_CODE": "26"
    },
    {
        "id": "V304570",
        "name": "V304570 - Direct - PPA - 30",
        "LEAD_SOURCE": "Direct",
        "CONTRACT_RESTRICTIONS": "PPA",
        "ITC_CODE": "30"
    },
    {
        "id": "V304570",
        "name": "V304570 - Direct - Lease - 30",
        "LEAD_SOURCE": "Direct",
        "CONTRACT_RESTRICTIONS": "Lease",
        "ITC_CODE": "30"
    },
    {
        "id": "V304568",
        "name": "V304568 - Direct - PPA - 30",
        "LEAD_SOURCE": "Direct",
        "CONTRACT_RESTRICTIONS": "PPA",
        "ITC_CODE": "30"
    },
    {
        "id": "V304568",
        "name": "V304568 - Direct - Lease - 30",
        "LEAD_SOURCE": "Direct",
        "CONTRACT_RESTRICTIONS": "Lease",
        "ITC_CODE": "30"
    },
    {
        "id": "V304567",
        "name": "V304567 - Direct - PPA - 30",
        "LEAD_SOURCE": "Direct",
        "CONTRACT_RESTRICTIONS": "PPA",
        "ITC_CODE": "30"
    },
    {
        "id": "V304567",
        "name": "V304567 - Direct - Lease - 30",
        "LEAD_SOURCE": "Direct",
        "CONTRACT_RESTRICTIONS": "Lease",
        "ITC_CODE": "30"
    },
    {
        "id": "V303644",
        "name": "V303644 - Direct - Cash - 26",
        "LEAD_SOURCE": "Direct",
        "CONTRACT_RESTRICTIONS": "Cash",
        "ITC_CODE": "26"
    },
    {
        "id": "V303644",
        "name": "V303644 - Direct - Loan - 26",
        "LEAD_SOURCE": "Direct",
        "CONTRACT_RESTRICTIONS": "Loan",
        "ITC_CODE": "26"
    },
    {
        "id": "V303645",
        "name": "V303645 - Direct - Cash - 26",
        "LEAD_SOURCE": "Direct",
        "CONTRACT_RESTRICTIONS": "Cash",
        "ITC_CODE": "26"
    },
    {
        "id": "V303645",
        "name": "V303645 - Direct - Loan - 26",
        "LEAD_SOURCE": "Direct",
        "CONTRACT_RESTRICTIONS": "Loan",
        "ITC_CODE": "26"
    }
]
const moduleItems = [
    // Cash / Loan Items
    {
        "id": "V303333",
        "name": "V303333 - Direct - Cash - 26",
        "LEAD_SOURCE": "Direct",
        "CONTRACT_RESTRICTIONS": "Cash",
        "ITC_CODE": "26"
    },
    {
        "id": "V303333",
        "name": "V303333 - Direct - Loan - 26",
        "LEAD_SOURCE": "Direct",
        "CONTRACT_RESTRICTIONS": "Loan",
        "ITC_CODE": "26"
    },
    {
        "id": "V304444",
        "name": "V304444 - Direct - Cash - 26",
        "LEAD_SOURCE": "Direct",
        "CONTRACT_RESTRICTIONS": "Cash",
        "ITC_CODE": "26"
    },
    {
        "id": "V304444",
        "name": "V304444 - Direct - Loan - 26",
        "LEAD_SOURCE": "Direct",
        "CONTRACT_RESTRICTIONS": "Loan",
        "ITC_CODE": "26"
    },
    {
        "id": "V304442",
        "name": "V304442 - Direct - Cash - 30",
        "LEAD_SOURCE": "Direct",
        "CONTRACT_RESTRICTIONS": "Cash",
        "ITC_CODE": "30"
    },

    // PPA / Lease Items
    {
        "id": "V305555",
        "name": "V305555 - Direct - PPA - 30",
        "LEAD_SOURCE": "Direct",
        "CONTRACT_RESTRICTIONS": "PPA",
        "ITC_CODE": "30"
    },
    {
        "id": "V305555",
        "name": "V305555 - Direct - Lease - 30",
        "LEAD_SOURCE": "Direct",
        "CONTRACT_RESTRICTIONS": "Lease",
        "ITC_CODE": "30"
    },
    {
        "id": "V305566",
        "name": "V305566 - Direct - PPA - 30",
        "LEAD_SOURCE": "Direct",
        "CONTRACT_RESTRICTIONS": "PPA",
        "ITC_CODE": "30"
    },
    {
        "id": "V305566",
        "name": "V305566 - Direct - Lease - 30",
        "LEAD_SOURCE": "Direct",
        "CONTRACT_RESTRICTIONS": "Lease",
        "ITC_CODE": "30"
    },
    {
        "id": "V305577",
        "name": "V305577 - Direct - PPA - 26",
        "LEAD_SOURCE": "Direct",
        "CONTRACT_RESTRICTIONS": "PPA",
        "ITC_CODE": "26"
    }
]




module.exports = {
    ahj: {
        rules: {
            allowableModules: {
                "statements": [
                    // LEAD_SOURCE contain filters
                    {
                        "condition": [
                            {
                                "left": "leadSource",
                                "operator": "=",
                                "right": "MPH"
                            }
                        ],

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

                        "value": {
                            "_type": "contain",
                            "LEAD_SOURCE": [
                                "Direct"
                            ]
                        }
                    },
                    // CONTRACT_RESTRICTIONS contain filters
                    {
                        "condition": [
                            {
                                "left": "contractType",
                                "operator": "=",
                                "right": "cash"
                            }
                        ],

                        "value": {
                            "_type": "contain",
                            "CONTRACT_RESTRICTIONS": [
                                "Cash",
                                ""
                            ]
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "contractType",
                                "operator": "=",
                                "right": "lease"
                            }
                        ],

                        "value": {
                            "_type": "contain",
                            "CONTRACT_RESTRICTIONS": [
                                "Lease",
                                ""
                            ]
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "contractType",
                                "operator": "=",
                                "right": "zeroLease"
                            }
                        ],

                        "value": {
                            "_type": "contain",
                            "CONTRACT_RESTRICTIONS": [
                                "Lease",
                                ""
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

                        "value": {
                            "_type": "contain",
                            "CONTRACT_RESTRICTIONS": [
                                "Loan",
                                ""
                            ]
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "contractType",
                                "operator": "=",
                                "right": "ppa"
                            }
                        ],

                        "value": {
                            "_type": "contain",
                            "CONTRACT_RESTRICTIONS": [
                                "PPA",
                                ""
                            ]
                        }
                    },
                    // ITC_CODE sort/size filters
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

                        "value": {
                            "_size": 1,
                            "_type": "sort",
                            "id": "alphanumeric",
                            "ITC_CODE": "reverseAlphanumeric"
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

                        "value": {
                            "_size": 1,
                            "_type": "sort",
                            "id": "alphanumeric",
                            "ITC_CODE": "reverseAlphanumeric"
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

                        "value": {
                            "_size": 1,
                            "_type": "sort",
                            "id": "alphanumeric",
                            "ITC_CODE": "reverseAlphanumeric"
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

                        "value": {
                            "_size": 1,
                            "_type": "sort",
                            "id": "alphanumeric",
                            "ITC_CODE": "alphanumeric"
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

                        "value": {
                            "_size": 1,
                            "_type": "sort",
                            "id": "alphanumeric",
                            "ITC_CODE": "alphanumeric"
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

                        "value": {
                            "_size": 1,
                            "_type": "sort",
                            "id": "alphanumeric",
                            "ITC_CODE": "alphanumeric"
                        }
                    },
                    // contractType = cash/loan sort
                    {
                        "condition": [
                            {
                                "left": "contractType",
                                "operator": "=",
                                "right": "cash"
                            }
                        ],

                        "value": {
                            "_size": 1,
                            "_type": "sort",
                            "id": "alphanumeric",
                            "ITC_CODE": "alphanumeric"
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

                        "value": {
                            "_size": 1,
                            "_type": "sort",
                            "id": "alphanumeric",
                            "ITC_CODE": "alphanumeric"
                        }
                    },
                    // Default Condition
                    {

                        "value": {
                            "_type": "contain"
                        }
                    }
                ]
            },
            allowableInverters: {
                "statements": [
                    // LEAD_SOURCE contain filters
                    {
                        "condition": [
                            {
                                "left": "leadSource",
                                "operator": "=",
                                "right": "MPH"
                            }
                        ],
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

                        "value": {
                            "_type": "contain",
                            "LEAD_SOURCE": [
                                "Direct"
                            ]
                        }
                    },

                    // CONTRACT_RESTRICTIONS contain filters
                    {
                        "condition": [
                            {
                                "left": "contractType",
                                "operator": "=",
                                "right": "cash"
                            }
                        ],
                        "value": {
                            "_type": "contain",
                            "CONTRACT_RESTRICTIONS": [
                                "Cash",
                                ""
                            ]
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "contractType",
                                "operator": "=",
                                "right": "lease"
                            }
                        ],
                        "value": {
                            "_type": "contain",
                            "CONTRACT_RESTRICTIONS": [
                                "Lease",
                                ""
                            ]
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "contractType",
                                "operator": "=",
                                "right": "zeroLease"
                            }
                        ],
                        "value": {
                            "_type": "contain",
                            "CONTRACT_RESTRICTIONS": [
                                "Lease",
                                ""
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
                        "value": {
                            "_type": "contain",
                            "CONTRACT_RESTRICTIONS": [
                                "Loan",
                                ""
                            ]
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "contractType",
                                "operator": "=",
                                "right": "ppa"
                            }
                        ],
                        "value": {
                            "_type": "contain",
                            "CONTRACT_RESTRICTIONS": [
                                "PPA",
                                ""
                            ]
                        }
                    },
                    // Default Condition
                    {
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
                                "name": "MANUFACTURER_NAME + MANUFACTURER_PART_NUM",
                            },
                            "transformations": {
                                "CONTRACT_RESTRICTIONS": [
                                    "split(;)",
                                    "flatten(\"\")"
                                ]
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
                                },
                                {
                                    "id": "",
                                    "name": "Empty String"
                                }
                            ],
                            "name": "LEAD_SOURCE"
                        },
                        "CONTRACT_RESTRICTIONS": {
                            "dataType": "enum",
                            "items": [
                                {
                                    "id": "Cash",
                                    "name": "Cash"
                                },
                                {
                                    "id": "Lease",
                                    "name": "Lease"
                                },
                                {
                                    "id": "Loan",
                                    "name": "Loan"
                                },
                                {
                                    "id": "PPA",
                                    "name": "PPA"
                                },
                                {
                                    "id": "",
                                    "name": "Empty String"
                                }
                            ],
                            "name": "CONTRACT_RESTRICTIONS"
                        },
                    },
                    items: moduleItems,
                    "onConflict": "union"
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
                            "transformations": {
                                "CONTRACT_RESTRICTIONS": [
                                    "split(;)",
                                    "flatten(\"\")"
                                ]
                            },
                            "filter": {
                                "PRODUCT_TYPE": [
                                    "Inverter"
                                ]
                            }
                        }
                    ],
                    "item": {
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
                                },
                                {
                                    "id": "",
                                    "name": "Empty String"
                                }
                            ],
                            "name": "LEAD_SOURCE"
                        },
                        "CONTRACT_RESTRICTIONS": {
                            "dataType": "enum",
                            "items": [
                                {
                                    "id": "Cash",
                                    "name": "Cash"
                                },
                                {
                                    "id": "Lease",
                                    "name": "Lease"
                                },
                                {
                                    "id": "Loan",
                                    "name": "Loan"
                                },
                                {
                                    "id": "PPA",
                                    "name": "PPA"
                                },
                                {
                                    "id": "",
                                    "name": "Empty String"
                                }
                            ],
                            "name": "CONTRACT_RESTRICTIONS"
                        }
                    },
                    items: inverterItems,
                    "onConflict": "union"
                }
            }
        },
        conditions: {
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
