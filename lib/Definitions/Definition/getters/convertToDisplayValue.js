const convertToDisplayValue = require('../static/convertToDisplayValue');


module.exports = (function( value, options ){
    const combinedOptions = Object.assign({}, this.options, options||{} );
    return convertToDisplayValue(value, this.template, combinedOptions, this.apiVersion);
});
