const ruleEvaluatorConvertToDisplayValue = require('./rule-evaluator/convertToDisplayValue');
const definitionConvertToDisplayValue = require('./Definition/convertToDisplayValue');
const measurementsTest = require('./index');

module.exports = () => {
    measurementsTest();
    ruleEvaluatorConvertToDisplayValue();
    definitionConvertToDisplayValue();
}
