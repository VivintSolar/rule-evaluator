

const convertObjectToDisplayValue = require('../static/convertObjectToDisplayValue');

module.exports = (function( value ){
    return convertObjectToDisplayValue(value, this.template);
});
