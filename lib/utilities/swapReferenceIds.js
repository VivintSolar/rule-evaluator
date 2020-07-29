const { createMap, sorter } = require('./util');

//swapReferenceIds
module.exports = ( value, template, asParameterToDataType ) => {

    if( value === undefined || value === null ) return null;

    let itemsMap;
    const { dataType, items, display, sortType } = template;

    if( items ) itemsMap = createMap(items);

    if( asParameterToDataType === 'template string' || asParameterToDataType === true ){
        if( dataType === 'boolean' && display ) {
            return display[ value ? 0 : 1 ];
        }
    }

    if( dataType === 'ordered list' && value ){
        value = value.map( id => itemsMap[id]);
        if( sortType && sorter[sortType] ){
            value = sorter[sortType](template,value);
        }
    }

    if( dataType === 'enum' && value ) {
        if( itemsMap[value] ) return itemsMap[value].name;
        return (items.filter(item => (item.id === value || item.name === value))[0]||{}).name
    }

    return value;

};
