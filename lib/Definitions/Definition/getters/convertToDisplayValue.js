const convertToDisplayValue = require('../static/convertToDisplayValue');


module.exports = (function( value, options ){
    return convertToDisplayValue(value, this.template, options || this.options);
});
