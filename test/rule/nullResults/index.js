const RuleEvaluator = require('../../../index');
const assocObject = require('./associationObject');
const assert = require('assert');


module.exports = () => {

    const ruleEvaluator = new RuleEvaluator(assocObject);

    const results = {};
    Object.keys(assocObject.serviceAhj.rules).map( ruleId => {
        const rule = ruleEvaluator.getRule(ruleId);
        results[ruleId] = rule.evaluate({
            serviceElevation: 3
        });
    });

    console.log(JSON.stringify(results));

};