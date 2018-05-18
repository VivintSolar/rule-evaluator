

// validateRules

module.exports = (function(){
    this._timeStamp = new Date();
    this.cleanUpErrors(this._rules);
    if(this._rules){
        this._rules.map(id=>{
            if(!this._definitions.listAll.rules.includes(id)){
                this.addError(id,`Invalid Rule Provided, Rule Not Found: ${ id }`,'invalidRule')
            }
        })
    }
});