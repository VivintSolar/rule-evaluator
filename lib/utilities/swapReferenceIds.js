const { createMap } = require('./util');

//swapReferenceIds
module.exports = ( value, template ) => {

    if( value === undefined || value === null ) return null;

    let itemsMap;
    const { dataType, items } = template;

    if( items ) itemsMap = createMap(items);

    if( dataType === 'ordered list' && value ){
        value = value.map( id => {
            return itemsMap[id]
        })
    }

    if( dataType === 'enum' && value ){
        value = itemsMap[value].name;
    }

    return value;

};