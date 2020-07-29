const ruleEvaluatorConvertToDisplayValue = require('./rule-evaluator/convertToDisplayValue');
const ruleEvaluatorEvaluate = require('./rule-evaluator/evaluate');
const definitionConvertToDisplayValue = require('./Definition/convertToDisplayValue');
const measurementsTest = require('./index');

module.exports = () => {
    measurementsTest();
    ruleEvaluatorConvertToDisplayValue();
    definitionConvertToDisplayValue();
    ruleEvaluatorEvaluate();
}
