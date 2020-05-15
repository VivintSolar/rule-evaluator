


module.exports = {
    singleParam: JSON.stringify(
        {
            formula: "(squareFootage / 2) + (squareFootage * 2)",
            exceptions: ["Service Elevation is greater Than 555ft"],
            conditions: null,
            source: {"id": "id", "type": "type", "name": "name"},
            value: 5000,
            errors: [ 'Required Condition Input Missing; Service Elevation',
                'Required Condition Parameter Input Missing; AC System Size' ],
            id: "alternativeMaxACSystemSizeCalculation"
        }
    ),
    withConditions: JSON.stringify(
            {
                formula: "(systemSizeAc * 2) + (squareFootage / 8)",
                exceptions: null,
                conditions: [{"left": "serviceElevation", "operator": ">", "right": 555}],
                source: {"id": "id", "type": "type", "name": "name"},
                description: "Service Elevation is greater Than 555ft",
                value: 425,
                errors: null,
                id: "alternativeMaxACSystemSizeCalculation"
            }
        ),
    withErrors: JSON.stringify(
        {
            formula: "(squareFootage / 2) + (squareFootage * 2)",
            exceptions: ["Service Elevation is greater Than 555ft"],
            conditions: null,
            source: {"id": "id", "type": "type", "name": "name"},
            value: null,
            errors: [ 'Required Condition Input Missing; Service Elevation',
                'Required Condition Parameter Input Missing; Square Footage, AC System Size' ],
            id: "alternativeMaxACSystemSizeCalculation"
        }
    )
};
