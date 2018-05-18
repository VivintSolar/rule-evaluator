const compress = (applied, definition) => {
    return Object.assign({},
        ...Object.keys(applied).map(key=>{
            return { [key]:  mergeStatements({ statements: applied[key], definition })}
        })
    )
};

const showAppliedData = (serviceAhj, definitions, rules) => {

    const reformatRule = (rule, definition) => {

        const { statements } = rule;

        const getKey = (statement) => {
            if( !statement.condition ) return 'default';
            return statement.condition.map(condition=>(condition.left)).join(' ')
        };

        let applied = {};

        statements.map(statement=>{
            const key = getKey(statement);
            if(!applied[key]) applied[key] = [statement];
            else applied[key].push(statement);
        });

        return Object.assign({},
            rule,
            { applied: compress(applied, definition) }
        )
    };

    return Object.assign( {},
        serviceAhj,
        {
            rules: Object.assign({},
                ...Object.keys(serviceAhj.rules).map( id => {
                    if( rules && rules.includes(id) ){
                        return { [id]: reformatRule( serviceAhj.rules[id], definitions.rules[id] ) }
                    } else {
                        return { [id]: serviceAhj.rules[id] }
                    }
                })
            )
        }
    )

};

const flatten = ( array ) => {
    let flat = [];
    array.map( a => { if(a) flat = [ ...flat, ...a ] });
    return flat;
};

module.exports = {
    showAppliedData,
    flatten
}