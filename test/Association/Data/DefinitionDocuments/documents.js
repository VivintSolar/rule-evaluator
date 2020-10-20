
const rules = require('./RuleDefinitionDocuments');
const conditions = require('./ConditionDefinitionDocuments');

module.exports = [
    ...Object.values( rules ),
    ...Object.values( conditions )
];
