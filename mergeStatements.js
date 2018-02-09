

const createMap = (items) => {
    return Object.assign({},
        ...items.map(item=>{
            return {[item.id]:item}
        })
    )
};

const swapReferenceIds = ( value, definition ) => {

    let itemsMap;
    const { dataType, items } = definition.template;

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
    definition
}) => {

    if( statements.length < 1 ) return { value:null };

    let obj,
        val,
        conditions,
        description,
        source,
        array,
        names;

    const { dataType } = definition.template;

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

    swapReferenceIds( array || val, definition);

    return Object.assign(
        description ? { description } : {},
        conditions ? { conditions } : {},
        {
            source,
            value: swapReferenceIds( obj || array || val, definition)
        }
    );

};
