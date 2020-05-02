const initializeAppliedRules = require('./initializeAppliedRules');
const initializeRules = require('./initializeRules');



class AppliedRules {
    constructor( appliedRules ){
        this.initializeAppliedRules( appliedRules );
    }


}

AppliedRules.prototype.initializeAppliedRules = initializeAppliedRules;
AppliedRules.prototype.initializeRules = initializeRules;



module.exports = AppliedRules;

