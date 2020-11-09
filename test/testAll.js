const runTest = require('./utilities/runTest');

runTest('./rule-evaluator/getAppliedStatement/index');
runTest('./rule-evaluator/getPossibleStatements/index');
runTest('./rule-evaluator/getUnsupportedStatements/index');
runTest('./rule-evaluator/evaluate/index');
runTest('./rule-evaluator/nullResults/index');
runTest('./rule-evaluator/batchEvaluate/simple');

runTest('./AppliedRule/getAppliedStatement/index');
runTest('./AppliedRule/getPossibleStatements/index');
runTest('./AppliedRule/getUnsupportedStatements/index');
runTest('./AppliedRule/evaluate/index');

runTest('./AppliedRule/formula/execute/index');
runTest('./AppliedRule/formula/appliedConditions/index');
runTest('./AppliedRule/formula/formulaParenthesis/index');
runTest('./AppliedRule/formula/parameterSubsets/index');
runTest('./AppliedRule/formula/orderOfOperations/index');

runTest('./AppliedRule/Filters/filter/index');
runTest('./AppliedRule/Filters/SafeHarborFilters/testAll');
runTest('./AppliedRule/Filters/SafeHarborContactRestrictions/index');

runTest('./AppliedRule/templateString/appliedConditions/index');
runTest('./AppliedRule/templateString/union/index');
runTest('./rule-evaluator/rulesAsParameters/index');

runTest("./AppliedRules/AppliedConditions/index");
runTest("./AppliedRules/AppliedRulesSet/evaluateSet/index");
runTest("./AppliedRules/evaluateByTag");
runTest("./AppliedRules/AppliedRulesSet/defineSet/index");
runTest("./AppliedRules/AppliedRulesSet/defineSetByView/index");
runTest("./AppliedRules/Formulas/ConvertParametersToDisplayValue/index");

runTest("./Definitions/convertTo/index");

runTest("./AppliedRule/sortType/index");
runTest("./AppliedRules/TemplateStrings/GeneralStructural/index");

runTest("./FamilyTree/AssociationTree");
runTest("./FamilyTree/DesignedAHJ");
runTest("./FamilyTree/LegacyAhjRefs");

runTest('./MeasurementsConverter/rule-evaluator/convertToDisplayValue');
runTest('./MeasurementsConverter/rule-evaluator/evaluate');
runTest('./MeasurementsConverter/Definition/convertToDisplayValue');
runTest('./MeasurementsConverter/rule-evaluator/ConditionValueConversion');
runTest('./MeasurementsConverter/index');

runTest("./Association/Initialization/AssociationObjectV1");
runTest("./Association/Initialization/AssociationObjectV2");
runTest("./Association/EvaluateAll/AssociationObjectV1");
runTest("./Association/EvaluateAll/AssociationObjectV2");
