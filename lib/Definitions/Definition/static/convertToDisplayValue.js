
const swapReferenceIds = require('../../../utilities/swapReferenceIds');
const { getMMDDYYYY, createMap, sorter } = require('../../../utilities/util');
const convertNumberToDisplayValue = require('./convertNumberToDisplayValue');
const convertObjectToDisplayValue = require('./convertObjectToDisplayValue');



module.exports = ( value, template, options, apiVersion ) => {
    const { dataType, items, display, sortType } = template||{};
    const { convertResults } = options||{};
    const convertRegardless = convertResults === "all" || !convertResults;
    const itemsMap = items ? createMap(items) : undefined;


    if( value === undefined || value === null ) return null;
    if( dataType === 'date' ){
        if( convertRegardless ) return getMMDDYYYY( value );
    } else if( dataType === 'boolean' && display ) {
        if (convertRegardless) return display[value ? 0 : 1];
    } else if( dataType === 'number' ){
        return convertNumberToDisplayValue( value, template, options, apiVersion );
    } else if( dataType === 'object' ){
        return convertObjectToDisplayValue( value, template, options, apiVersion );
    } else if( dataType === 'ordered list'){
        const collection = value.map( id => itemsMap[id]);
        if( sortType && sorter[sortType] ) return sorter[sortType](template,collection);
        return collection;
    } else if( dataType === 'enum'){
        if( ( convertRegardless || apiVersion === "v1" ) && itemsMap[value] ) return itemsMap[value].name;
        return itemsMap[value];
    }
    return value;
};
