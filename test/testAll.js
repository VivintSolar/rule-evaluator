const getAppliedStatementRE = require('./rule-evaluator/getAppliedStatement/index');
const getPossibleStatementsRE = require('./rule-evaluator/getPossibleStatements/index');
const getUnsupportedStatementsRE = require('./rule-evaluator/getUnsupportedStatements/index');
const evaluateRE = require('./rule-evaluator/evaluate/index');

const getAppliedStatement = require('./rule/getAppliedStatement/index');
const getPossibleStatements = require('./rule/getPossibleStatements/index');
const getUnsupportedStatements = require('./rule/getUnsupportedStatements/index');
const evaluate = require('./rule/evaluate/index');



getAppliedStatementRE();
getPossibleStatementsRE();
getUnsupportedStatementsRE();
evaluateRE();

getAppliedStatement();
getPossibleStatements();
getUnsupportedStatements();
evaluate();
