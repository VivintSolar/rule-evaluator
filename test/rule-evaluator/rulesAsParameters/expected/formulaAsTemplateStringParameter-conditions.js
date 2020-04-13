module.exports = JSON.stringify(
    {
            templateString: 'When Number Condition For Test Template String is 4 Then\nName: Test Formula, Value: {testFormula}.\nName: Test String Condition, Value: {testStringCondition}.\nName: Contract Type, Value: {contractType}.\n',
            exceptions: null,
            conditions:
                [ { left: 'numberConditionForTestTemplateString',
                        operator: '=',
                        right: 4 } ],
            value: 'When Number Condition For Test Template String is 4 Then\nName: Test Formula, Value: 200.\nName: Test String Condition, Value: | this is my sub-string |.\nName: Contract Type, Value: Loan.\n',
            errors: null,
            id: 'testTemplateString'
    }
);
