



module.exports = [
    // allowableModules
    // allowableModules PPA/Lease/Zero Lease + lowest ITC:
    {
        ruleId: 'allowableModules',
        conditions: {
            contractType: "ppa",
            isSpecialPurchaseSafeHarbor: true
        },
        expected: JSON.stringify({
            "exceptions": null,
            "conditions": [{
                "left": "contractType",
                "operator": "=",
                "right": "ppa"
            }, {"left": "isSpecialPurchaseSafeHarbor", "operator": "=", "right": true}, {
                "left": "leadSource",
                "operator": "!=",
                "right": "Homebuilder"
            }, {"left": "leadSource", "operator": "!=", "right": "MPH"}],
            "value": [{
                "id": "V304500",
                "name": "Jinko Solar JKM325M-60HBL",
                "ITEM_NUMBER": "V304500",
                "DESCRIPTION": "JKS-325M-Half Cell - JKM325M-60HBL- ITC26",
                "UOM": "EA",
                "ITEM_CLASS": "Modules",
                "CATEGORY": "ITC 26",
                "CATALOG_NAME": "VS Design Catalog",
                "DEALER": "Rogers",
                "DEVELOPMENT_NAME": "Ogdon Flats",
                "LEAD_SOURCE": "Direct",
                "CONTRACT_RESTRICTIONS": "",
                "ITEM_STATUS": "Active",
                "ORGANIZATION": "MA03",
                "MANUFACTURER_PART_NUM": "JKM325M-60HBL",
                "MANUFACTURER_NAME": "Jinko Solar",
                "IS_SERIALIZABLE": "FALSE",
                "PRODUCT_TYPE": "",
                "PRODUCT_CLASS": "",
                "ITC_CODE": "26"
            }],
            "errors": ["Required Condition Input Missing; Lead Source"],
            "id": "allowableModules"
        })
    },
    {
        ruleId: 'allowableModules',
        conditions: {
            contractType: "lease",
            isSpecialPurchaseSafeHarbor: true
        },
        expected: JSON.stringify({
            "exceptions": null,
            "conditions": [
                {
                    "left": "contractType",
                    "operator": "=",
                    "right": "lease"
                },
                {
                    "left": "isSpecialPurchaseSafeHarbor",
                    "operator": "=",
                    "right": true
                },
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
            "value": [
                {
                    "id": "V304500",
                    "name": "Jinko Solar JKM325M-60HBL",
                    "ITEM_NUMBER": "V304500",
                    "DESCRIPTION": "JKS-325M-Half Cell - JKM325M-60HBL- ITC26",
                    "UOM": "EA",
                    "ITEM_CLASS": "Modules",
                    "CATEGORY": "ITC 26",
                    "CATALOG_NAME": "VS Design Catalog",
                    "DEALER": "Rogers",
                    "DEVELOPMENT_NAME": "Ogdon Flats",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "",
                    "ITEM_STATUS": "Active",
                    "ORGANIZATION": "MA03",
                    "MANUFACTURER_PART_NUM": "JKM325M-60HBL",
                    "MANUFACTURER_NAME": "Jinko Solar",
                    "IS_SERIALIZABLE": "FALSE",
                    "PRODUCT_TYPE": "",
                    "PRODUCT_CLASS": "",
                    "ITC_CODE": "26"
                }
            ],
            "errors": [
                "Required Condition Input Missing; Lead Source"
            ],
            "id": "allowableModules"
        })
    },
    {
        ruleId: 'allowableModules',
        conditions: {
            contractType: "zeroLease",
            isSpecialPurchaseSafeHarbor: true
        },
        expected: JSON.stringify({
            "exceptions": null,
            "conditions": [
                {
                    "left": "contractType",
                    "operator": "=",
                    "right": "zeroLease"
                },
                {
                    "left": "isSpecialPurchaseSafeHarbor",
                    "operator": "=",
                    "right": true
                },
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
            "value": [
                {
                    "id": "V304500",
                    "name": "Jinko Solar JKM325M-60HBL",
                    "ITEM_NUMBER": "V304500",
                    "DESCRIPTION": "JKS-325M-Half Cell - JKM325M-60HBL- ITC26",
                    "UOM": "EA",
                    "ITEM_CLASS": "Modules",
                    "CATEGORY": "ITC 26",
                    "CATALOG_NAME": "VS Design Catalog",
                    "DEALER": "Rogers",
                    "DEVELOPMENT_NAME": "Ogdon Flats",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "",
                    "ITEM_STATUS": "Active",
                    "ORGANIZATION": "MA03",
                    "MANUFACTURER_PART_NUM": "JKM325M-60HBL",
                    "MANUFACTURER_NAME": "Jinko Solar",
                    "IS_SERIALIZABLE": "FALSE",
                    "PRODUCT_TYPE": "",
                    "PRODUCT_CLASS": "",
                    "ITC_CODE": "26"
                }
            ],
            "errors": [
                "Required Condition Input Missing; Lead Source"
            ],
            "id": "allowableModules"
        })
    },

    // allowableModules PPA/Lease/Zero Lease + highest ITC:
    {
        ruleId: 'allowableModules',
        conditions: {
            contractType: "ppa",
            isSpecialPurchaseSafeHarbor: false
        },
        expected: JSON.stringify({
            "exceptions": null,
            "conditions": [
                {
                    "left": "contractType",
                    "operator": "=",
                    "right": "ppa"
                },
                {
                    "left": "isSpecialPurchaseSafeHarbor",
                    "operator": "=",
                    "right": false
                },
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
            "value": [
                {
                    "id": "V304362",
                    "name": "Jinko Solar JKM325M-60HBL",
                    "ITEM_NUMBER": "V304362",
                    "DESCRIPTION": "JKS-325M-Half Cell - JKM325M-60HBL- ITC30",
                    "UOM": "EA",
                    "ITEM_CLASS": "Modules",
                    "CATEGORY": "ITC 30",
                    "CATALOG_NAME": "VS Design Catalog",
                    "DEALER": "",
                    "DEVELOPMENT_NAME": "",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "",
                    "ITEM_STATUS": "Active",
                    "ORGANIZATION": "MA03",
                    "MANUFACTURER_PART_NUM": "JKM325M-60HBL",
                    "MANUFACTURER_NAME": "Jinko Solar",
                    "IS_SERIALIZABLE": "FALSE",
                    "PRODUCT_TYPE": "Monocrystalline",
                    "PRODUCT_CLASS": "",
                    "ITC_CODE": "30"
                }
            ],
            "errors": [
                "Required Condition Input Missing; Lead Source"
            ],
            "id": "allowableModules"
        })
    },
    {
        ruleId: 'allowableModules',
        conditions: {
            contractType: "lease",
            isSpecialPurchaseSafeHarbor: false
        },
        expected: JSON.stringify({
            "exceptions": null,
            "conditions": [
                {
                    "left": "contractType",
                    "operator": "=",
                    "right": "lease"
                },
                {
                    "left": "isSpecialPurchaseSafeHarbor",
                    "operator": "=",
                    "right": false
                },
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
            "value": [
                {
                    "id": "V304362",
                    "name": "Jinko Solar JKM325M-60HBL",
                    "ITEM_NUMBER": "V304362",
                    "DESCRIPTION": "JKS-325M-Half Cell - JKM325M-60HBL- ITC30",
                    "UOM": "EA",
                    "ITEM_CLASS": "Modules",
                    "CATEGORY": "ITC 30",
                    "CATALOG_NAME": "VS Design Catalog",
                    "DEALER": "",
                    "DEVELOPMENT_NAME": "",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "",
                    "ITEM_STATUS": "Active",
                    "ORGANIZATION": "MA03",
                    "MANUFACTURER_PART_NUM": "JKM325M-60HBL",
                    "MANUFACTURER_NAME": "Jinko Solar",
                    "IS_SERIALIZABLE": "FALSE",
                    "PRODUCT_TYPE": "Monocrystalline",
                    "PRODUCT_CLASS": "",
                    "ITC_CODE": "30"
                }
            ],
            "errors": [
                "Required Condition Input Missing; Lead Source"
            ],
            "id": "allowableModules"
        })
    },
    {
        ruleId: 'allowableModules',
        conditions: {
            contractType: "zeroLease",
            isSpecialPurchaseSafeHarbor: false
        },
        expected: JSON.stringify({
            "exceptions": null,
            "conditions": [
                {
                    "left": "contractType",
                    "operator": "=",
                    "right": "zeroLease"
                },
                {
                    "left": "isSpecialPurchaseSafeHarbor",
                    "operator": "=",
                    "right": false
                },
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
            "value": [
                {
                    "id": "V304362",
                    "name": "Jinko Solar JKM325M-60HBL",
                    "ITEM_NUMBER": "V304362",
                    "DESCRIPTION": "JKS-325M-Half Cell - JKM325M-60HBL- ITC30",
                    "UOM": "EA",
                    "ITEM_CLASS": "Modules",
                    "CATEGORY": "ITC 30",
                    "CATALOG_NAME": "VS Design Catalog",
                    "DEALER": "",
                    "DEVELOPMENT_NAME": "",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "",
                    "ITEM_STATUS": "Active",
                    "ORGANIZATION": "MA03",
                    "MANUFACTURER_PART_NUM": "JKM325M-60HBL",
                    "MANUFACTURER_NAME": "Jinko Solar",
                    "IS_SERIALIZABLE": "FALSE",
                    "PRODUCT_TYPE": "Monocrystalline",
                    "PRODUCT_CLASS": "",
                    "ITC_CODE": "30"
                }
            ],
            "errors": [
                "Required Condition Input Missing; Lead Source"
            ],
            "id": "allowableModules"
        })
    },

    // allowableModules Cash or Loan + lowest ITC
    {
        ruleId: 'allowableModules',
        conditions: {
            contractType: "cash"
        },
        expected: JSON.stringify({
            "exceptions": null,
            "conditions": [
                {
                    "left": "contractType",
                    "operator": "=",
                    "right": "cash"
                },
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
            "value": [
                {
                    "id": "V304504",
                    "name": "Hanwha Solar Q.PEAK DUO BLK-G5 320w- ITC26",
                    "ITEM_NUMBER": "V304504",
                    "DESCRIPTION": "HAN 320 MONO BLK - Q.PEAK DUO BLK-G5 320w- ITC26",
                    "UOM": "EA",
                    "ITEM_CLASS": "Modules",
                    "CATEGORY": "Cash_Loan",
                    "CATALOG_NAME": "VS Design Catalog",
                    "DEALER": "Ben Reber",
                    "DEVELOPMENT_NAME": "Lindon Meadows",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "Cash",
                    "ITEM_STATUS": "Active",
                    "ORGANIZATION": "MA03",
                    "MANUFACTURER_PART_NUM": "Q.PEAK DUO BLK-G5 320w- ITC26",
                    "MANUFACTURER_NAME": "Hanwha Solar",
                    "IS_SERIALIZABLE": "FALSE",
                    "PRODUCT_TYPE": "Monocrystalline",
                    "PRODUCT_CLASS": "",
                    "ITC_CODE": "26"
                },
                {
                    "id": "V304500",
                    "name": "Jinko Solar JKM325M-60HBL",
                    "ITEM_NUMBER": "V304500",
                    "DESCRIPTION": "JKS-325M-Half Cell - JKM325M-60HBL- ITC26",
                    "UOM": "EA",
                    "ITEM_CLASS": "Modules",
                    "CATEGORY": "ITC 26",
                    "CATALOG_NAME": "VS Design Catalog",
                    "DEALER": "Rogers",
                    "DEVELOPMENT_NAME": "Ogdon Flats",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "",
                    "ITEM_STATUS": "Active",
                    "ORGANIZATION": "MA03",
                    "MANUFACTURER_PART_NUM": "JKM325M-60HBL",
                    "MANUFACTURER_NAME": "Jinko Solar",
                    "IS_SERIALIZABLE": "FALSE",
                    "PRODUCT_TYPE": "",
                    "PRODUCT_CLASS": "",
                    "ITC_CODE": "26"
                },
                {
                    "id": "V304362",
                    "name": "Jinko Solar JKM325M-60HBL",
                    "ITEM_NUMBER": "V304362",
                    "DESCRIPTION": "JKS-325M-Half Cell - JKM325M-60HBL- ITC30",
                    "UOM": "EA",
                    "ITEM_CLASS": "Modules",
                    "CATEGORY": "ITC 30",
                    "CATALOG_NAME": "VS Design Catalog",
                    "DEALER": "",
                    "DEVELOPMENT_NAME": "",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "",
                    "ITEM_STATUS": "Active",
                    "ORGANIZATION": "MA03",
                    "MANUFACTURER_PART_NUM": "JKM325M-60HBL",
                    "MANUFACTURER_NAME": "Jinko Solar",
                    "IS_SERIALIZABLE": "FALSE",
                    "PRODUCT_TYPE": "Monocrystalline",
                    "PRODUCT_CLASS": "",
                    "ITC_CODE": "30"
                }
            ],
            "errors": [
                "Required Condition Input Missing; Lead Source, Is Special Purchase Safe Harbor"
            ],
            "id": "allowableModules"
        })
    },

    // allowableInverters
    // allowableInverters PPA or Lease or Zero-Lease
    {
        ruleId: 'allowableInverters',
        conditions: {
            contractType: "ppa"
        },
        expected: JSON.stringify({
            "exceptions": null,
            "conditions": [
                {
                    "left": "contractType",
                    "operator": "=",
                    "right": "ppa"
                }
            ],
            "value": [
                {
                    "id": "V304570",
                    "name": "SolarEdge Technologies SE6000HUS0SHBNC4",
                    "ITEM_NUMBER": "V304570",
                    "DESCRIPTION": "SE 6.0kW STOREDGE RGM HD +LTE MODEM - SE6000H-USSSHBC14",
                    "UOM": "EA",
                    "ITEM_CLASS": "Inverters",
                    "CATEGORY": "PPA_Lease",
                    "CATALOG_NAME": "VS Design Catalog",
                    "DEALER": "",
                    "DEVELOPMENT_NAME": "",
                    "LEAD_SOURCE": "",
                    "CONTRACT_RESTRICTIONS": "PPA",
                    "ITEM_STATUS": "Active",
                    "ORGANIZATION": "MA03",
                    "MANUFACTURER_PART_NUM": "SE6000HUS0SHBNC4",
                    "MANUFACTURER_NAME": "SolarEdge Technologies",
                    "IS_SERIALIZABLE": "TRUE",
                    "PRODUCT_TYPE": "Inverter",
                    "PRODUCT_CLASS": "",
                    "ITC_CODE": "30"
                },
                {
                    "id": "V304568",
                    "name": "SolarEdge Technologies SE7600HUS0SHBNC4",
                    "ITEM_NUMBER": "V304568",
                    "DESCRIPTION": "SE 7.6kW STOREDGE RGM HD +LTE MODEM - SE7600H-USSSHBC14",
                    "UOM": "EA",
                    "ITEM_CLASS": "Inverters",
                    "CATEGORY": "PPA_Lease",
                    "CATALOG_NAME": "VS Design Catalog",
                    "DEALER": "",
                    "DEVELOPMENT_NAME": "",
                    "LEAD_SOURCE": "",
                    "CONTRACT_RESTRICTIONS": "PPA",
                    "ITEM_STATUS": "Active",
                    "ORGANIZATION": "MA03",
                    "MANUFACTURER_PART_NUM": "SE7600HUS0SHBNC4",
                    "MANUFACTURER_NAME": "SolarEdge Technologies",
                    "IS_SERIALIZABLE": "TRUE",
                    "PRODUCT_TYPE": "Inverter",
                    "PRODUCT_CLASS": "",
                    "ITC_CODE": "30"
                },
                {
                    "id": "V304567",
                    "name": "SolarEdge Technologies SE3800HUS0SHBNC4",
                    "ITEM_NUMBER": "V304567",
                    "DESCRIPTION": "SE 3.8kW STOREDGE RGM HD +LTE MODEM - SE3800H-USSSHBC14",
                    "UOM": "EA",
                    "ITEM_CLASS": "Inverters",
                    "CATEGORY": "PPA_Lease",
                    "CATALOG_NAME": "VS Design Catalog",
                    "DEALER": "",
                    "DEVELOPMENT_NAME": "",
                    "LEAD_SOURCE": "",
                    "CONTRACT_RESTRICTIONS": "PPA",
                    "ITEM_STATUS": "Active",
                    "ORGANIZATION": "MA03",
                    "MANUFACTURER_PART_NUM": "SE3800HUS0SHBNC4",
                    "MANUFACTURER_NAME": "SolarEdge Technologies",
                    "IS_SERIALIZABLE": "TRUE",
                    "PRODUCT_TYPE": "Inverter",
                    "PRODUCT_CLASS": "",
                    "ITC_CODE": "30"
                }
            ],
            "errors": null,
            "id": "allowableInverters"
        })
    },
    {
        ruleId: 'allowableInverters',
        conditions: {
            contractType: "lease"
        },
        expected: JSON.stringify({
            "exceptions": null,
            "conditions": [
                {
                    "left": "contractType",
                    "operator": "=",
                    "right": "lease"
                }
            ],
            "value": [
                {
                    "id": "V304570",
                    "name": "SolarEdge Technologies SE6000HUS0SHBNC4",
                    "ITEM_NUMBER": "V304570",
                    "DESCRIPTION": "SE 6.0kW STOREDGE RGM HD +LTE MODEM - SE6000H-USSSHBC14",
                    "UOM": "EA",
                    "ITEM_CLASS": "Inverters",
                    "CATEGORY": "PPA_Lease",
                    "CATALOG_NAME": "VS Design Catalog",
                    "DEALER": "",
                    "DEVELOPMENT_NAME": "",
                    "LEAD_SOURCE": "",
                    "CONTRACT_RESTRICTIONS": "Lease",
                    "ITEM_STATUS": "Active",
                    "ORGANIZATION": "MA03",
                    "MANUFACTURER_PART_NUM": "SE6000HUS0SHBNC4",
                    "MANUFACTURER_NAME": "SolarEdge Technologies",
                    "IS_SERIALIZABLE": "TRUE",
                    "PRODUCT_TYPE": "Inverter",
                    "PRODUCT_CLASS": "",
                    "ITC_CODE": "30"
                },
                {
                    "id": "V304568",
                    "name": "SolarEdge Technologies SE7600HUS0SHBNC4",
                    "ITEM_NUMBER": "V304568",
                    "DESCRIPTION": "SE 7.6kW STOREDGE RGM HD +LTE MODEM - SE7600H-USSSHBC14",
                    "UOM": "EA",
                    "ITEM_CLASS": "Inverters",
                    "CATEGORY": "PPA_Lease",
                    "CATALOG_NAME": "VS Design Catalog",
                    "DEALER": "",
                    "DEVELOPMENT_NAME": "",
                    "LEAD_SOURCE": "",
                    "CONTRACT_RESTRICTIONS": "Lease",
                    "ITEM_STATUS": "Active",
                    "ORGANIZATION": "MA03",
                    "MANUFACTURER_PART_NUM": "SE7600HUS0SHBNC4",
                    "MANUFACTURER_NAME": "SolarEdge Technologies",
                    "IS_SERIALIZABLE": "TRUE",
                    "PRODUCT_TYPE": "Inverter",
                    "PRODUCT_CLASS": "",
                    "ITC_CODE": "30"
                },
                {
                    "id": "V304567",
                    "name": "SolarEdge Technologies SE3800HUS0SHBNC4",
                    "ITEM_NUMBER": "V304567",
                    "DESCRIPTION": "SE 3.8kW STOREDGE RGM HD +LTE MODEM - SE3800H-USSSHBC14",
                    "UOM": "EA",
                    "ITEM_CLASS": "Inverters",
                    "CATEGORY": "PPA_Lease",
                    "CATALOG_NAME": "VS Design Catalog",
                    "DEALER": "",
                    "DEVELOPMENT_NAME": "",
                    "LEAD_SOURCE": "",
                    "CONTRACT_RESTRICTIONS": "Lease",
                    "ITEM_STATUS": "Active",
                    "ORGANIZATION": "MA03",
                    "MANUFACTURER_PART_NUM": "SE3800HUS0SHBNC4",
                    "MANUFACTURER_NAME": "SolarEdge Technologies",
                    "IS_SERIALIZABLE": "TRUE",
                    "PRODUCT_TYPE": "Inverter",
                    "PRODUCT_CLASS": "",
                    "ITC_CODE": "30"
                }
            ],
            "errors": null,
            "id": "allowableInverters"
        })
    },
    {
        ruleId: 'allowableInverters',
        conditions: {
            contractType: "zeroLease"
        },
        expected: JSON.stringify({
            "exceptions": null,
            "conditions": [
                {
                    "left": "contractType",
                    "operator": "=",
                    "right": "zeroLease"
                }
            ],
            "value": [
                {
                    "id": "V304570",
                    "name": "SolarEdge Technologies SE6000HUS0SHBNC4",
                    "ITEM_NUMBER": "V304570",
                    "DESCRIPTION": "SE 6.0kW STOREDGE RGM HD +LTE MODEM - SE6000H-USSSHBC14",
                    "UOM": "EA",
                    "ITEM_CLASS": "Inverters",
                    "CATEGORY": "PPA_Lease",
                    "CATALOG_NAME": "VS Design Catalog",
                    "DEALER": "",
                    "DEVELOPMENT_NAME": "",
                    "LEAD_SOURCE": "",
                    "CONTRACT_RESTRICTIONS": "Lease",
                    "ITEM_STATUS": "Active",
                    "ORGANIZATION": "MA03",
                    "MANUFACTURER_PART_NUM": "SE6000HUS0SHBNC4",
                    "MANUFACTURER_NAME": "SolarEdge Technologies",
                    "IS_SERIALIZABLE": "TRUE",
                    "PRODUCT_TYPE": "Inverter",
                    "PRODUCT_CLASS": "",
                    "ITC_CODE": "30"
                },
                {
                    "id": "V304568",
                    "name": "SolarEdge Technologies SE7600HUS0SHBNC4",
                    "ITEM_NUMBER": "V304568",
                    "DESCRIPTION": "SE 7.6kW STOREDGE RGM HD +LTE MODEM - SE7600H-USSSHBC14",
                    "UOM": "EA",
                    "ITEM_CLASS": "Inverters",
                    "CATEGORY": "PPA_Lease",
                    "CATALOG_NAME": "VS Design Catalog",
                    "DEALER": "",
                    "DEVELOPMENT_NAME": "",
                    "LEAD_SOURCE": "",
                    "CONTRACT_RESTRICTIONS": "Lease",
                    "ITEM_STATUS": "Active",
                    "ORGANIZATION": "MA03",
                    "MANUFACTURER_PART_NUM": "SE7600HUS0SHBNC4",
                    "MANUFACTURER_NAME": "SolarEdge Technologies",
                    "IS_SERIALIZABLE": "TRUE",
                    "PRODUCT_TYPE": "Inverter",
                    "PRODUCT_CLASS": "",
                    "ITC_CODE": "30"
                },
                {
                    "id": "V304567",
                    "name": "SolarEdge Technologies SE3800HUS0SHBNC4",
                    "ITEM_NUMBER": "V304567",
                    "DESCRIPTION": "SE 3.8kW STOREDGE RGM HD +LTE MODEM - SE3800H-USSSHBC14",
                    "UOM": "EA",
                    "ITEM_CLASS": "Inverters",
                    "CATEGORY": "PPA_Lease",
                    "CATALOG_NAME": "VS Design Catalog",
                    "DEALER": "",
                    "DEVELOPMENT_NAME": "",
                    "LEAD_SOURCE": "",
                    "CONTRACT_RESTRICTIONS": "Lease",
                    "ITEM_STATUS": "Active",
                    "ORGANIZATION": "MA03",
                    "MANUFACTURER_PART_NUM": "SE3800HUS0SHBNC4",
                    "MANUFACTURER_NAME": "SolarEdge Technologies",
                    "IS_SERIALIZABLE": "TRUE",
                    "PRODUCT_TYPE": "Inverter",
                    "PRODUCT_CLASS": "",
                    "ITC_CODE": "30"
                }
            ],
            "errors": null,
            "id": "allowableInverters"
        })
    },

    // allowableInverters Cash or Loan
    {
        ruleId: 'allowableInverters',
        conditions: {
            contractType: "cash"
        },
        expected: JSON.stringify({
            "exceptions": null,
            "conditions": [
                {
                    "left": "contractType",
                    "operator": "=",
                    "right": "cash"
                }
            ],
            "value": [
                {
                    "id": "V303643",
                    "name": "SolarEdge Technologies SE7600H-US000BNC4",
                    "ITEM_NUMBER": "V303643",
                    "DESCRIPTION": "SE 7.6kW RGM HD - SE7600H-US000BNC4",
                    "UOM": "EA",
                    "ITEM_CLASS": "Inverters",
                    "CATEGORY": "Cash_Loan",
                    "CATALOG_NAME": "VS Design Catalog",
                    "DEALER": "Ben Reber",
                    "DEVELOPMENT_NAME": "Lindon Meadows",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "Cash",
                    "ITEM_STATUS": "Consume",
                    "ORGANIZATION": "MA03",
                    "MANUFACTURER_PART_NUM": "SE7600H-US000BNC4",
                    "MANUFACTURER_NAME": "SolarEdge Technologies",
                    "IS_SERIALIZABLE": "FALSE",
                    "PRODUCT_TYPE": "Inverter",
                    "PRODUCT_CLASS": "",
                    "ITC_CODE": "26"
                },
                {
                    "id": "V303644",
                    "name": "SolarEdge Technologies SE3800H-US000BNC4",
                    "ITEM_NUMBER": "V303644",
                    "DESCRIPTION": "SE 3.8kW RGM - SE3800H-US000BNC4",
                    "UOM": "EA",
                    "ITEM_CLASS": "Inverters",
                    "CATEGORY": "Cash_Loan",
                    "CATALOG_NAME": "VS Design Catalog",
                    "DEALER": "Ben Reber",
                    "DEVELOPMENT_NAME": "Lindon Meadows",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "Cash",
                    "ITEM_STATUS": "Active",
                    "ORGANIZATION": "MA03",
                    "MANUFACTURER_PART_NUM": "SE3800H-US000BNC4",
                    "MANUFACTURER_NAME": "SolarEdge Technologies",
                    "IS_SERIALIZABLE": "FALSE",
                    "PRODUCT_TYPE": "Inverter",
                    "PRODUCT_CLASS": "",
                    "ITC_CODE": "26"
                },
                {
                    "id": "V303645",
                    "name": "SolarEdge Technologies SE10000H-US000BNC4",
                    "ITEM_NUMBER": "V303645",
                    "DESCRIPTION": "SE10000HD w/RGM - SE10000H-US000BNC4",
                    "UOM": "EA",
                    "ITEM_CLASS": "Inverters",
                    "CATEGORY": "Cash_Loan",
                    "CATALOG_NAME": "VS Design Catalog",
                    "DEALER": "Ben Reber",
                    "DEVELOPMENT_NAME": "Lindon Meadows",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "Cash",
                    "ITEM_STATUS": "Consume",
                    "ORGANIZATION": "MA03",
                    "MANUFACTURER_PART_NUM": "SE10000H-US000BNC4",
                    "MANUFACTURER_NAME": "SolarEdge Technologies",
                    "IS_SERIALIZABLE": "FALSE",
                    "PRODUCT_TYPE": "Inverter",
                    "PRODUCT_CLASS": "",
                    "ITC_CODE": "26"
                }
            ],
            "errors": null,
            "id": "allowableInverters"
        })
    },
    {
        ruleId: 'allowableInverters',
        conditions: {
            contractType: "loan"
        },
        expected: JSON.stringify({
            "exceptions": null,
            "conditions": [
                {
                    "left": "contractType",
                    "operator": "=",
                    "right": "loan"
                }
            ],
            "value": [
                {
                    "id": "V303643",
                    "name": "SolarEdge Technologies SE7600H-US000BNC4",
                    "ITEM_NUMBER": "V303643",
                    "DESCRIPTION": "SE 7.6kW RGM HD - SE7600H-US000BNC4",
                    "UOM": "EA",
                    "ITEM_CLASS": "Inverters",
                    "CATEGORY": "Cash_Loan",
                    "CATALOG_NAME": "VS Design Catalog",
                    "DEALER": "Ben Reber",
                    "DEVELOPMENT_NAME": "Lindon Meadows",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "Loan",
                    "ITEM_STATUS": "Consume",
                    "ORGANIZATION": "MA03",
                    "MANUFACTURER_PART_NUM": "SE7600H-US000BNC4",
                    "MANUFACTURER_NAME": "SolarEdge Technologies",
                    "IS_SERIALIZABLE": "FALSE",
                    "PRODUCT_TYPE": "Inverter",
                    "PRODUCT_CLASS": "",
                    "ITC_CODE": "26"
                },
                {
                    "id": "V303644",
                    "name": "SolarEdge Technologies SE3800H-US000BNC4",
                    "ITEM_NUMBER": "V303644",
                    "DESCRIPTION": "SE 3.8kW RGM - SE3800H-US000BNC4",
                    "UOM": "EA",
                    "ITEM_CLASS": "Inverters",
                    "CATEGORY": "Cash_Loan",
                    "CATALOG_NAME": "VS Design Catalog",
                    "DEALER": "Ben Reber",
                    "DEVELOPMENT_NAME": "Lindon Meadows",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "Loan",
                    "ITEM_STATUS": "Active",
                    "ORGANIZATION": "MA03",
                    "MANUFACTURER_PART_NUM": "SE3800H-US000BNC4",
                    "MANUFACTURER_NAME": "SolarEdge Technologies",
                    "IS_SERIALIZABLE": "FALSE",
                    "PRODUCT_TYPE": "Inverter",
                    "PRODUCT_CLASS": "",
                    "ITC_CODE": "26"
                },
                {
                    "id": "V303645",
                    "name": "SolarEdge Technologies SE10000H-US000BNC4",
                    "ITEM_NUMBER": "V303645",
                    "DESCRIPTION": "SE10000HD w/RGM - SE10000H-US000BNC4",
                    "UOM": "EA",
                    "ITEM_CLASS": "Inverters",
                    "CATEGORY": "Cash_Loan",
                    "CATALOG_NAME": "VS Design Catalog",
                    "DEALER": "Ben Reber",
                    "DEVELOPMENT_NAME": "Lindon Meadows",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "Loan",
                    "ITEM_STATUS": "Consume",
                    "ORGANIZATION": "MA03",
                    "MANUFACTURER_PART_NUM": "SE10000H-US000BNC4",
                    "MANUFACTURER_NAME": "SolarEdge Technologies",
                    "IS_SERIALIZABLE": "FALSE",
                    "PRODUCT_TYPE": "Inverter",
                    "PRODUCT_CLASS": "",
                    "ITC_CODE": "26"
                }
            ],
            "errors": null,
            "id": "allowableInverters"
        })
    },
];
