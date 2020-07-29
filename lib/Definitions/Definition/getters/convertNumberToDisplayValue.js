

const convertNumberToDisplayValue = require('../static/convertNumberToDisplayValue');

module.exports = (function( value ){
    return convertNumberToDisplayValue(value, this.template);
});
