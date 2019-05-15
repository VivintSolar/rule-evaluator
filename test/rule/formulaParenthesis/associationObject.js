module.exports = {
    "serviceAhj": {
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
            }
        }
    }
};