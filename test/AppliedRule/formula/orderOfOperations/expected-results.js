


module.exports = {
        epbbFormula: JSON.stringify({ formula:
            '((10000 * 0.547) + ((dcPtcSystemSize * 1000) - 10000) * 0.473) * (designFactor / 100) * systemAdjustmentFactor',
                exceptions: null,
                conditions: [ { left: 'designFactor', operator: '<', right: 75 } ],
                source: undefined,
                description: 'Condition 16',
                value: 2883.5052582384,
                errors: null,
                id: "epbbFormula"
        }),
        scenario1: JSON.stringify({ formula: '2 + 4 * 5',
                exceptions: null,
                conditions: [ { left: 'scenarios', operator: '=', right: 1 } ],
                source: undefined,
                description: undefined,
                value: 22,
                errors: null,
                id: "orderTest"
        }),
        scenario2: JSON.stringify({ formula: '2 + 4 * 5 + 5 * 8 + 12 + 3 - 4 / 2 * 4',
                exceptions: null,
                conditions: [ { left: 'scenarios', operator: '=', right: 2 } ],
                source: undefined,
                description: undefined,
                value: 69,
                errors: null,
                id: "orderTest"
        }),
        scenario3: JSON.stringify({ formula: '25',
                exceptions: null,
                conditions: [ { left: 'scenarios', operator: '=', right: 3 } ],
                source: undefined,
                description: undefined,
                value: 25,
                errors: null,
                id: "orderTest"
        }),
        scenario4: JSON.stringify({ formula: '8 + ((4 + 9 - 4) + 5) + (3 - 2) + 2',
                exceptions: null,
                conditions: [ { left: 'scenarios', operator: '=', right: 4 } ],
                source: undefined,
                description: undefined,
                value: 25,
                errors: null,
                id: "orderTest"
        }),
        scenario5: JSON.stringify({ formula: '8 + ((4 + 9 - 4) + 5) + (3 - 2) + 2 * 5',
                exceptions: null,
                conditions: [ { left: 'scenarios', operator: '=', right: 5 } ],
                source: undefined,
                description: undefined,
                value: 33,
                errors: null,
                id: "orderTest"
        }),
        scenario6: JSON.stringify({ formula: '1 * 2 * 3 * 4 * 5 / 2 + (5 - 3) * 2 / 2 + 1',
                exceptions: null,
                conditions: [ { left: 'scenarios', operator: '=', right: 6 } ],
                source: undefined,
                description: undefined,
                value: 63,
                errors: null,
                id: "orderTest"
        })

};
