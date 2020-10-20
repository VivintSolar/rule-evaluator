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

const filterAllowableBatteries = require('./AppliedRule/Filters/filter/index');
const SafeHarborFiltersTestAll = require('./AppliedRule/Filters/SafeHarborFilters/testAll');
const SafeHarborContactRestrictions = require('./AppliedRule/Filters/SafeHarborContactRestrictions/index');

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

const AssociationTree = require("./FamilyTree/AssociationTree");
const DesignedAHJ = require("./FamilyTree/DesignedAHJ");
const LegacyAhjRefs = require("./FamilyTree/LegacyAhjRefs");

const allTestMeasurementsConverter = require("./MeasurementsConverter/allTest");

const InitializationAssociationObjectV1 = require("./Association/Initialization/AssociationObjectV1");
const InitializationAssociationObjectV2 = require("./Association/Initialization/AssociationObjectV2");
const EvaluateAllAssociationObjectV1 = require("./Association/EvaluateAll/AssociationObjectV1");
const EvaluateAllAssociationObjectV2 = require("./Association/EvaluateAll/AssociationObjectV2");


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

filterAllowableBatteries();
SafeHarborFiltersTestAll();
SafeHarborContactRestrictions();

templateStringAppliedConditions();
templateStringUnion();

rulesAsParameters();

defineSetByView();
defineSet();
evaluateByTag();
evaluateSet();
getAppliedConditions();
convertTo();

sortType();
GeneralStructural();

AssociationTree();
DesignedAHJ();
LegacyAhjRefs();

allTestMeasurementsConverter();

InitializationAssociationObjectV1();
InitializationAssociationObjectV2();
EvaluateAllAssociationObjectV1();
EvaluateAllAssociationObjectV2();
