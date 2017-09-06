const _pick = require('lodash.pick');
let documents,
    inputs,
    evaluatedRules,
    conditionDefinitions,
    ruleDefinition,
    requestRules,
    error;

const calculator = {
    "=":(input,curRight)=>{return input === curRight},
    ">":(input,curRight)=>{return input > curRight},
    "<":(input,curRight)=>{return input < curRight},
    "!=":(input,curRight)=>{return input !== curRight},
    ">=":(input,curRight)=>{return input >= curRight},
    "<=":(input,curRight)=>{return input <= curRight}
};

const catchMissingCondition = (condition) => {
    let missingInputs;
    if(error&&error.missingInputs&&!error.missingInputs.includes(condition.left)){
        missingInputs = [...error.missingInputs,condition.left];
    } else {
        missingInputs = [condition.left];
    }
    error = Object.assign(error||{},{type:"error",missingInputs});
};

const resolveConditions = (statement) => {
    if(!statement.condition) return true;
    const conditionsResults = statement.condition.map(cond=>{
        console.log('cond.left => ', cond.left);
        console.log('cond.operator => ', cond.operator);
        console.log('cond.right => ', cond.right);
        console.log('inputs[cond.left] => ', inputs[cond.left]);

        if(inputs[cond.left]!==undefined) {
            console.log('calculator[cond.operator](cond.right,inputs[cond.left]) => ');
            console.log(calculator[cond.operator](inputs[cond.left]), cond.right);
            return calculator[cond.operator](inputs[cond.left],cond.right)
        }
        catchMissingCondition(cond);
        return false;
    });
    console.log('(!conditionsResults.includes(false));',(!conditionsResults.includes(false)));
    return (!conditionsResults.includes(false));
};

const resolveStatements = (statements) => {
    return statements.filter(statement=>{
        return resolveConditions(statement);
    })
};

const evaluateValue = (statements) => {
    if(conditionDefinitions==='none') return statements[0].value;
    if(statements.length===1&&!statements[0].condition) return statements[0].value;
    const resolvedStatements = resolveStatements(statements);
    console.log('resolvedStatements ==>: ',resolvedStatements);
    if(ruleDefinition.template.dataType !== 'object') return resolvedStatements[0].value;
    return Object.assign(
        ...resolvedStatements.reverse().map(statement=>{
            return statement.value;
        })
    );
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
        const rules = requestRules ? _pick(document.rules,requestRules) : document.rules;
        Object.keys(rules).map(id=>{
            const evaluatedRule = evaluateRule(rules[id]);
            addToEvaluated(id, evaluatedRule)
        })

    });
    return evaluatedRules;
};

const evaluate = (data, inputObject) => {
    documents = data;
    inputs = inputObject.inputs;
    requestRules = inputObject.rules;
    // console.log('data',data);
    return {
        rules: evaluateRules(data)
    }
};

module.exports = {
    evaluate
};
