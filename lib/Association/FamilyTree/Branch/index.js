const initializeBranch = require('./initializeBranch');



class Branch {
    constructor( parameters ){
        this.initializeBranch( parameters );
    }
}

Branch.prototype.initializeBranch = initializeBranch;


module.exports = Branch;

