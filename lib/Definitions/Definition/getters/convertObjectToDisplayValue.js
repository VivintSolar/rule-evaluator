

const convertObjectToDisplayValue = require('../static/convertObjectToDisplayValue');

module.exports = (function( value, options ){
    const combinedOptions = Object.assign({}, this.options, options||{} );
    return convertObjectToDisplayValue(value, this.template, this.apiVersion);
});
