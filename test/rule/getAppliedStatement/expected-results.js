



module.exports = JSON.stringify({
    condition: [{left: 'testConditionEnum', operator: '=', right: 'option2'},
        {left: 'testConditionNumber', operator: '<', right: 9.5}],
    description: 'Test Condition Enum is Option 2, Attr Name 3: 100 AND Test Condition < 9.5°, Attr Name 3: 200',
    value: {attrName3: 200},
    onConflict: 'standard',
    source: {id: 'id', type: 'type', name: 'name'}
});
