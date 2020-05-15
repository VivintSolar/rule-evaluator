module.exports = {
    "ahj": {
        "rules": {
            "epbbFormula": {
                "id": "epbbFormula",
                "source": {
                    "id": "6b07a571-604b-4e5d-a545-0ac3be59de16",
                    "name": "NV Energy",
                    "type": "Utility"
                },
                "statements": [
                    {
                        "value": "cecAcSystemSize"
                    },
                    {
                        "value": "cecAcSystemSize + systemSizeDc"
                    },
                    {
                        "value": "cecAcSystemSize + systemSizeDc + designFactor"
                    },
                    {
                        "value": "cecAcSystemSize + systemSizeDc + designFactor + dcPtcSystemSize"
                    },
                    {
                        "value": "cecAcSystemSize + systemSizeDc + designFactor + dcPtcSystemSize + powerclerkProductionAmount"
                    },
                    {
                        "value": "cecAcSystemSize + systemSizeDc + designFactor + dcPtcSystemSize + powerclerkProductionAmount + powerclerkUsageOffsetPercentage"
                    },
                    {
                        "value": "cecAcSystemSize + systemSizeDc + designFactor + dcPtcSystemSize + powerclerkProductionAmount + powerclerkUsageOffsetPercentage + systemAdjustmentFactor"
                    },
                    {
                        "value": "cecAcSystemSize + systemSizeDc + designFactor + dcPtcSystemSize + powerclerkProductionAmount + powerclerkUsageOffsetPercentage + systemAdjustmentFactor + usageAmount"
                    }
                ]
            },
            "epbbFormula2": {
                "id": "epbbFormula2",
                "source": {
                    "id": "6b07a571-604b-4e5d-a545-0ac3be59de16",
                    "name": "NV Energy",
                    "type": "Utility"
                },
                "statements": [
                    {
                        "value": "cecAcSystemSize + systemSizeDc + designFactor + dcPtcSystemSize + powerclerkProductionAmount + powerclerkUsageOffsetPercentage + systemAdjustmentFactor + usageAmount"
                    },
                    {
                        "value": "cecAcSystemSize + systemSizeDc + designFactor + dcPtcSystemSize + powerclerkProductionAmount + powerclerkUsageOffsetPercentage + systemAdjustmentFactor"
                    },
                    {
                        "value": "cecAcSystemSize + systemSizeDc + designFactor + dcPtcSystemSize + powerclerkProductionAmount + powerclerkUsageOffsetPercentage"
                    },
                    {
                        "value": "cecAcSystemSize + systemSizeDc + designFactor + dcPtcSystemSize + powerclerkProductionAmount"
                    },
                    {
                        "value": "cecAcSystemSize + systemSizeDc + designFactor + dcPtcSystemSize"
                    },
                    {
                        "value": "cecAcSystemSize + systemSizeDc + designFactor"
                    },
                    {
                        "value": "cecAcSystemSize + systemSizeDc"
                    },
                    {
                        "value": "cecAcSystemSize"
                    }
                ]
            }
        }
    },
    "definitions": {
        "rules": {
            "epbbFormula": {
                "allowableConditions": [
                    "systemSizeDc",
                    "designFactor",
                    "cecAcSystemSize",
                    "powerclerkUsageOffsetPercentage",
                    "systemAdjustmentFactor",
                    "powerclerkProductionAmount",
                    "usageAmount",
                    "dcPtcSystemSize"
                ],
                "description": "Calculate the expected performance based buy down rebates",
                "id": "epbbFormula",
                "name": "Epbb Formula",
                "rule": true,
                "tags": [
                    "utilityRequirementsRuleGroup",
                    "default"
                ],
                "template": {
                    "dataType": "formula",
                    "onConflict": "standard"
                }
            },
            "epbbFormula2": {
                "allowableConditions": [
                    "systemSizeDc",
                    "designFactor",
                    "cecAcSystemSize",
                    "powerclerkUsageOffsetPercentage",
                    "systemAdjustmentFactor",
                    "powerclerkProductionAmount",
                    "usageAmount",
                    "dcPtcSystemSize"
                ],
                "description": "Calculate the expected performance based buy down rebates",
                "id": "epbbFormula2",
                "name": "Epbb Formula 2",
                "rule": true,
                "tags": [
                    "utilityRequirementsRuleGroup",
                    "default"
                ],
                "template": {
                    "dataType": "formula",
                    "onConflict": "standard"
                }
            }
        },
        "conditions": {
            "cecAcSystemSize": {
                "applyTo": [
                    "epbbFormula",
                    "epbbFormula2"
                ],
                "condition": true,
                "description": "CEC-AC System Size",
                "id": "cecAcSystemSize",
                "name": "CEC-AC System Size",
                "tags": [
                    "electrical",
                    "design",
                    "surveyor"
                ],
                "template": {
                    "dataType": "number",
                    "units": "KW"
                }
            },
            "systemSizeDc": {
                "applyTo": [
                    "epbbFormula",
                    "epbbFormula2"
                ],
                "condition": true,
                "description": "DC System Size",
                "id": "systemSizeDc",
                "name": "DC System Size",
                "tags": [
                    "electrical",
                    "design",
                    "surveyor"
                ],
                "template": {
                    "dataType": "number",
                    "range": {
                        "min": 0
                    },
                    "units": "KW"
                }
            },
            "designFactor": {
                "applyTo": [
                    "epbbFormula",
                    "epbbFormula2"
                ],
                "condition": true,
                "description": "Design Factor",
                "id": "designFactor",
                "name": "Design Factor",
                "tags": [
                    "design"
                ],
                "template": {
                    "dataType": "number"
                }
            },
            "dcPtcSystemSize": {
                "template": {
                    "units": "KW",
                    "dataType": "number"
                },
                "applyTo": [
                    "epbbFormula",
                    "epbbFormula2"
                ],
                "condition": true,
                "name": "DC PTC System Size",
                "description": "DC PTC System Size",
                "id": "dcPtcSystemSize",
                "tags": [
                    "electrical",
                    "design",
                    "surveyor"
                ]
            },
            "powerclerkProductionAmount": {
                "template": {
                    "units": "KW",
                    "dataType": "number"
                },
                "applyTo": [
                    "epbbFormula",
                    "epbbFormula2"
                ],
                "condition": true,
                "name": "Powerclerk Production Amount",
                "description": "Powerclerk Production Amount",
                "id": "powerclerkProductionAmount",
                "tags": [
                    "electrical",
                    "design",
                    "surveyor"
                ]
            },
            "powerclerkUsageOffsetPercentage": {
                "template": {
                    "units": "%",
                    "dataType": "number"
                },
                "applyTo": [
                    "epbbFormula",
                    "epbbFormula2"
                ],
                "condition": true,
                "name": "Powerclerk Usage Offset Percentage",
                "description": "Powerclerk Usage Offset Percentage",
                "id": "powerclerkUsageOffsetPercentage",
                "tags": [
                    "electrical",
                    "design",
                    "surveyor"
                ]
            },
            "systemAdjustmentFactor": {
                "template": {
                    "dataType": "number"
                },
                "applyTo": [
                    "epbbFormula",
                    "epbbFormula2"
                ],
                "condition": true,
                "name": "System Adjustment Factor",
                "description": "System Adjustment Factor",
                "id": "systemAdjustmentFactor",
                "tags": [
                    "electrical",
                    "design",
                    "surveyor"
                ]
            },
            "usageAmount": {
                "template": {
                    "units": "KW",
                    "dataType": "number"
                },
                "applyTo": [
                    "epbbFormula",
                    "epbbFormula2"
                ],
                "condition": true,
                "name": "Usage Amount",
                "description": "Usage Amount",
                "id": "usageAmount",
                "tags": [
                    "electrical",
                    "design",
                    "surveyor"
                ]
            }
        }
    }
};