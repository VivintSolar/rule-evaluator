
const flatten = ( array ) => {
    let flat = [];
    const execute = ( arr ) => {
        arr.map( item => {
            if( Array.isArray(item) ){
                return execute( item )
            } else {
                return flat.push( item )
            }
        });
    };
    execute( array );
    return flat;
};

const pick = ( obj,  array ) => {
    const object = obj||{};
    let picked = {};
    array.map( key => {
        if( object[ key ] !== undefined && object[ key ] !== null ){
            picked[ key ] = object[ key ];
        }
    });
    return Object.keys(picked).length > 0 ? picked : null;
};
const omit = (obj, fields) => (
    Object.assign({},
        ...Object.keys(obj||{}).map( key => {
            if( !fields.includes( key ) ) return {
                [ key ]: obj[key]
            }
            return {};
        })
    )
);
// since certain clients using the rule-evaluator hasn't upgrade to the newest
// version of node this is a polyfill util func for object rest spread
const objectRestSpread = ( object, fields, restFieldName ) => {
    restFieldName = restFieldName||"rest";
    const rest = omit( object, fields );
    const subObject = pick( object, fields )
    return Object.assign({}, subObject, { [ restFieldName ]: rest } );
}
const mergeObjExceptions = ( exceptions, dataType ) => {
    if( !exceptions ) return null;
    const merge = {
        object: () => {
            let obj = {};
            exceptions.map( ({ value, description }) => {
                if( description ){
                    const valueAttr = Object.keys( value )[ 0 ];
                    if( obj[ valueAttr ] === undefined ) obj[ valueAttr ] = [];
                    if( description.indexOf( value[ valueAttr ] ) < 0 ){
                        description = `${valueAttr.toUpperCase()}: ${ value[ valueAttr ] }, ${ description }`;
                    }
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
    if(!statements) return null;
    return Object.assign({},
        ...statements.reverse().map( ({ value, source }) => (
            source ? { [ Object.keys( value )[ 0 ] ]: source  } : null
        ) )
    )
};

const createMap = (items, by) => {
    return Object.assign({},
        ...items.map(item=>{
            return {[item[ by || "id" ]]:item}
        })
    )
};

const unique = collection => {
    let uniqueIds = [];
    return collection.filter( item => {
        if( typeof item === "object" ){
            const id = Object.values(item).join('');
            const isUnique = !uniqueIds.includes(id);
            if(isUnique){
                return uniqueIds.push(id);
            }
        } else {
            if( !uniqueIds.includes( item ) ){
                return uniqueIds.push( item )
            }
        }
    })
};

const deleteField = (obj, field) => {
    return Object.assign({},
        ...Object.keys(obj).map( key => {
            if( field !== key ) return { [key]: obj[key] };
        })
    );
};

const deleteFields = (obj, fields) => (
    Object.assign({},
        ...Object.keys(obj).map( key => (
            !fields.includes(key) ? { [key]: obj[key] } : undefined
        ))
    )
);

const roundTo = (number, digits) => {
    let negative = false;
    if ( digits === undefined ) return number;
    if( number < 0) {
        negative = true;
        number = number * -1;
    }
    const multiplier = Math.pow(10, digits);
    number = Math.round(number * multiplier) / multiplier;
    if( negative ) {
        number = (number * -1)
    }
    return number;
};

const sorter = {
    alphabetical: ( template, collection, targetField ) => {
        targetField = targetField || "name";
        const compareOptions = {numeric: true, sensitivity: 'base'};
        return collection.sort((a, b) =>  (
            a[targetField].localeCompare(b[targetField], undefined, compareOptions)
        ));
    },
    predefined: ( template, collection ) => {
        const collectionIds = collection.map(({ id }) => id);
        return template.items.filter( item => collectionIds.includes( item.id ) )
    }
};

const getMMDDYYYY = timeStamp => {
    const d = new Date(timeStamp);
    const months = [
        "January","February","March","April",
        "May","June","July","August","September",
        "October","November","December"
    ];
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
}




const set = (path, value, root, delimiter) => {
    delimiter = delimiter || ".";
    if( root && typeof root === 'string' ) {
        path = root + delimiter + path;
        root = null;
    }
    let segments = path.split(delimiter),
        cursor = root || this,
        segment,
        i;

    for (i = 0; i < segments.length - 1; ++i) {
        segment = segments[i];
        cursor = cursor[segment] = cursor[segment] || {};
    }

    return cursor[segments[i]] = value;
};

const isObject = object => object && typeof object === "object" && !Array.isArray( object );

const roundDown = ( value, dec ) => {
    const factor = 10 * dec;
    return Math.floor(value * factor) / factor;
}

module.exports = {
    flatten,
    pick,
    mergeObjExceptions,
    mergeObjDescriptions,
    mergeObjSource,
    createMap,
    unique,
    deleteFields,
    deleteField,
    roundTo,
    sorter,
    getMMDDYYYY,
    omit,
    objectRestSpread,
    set,
    isObject,
    roundDown
};
