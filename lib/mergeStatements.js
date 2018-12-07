const {
    mergeObjDescriptions,
    mergeObjSource,
    mergeObjExceptions,
    unique,
    createMap,
    deleteFields
} = require('./utilities/util');

const itemContains = (item, subItem) => {
    if( Object.keys(subItem).length === 0 ) return true;
    return Object.keys(subItem).every( key => (
        subItem[key].some( value => (
            value === item[key]
        ))
    ))
};

const filters = {
    contain: itemContains,
    doesntContain: (item, subItem) => (
        !itemContains(item, subItem)
    )
};

const swapReferenceIds = ( value, template ) => {

    let itemsMap;
    const { dataType, items } = template;

    if( items ) itemsMap = createMap(items);

    if( dataType === 'ordered list' ){
        value = value.map(id=>{
            return itemsMap[id]
        })
    }

    if( dataType === 'enum' ){
        value = itemsMap[value].name;
    }

    return value;

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
        filter;

    const { dataType, items } = template;

    const addFilter = ( filterItem ) => {
        const type =  filterItem._type;
        filterItem = deleteFields(filterItem, ["_type"]);
        if(!filter) filter = {};
        filter[ type ] = Object.assign({}, filter[type], filterItem)
    };

    const applyFilter = () => {
        const filterByDataType = {
            'ordered list': () => {
                let results = items; // if( array.length > 0 ) return error;
                Object.keys(filter).map( filterType => { //if(!filters[filterType]) return error;
                    results = results.filter( item => filters[filterType](item, filter[filterType]))
                } );
                results.map( item => array.push(item.id))
            }
        };
        if( filterByDataType[ dataType ] ) filterByDataType[ dataType ]();
    };

    const globalOnConflict = template.onConflict;

    if( dataType === 'object' ) obj = {};

    if( ['collection','ordered list'].includes(dataType) ) {
        names = [];
        array = [];
    }

    if( statements ) statements.reverse().map( statement => {

        const { value, condition, onConflict } = statement;

        if( condition ) conditions = [ ...( conditions || [] ), ...condition ];

        if( dataType === 'ordered list' ){
            if( onConflict === 'filter') addFilter(value);
            else if( !array.includes(value) ) array.push(value);
        }

        if( obj ) Object.assign(obj, value);

        if( dataType === 'collection' && !names.includes(value.name) ) {
            names.push(value.names);
            array.push(value);
        }

        if( dataType === 'string' && globalOnConflict === 'union' && val ) {
            val += `\n${value}`;
        } else {
            val = value;
        }

        description = statement.description;

        source = statement.source;

    });

    if( dataType === 'formula' && val ){
        val = this.execute( val );
    }

    if( dataType === 'object' ) {
        description = mergeObjDescriptions( statements );
        source = mergeObjSource( statements );
    }

    if( filter ) applyFilter();

    if(conditions) conditions = unique(conditions);

    exceptions = mergeObjExceptions( exceptions, dataType );

    return {
        exceptions,
        conditions: conditions || null,
        source,
        description,
        value: swapReferenceIds( obj || array || val, template)
    };

});
