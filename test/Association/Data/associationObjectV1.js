const associationObjectV2 = require('./associationObjectV2');
const RuleEvaluator = require('../../../index');

const ruleEvaluator = new RuleEvaluator( associationObjectV2 );

const associationObjectV1 = JSON.parse( JSON.stringify( ruleEvaluator.getAssociationV1() ) );

module.exports = associationObjectV1;
