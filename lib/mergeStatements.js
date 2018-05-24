const { mergeObjDescriptions, mergeObjSource, mergeObjExceptions } = require('./utilities/util');

const createMap = (items) => {
    return Object.assign({},
        ...items.map(item=>{
            return {[item.id]:item}
        })
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

    const { dataType } = template;

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

        description = statement.description;

        val = value;

        source = statement.source;

    });

    if( dataType === 'object' ) {
        description = mergeObjDescriptions( statements );
        source = mergeObjSource( statements );
    }

    exceptions = mergeObjExceptions( exceptions, dataType );

    return {
        exceptions,
        conditions: conditions || null,
        source,
        description,
        value: swapReferenceIds( obj || array || val, template)
    };

};
