const getAppliedStatementRE = require('./rule-evaluator/getAppliedStatement/index');
const getPossibleStatementsRE = require('./rule-evaluator/getPossibleStatements/index');
const getUnsupportedStatementsRE = require('./rule-evaluator/getUnsupportedStatements/index');
const evaluateRE = require('./rule-evaluator/evaluate/index');
const nullResultsRE = require('./rule-evaluator/nullResults/index');

const getAppliedStatement = require('./rule/getAppliedStatement/index');
const getPossibleStatements = require('./rule/getPossibleStatements/index');
const getUnsupportedStatements = require('./rule/getUnsupportedStatements/index');
const evaluate = require('./rule/evaluate/index');
const execute = require('./rule/execute/index');




getAppliedStatementRE();
getPossibleStatementsRE();
getUnsupportedStatementsRE();
evaluateRE();
nullResultsRE();

getAppliedStatement();
getPossibleStatements();
getUnsupportedStatements();
evaluate();
execute();
