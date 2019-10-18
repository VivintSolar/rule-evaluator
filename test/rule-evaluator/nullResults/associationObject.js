module.exports = {
    "ahj": {
        "rules": {
            "testObject":{
                "id": "testObject",
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
            },
            "testEnum":{
                "statements":[
                    {
                        "description": "Service Elevation equals 2 then Enum Option 1",
                        "value": "enumOption1",
                        "condition": [
                            { "left": "serviceElevation", "operator": "=", "right": 2 }
                        ]
                    }
                ]
            },
            "testOrderedList":{
                "statements":[
                    {
                        "description": "Service Elevation equals 2 THen Ordered List Option 1",
                        "value": [ "orderedListOption1" ],
                        "condition": [
                            { "left": "serviceElevation", "operator": "=", "right": 2 }
                        ]
                    }
                ]
            },
            "testBoolean":{
                "statements":[
                    {
                        "description": "Service Elevation equals 2 Then True",
                        "value": true,
                        "condition": [
                            { "left": "serviceElevation", "operator": "=", "right": 2 }
                        ]
                    }
                ]
            },
            "testString":{
                "statements":[
                    {
                        "description": "Service Elevation equals 2 Then My Test String",
                        "value": "My Test String",
                        "condition": [
                            { "left": "serviceElevation", "operator": "=", "right": 2 }
                        ]
                    }
                ]
            },
            "testNumber":{
                "statements":[
                    {
                        "description": "Service Elevation equals 2 Then 1234",
                        "value": 1234,
                        "condition": [
                            { "left": "serviceElevation", "operator": "=", "right": 2 }
                        ]
                    }
                ]
            },
            "testFormula": {
                "statements": [
                    { "value": "(serviceElevation - squareFootage) / 2" }
                ]
            }
        }
    },
    "definitions": {
        "rules": {
            "testObject":{
                "id": "testObject",
                "name": "Test Object",
                "description": "Test Object",
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
            },
            "testEnum":{
                "id": "testEnum",
                "name": "Test Enum",
                "description": "Test Description",
                "allowableConditions": [
                    "serviceElevation"
                ],
                "template":{
                    "dataType": "enum",
                    "items":[
                        {"id": "enumOption1", "name": "Enum Option 1"},
                        {"id": "enumOption2", "name": "Enum Option 2"}
                    ]
                }
            },
            "testOrderedList":{
                "id": "testOrderedList",
                "name": "Test Ordered List",
                "description": "Test Ordered List",
                "allowableConditions": [
                    "serviceElevation"
                ],
                "template":{
                    "dataType": "ordered list",
                    "items": [
                        {"id": "orderedListOption1", "name": "Ordered List Option 1"},
                        {"id": "orderedListOption2", "name": "Ordered List Option 2"}
                    ]
                }
            },
            "testBoolean":{
                "id": "testBoolean",
                "name": "Test Boolean",
                "description": "Test Boolean",
                "allowableConditions": [
                    "serviceElevation"
                ],
                "template":{
                    "dataType": "boolean"
                }
            },
            "testString":{
                "id": "testString",
                "name": "Test String",
                "description": "Test String",
                "allowableConditions": [
                    "serviceElevation"
                ],
                "template":{
                    "dataType": "string"
                }
            },
            "testNumber":{
                "id": "testNumber",
                "name": "Test Number",
                "description": "Test Number",
                "allowableConditions": [
                    "serviceElevation"
                ],
                "template":{
                    "dataType": "number"
                }
            },
            "testFormula": {
                "id": "testFormula",
                "name": "Test Formula",
                "description": "Test Formula",
                "allowableConditions": [
                    "serviceElevation",
                    "squareFootage"
                ],
                "template":{
                    "dataType": "formula"
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
                    "testObject",
                    "testOrderedList",
                    "testBoolean",
                    "testString",
                    "testNumber",
                    "testEnum"
                ],
                "template": {
                    "units": "ft",
                    "dataType": "number"
                },
                "condition": true,
                "description": "Service Elevation",
                "id": "serviceElevation",
                "name": "Service Elevation"
            }
        }
    }
};