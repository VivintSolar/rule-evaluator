module.exports = {
    "ahj": {
        "rules": {
            "kennyTemplateString": {
                "statements": [
                    {
                        "description": "Condition One - param1: System Size AC, param2: System Size DC, param3: Design Factor",
                        "value": "Condition One - param1: {systemSizeAc}, param2: {systemSizeDc}, param3: Design Factor",
                        "condition": [
                            {
                                "left": "designFactor",
                                "operator": "<",
                                "right": 75
                            }
                        ]
                    },
                    {
                        "value": "Condition Two - param1: {systemSizeAc}, param2: {systemSizeDc}, param3: {designFactor}",
                        "condition": [
                            {
                                "left": "designFactor",
                                "operator": ">",
                                "right": 74
                            }
                        ]
                    },
                    {
                        "value": "Condition Three - Default Condition - param1: {systemSizeAc}, param2: {systemSizeDc}, param3: {designFactor}",
                    }
                ],
                "id": "kennyTemplateString",
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
            "kennyTemplateString": {
                "allowableConditions": [
                    "contractType",
                    "systemSizeDc",
                    "designFactor",
                    "cecAcSystemSize",
                    "systemSizeAc"
                ],
                "id": "kennyTemplateString",
                "name": "Kenny Template String",
                "rule": true,
                "template": {
                    "dataType": "template string",
                    "onConflict": "standard"
                }
            }
        },
        "conditions": {
            "systemSizeDc":{
                "applyTo": [
                    "kennyTemplateString"
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
            },
            "systemSizeAc":{
                "applyTo": [
                    "kennyTemplateString"
                ],
                "template": {
                    "range": {
                        "min": 0
                    },
                    "dataType": "number",
                    "units": "KW"
                },
                "condition": true,
                "description": "AC System Size",
                "id": "systemSizeAc",
                "name": "AC System Size",
            },
            "designFactor":{
                "applyTo": [
                    "kennyTemplateString"
                ],
                "template": {
                    "dataType": "number"
                },
                "condition": true,
                "description": "Design Factor",
                "id": "designFactor",
                "name": "Design Factor"
            },
            "cecAcSystemSize":{
                "applyTo": [
                    "kennyTemplateString"
                ],
                "template": {
                    "units": "KW",
                    "dataType": "number"
                },
                "condition": true,
                "description": "CEC-AC System Size",
                "id": "cecAcSystemSize",
                "name": "CEC-AC System Size"
            },
            "contractType":{
                "applyTo": [
                    "kennyTemplateString"
                ],
                "condition": true,
                "description": "Sales Force Contract Type Field",
                "id": "contractType",
                "name": "Contract Type",
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
            }
        }
    }
};