const convertFromDisplayValue = require('../static/convertFromDisplayValue');

module.exports = (function( value ){
    return convertFromDisplayValue( value, this.template );
});
