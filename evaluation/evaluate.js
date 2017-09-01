
let documents,
    inputs,
    evaluatedRules,
    conditionDefinitions,
    ruleDefinition;

const evaluateValue = (statements) => {
    if(conditionDefinitions==='none') return statements[0].value;
    if(statements.length===1&&!statements[0].condition) return statements[0].value;
    return statements[0].value;
};

const evaluateRule = (rule) => {
    ruleDefinition = rule.definition;
    conditionDefinitions = ruleDefinition.allowableConditions;

    const evaluatedValue = evaluateValue(rule.statements);
    return {
        value:evaluatedValue
    }

};
const addToEvaluated = (id, rule) => {
    if(!evaluatedRules[id])return Object.assign(evaluatedRules,{[id]:rule});
    return Object.assign(evaluatedRules,
        {[id]:Object.assign({},evaluatedRules[id],rule)}
    );
};

const evaluateRules = () => {
    evaluatedRules = {};
    documents.map(document=>{
        const { rules } = document;
        Object.keys(rules).map(id=>{
            const evaluatedRule = evaluateRule(rules[id]);
            addToEvaluated(id, evaluatedRule)
        })

    });
    return evaluatedRules;
};

const evaluate = (data, inputObject) => {
    documents = data;
    inputs = inputObject;
    // console.log('data',data);
    return {
        rules: evaluateRules(data)
    }
};

module.exports = {
    evaluate
};
