
const getIdName = ({ MANUFACTURER_NAME, MANUFACTURER_PART_NUM, ITEM_NUMBER }) => ({
    id: ITEM_NUMBER,
    name: `${MANUFACTURER_NAME} ${MANUFACTURER_PART_NUM}`
})

const getItems = itemType => {
    return [
        {
            "ITEM_NUMBER": "V303645",
            "MANUFACTURER_PART_NUM": "SE10000H-US000BNC4",
            "MANUFACTURER_NAME": "SolarEdge Technologies",
            LEAD_SOURCE: "MPH",
            ITC_CODE: "30"
        },
        {
            "ITEM_NUMBER": "V304116",
            "MANUFACTURER_PART_NUM": "SE7600A-USS2RNCY2",
            "MANUFACTURER_NAME": "SolarEdge Technologies",
            LEAD_SOURCE: "Homebuilder",
            ITC_CODE: "26"
        },
        {
            "ITEM_NUMBER": "V303644",
            "MANUFACTURER_PART_NUM": "SE3800H-US000BNC4",
            "MANUFACTURER_NAME": "SolarEdge Technologies",
            LEAD_SOURCE: "MPH",
            ITC_CODE: "30"
        },
        {
            "ITEM_NUMBER": "V303643",
            "MANUFACTURER_PART_NUM": "SE7600H-US000BNC4",
            "MANUFACTURER_NAME": "SolarEdge Technologies",
            LEAD_SOURCE: "Homebuilder"
        },
        {
            "ITEM_NUMBER": "V304116",
            "MANUFACTURER_PART_NUM": "SE7600A-USS2RNCY2",
            "MANUFACTURER_NAME": "SolarEdge Technologies",
            LEAD_SOURCE: "Homebuilder",
            ITC_CODE: "30"
        },
        {
            "ITEM_NUMBER": "V303644",
            "MANUFACTURER_PART_NUM": "SE3800H-US000BNC4",
            "MANUFACTURER_NAME": "SolarEdge Technologies",
            LEAD_SOURCE: "Retail",
            ITC_CODE: "30"
        },
        {
            "ITEM_NUMBER": "V303645",
            "MANUFACTURER_PART_NUM": "SE10000H-US000BNC4",
            "MANUFACTURER_NAME": "SolarEdge Technologies",
            LEAD_SOURCE: "Retail"
        },
        {
            "ITEM_NUMBER": "V303643",
            "MANUFACTURER_PART_NUM": "SE7600H-US000BNC4",
            "MANUFACTURER_NAME": "SolarEdge Technologies",
            LEAD_SOURCE: "Homebuilder",
            ITC_CODE: "30"
        },
        {
            "ITEM_NUMBER": "V304116",
            "MANUFACTURER_PART_NUM": "SE7600A-USS2RNCY2",
            "MANUFACTURER_NAME": "SolarEdge Technologies",
            LEAD_SOURCE: "Retail",
            ITC_CODE: "30"
        }
    ].map( (item,index) => ({ ...item, id: `${itemType}${index}`, name: `${itemType} #${index}` }));
}

module.exports = {
    ahj: {
        rules: {
            "allowableInverters": {
                "id": "allowableInverters",
                "statements": [
                    {
                        "condition": [
                            {
                                "left": "leadSource",
                                "operator": "=",
                                "right": "mph"
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
                                "right": "homebuilder"
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
                                "operator": "=",
                                "right": "direct"
                            }
                        ],
                        "onConflict": "filter",
                        "value": {
                            "_type": "doestContain",
                            "LEAD_SOURCE": [
                                "Homebuilder",
                                "MPH"
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
                            "_type": "highestPriority",
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
                            "_type": "highestPriority",
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
            "allowableModules": {
                "id": "allowableModules",
                "statements": [
                    {
                        "condition": [
                            {
                                "left": "leadSource",
                                "operator": "=",
                                "right": "mph"
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
                                "right": "homebuilder"
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
                                "operator": "=",
                                "right": "direct"
                            }
                        ],
                        "onConflict": "filter",
                        "value": {
                            "_type": "doesntContain",
                            "LEAD_SOURCE": [
                                "Homebuilder",
                                "MPH"
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
                            "_type": "sort",
                            "_size": 1,
                            "ITC_CODE": [
                                "30",
                                "26",
                                "22",
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
                            "_type": "sort",
                            "_size": 1,
                            "ITC_CODE": [
                                "30",
                                "26",
                                "22",
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
                            "_type": "sort",
                            "_size": 1,
                            "ITC_CODE": [
                                "30",
                                "26",
                                "22",
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
                            "_type": "sort",
                            "_size": 1,
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
                                "right": false
                            }
                        ],
                        "onConflict": "filter",
                        "value": {
                            "_type": "sort",
                            "_size": 1,
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
                                "right": false
                            }
                        ],
                        "onConflict": "filter",
                        "value": {
                            "_type": "sort",
                            "_size": 1,
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
            }
        }
    },
    definitions: {
        rules:{
            allowableModules: {
                "allowableConditions": [
                    "contractType",
                    "leadSource",
                    "isSpecialPurchaseSafeHarbor"
                ],
                "description": "List of Available Inverter Types Available for Design and Install",
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
                    items: getItems('Modules'),
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
                "template": {
                    "dataType": "filter",
                    items: getItems('Inverters'),
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
                            "name": "ITC CODE"
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
                                }
                            ],
                            "name": "Lead Source"
                        }
                    },
                    "onConflict": "standard"
                }
            }
        },
        conditions: {
            isSpecialPurchaseSafeHarbor:{
                "applyTo": [
                    "allowableInverters",
                    "allowableModules"
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
            },
            contractType: {
                "applyTo": [
                    "allowableInverters",
                    "allowableModules"
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
            leadSource:{
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
                            "id": "homebuilder",
                            "name": "Homebuilder"
                        },
                        {
                            "id": "mph",
                            "name": "MPH"
                        },
                        {
                            "id": "direct",
                            "name": "Direct"
                        }
                    ],
                    "onConflict": null,
                    "units": null
                }
            }
        }
    }
};
