
const { createMap } = require('../../../utilities/util');

module.exports = (function( value ){
    if( value === undefined || value === null ) return null;

    if( this.dataType === 'number' ){
        value = this.convertNumberFromDisplayValue( value );
    } else {

        let itemsMap;
        const { dataType, items, display } = this;

        if( items ) itemsMap = createMap(items, "name");

        if( dataType === 'boolean' ) {
            if( display ) {
                if( display.indexOf( value ) === 0 ) return true;
                else if( display.indexOf( value ) === 1 ) return false;
            } else return value;
        }

        if( dataType === 'ordered list' && value ){
            return value.map( ({ id }) => id)
        }

        if( dataType === 'enum' && value ) return itemsMap[ value ].id;
    }
    return value;
});