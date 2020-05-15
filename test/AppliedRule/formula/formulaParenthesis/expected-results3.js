


module.exports = JSON.stringify(
    {
        formula: '((10000 * 0.547) + ((dcPtcSystemSize * 1000) - 10000) * 0.473) * (designFactor / 100) * systemAdjustmentFactor',
        exceptions: null,
        conditions: [ { left: 'designFactor', operator: '<', right: 75 } ],
        source: undefined,
        description: 'Condition 16',
        value: 2883.5052582384,
        errors: null,
        id: "epbbFormula3"
    }
);
