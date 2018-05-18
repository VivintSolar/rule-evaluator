


// _appliedConditions

module.exports = (function(id){
    let appliedConditions;
    const rule = this._appliedRules[id];
    rule.statements.map(statement=>{
        if(statement.condition){
            if(!appliedConditions) appliedConditions = [];
            statement.condition.map(condition=>{
                if(!appliedConditions.includes(condition.left)) appliedConditions.push(condition.left)
            })
        }
    });
    return appliedConditions;
});