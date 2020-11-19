


module.exports = JSON.stringify({
        "singleParam": {
            "formula": "(squareFootage / 2) + (squareFootage * 2)",
            "exceptions": [
                "Service Elevation is greater Than 555ft"
            ],
            "conditions": null,
            "source": {
                "id": "ahjIdGuid",
                "name": "AHJ City Document",
                "type": "City"
            },
            "value": 5000,
            "errors": [
                "Required Condition Input Missing; Service Elevation",
                "Required Condition Parameter Input Missing; AC System Size"
            ],
            "id": "alternativeMaxACSystemSizeCalculation"
        },
        "withConditions": {
            "formula": "(squareFootage / 2) + (squareFootage * 2)",
            "exceptions": [
                "Service Elevation is greater Than 555ft"
            ],
            "conditions": null,
            "source": {
                "id": "ahjIdGuid",
                "name": "AHJ City Document",
                "type": "City"
            },
            "value": 4500,
            "errors": null,
            "id": "alternativeMaxACSystemSizeCalculation"
        },
        "withErrors": {
            "formula": "(squareFootage / 2) + (squareFootage * 2)",
            "exceptions": [
                "Service Elevation is greater Than 555ft"
            ],
            "conditions": null,
            "source": {
                "id": "ahjIdGuid",
                "name": "AHJ City Document",
                "type": "City"
            },
            "value": null,
            "errors": [
                "Required Condition Input Missing; Service Elevation",
                "Required Condition Parameter Input Missing; Square Footage, AC System Size"
            ],
            "id": "alternativeMaxACSystemSizeCalculation"
        }
    }
);
