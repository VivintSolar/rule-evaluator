const getAppliedStatementRE = require('./rule-evaluator/getAppliedStatement/index');
const getPossibleStatementsRE = require('./rule-evaluator/getPossibleStatements/index');
const getUnsupportedStatementsRE = require('./rule-evaluator/getUnsupportedStatements/index');
const evaluateRE = require('./rule-evaluator/evaluate/index');
const nullResultsRE = require('./rule-evaluator/nullResults/index');
const batchEvaluateSimpleRE = require('./rule-evaluator/batchEvaluate/simple');

const getAppliedStatement = require('./rule/getAppliedStatement/index');
const getPossibleStatements = require('./rule/getPossibleStatements/index');
const getUnsupportedStatements = require('./rule/getUnsupportedStatements/index');
const evaluate = require('./rule/evaluate/index');

const formulaExecute = require('./rule/formula/execute/index');
const formulaAppliedConditions = require('./rule/formula/appliedConditions/index');
const formulaParenthesis = require('./rule/formula/formulaParenthesis/index');
const formulaParameterSubsets = require('./rule/formula/parameterSubsets/index');
const formulaOrderOfOperations = require('./rule/formula/orderOfOperations/index');

const templateStringAppliedConditions = require('./rule/templateString/appliedConditions/index');
const templateStringUnion = require('./rule/templateString/union/index');
const rulesAsParameters = require('./rule-evaluator/rulesAsParameters/index');

const getAppliedConditions = require("./AppliedRules/getAppliedConditions/index");
const evaluateSet = require("./AppliedRules/AppliedRulesSet/evaluateSet/index");
const defineSet = require("./AppliedRules/AppliedRulesSet/defineSet/index");
const defineSetByView = require("./AppliedRules/AppliedRulesSet/defineSetByView/index");
const convertTo = require("./Definitions/convertTo/index");


getAppliedStatementRE();
getPossibleStatementsRE();
getUnsupportedStatementsRE();
evaluateRE();
nullResultsRE();
batchEvaluateSimpleRE();

getAppliedStatement();
getPossibleStatements();
getUnsupportedStatements();
evaluate();

formulaExecute();
formulaAppliedConditions();
formulaParenthesis();
formulaParameterSubsets();
formulaOrderOfOperations();

templateStringAppliedConditions();
templateStringUnion();

rulesAsParameters();

defineSetByView();
defineSet();
evaluateSet();
getAppliedConditions();
convertTo();