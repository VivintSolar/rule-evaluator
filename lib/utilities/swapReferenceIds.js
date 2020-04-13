const { createMap } = require('./util');

//swapReferenceIds
module.exports = ( value, template, asParameterToDataType ) => {

    if( value === undefined || value === null ) return null;

    let itemsMap;
    const { dataType, items, display } = template;

    if( items ) itemsMap = createMap(items);

    if( asParameterToDataType === 'template string' ){
        if( dataType === 'boolean' && display ) {
            return display[ value ? 0 : 1 ];
        }
    }

    if( dataType === 'ordered list' && value ){
        return value.map( id => {
            return itemsMap[id]
        })
    }

    if( dataType === 'enum' && value ) return itemsMap[value].name;

    return value;

};