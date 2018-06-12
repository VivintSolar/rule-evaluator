
const flatten = ( array ) => {
    let flat = [];
    array.map( a => { if(a) flat = [ ...flat, ...a ] });
    return flat;
};

const getAppliedConditions = ( statements ) => {
    let appliedConditions = null;
    statements.map( statement => {
        if(statement.condition){
            if( !appliedConditions ){
                appliedConditions = [];
            }
            statement.condition.map( condition => {
                if(!appliedConditions.includes( condition.left) ){
                    appliedConditions.push(condition.left)
                }
            })
        }
    });
    return appliedConditions;
};

const pick = ( obj,  array ) => {
    let picked = null;
    array.map( key => {
        if( obj[ key ] ){
            if( !picked ) picked = {};
            picked[ key ] = obj[ key ];
        }
    });
    return picked;
};
const mergeObjExceptions = ( exceptions, dataType ) => {
    if( !exceptions ) return null;
    const merge = {
        object: () => {
            let obj = {};
            exceptions.map( ({ value, description }) => {
                if( description ){
                    const valueAttr = Object.keys( value )[ 0 ];
                    if( !obj[ valueAttr ] ) obj[ valueAttr ] = [];
                    obj[ valueAttr ].push( description )
                }
            });
            return obj;
        },
        default: () => {
            let except = null;
            exceptions.map( ({ description }) => {
                if( description ) {
                    if( !except ) except = [];
                    except.push( description )
                }
            });
            return except;
        }
    };
    return merge[ dataType ] ? merge[ dataType ]() : merge.default()

};

const mergeObjDescriptions = ( statements ) => {
    if( !statements ) return null;
    const descriptions = Object.assign({},
        ...statements.reverse().map( ({ value, description }) => {
            if( description ){
                const valueAttr = Object.keys( value )[ 0 ];
                if( description.indexOf( value[ valueAttr ] ) < 0 ){
                    description = `${valueAttr.toUpperCase()}: ${ value[ valueAttr ] }, ${ description }`;
                }
                return { [ valueAttr ]: description  };
            }
        } )
    );
    if( Object.keys(descriptions).length === 0 ) return null;
    return descriptions;
};

const mergeObjSource = ( statements ) => {
    return Object.assign({},
        ...statements.reverse().map( ({ value, source }) => (
            source ? { [ Object.keys( value )[ 0 ] ]: source  } : null
        ) )
    )
};

const createMap = (items) => {
    return Object.assign({},
        ...items.map(item=>{
            return {[item.id]:item}
        })
    )
};

const unique = (collection) => {
    let uniqueIds = [];
    return collection.filter(item=>{
        const id = Object.keys(item).map(key=>(item[key])).join('');
        const isUnique = !uniqueIds.includes(id);
        if(isUnique){
            return uniqueIds.push(id);
        }
    })
};

module.exports = {
    flatten,
    getAppliedConditions,
    pick,
    mergeObjExceptions,
    mergeObjDescriptions,
    mergeObjSource,
    createMap,
    unique
};