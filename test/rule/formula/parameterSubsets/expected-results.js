module.exports = JSON.stringify(
    {
        test1: [
            {
                formula: 'cecAcSystemSize',
                exceptions: null,
                conditions: null,
                source: undefined,
                description: undefined,
                value: 1,
                errors: null
            },
            {
                formula: 'cecAcSystemSize',
                exceptions: null,
                conditions: null,
                source: undefined,
                description: undefined,
                value: 1,
                errors: null
            },
            {
                formula: 'cecAcSystemSize',
                exceptions: null,
                conditions: null,
                source: undefined,
                description: undefined,
                value: 1,
                errors: null
            },
            {
                formula: 'cecAcSystemSize',
                exceptions: null,
                conditions: null,
                source: undefined,
                description: undefined,
                value: 1,
                errors: null
            },
            {
                formula: 'cecAcSystemSize',
                exceptions: null,
                conditions: null,
                source: undefined,
                description: undefined,
                value: 1,
                errors: null
            },
            {
                formula: 'cecAcSystemSize',
                exceptions: null,
                conditions: null,
                source: undefined,
                description: undefined,
                value: 1,
                errors: null
            },
            {
                formula: 'cecAcSystemSize',
                exceptions: null,
                conditions: null,
                source: undefined,
                description: undefined,
                value: 1,
                errors: null
            },
            {
                formula: 'cecAcSystemSize',
                exceptions: null,
                conditions: null,
                source: undefined,
                description: undefined,
                value: 1,
                errors: null
            }
        ],
        test2: [
            {
                formula: 'cecAcSystemSize',
                exceptions: null,
                conditions: null,
                source: undefined,
                description: undefined,
                value: 1,
                errors: [
                    'Required Parameter Missing DC System Size',
                    'Required Parameter Missing Design Factor',
                    'Required Parameter Missing DC PTC System Size',
                    'Required Parameter Missing Powerclerk Production Amount',
                    'Required Parameter Missing Powerclerk Usage Offset Percentage',
                    'Required Parameter Missing System Adjustment Factor',
                    'Required Parameter Missing Usage Amount'
                ]
            },
            {
                formula: 'cecAcSystemSize + systemSizeDc',
                exceptions: null,
                conditions: null,
                source: undefined,
                description: undefined,
                value: 2,
                errors: [
                    'Required Parameter Missing Design Factor',
                    'Required Parameter Missing DC PTC System Size',
                    'Required Parameter Missing Powerclerk Production Amount',
                    'Required Parameter Missing Powerclerk Usage Offset Percentage',
                    'Required Parameter Missing System Adjustment Factor',
                    'Required Parameter Missing Usage Amount'
                ]
            },
            {
                formula: 'cecAcSystemSize + systemSizeDc + designFactor',
                exceptions: null,
                conditions: null,
                source: undefined,
                description: undefined,
                value: 3,
                errors: [
                    'Required Parameter Missing DC PTC System Size',
                    'Required Parameter Missing Powerclerk Production Amount',
                    'Required Parameter Missing Powerclerk Usage Offset Percentage',
                    'Required Parameter Missing System Adjustment Factor',
                    'Required Parameter Missing Usage Amount'
                ]
            },
            {
                formula: 'cecAcSystemSize + systemSizeDc + designFactor + dcPtcSystemSize',
                exceptions: null,
                conditions: null,
                source: undefined,
                description: undefined,
                value: 4,
                errors: [
                    'Required Parameter Missing Powerclerk Production Amount',
                    'Required Parameter Missing Powerclerk Usage Offset Percentage',
                    'Required Parameter Missing System Adjustment Factor',
                    'Required Parameter Missing Usage Amount'
                ]
            },
            {
                formula: 'cecAcSystemSize + systemSizeDc + designFactor + dcPtcSystemSize + powerclerkProductionAmount',
                exceptions: null,
                conditions: null,
                source: undefined,
                description: undefined,
                value: 5,
                errors: [
                    'Required Parameter Missing Powerclerk Usage Offset Percentage',
                    'Required Parameter Missing System Adjustment Factor',
                    'Required Parameter Missing Usage Amount'
                ]
            },
            {
                formula: 'cecAcSystemSize + systemSizeDc + designFactor + dcPtcSystemSize + powerclerkProductionAmount + powerclerkUsageOffsetPercentage',
                exceptions: null,
                conditions: null,
                source: undefined,
                description: undefined,
                value: 6,
                errors: [
                    'Required Parameter Missing System Adjustment Factor',
                    'Required Parameter Missing Usage Amount'
                ]
            },
            {
                formula: 'cecAcSystemSize + systemSizeDc + designFactor + dcPtcSystemSize + powerclerkProductionAmount + powerclerkUsageOffsetPercentage + systemAdjustmentFactor',
                exceptions: null,
                conditions: null,
                source: undefined,
                description: undefined,
                value: 7,
                errors: ['Required Parameter Missing Usage Amount']
            },
            {
                formula: 'cecAcSystemSize + systemSizeDc + designFactor + dcPtcSystemSize + powerclerkProductionAmount + powerclerkUsageOffsetPercentage + systemAdjustmentFactor + usageAmount',
                exceptions: null,
                conditions: null,
                source: undefined,
                description: undefined,
                value: 8,
                errors: null
            }
        ]
    }
);