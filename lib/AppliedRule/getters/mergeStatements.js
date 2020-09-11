const {
    mergeObjDescriptions,
    mergeObjSource,
    mergeObjExceptions,
    unique,
    deleteFields
} = require('../../utilities/util');
const swapReferenceIds = require('../../utilities/swapReferenceIds');

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
const sort = (list, sortObject) => {
    let sortedList = [ ...list ], size;
    if( sortObject._size ) {
        size = sortObject._size
        sortObject = deleteFields(sortObject, ["_size"]);
    }
    if( Object.keys(sortObject).length > 0 ) {
        Object.keys( sortObject ).forEach( sortField => {
            sortedList = sortedList.sort( ( itemA, itemB ) => {
                if( itemB[sortField] && !itemA[sortField] ) return 1;
                if( !itemB[sortField] && itemA[sortField] ) return -1;
                if( sortObject[sortField].includes( itemB[sortField] ) && !sortObject[sortField].includes( itemA[sortField] ) ) return 1;
                if( !sortObject[sortField].includes( itemB[sortField] ) && sortObject[sortField].includes( itemA[sortField] ) ) return -1;
                return sortObject[sortField].indexOf( itemB[sortField] ) < sortObject[sortField].indexOf( itemA[sortField] ) ? 1 : -1;
            })
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

const filters = {
    contain: itemContains,
    doesntContain: itemDoesntContain,
    sort,
    highestPriority
};

module.exports = (function({
   statements,
   exceptions
}){

    const {
        template,
        appliedConditions
    } = this;

    if( statements && statements.length < 1 ) statements = null;

    let obj,
        val,
        conditions,
        description,
        source,
        array,
        names,
        filter,
        formula,
        templateString;

    const { dataType, items } = template;
    const templateStringish = [ 'formula', 'template string' ].includes( dataType );
    const globalOnConflict = template.onConflict;

    const addToConditions = conditionStatement => conditions = [ ...( conditions || [] ), ...conditionStatement ];

    const addFilter = ( filterItem ) => {
        const type =  filterItem._type;
        filterItem = deleteFields(filterItem, ["_type"]);
        if(!filter) filter = {};
        if( type === 'doesntContain' && filter.contain && Object.keys(filter.contain).length === 0 ){
            filter = deleteFields(filter, ["contain"]);
        }
        filter[ type ] = Object.assign({}, filter[type], filterItem)
    };

    const applyFilter = () => {
        let results = items;
        Object.keys(filter).forEach( filterType => {
            results = filters[ filterType ]( results, filter[ filterType ] )
        });
        const uniqueIds = [];
        return results.filter( item => {
            if( uniqueIds.includes( item.id ) ) return false;
            uniqueIds.push( item.id );
            return true;
        })
    };

    if( statements ) {

        if( dataType === 'object'  ) obj = {};

        if( ['collection','ordered list'].includes(dataType) ) {
            names = [];
            array = [];
        }

        statements.reverse().map( (statement, statementIndex) => {
            const { value, condition, onConflict } = statement;

            if( dataType === 'ordered list' && !array.includes(value) ){
                array.push(value);
            }
            if( dataType === 'filter') addFilter( value );

            if( obj ) Object.assign(obj, value);

            if( dataType === 'collection' && !names.includes(value.name) ) {
                names.push(value.names);
                array.push(value);
            }

            if( dataType === 'string' && globalOnConflict === 'union' && val ) {
                val = val + "\n" + value;
            }
            else if( templateStringish ){
                const results = this.execute( value, dataType );
                const parameterSubsetCheck = results !== null || (statementIndex === statements.length - 1 && !formula);
                if( dataType === 'template string' || ( dataType === 'formula' && parameterSubsetCheck ) ){
                    if( dataType === 'template string' ){
                        if( globalOnConflict === 'union' && templateString){
                            templateString += '\n' + value;
                            if( val !== null && results !== null ){
                                val += '\n' + results ;
                            } else {
                                val = results;
                            }
                        } else {
                            templateString = value;
                            val = results;
                        }
                    }else if( dataType === 'formula' ){
                        formula = value;
                        val = results;
                    }
                }
                conditions = condition;
            }
            else {
                if( condition ) addToConditions( condition );
                val = value;
            }

            description = statement.description;

            source = statement.source;

        });
    }

    if( dataType === 'object' ) {
        description = mergeObjDescriptions( statements );
        source = mergeObjSource( statements );
    }

    if( filter ) val = applyFilter();

    if( conditions ) conditions = unique(conditions);

    exceptions = mergeObjExceptions( exceptions, dataType );

    const seriesEvaluation = this.getGlobalAttributes( "seriesEvaluation" );

    let finalResults = obj || array || val;

    if( !seriesEvaluation ) finalResults = this.convertToDisplayValue( finalResults );

    return Object.assign({},
        {
            formula,
            templateString,
            exceptions,
            conditions: conditions || null,
            source,
            description,
            value: finalResults
        }
    );

});
