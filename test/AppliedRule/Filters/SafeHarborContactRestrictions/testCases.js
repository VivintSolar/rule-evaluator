



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
            "conditions": [
                {
                    "left": "contractType",
                    "operator": "=",
                    "right": "ppa"
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
                    "id": "V305577",
                    "name": "V305577 - Direct - PPA - 26",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "PPA",
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
                    "id": "V305555",
                    "name": "V305555 - Direct - Lease - 30",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "Lease",
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
                    "id": "V305555",
                    "name": "V305555 - Direct - Lease - 30",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "Lease",
                    "ITC_CODE": "30"
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
                    "id": "V305555",
                    "name": "V305555 - Direct - PPA - 30",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "PPA",
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
                    "id": "V305555",
                    "name": "V305555 - Direct - Lease - 30",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "Lease",
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
                    "id": "V305555",
                    "name": "V305555 - Direct - Lease - 30",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "Lease",
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
                    "id": "V303333",
                    "name": "V303333 - Direct - Cash - 26",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "Cash",
                    "ITC_CODE": "26"
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
                    "id": "V304570",
                    "name": "V304570 - Direct - PPA - 30",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "PPA",
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
                    "id": "V304567",
                    "name": "V304567 - Direct - PPA - 30",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "PPA",
                    "ITC_CODE": "30"
                }
            ],
            "errors": [
                "Required Condition Input Missing; Lead Source"
            ],
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
                    "id": "V304570",
                    "name": "V304570 - Direct - Lease - 30",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "Lease",
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
                    "name": "V304567 - Direct - Lease - 30",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "Lease",
                    "ITC_CODE": "30"
                }
            ],
            "errors": [
                "Required Condition Input Missing; Lead Source"
            ],
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
                    "id": "V304570",
                    "name": "V304570 - Direct - Lease - 30",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "Lease",
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
                    "name": "V304567 - Direct - Lease - 30",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "Lease",
                    "ITC_CODE": "30"
                }
            ],
            "errors": [
                "Required Condition Input Missing; Lead Source"
            ],
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
                    "id": "V303643",
                    "name": "V303643 - Direct - Cash - 26",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "Cash",
                    "ITC_CODE": "26"
                },
                {
                    "id": "V303644",
                    "name": "V303644 - Direct - Cash - 26",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "Cash",
                    "ITC_CODE": "26"
                },
                {
                    "id": "V303645",
                    "name": "V303645 - Direct - Cash - 26",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "Cash",
                    "ITC_CODE": "26"
                }
            ],
            "errors": [
                "Required Condition Input Missing; Lead Source"
            ],
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
                    "id": "V303643",
                    "name": "V303643 - Direct - Loan - 26",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "Loan",
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
                    "name": "V303645 - Direct - Loan - 26",
                    "LEAD_SOURCE": "Direct",
                    "CONTRACT_RESTRICTIONS": "Loan",
                    "ITC_CODE": "26"
                }
            ],
            "errors": [
                "Required Condition Input Missing; Lead Source"
            ],
            "id": "allowableInverters"
        })
    },
];
