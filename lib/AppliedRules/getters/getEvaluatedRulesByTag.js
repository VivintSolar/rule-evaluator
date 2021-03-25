

//AppliedRules.getEvaluatedRulesByTag
module.exports = (function( tagIds ){
    const rules = this.getRulesByTag( tagIds )

    return Object.assign({},
        ...rules.map(rule=>({
            [ rule.id ]:{
                exceptions: rule.exceptions,
                description: rule.description,
                source: rule.source,
                value: rule.value,
                condition: rule.condition,
                formula: rule.formula,
                templateString: rule.templateString,
            }
        }))
    )
});
