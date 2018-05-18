

//parseRules


module.exports = (function(){
    const rules = this.validatedRules||Object.keys(this._appliedRules);
    rules.map(id=>{
        if(id){
            const appliedRule = this._appliedRules[id];
            this._serviceAhj.rules[id] = this.parseStatements(id,appliedRule);
        }
    });
});