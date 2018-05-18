
//validateConditions

module.exports = (function(){
    this._timeStamp = new Date();
    const appliedConditions = this.appliedConditions;
    const conditionInputs = Object.keys(this._conditions||{});
    this.cleanUpErrors([...appliedConditions,...conditionInputs]);
    conditionInputs.map(id=>{
        if(!this._definitions.listAll.conditions.includes(id)){
            this.addError(id,`Invalid Condition Provided, Condition Not Found: ${ id }`,'invalidCondition')
        }
    });
    appliedConditions.map(appliedCondition=>{
        if(!conditionInputs.includes(appliedCondition)){
            this.addError(appliedCondition,`Condition Input Missing: ${ appliedCondition }`,'missingCondition');
        }
    })
});