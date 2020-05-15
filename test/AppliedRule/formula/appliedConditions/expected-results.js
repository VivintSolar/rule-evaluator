


module.exports = JSON.stringify(
    {
        formula: '((10000 * 0.547) + (((dcPtcSystemSize * 1000) - 10000) * 0.473)) * (designFactor / 100) * systemAdjustmentFactor',
        exceptions: [
            '(10000 * 0.463) + (10000 * 0.40), If Design Factor is ≥ 75% AND System Size is > 20kW CEC-AC',
            '((CEC-AC System Size * 1000) * 0.463), If Design Factor is ≥ 75% AND System Size is ≤ 10kW CEC-AC',
            '(1000*0.463)+(((CEC-AC System Size*10000)-1000)*0.40), If Design Factor ≥75% & System Size ≤20 & >10 kW CEC-AC',
            '(((10000 * 0.463) + (10000 * 0.40)) * (Design Factor/100) ), If Design Factor <75% & System Size > 20kW CEC-AC',
            '(((CEC-AC System Size*1000) * 0.463) * (Design Factor/100)), If Design Factor <75% & System Size ≤ 10kW CEC-AC',
            '((1000*.463)+(((CEC-ACSystemSize*1000)-10000)*.4))* (DesignFactor/100) DesignFactor<75% & Size≤20&>10 kWCEC-AC'
        ],
        conditions: [
            { left: 'designFactor', operator: '<', right: 75 },
            { left: 'powerclerkUsageOffsetPercentage', operator: '>', right: 100 },
            { left: 'proratedPtcDcSystemSizeCondition', operator: '>', right: 10 }
        ],
        source: undefined,
        description: undefined,
        value: 5355.808832138401,
        errors: null,
        id: "epbbFormula"
    }
);
