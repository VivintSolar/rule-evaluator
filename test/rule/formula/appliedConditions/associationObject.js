module.exports = {
    "ahj": {
        "rules": {
            "epbbFormula": {
                "statements": [
                    {
                        "value": "((proratedPtcDcSystemSizeCondition * 1000 * 0.547) + ((20000 - (proratedPtcDcSystemSizeCondition * 1000)) * 0.473)) * systemAdjustmentFactor",
                        "description": "(10000 * 0.463) + (10000 * 0.40), If Design Factor is ≥ 75% AND System Size is > 20kW CEC-AC",
                        "condition": [
                            {
                                "left": "designFactor",
                                "operator": ">=",
                                "right": 75
                            },
                            {
                                "left": "dcPtcSystemSize",
                                "operator": ">",
                                "right": 20
                            },
                            {
                                "left": "powerclerkUsageOffsetPercentage",
                                "operator": ">",
                                "right": 100
                            },
                            {
                                "left": "proratedPtcDcSystemSizeCondition",
                                "operator": "<=",
                                "right": 10
                            }
                        ]
                    },
                    {
                        "value": "((10000 * 0.547) + (10000 * 0.473)) * systemAdjustmentFactor",
                        "description": "((CEC-AC System Size * 1000) * 0.463), If Design Factor is ≥ 75% AND System Size is ≤ 10kW CEC-AC",
                        "condition": [
                            {
                                "left": "designFactor",
                                "operator": ">=",
                                "right": 75
                            },
                            {
                                "left": "dcPtcSystemSize",
                                "operator": ">",
                                "right": 20
                            },
                            {
                                "left": "powerclerkUsageOffsetPercentage",
                                "operator": ">",
                                "right": 200
                            },
                            {
                                "left": "proratedPtcDcSystemSizeCondition",
                                "operator": ">",
                                "right": 10
                            }
                        ]
                    },
                    {
                        "value": "((proratedPtcDcSystemSizeCondition * 1000 * 0.547) + ((dcPtcSystemSize - proratedPtcDcSystemSizeCondition) * 1000 * 0.473)) * systemAdjustmentFactor",
                        "description": "(1000*0.463)+(((CEC-AC System Size*10000)-1000)*0.40), If Design Factor ≥75% & System Size ≤20 & >10 kW CEC-AC",
                        "condition": [
                            {
                                "left": "designFactor",
                                "operator": ">=",
                                "right": 75
                            },
                            {
                                "left": "dcPtcSystemSize",
                                "operator": "<=",
                                "right": 10
                            },
                            {
                                "left": "powerclerkUsageOffsetPercentage",
                                "operator": ">",
                                "right": 100
                            }
                        ]
                    },
                    {
                        "value": "((proratedPtcDcSystemSizeCondition * 1000 * 0.547) + ((dcPtcSystemSize - proratedPtcDcSystemSizeCondition) * 1000 * 0.473)) * systemAdjustmentFactor",
                        "description": "(((10000 * 0.463) + (10000 * 0.40)) * (Design Factor/100) ), If Design Factor <75% & System Size > 20kW CEC-AC",
                        "condition": [
                            {
                                "left": "designFactor",
                                "operator": ">=",
                                "right": 75
                            },
                            {
                                "left": "powerclerkUsageOffsetPercentage",
                                "operator": ">",
                                "right": 100
                            },
                            {
                                "left": "proratedPtcDcSystemSizeCondition",
                                "operator": "<=",
                                "right": 10
                            }
                        ]
                    },
                    {
                        "value": "((10000 * 0.547) + ((dcPtcSystemSize * 1000) - 10000) * 0.473) * systemAdjustmentFactor",
                        "description": "(((CEC-AC System Size*1000) * 0.463) * (Design Factor/100)), If Design Factor <75% & System Size ≤ 10kW CEC-AC",
                        "condition": [
                            {
                                "left": "designFactor",
                                "operator": ">=",
                                "right": 75
                            },
                            {
                                "left": "proratedPtcDcSystemSizeCondition",
                                "operator": ">",
                                "right": 10
                            },
                            {
                                "left": "powerclerkUsageOffsetPercentage",
                                "operator": ">",
                                "right": 100
                            }
                        ]
                    },
                    {
                        "value": "((proratedPtcDcSystemSizeCondition * 1000 * 0.547) + ((20000 - (proratedPtcDcSystemSizeCondition * 1000)) * 0.473)) * (designFactor / 100) * systemAdjustmentFactor",
                        "description": "((1000*.463)+(((CEC-ACSystemSize*1000)-10000)*.4))* (DesignFactor/100) DesignFactor<75% & Size≤20&>10 kWCEC-AC",
                        "condition": [
                            {
                                "left": "designFactor",
                                "operator": "<",
                                "right": 75
                            },
                            {
                                "left": "dcPtcSystemSize",
                                "operator": ">",
                                "right": 20
                            },
                            {
                                "left": "powerclerkUsageOffsetPercentage",
                                "operator": ">",
                                "right": 100
                            },
                            {
                                "left": "proratedPtcDcSystemSizeCondition",
                                "operator": "<=",
                                "right": 10
                            }
                        ]
                    },
                    {
                        "value": "((10000 * 0.547) + (10000 * 0.473)) * (designFactor / 100) * systemAdjustmentFactor",
                        "condition": [
                            {
                                "left": "designFactor",
                                "operator": "<",
                                "right": 75
                            },
                            {
                                "left": "dcPtcSystemSize",
                                "operator": ">",
                                "right": 20
                            },
                            {
                                "left": "powerclerkUsageOffsetPercentage",
                                "operator": ">",
                                "right": 100
                            },
                            {
                                "left": "proratedPtcDcSystemSizeCondition",
                                "operator": ">",
                                "right": 10
                            }
                        ]
                    },
                    {
                        "value": "(proratedPtcDcSystemSizeCondition * 1000 * 0.547) + ((dcPtcSystemSize - proratedPtcDcSystemSizeCondition) * 1000 * 0.473) * (designFactor / 100) * systemAdjustmentFactor",
                        "condition": [
                            {
                                "left": "designFactor",
                                "operator": "<",
                                "right": 75
                            },
                            {
                                "left": "powerclerkUsageOffsetPercentage",
                                "operator": ">",
                                "right": 100
                            },
                            {
                                "left": "proratedPtcDcSystemSizeCondition",
                                "operator": "<=",
                                "right": 10
                            },
                            {
                                "left": "dcPtcSystemSize",
                                "operator": "<=",
                                "right": 10
                            }
                        ]
                    },
                    {
                        "value": "((proratedPtcDcSystemSizeCondition * 1000 * 0.547) + ((dcPtcSystemSize - proratedPtcDcSystemSizeCondition) * 1000 * 0.473)) * (designFactor / 100) * systemAdjustmentFactor",
                        "condition": [
                            {
                                "left": "powerclerkUsageOffsetPercentage",
                                "operator": ">",
                                "right": 100
                            },
                            {
                                "left": "proratedPtcDcSystemSizeCondition",
                                "operator": "<=",
                                "right": 10
                            },
                            {
                                "left": "designFactor",
                                "operator": "<",
                                "right": 75
                            }
                        ]
                    },
                    {
                        "value": "((10000 * 0.547) + (((dcPtcSystemSize * 1000) - 10000) * 0.473)) * (designFactor / 100) * systemAdjustmentFactor",
                        "condition": [
                            {
                                "left": "designFactor",
                                "operator": "<",
                                "right": 75
                            },
                            {
                                "left": "powerclerkUsageOffsetPercentage",
                                "operator": ">",
                                "right": 100
                            },
                            {
                                "left": "proratedPtcDcSystemSizeCondition",
                                "operator": ">",
                                "right": 10
                            }
                        ]
                    },
                    {
                        "value": "((10000 * 0.547) + (10000 * 0.473)) * systemAdjustmentFactor",
                        "condition": [
                            {
                                "left": "designFactor",
                                "operator": ">=",
                                "right": 75
                            },
                            {
                                "left": "dcPtcSystemSize",
                                "operator": ">",
                                "right": 20
                            }
                        ]
                    },
                    {
                        "value": "(dcPtcSystemSize * 1000 * 0.547) * systemAdjustmentFactor",
                        "condition": [
                            {
                                "left": "dcPtcSystemSize",
                                "operator": "<=",
                                "right": 10
                            },
                            {
                                "left": "designFactor",
                                "operator": ">=",
                                "right": 75
                            }
                        ]
                    },
                    {
                        "value": "((10000 * 0.547) + ((dcPtcSystemSize * 1000) - 10000) * 0.473) * systemAdjustmentFactor",
                        "condition": [
                            {
                                "left": "designFactor",
                                "operator": ">=",
                                "right": 75
                            }
                        ]
                    },
                    {
                        "value": "((10000 * 0.547) + (10000 * 0.473)) * (designFactor / 100) * systemAdjustmentFactor",
                        "condition": [
                            {
                                "left": "designFactor",
                                "operator": "<",
                                "right": 75
                            },
                            {
                                "left": "dcPtcSystemSize",
                                "operator": ">",
                                "right": 20
                            }
                        ]
                    },
                    {
                        "value": "(dcPtcSystemSize * 1000 * 0.547) * (designFactor / 100) * systemAdjustmentFactor",
                        "condition": [
                            {
                                "left": "designFactor",
                                "operator": "<",
                                "right": 75
                            },
                            {
                                "left": "dcPtcSystemSize",
                                "operator": "<=",
                                "right": 10
                            }
                        ]
                    },
                    {
                        "value": "((10000 * 0.547) + ((dcPtcSystemSize * 1000) - 10000) * 0.473) * (designFactor / 100) * systemAdjustmentFactor",
                        "condition": [
                            {
                                "left": "designFactor",
                                "operator": "<",
                                "right": 75
                            }
                        ]
                    }
                ],
                "id": "epbbFormula",
                "source": {
                    "name": "Connecticut",
                    "type": "State",
                    "id": "8cc558a4-9a97-4ef5-9e34-f535d3e0c21c"
                }
            }
        }
    },
    "definitions": {
        "rules": {
            "epbbFormula": {
                "template": {
                    "onConflict": "standard",
                    "dataType": "formula"
                },
                "description": "Calculate the expected performance based buy down rebates",
                "id": "epbbFormula",
                "name": "Epbb Formula",
                "allowableConditions": [
                    "systemSizeDc",
                    "designFactor",
                    "cecAcSystemSize",
                    "powerclerkUsageOffsetPercentage",
                    "systemAdjustmentFactor",
                    "powerclerkProductionAmount",
                    "usageAmount",
                    "dcPtcSystemSize",
                    "proratedPtcDcSystemSizeCondition"
                ],
                "rule": true,
                "tags": [
                    "utilityRequirementsRuleGroup",
                    "default"
                ]
            }
        },
        "conditions": {
            "systemSizeDc":{
                "applyTo": [
                    "epbbFormula"
                ],
                "template": {
                    "range": {
                        "min": 0
                    },
                    "dataType": "number",
                    "units": "KW"
                },
                "condition": true,
                "description": "DC System Size",
                "id": "systemSizeDc",
                "name": "DC System Size",
                "tags": [
                    "electrical",
                    "design",
                    "surveyor"
                ]
            },
            "designFactor":{
                "applyTo": [
                    "epbbFormula"
                ],
                "template": {
                    "dataType": "number"
                },
                "condition": true,
                "description": "Design Factor",
                "id": "designFactor",
                "name": "Design Factor",
                "tags": [
                    "design"
                ]
            },
            "cecAcSystemSize":{
                "applyTo": [
                    "epbbFormula"
                ],
                "template": {
                    "units": "KW",
                    "dataType": "number"
                },
                "condition": true,
                "description": "CEC-AC System Size",
                "id": "cecAcSystemSize",
                "name": "CEC-AC System Size",
                "tags": [
                    "electrical",
                    "design",
                    "surveyor"
                ]
            },
            "powerclerkUsageOffsetPercentage": {
                "applyTo": [
                    "epbbFormula"
                ],
                "template": {
                    "units": "%",
                    "dataType": "number"
                },
                "condition": true,
                "description": "Powerclerk Usage Offset Percentage",
                "id": "powerclerkUsageOffsetPercentage",
                "name": "Powerclerk Usage Offset Percentage",
                "tags": [
                    "electrical",
                    "design",
                    "surveyor"
                ]
            },
            "systemAdjustmentFactor":{
                "applyTo": [
                    "epbbFormula"
                ],
                "template": {
                    "dataType": "number"
                },
                "condition": true,
                "description": "System Adjustment Factor",
                "id": "systemAdjustmentFactor",
                "name": "System Adjustment Factor",
                "tags": [
                    "electrical",
                    "design",
                    "surveyor"
                ]
            },
            "powerclerkProductionAmount":{
                "applyTo": [
                    "epbbFormula"
                ],
                "template": {
                    "units": "KW",
                    "dataType": "number"
                },
                "condition": true,
                "description": "Powerclerk Production Amount",
                "id": "powerclerkProductionAmount",
                "name": "Powerclerk Production Amount",
                "tags": [
                    "electrical",
                    "design",
                    "surveyor"
                ]
            },
            "usageAmount":{
                "applyTo": [
                    "epbbFormula"
                ],
                "template": {
                    "units": "KW",
                    "dataType": "number"
                },
                "condition": true,
                "description": "Usage Amount",
                "id": "usageAmount",
                "name": "Usage Amount",
                "tags": [
                    "electrical",
                    "design",
                    "surveyor"
                ]
            },
            "dcPtcSystemSize": {
                "applyTo": [
                    "epbbFormula"
                ],
                "template": {
                    "units": "KW",
                    "dataType": "number"
                },
                "condition": true,
                "description": "DC PTC System Size",
                "id": "dcPtcSystemSize",
                "name": "DC PTC System Size",
                "tags": [
                    "electrical",
                    "design",
                    "surveyor"
                ]
            },
            "proratedPtcDcSystemSizeCondition": {
                "applyTo": [
                    "epbbFormula"
                ],
                "template": {
                    "units": "KW",
                    "dataType": "number"
                },
                "condition": true,
                "description": "Prorated PTC DC System Size condition to use with evaualted formula",
                "id": "proratedPtcDcSystemSizeCondition",
                "name": "Prorated PTC DC System Size Condition",
                "tags": [
                    "electrical",
                    "design",
                    "surveyor"
                ]
            }
        }
    }
};