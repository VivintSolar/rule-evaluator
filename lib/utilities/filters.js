
const { deleteFields } = require('./util');

const itemContains = (list, containsObject) => {
    return list.filter( item => {
        if( Object.keys(containsObject).length === 0 ) return true;
        return Object.keys(containsObject).every( filterField => {
            const filterValues = containsObject[ filterField ];
            if( filterValues.length === 0 ) return !!item[ filterField ]; // for field exists filter
            return filterValues.some( value => (
                value === item[ filterField ]
            ))
        })
    })

};
const itemDoesntContain = (list, doesntContainObject) => {
    return list.filter( item => {
        if( Object.keys(doesntContainObject).length === 0 ) return false;
        return Object.keys(doesntContainObject).every( filterField => {
            const filterValues = doesntContainObject[ filterField ];
            if( filterValues.length === 0 ) return !item[ filterField ]; // for field missing filter
            return filterValues.every( value => (
                value !== item[ filterField ]
            ))
        })
    })
};
const reduceSize = (list, size) => {
    return list.filter( (item, index) => index < size)
}
const _sortAlphaNumeric = (a, b, reverse) => {
    const reA = /[^a-zA-Z]/g;
    const reN = /[^0-9]/g;
    const aA = a.replace(reA, "");
    const bA = b.replace(reA, "");
    if (aA === bA) {
        const aN = parseInt(a.replace(reN, ""), 10);
        const bN = parseInt(b.replace(reN, ""), 10);
        if( reverse ) return aN === bN ? 0 : aN < bN ? 1 : -1;
        return aN === bN ? 0 : aN > bN ? 1 : -1;
    } else {
        return aA < bA ? 1 : -1;
    }
}
const sort = (list, sortObject) => {
    let sortedList = [ ...list ], size;
    if( sortObject._size ) {
        size = sortObject._size
        sortObject = deleteFields(sortObject, ["_size"]);
    }
    const sortMethods = {
        priorityList: ( field, pList ) => {
            return sortedList.sort( ( itemA, itemB ) => {
                if( itemB[field] && !itemA[field] ) return 1;
                if( !itemB[field] && itemA[field] ) return -1;
                if( pList.includes( itemB[field] ) && !pList.includes( itemA[field] ) ) return 1;
                if( !pList.includes( itemB[field] ) && pList.includes( itemA[field] ) ) return -1;
                const bIndex = pList.indexOf( itemB[field] );
                const aIndex = pList.indexOf( itemA[field] );
                return bIndex === aIndex ? 0 : bIndex < aIndex ? 1 : -1;
            })
        },
        alphanumeric: field => {
            const _sort = (itemA, itemB) => _sortAlphaNumeric( itemA[field], itemB[field] )
            return sortedList.sort( _sort )
        },
        reverseAlphanumeric: field => {
            const _sort = (itemA, itemB) => _sortAlphaNumeric( itemA[field], itemB[field], true )
            return sortedList.sort( _sort )
        }
    }
    if( Object.keys(sortObject).length > 0 ) {
        Object.keys( sortObject ).forEach( sortField => {
            const sortMethodName = sortObject[ sortField ];
            if( Array.isArray( sortMethodName ) ) {
                sortedList = sortMethods.priorityList( sortField, sortMethodName );
            } else if( typeof sortMethodName === 'string' ) {
                sortedList = sortMethods[sortMethodName]( sortField );
            }
        })
    }
    if( size !== undefined ) sortedList = reduceSize(sortedList, size);
    return sortedList;
}
const highestPriority = (list, priorityObject) => {
    let prioritizedList = [ ...list ];
    Object.keys( priorityObject ).forEach( prioritizedField => {
        const priorityList = priorityObject[prioritizedField];
        const highestPriorityValue = prioritizedList.reduce(( result, item ) => {
            if( item[prioritizedField] && priorityList.includes( item[prioritizedField] ) ){
                if( !result ) result = item[prioritizedField];
                else if( priorityList.indexOf( item[prioritizedField] ) < priorityList.indexOf( result ) ){
                    result = item[prioritizedField];
                }
            }
            return result;
        }, null)
        if( !highestPriorityValue ) prioritizedList = [];
        else prioritizedList = prioritizedList.filter( item => item[prioritizedField] === highestPriorityValue)
    })
    return prioritizedList;
}

const filtersOrderOfOperations = [
    'contain', 'doesntContain', 'highestPriority', 'sort'
]

const filters = {
    contain: itemContains,
    doesntContain: itemDoesntContain,
    sort,
    highestPriority
};

const addFilter = ( filter, filterItem ) => {
    const type =  filterItem._type;
    filterItem = deleteFields(filterItem, ["_type"]);
    if(!filter) filter = {};
    if( type === 'doesntContain' && filter.contain && Object.keys(filter.contain).length === 0 ){
        filter = deleteFields(filter, ["contain"]);
    }
    filter[ type ] = Object.assign({}, filter[type], filterItem)
    return filter;
};

const applyFilter = (filter, items) => {
    let results = items;
    filtersOrderOfOperations.forEach(filterType => {
        if( filter.hasOwnProperty( filterType ) ){
            results = filters[ filterType ]( results, filter[ filterType ] );
        }
    });
    const uniqueIds = [];
    return results.filter( item => {
        if( uniqueIds.includes( item.id ) ) return false;
        uniqueIds.push( item.id );
        return true;
    });
};

module.exports = {
    filters,
    addFilter,
    applyFilter
}
