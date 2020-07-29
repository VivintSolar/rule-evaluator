

const convertNumberFromDisplayValue = require('../static/convertNumberFromDisplayValue');

module.exports = (function( value ){
    return convertNumberFromDisplayValue( value, this.template );
});
