

module.exports = (function(statements,descriptions){
    statements.map(statement=>{
        if(statement.description){
            if(!descriptions) descriptions = {};
            Object.keys(statement.value).map(key=>{
                let description = statement.description;
                if(!descriptions[key])descriptions[key]=[];
                if(description.indexOf(statement.value[key])<0)description = `${key.toUpperCase()}: ${statement.value[key]}, ${description}`;
                descriptions[key].push(description);
            });
        }
    });
    return descriptions
})