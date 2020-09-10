
const getIdName = ({ MANUFACTURER_NAME, MANUFACTURER_PART_NUM, ITEM_NUMBER }) => ({
    id: ITEM_NUMBER,
    name: `${MANUFACTURER_NAME} ${MANUFACTURER_PART_NUM}`
})

const items = [
    {
        "ITEM_NUMBER": "V303645",
        "DESCRIPTION": "SE10000HD w/RGM - SE10000H-US000BNC4",
        "UOM": "EA",
        "ITEM_CLASS": "Inverters",
        "CATEGORY": "ITC 30",
        "CATALOG_NAME": "VS Design Catalog",
        "ITEM_STATUS": "Consume",
        "ORGANIZATION": "CA21",
        "MANUFACTURER_PART_NUM": "SE10000H-US000BNC4",
        "MANUFACTURER_NAME": "SolarEdge Technologies",
        "IS_SERIALIZABLE": "TRUE",
        "PRODUCT_TYPE": "Inverter",
        "PRODUCT_CLASS": "Optimized String",
        "PRODUCT_SIZE": "10",
        LEAD_SOURCE: "MPH",
        ITC_CODE: "30"
    },
    {
        "ITEM_NUMBER": "V304116",
        "DESCRIPTION": "SED SLE 7.6A - StorEdge w/Cell - SE7600A-USS2RNCY2",
        "UOM": "EA",
        "ITEM_CLASS": "Inverters",
        "CATEGORY": "ITC 26",
        "CATALOG_NAME": "VS Design Catalog",
        "ITEM_STATUS": "Consume",
        "ORGANIZATION": "CA21",
        "MANUFACTURER_PART_NUM": "SE7600A-USS2RNCY2",
        "MANUFACTURER_NAME": "SolarEdge Technologies",
        "IS_SERIALIZABLE": "TRUE",
        "PRODUCT_TYPE": "Inverter",
        "PRODUCT_CLASS": "Optimized String",
        "PRODUCT_SIZE": "8",
        LEAD_SOURCE: "Homebuilder",
        ITC_CODE: "26"
    },
    {
        "ITEM_NUMBER": "V303644",
        "DESCRIPTION": "SE 3.8kW RGM - SE3800H-US000BNC4",
        "UOM": "EA",
        "ITEM_CLASS": "Inverters",
        "CATEGORY": "Cash_Loan",
        "CATALOG_NAME": "VS Design Catalog",
        "ITEM_STATUS": "Active",
        "ORGANIZATION": "CA21",
        "MANUFACTURER_PART_NUM": "SE3800H-US000BNC4",
        "MANUFACTURER_NAME": "SolarEdge Technologies",
        "IS_SERIALIZABLE": "TRUE",
        "PRODUCT_TYPE": "Inverter",
        "PRODUCT_CLASS": "Optimized String",
        "PRODUCT_SIZE": "4",
        LEAD_SOURCE: "MPH",
        ITC_CODE: "30"
    },
    {
        "ITEM_NUMBER": "V303643",
        "DESCRIPTION": "SE 7.6kW RGM HD - SE7600H-US000BNC4",
        "UOM": "EA",
        "ITEM_CLASS": "Inverters",
        "CATEGORY": "Cash_Loan",
        "CATALOG_NAME": "VS Design Catalog",
        "ITEM_STATUS": "Consume",
        "ORGANIZATION": "CA21",
        "MANUFACTURER_PART_NUM": "SE7600H-US000BNC4",
        "MANUFACTURER_NAME": "SolarEdge Technologies",
        "IS_SERIALIZABLE": "TRUE",
        "PRODUCT_TYPE": "Inverter",
        "PRODUCT_CLASS": "Optimized String",
        "PRODUCT_SIZE": "8",
        LEAD_SOURCE: "Homebuilder"
    },
    {
        "ITEM_NUMBER": "V304116",
        "DESCRIPTION": "SED SLE 7.6A - StorEdge w/Cell - SE7600A-USS2RNCY2",
        "UOM": "EA",
        "ITEM_CLASS": "Inverters",
        "CATEGORY": "ITC 30",
        "CATALOG_NAME": "VS Design Catalog",
        "ITEM_STATUS": "Consume",
        "ORGANIZATION": "CA21",
        "MANUFACTURER_PART_NUM": "SE7600A-USS2RNCY2",
        "MANUFACTURER_NAME": "SolarEdge Technologies",
        "IS_SERIALIZABLE": "TRUE",
        "PRODUCT_TYPE": "Inverter",
        "PRODUCT_CLASS": "Optimized String",
        "PRODUCT_SIZE": "8",
        LEAD_SOURCE: "Homebuilder",
        ITC_CODE: "30"
    },
    {
        "ITEM_NUMBER": "V303644",
        "DESCRIPTION": "SE 3.8kW RGM - SE3800H-US000BNC4",
        "UOM": "EA",
        "ITEM_CLASS": "Inverters",
        "CATEGORY": "ITC 30",
        "CATALOG_NAME": "VS Design Catalog",
        "ITEM_STATUS": "Active",
        "ORGANIZATION": "CA21",
        "MANUFACTURER_PART_NUM": "SE3800H-US000BNC4",
        "MANUFACTURER_NAME": "SolarEdge Technologies",
        "IS_SERIALIZABLE": "TRUE",
        "PRODUCT_TYPE": "Inverter",
        "PRODUCT_CLASS": "Optimized String",
        "PRODUCT_SIZE": "4",
        LEAD_SOURCE: "Retail",
        ITC_CODE: "30"
    },
    {
        "ITEM_NUMBER": "V303645",
        "DESCRIPTION": "SE10000HD w/RGM - SE10000H-US000BNC4",
        "UOM": "EA",
        "ITEM_CLASS": "Inverters",
        "CATEGORY": "Cash_Loan",
        "CATALOG_NAME": "VS Design Catalog",
        "ITEM_STATUS": "Consume",
        "ORGANIZATION": "CA21",
        "MANUFACTURER_PART_NUM": "SE10000H-US000BNC4",
        "MANUFACTURER_NAME": "SolarEdge Technologies",
        "IS_SERIALIZABLE": "TRUE",
        "PRODUCT_TYPE": "Inverter",
        "PRODUCT_CLASS": "Optimized String",
        "PRODUCT_SIZE": "10",
        LEAD_SOURCE: "Retail"
    },
    {
        "ITEM_NUMBER": "V303643",
        "DESCRIPTION": "SE 7.6kW RGM HD - SE7600H-US000BNC4",
        "UOM": "EA",
        "ITEM_CLASS": "Inverters",
        "CATEGORY": "ITC 30",
        "CATALOG_NAME": "VS Design Catalog",
        "ITEM_STATUS": "Consume",
        "ORGANIZATION": "CA21",
        "MANUFACTURER_PART_NUM": "SE7600H-US000BNC4",
        "MANUFACTURER_NAME": "SolarEdge Technologies",
        "IS_SERIALIZABLE": "TRUE",
        "PRODUCT_TYPE": "Inverter",
        "PRODUCT_CLASS": "Optimized String",
        "PRODUCT_SIZE": "8",
        LEAD_SOURCE: "Homebuilder",
        ITC_CODE: "30"
    },
    {
        "ITEM_NUMBER": "V304116",
        "DESCRIPTION": "SED SLE 7.6A - StorEdge w/Cell - SE7600A-USS2RNCY2",
        "UOM": "EA",
        "ITEM_CLASS": "Inverters",
        "CATEGORY": "Cash_Loan",
        "CATALOG_NAME": "VS Design Catalog",
        "ITEM_STATUS": "Consume",
        "ORGANIZATION": "CA21",
        "MANUFACTURER_PART_NUM": "SE7600A-USS2RNCY2",
        "MANUFACTURER_NAME": "SolarEdge Technologies",
        "IS_SERIALIZABLE": "TRUE",
        "PRODUCT_TYPE": "Inverter",
        "PRODUCT_CLASS": "Optimized String",
        "PRODUCT_SIZE": "8",
        LEAD_SOURCE: "Retail"
    }
].map( item => ({ ...getIdName(item), ...item }));

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
                                "left": "contractType",
                                "operator": "=",
                                "right": "ppa"
                            }
                        ],
                        "onConflict": "filter",
                        "value": {
                            "_type": "doesntContain",
                            "ITC_CODE": [
                                "30",
                                "26"
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
                        "onConflict": "filter",
                        "value": {
                            "_type": "doesntContain",
                            "ITC_CODE": [
                                "30",
                                "26"
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
                        "onConflict": "filter",
                        "value": {
                            "_type": "doesntContain",
                            "ITC_CODE": [
                                "30",
                                "26"
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
        }
    },
    definitions: {
        rules:{
            allowableInverters: {
                "allowableConditions": [
                    "contractType",
                    "leadSource"
                ],
                "description": "List of Available Inverter Types Available for Design and Install",
                "editDisabled": true,
                "id": "allowableInverters",
                "name": "Allowable Inverters",
                "rule": true,
                "template": {
                    "dataType": "filter",
                    items,
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
            contractType: {
                "applyTo": [
                    "allowableInverters"
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
                    "allowableInverters"
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
