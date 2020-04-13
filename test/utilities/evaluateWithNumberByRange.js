
const RuleEvaluator = require('../../index');

const doEvaluation = (ruleId, conditions, assocObj) => {
    const ruleEvaluator = new RuleEvaluator( assocObj );
    return ruleEvaluator.evaluate(ruleId, conditions);
};


module.exports = (ruleId, conditionIds, assocObj, range) => {
    const start = Array.isArray( range ) ? range[0] : 0;
    const end = Array.isArray( range ) ? range[1] : range;
    conditionIds = Array.isArray(conditionIds) ? conditionIds : [ conditionIds ];
    const labelSeed = `${ruleId} | ${ conditionIds.join(", ") }`;
    const results = {};
    for( let i = start; i <= end; i++ ){
        let conditions;
        const label = `${labelSeed} === ${ i > -1 ? i : 'EMPTY' }`;
        if( i > -1 ) conditions = Object.assign({},
            ...conditionIds.map( conditionId => ({
                [ conditionId ]: i
            }))
        );
        results[ label ] = doEvaluation( ruleId, conditions, assocObj );
    }
    return results;
};