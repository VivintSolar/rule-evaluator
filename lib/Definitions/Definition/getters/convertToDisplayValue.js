const convertToDisplayValue = require('../static/convertToDisplayValue');


module.exports = (function( value ){
    return convertToDisplayValue(value, this.template);
});
