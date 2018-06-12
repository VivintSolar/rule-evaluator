const {
    mergeObjDescriptions,
    mergeObjSource,
    mergeObjExceptions,
    unique,
    createMap
} = require('./utilities/util');

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

module.exports = ({
    statements,
    template,
    exceptions
}) => {

    if( !statements || statements.length < 1 ) return { value: null };

    let obj,
        val,
        conditions,
        description,
        source,
        array,
        names;

    const { dataType, onConflict } = template;

    if( dataType === 'object' ) obj = {};

    if( ['collection','ordered list'].includes(dataType) ) {
        names = [];
        array = [];
    }

    statements.reverse().map( statement => {

        const { value, condition } = statement;

        if( condition ) conditions = [ ...( conditions || [] ), ...condition ];

        if( obj ) Object.assign(obj, value);

        if( dataType === 'ordered list' && !array.includes(value) )  array.push(value);

        if( dataType === 'collection' && !names.includes(value.name) ) {
            names.push(value.names);
            array.push(value);
        }

        if( dataType === 'string' && onConflict === 'union' && val ) {
            val += `\n${value}`;
        } else {
            val = value;
        }

        description = statement.description;

        source = statement.source;

    });

    if( dataType === 'object' ) {
        description = mergeObjDescriptions( statements );
        source = mergeObjSource( statements );
    }

    if(conditions) conditions = unique(conditions);

    exceptions = mergeObjExceptions( exceptions, dataType );

    return {
        exceptions,
        conditions: conditions || null,
        source,
        description,
        value: swapReferenceIds( obj || array || val, template)
    };

};
