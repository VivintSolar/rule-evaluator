const { pick } = require('../../utilities/util')

// appliedRule.toAppliedRuleObject
module.exports = (function(){
    if( !this.appliedRuleAttributes ) throw new Error("No Applied Rule Attributes found!");
    return pick( this, this.appliedRuleAttributes);
});
