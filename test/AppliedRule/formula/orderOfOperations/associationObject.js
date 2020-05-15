module.exports = {
    "ahj": {
        "rules": {
            "epbbFormula": {
                "id": "epbbFormula",
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
            },
            "orderTest":{
                "id": "orderTest",
                "source": {
                    "id": "8cc558a4-9a97-4ef5-9e34-f535d3e0c21c",
                    "name": "Connecticut",
                    "type": "State"
                },
                "statements": [
                    {
                        "condition": [
                            {
                                "left": "scenarios",
                                "operator": "=",
                                "right": 1
                            }
                        ],
                        "value": "2 + 4 * 5"
                    },
                    {
                        "condition": [
                            {
                                "left": "scenarios",
                                "operator": "=",
                                "right": 2
                            }
                        ],
                        "value": "2 + 4 * 5 + 5 * 8 + 12 + 3 - 4 / 2 * 4"
                    },
                    {
                        "condition": [
                            {
                                "left": "scenarios",
                                "operator": "=",
                                "right": 3
                            }
                        ],
                        "value": "25"
                    },
                    {
                        "condition": [
                            {
                                "left": "scenarios",
                                "operator": "=",
                                "right": 4
                            }
                        ],
                        "value": "8 + ((4 + 9 - 4) + 5) + (3 - 2) + 2"
                    },
                    {
                        "condition": [
                            {
                                "left": "scenarios",
                                "operator": "=",
                                "right": 5
                            }
                        ],
                        "value": "8 + ((4 + 9 - 4) + 5) + (3 - 2) + 2 * 5"
                    },
                    {
                        "condition": [
                            {
                                "left": "scenarios",
                                "operator": "=",
                                "right": 6
                            }
                        ],
                        "value": "1 * 2 * 3 * 4 * 5 / 2 + (5 - 3) * 2 / 2 + 1"
                    }
                ]
            }
        }
    },
    "definitions": {
        "rules": {
            "epbbFormula": {
                "allowableConditions": [
                    "designFactor",
                    "systemAdjustmentFactor",
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
            "orderTest": {
                "allowableConditions": [
                    "scenarios"
                ],
                "description": "To Test Order Of Operations",
                "id": "orderTest",
                "name": "Order Test",
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
            "scenarios": {
                "applyTo": [
                    "orderTest"
                ],
                "condition": true,
                "description": "Scenarios",
                "id": "scenarios",
                "name": "Scenarios",
                "tags": [
                    "design"
                ],
                "template": {
                    "dataType": "number"
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