
const deconstructRule = require('./deconstructRule');

module.exports = ({
  rules,
  definitions
}) => {

  return Object.assign({},
    ...Object.keys(rules).map( ruleId => {
      const rule = rules[ruleId];
      const definition = definitions.rules[ruleId];
      if( !definition ) throw new Error(`Invalid Rule Applied to Service, Rule: ${ ruleId }`);
      const completeRule = Object.assign({}, rule, definition, { definition });
      let deconstructedRule;
      try{
        deconstructedRule = deconstructRule(completeRule);
        if( !deconstructedRule.statements ) throw new Error('No statements found after deconstructing rule');
      } catch(err) {
        deconstructedRule = Object.assign({}, deconstructedRule, {
          error: err.stack||err.message
        });
      }
      const completeRuleDeconstructed = Object.assign({}, rule, deconstructedRule );
      return { [ ruleId ]: completeRuleDeconstructed };
    })
  );
};
