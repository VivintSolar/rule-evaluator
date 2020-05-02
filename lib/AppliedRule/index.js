const Definition = require('../Definition');
const initializeAppliedRule = require('./initializeAppliedRule');
const initializeAppliedConditions = require('./initializeAppliedConditions');



class AppliedRule extends Definition {
    constructor( parameters ){
        const { definition, getDefinitions, getAppliedRule } = parameters;
        super( definition );
        this.initializeAppliedRule( parameters  );
    }


}

AppliedRule.prototype.initializeAppliedRule = initializeAppliedRule;
AppliedRule.prototype.initializeAppliedConditions = initializeAppliedConditions;



module.exports = AppliedRule;

