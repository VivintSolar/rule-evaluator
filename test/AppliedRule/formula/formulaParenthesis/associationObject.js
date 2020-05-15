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
                        "value": "(cecAcSystemSize * 1000) * (designFactor / 100) * 0.2"
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
                        "value": "5 - (cecAcSystemSize)"
                    }
                ]
            },
            "epbbFormula3": {
                "id": "epbbFormula3",
                "source": {
                    "id": "8cc558a4-9a97-4ef5-9e34-f535d3e0c21c",
                    "name": "Connecticut",
                    "type": "State"
                },
                "statements": [
                    {
                        "condition": [
                            {
                                "left": "designFactor",
                                "operator": "<",
                                "right": 75
                            }
                        ],
                        "description": "Condition 16",
                        "value": "((10000 * 0.547) + ((dcPtcSystemSize * 1000) - 10000) * 0.473) * (designFactor / 100) * systemAdjustmentFactor"
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
                    "cecAcSystemSize"
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
                    "cecAcSystemSize"
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
            },
            "epbbFormula3": {
                "allowableConditions": [
                    "designFactor",
                    "systemAdjustmentFactor",
                    "dcPtcSystemSize"
                ],
                "description": "Calculate the expected performance based buy down rebates",
                "id": "epbbFormula3",
                "name": "Epbb Formula 3",
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
                    "epbbFormula"
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
                    "epbbFormula"
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
                    "epbbFormula"
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
            "systemAdjustmentFactor": {
                "applyTo": [
                    "epbbFormula"
                ],
                "condition": true,
                "description": "System Adjustment Factor",
                "id": "systemAdjustmentFactor",
                "name": "System Adjustment Factor",
                "tags": [
                    "electrical",
                    "design",
                    "surveyor"
                ],
                "template": {
                    "dataType": "number"
                }
            },
            "dcPtcSystemSize": {
                "applyTo": [
                    "epbbFormula",
                    "proratedPtcDcSystemSize"
                ],
                "condition": true,
                "description": "DC PTC System Size",
                "id": "dcPtcSystemSize",
                "name": "DC PTC System Size",
                "tags": [
                    "electrical",
                    "design",
                    "surveyor"
                ],
                "template": {
                    "dataType": "number",
                    "units": "KW"
                }
            }
        }
    }
};