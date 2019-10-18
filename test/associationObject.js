module.exports = {
    "ahj": {
        "rules": {
            "testRequirementObject": {
                "statements": [
                    {
                        "condition": [
                            {
                                "left": "testConditionNumber",
                                "operator": "<",
                                "right": 9.5
                            }
                        ],
                        "description": "Test Condition < 9.5°, Attr Name 1: 0",
                        "value": {
                            "attrName1": 0
                        },
                        "onConflict": "standard",
                        "source": {
                            "id": "id",
                            "type": "type",
                            "name": "name"
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "testConditionNumber",
                                "operator": "<",
                                "right": 9.5
                            }
                        ],
                        "description": "Test Condition < 9.5°, Attr Name 2: 0",
                        "value": {
                            "attrName2": 0
                        },
                        "onConflict": "standard",
                        "source": {
                            "id": "id",
                            "type": "type",
                            "name": "name"
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "testConditionEnum",
                                "operator": "=",
                                "right": "option1"
                            },
                            {
                                "left": "testConditionNumber",
                                "operator": "<",
                                "right": 9.5
                            }
                        ],
                        "description": "Test Condition Enum is Option 1, Attr Name 3: 100 AND Test Condition < 9.5°, Attr Name 3: 200",
                        "value": {
                            "attrName3": 200
                        },
                        "onConflict": "standard",
                        "source": {
                            "id": "id",
                            "type": "type",
                            "name": "name"
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "testConditionEnum",
                                "operator": "=",
                                "right": "option2"
                            },
                            {
                                "left": "testConditionNumber",
                                "operator": "<",
                                "right": 9.5
                            }
                        ],
                        "description": "Test Condition Enum is Option 2, Attr Name 3: 100 AND Test Condition < 9.5°, Attr Name 3: 200",
                        "value": {
                            "attrName3": 200
                        },
                        "onConflict": "standard",
                        "source": {
                            "id": "id",
                            "type": "type",
                            "name": "name"
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "testConditionUnsupportedEnum",
                                "operator": "=",
                                "right": "option1"
                            },
                            {
                                "left": "testConditionEnum",
                                "operator": "=",
                                "right": "option1"
                            }
                        ],
                        "description": "Test Condition Unsupported Enum is Option 1 AND Test Condition Enum is Option 1, Attr Name 3: 400 ",
                        "value": {
                            "attrName3": 400
                        },
                        "onConflict": "standard",
                        "source": {
                            "id": "id",
                            "type": "type",
                            "name": "name"
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "testConditionUnsupportedEnum",
                                "operator": "=",
                                "right": "option1"
                            }
                        ],
                        "description": "Test Condition Unsupported Enum is Option 1, Attr Name 3: 300",
                        "value": {
                            "attrName3": 300
                        },
                        "onConflict": "standard",
                        "source": {
                            "id": "id",
                            "type": "type",
                            "name": "name"
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "testConditionEnum",
                                "operator": "=",
                                "right": "option1"
                            }
                        ],
                        "description": "Test Condition Enum is Option 1, Attr Name 3: 200",
                        "value": {
                            "attrName3": 200
                        },
                        "onConflict": "standard",
                        "source": {
                            "id": "id",
                            "type": "type",
                            "name": "name"
                        }
                    },
                    {
                        "condition": [
                            {
                                "left": "testConditionEnum",
                                "operator": "=",
                                "right": "option2"
                            }
                        ],
                        "description": "Test Condition Enum is Option 2, Attr Name 3: 100",
                        "value": {
                            "attrName3": 100
                        },
                        "onConflict": "standard",
                        "source": {
                            "id": "id",
                            "type": "type",
                            "name": "name"
                        }
                    },
                    {
                        "value": {
                            "attrName2": 18
                        },
                        "onConflict": "standard",
                        "source": {
                            "id": "id",
                            "type": "type",
                            "name": "name"
                        }
                    }
                ],
                "timeStamp": "2018-04-27T21:55:50.604Z",
                "name": "Test Requirement Object",
                "id": "testRequirementObject"
            },
            "alternativeMaxACSystemSizeCalculation":{
                "statements":[
                    {
                        "value": "(systemSizeAc * 2) + (squareFootage / 8)",
                        "description": "Service Elevation is greater Than 555ft",
                        "condition": [
                            {
                                "left": "serviceElevation",
                                "operator": ">",
                                "right": 555
                            }
                        ],
                        "source": {
                            "id": "id",
                            "type": "type",
                            "name": "name"
                        }
                    },
                    {
                        "value": "(squareFootage / 2) + (squareFootage * 2)",
                        "source": {
                            "id": "id",
                            "type": "type",
                            "name": "name"
                        }
                    }
                ],
                "timeStamp": "2018-04-27T21:55:50.604Z",
                "id": "alternativeMaxACSystemSizeCalculation",
                "name": "Alternative Max AC System Size Calculation",
            },
            "nullResultsTest":{
                "id": "nullResultsTest",
                "statements":[
                    {
                        "value": {
                            "enumTest": "enumOption1",
                            "numberTest": 1234123,
                            "boolTest": true,
                            "orderedListTest": ['orderedListOption1', 'orderedListOption2']
                        },
                        "condition": [
                            { "left": "serviceElevation", "operator": "=", "right": 2 }
                        ]
                    }
                ]
            }
        }
    },
    "definitions": {
        "rules": {
            "testRequirementObject": {
                "client":{
                    "cobblestone":{
                        "supportedConditions":{
                            "testConditionEnum": ['option1'],
                            "testConditionNumber":[ 4, 10, 15 ]
                        }
                    }
                },
                "template": {
                    "item": {
                        "attrName1": {
                            "name": "Attr Name 1",
                            "units": "in",
                            "onConflict": "standard",
                            "dataType": "number"
                        },
                        "attrName2": {
                            "name": "Attr Name 2",
                            "units": "in",
                            "onConflict": "standard",
                            "dataType": "number"
                        },
                        "attrName3": {
                            "name": "Attr Name 3",
                            "units": "in",
                            "onConflict": "standard",
                            "dataType": "number"
                        }
                    },
                    "onConflict": "standard",
                    "dataType": "object"
                },
                "description": "Object Requirement for Testing",
                "id": "testRequirementObject",
                "name": "Test Requirement Object",
                "allowableConditions": [
                    "testConditionEnum",
                    "testConditionNumber",
                    "testConditionUnsupportedNumber",
                    "testConditionUnsupportedEnum"
                ],
                "rule": true
            },
            "alternativeMaxACSystemSizeCalculation":{
                "template": {
                    "onConflict": "standard",
                    "dataType": "formula"
                },
                "description": "Alternative Max AC System Size Calculation",
                "id": "alternativeMaxACSystemSizeCalculation",
                "name": "Alternative Max AC System Size Calculation",
                "allowableConditions": [
                    "squareFootage",
                    "serviceElevation",
                    "systemSizeAc"
                ],
                "rule": true
            },
            "nullResultsTest":{
                "id": "nullResultsTest",
                "name": "Null Results Test",
                "description": "Null Results Test",
                "rule": true,
                "allowableConditions": [
                    "serviceElevation"
                ],
                "template":{
                    "dataType": "object",
                    "item":{
                        "enumTest":{
                            "name": "Enum Test",
                            "dataType": "enum",
                            "items":[
                                {"id": "enumOption1", "name": "Enum Option 1"},
                                {"id": "enumOption2", "name": "Enum Option 2"}
                            ]
                        },
                        "numberTest":{
                            "name": "Number Test",
                            "dataType": "number"
                        },
                        "boolTest":{
                            "name": "Boolean Test",
                            "dataType": "boolean"
                        },
                        "orderedListTest":{
                            "name": "Ordered List Test",
                            "dataType": "ordered list",
                            "items": [
                                {"id": "orderedListOption1", "name": "Ordered List Option 1"},
                                {"id": "orderedListOption2", "name": "Ordered List Option 2"}
                            ]
                        }
                    }
                }
            }
        },
        "conditions": {
            "squareFootage": {
                "applyTo": [
                    "alternativeMaxACSystemSizeCalculation"
                ],
                "template": {
                    "units": "sq ft",
                    "dataType": "number"
                },
                "condition": true,
                "description": "Square Footage",
                "id": "squareFootage",
                "name": "Square Footage"
            },
            "serviceElevation": {
                "applyTo": [
                    "alternativeMaxACSystemSizeCalculation",
                    "nullResultsTest"
                ],
                "template": {
                    "units": "ft",
                    "dataType": "number"
                },
                "condition": true,
                "description": "Service Elevation",
                "id": "serviceElevation",
                "name": "Service Elevation"
            },
            "systemSizeAc": {
                "applyTo": [
                    "alternativeMaxACSystemSizeCalculation"
                ],
                "template": {
                    "units": "ft",
                    "dataType": "number"
                },
                "condition": true,
                "description": "AC System Size",
                "id": "systemSizeAc",
                "name": "AC System Size"
            },
            "testConditionEnum": {
                "applyTo": [
                    "testRequirementObject"
                ],
                "template": {
                    "items": [
                        { "id": "option1", "name": "Option 1" },
                        { "id": "option2", "name": "Option 2" },
                        { "id": "option3", "name": "Option 3" },
                        { "id": "option4", "name": "Option 4" }
                    ],
                    "dataType": "enum"
                },
                "condition": true,
                "description": "Test Enum Condition",
                "id": "testConditionEnum",
                "name": "Test Condition Enum"
            },
            "testConditionUnsupportedEnum": {
                "applyTo": [
                    "testRequirementObject"
                ],
                "template": {
                    "items": [
                        { "id": "option1", "name": "Option 1" },
                        { "id": "option2", "name": "Option 2" },
                        { "id": "option3", "name": "Option 3" },
                        { "id": "option4", "name": "Option 4" }
                    ],
                    "dataType": "enum"
                },
                "condition": true,
                "description": "Test Enum Condition Unsupported",
                "id": "testConditionUnsupportedEnum",
                "name": "Test Enum Condition Unsupported"
            },
            "testConditionNumber": {
                "applyTo": [
                    "testRequirementObject"
                ],
                "template": {
                    "dataType": "number"
                },
                "condition": true,
                "description": "Test Number Condition",
                "id": "testConditionNumber",
                "name": "Test Condition Number"
            },
            "testConditionUnsupportedNumber": {
                "applyTo": [
                    "testRequirementObject"
                ],
                "template": {
                    "dataType": "number"
                },
                "condition": true,
                "description": "Test Number Condition Unsupported",
                "id": "testConditionUnsupportedNumber",
                "name": "Test Condition Number Unsupported"
            }
        }
    }
};