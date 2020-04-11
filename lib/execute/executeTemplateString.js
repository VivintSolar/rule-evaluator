
const deconstruct = require('../utilities/deconstructTemplateString');

const swapReferenceIds = require('../utilities/swapReferenceIds');



// executeTemplateString
module.exports = (function( string ){

    const missingParameterValues = this.errorHandler.getMissingParameters(string);

    const { words, parameters } = deconstruct( string );


    const wordsWithStringReplacement = words.map( word => {
        if( parameters.includes( word ) ){
            const definition = this.getDefinition( word );
            // show name instead of value if not found
            if( definition && missingParameterValues.includes( word ) ){
                return definition.name;
            }
            if( definition && !missingParameterValues.includes( word )  ){
                return swapReferenceIds(this.conditions[ word ], definition.template)
            }
        }
        return word;
    });

    const newString = wordsWithStringReplacement.join('');

    if( missingParameterValues.length > 0 ){
        return null;
    }

    return newString;
});