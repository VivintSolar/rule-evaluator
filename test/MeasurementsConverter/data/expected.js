
const convertToDisplayValue = {
    defPointSetbacks: [
        JSON.stringify({
            serviceLine: 36,
            side: 8,
            chimney: 236.221,
            newSolarArray: 4,
            eave: 8,
            obstructions: 3,
            mechanicalUnits: 36,
            skyLights: 18,
            hip: 8,
            existingSolarArray: 4,
            sidesAgainstWalls: 8,
            valley: 8,
            ridge: 18,
            inflection: 314.961
        })
    ],
    evaluateAllTypes: JSON.stringify({
        "convertAll": {
            "orderedListRule": [
                {"id": "listItem1", "name": "List Item #1"},
                {"id": "listItem3", "name": "List Item #3"},
                {"id": "listItem5", "name": "List Item #5"}
            ],
            "objectOfSupportedTypesRule": {
                "numberAttributeUnits": 6,
                "numberAttributeDisplayAsUnits": 236.221,
                "booleanBasic": true,
                "booleanDisplayAs": "Yes",
                "enumBasic": "Option #2",
                "dateBasic": "July 29, 2020"
            },
            "basicBooleanRule": true,
            "customDisplayBooleanRule": "YES"
        },
        "default": {
            "orderedListRule": [
                {"id": "listItem1", "name": "List Item #1"},
                {"id": "listItem3", "name": "List Item #3"},
                {"id": "listItem5", "name": "List Item #5"}
            ],
            "objectOfSupportedTypesRule": {
                "numberAttributeUnits": 6,
                "numberAttributeDisplayAsUnits": 236.221,
                "booleanBasic": true,
                "booleanDisplayAs": true,
                "enumBasic": "Option #2",
                "dateBasic": "2020-07-29T19:58:47.456Z"
            },
            "basicBooleanRule": true,
            "customDisplayBooleanRule": true
        }
    })
};

const deconstruct = {
    measurements: [
        JSON.stringify([ { value: 236.221, units: 'in' } ])
    ]
}

module.exports = {
    convertToDisplayValue,
    deconstruct
}
