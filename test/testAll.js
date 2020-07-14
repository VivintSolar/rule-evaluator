const getAppliedStatementRE = require('./rule-evaluator/getAppliedStatement/index');
const getPossibleStatementsRE = require('./rule-evaluator/getPossibleStatements/index');
const getUnsupportedStatementsRE = require('./rule-evaluator/getUnsupportedStatements/index');
const evaluateRE = require('./rule-evaluator/evaluate/index');
const nullResultsRE = require('./rule-evaluator/nullResults/index');
const batchEvaluateSimpleRE = require('./rule-evaluator/batchEvaluate/simple');

const getAppliedStatement = require('./AppliedRule/getAppliedStatement/index');
const getPossibleStatements = require('./AppliedRule/getPossibleStatements/index');
const getUnsupportedStatements = require('./AppliedRule/getUnsupportedStatements/index');
const evaluate = require('./AppliedRule/evaluate/index');

const formulaExecute = require('./AppliedRule/formula/execute/index');
const formulaAppliedConditions = require('./AppliedRule/formula/appliedConditions/index');
const formulaParenthesis = require('./AppliedRule/formula/formulaParenthesis/index');
const formulaParameterSubsets = require('./AppliedRule/formula/parameterSubsets/index');
const formulaOrderOfOperations = require('./AppliedRule/formula/orderOfOperations/index');

const templateStringAppliedConditions = require('./AppliedRule/templateString/appliedConditions/index');
const templateStringUnion = require('./AppliedRule/templateString/union/index');
const rulesAsParameters = require('./rule-evaluator/rulesAsParameters/index');

const getAppliedConditions = require("./AppliedRules/AppliedConditions/index");
const evaluateSet = require("./AppliedRules/AppliedRulesSet/evaluateSet/index");
const evaluateByTag = require("./AppliedRules/evaluateByTag");
const defineSet = require("./AppliedRules/AppliedRulesSet/defineSet/index");
const defineSetByView = require("./AppliedRules/AppliedRulesSet/defineSetByView/index");
const convertTo = require("./Definitions/convertTo/index");

const sortType = require("./AppliedRule/sortType/index");
const GeneralStructural = require("./AppliedRules/TemplateStrings/GeneralStructural/index");

const FamilyTree = require("./FamilyTree/index");


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
evaluateByTag();
evaluateSet();
getAppliedConditions();
convertTo();

// sortType();
GeneralStructural();

FamilyTree();
