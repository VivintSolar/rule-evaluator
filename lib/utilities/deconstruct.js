const deconstructTemplateString = require('./deconstructTemplateString');
const deconstructFormula = require('./deconstructFormula');


module.exports = (dataType, string) => {
    if( dataType === "template string" ){
        return deconstructTemplateString( string )
    } else if( dataType === "formula" ){
        return deconstructFormula( string )
    }
};