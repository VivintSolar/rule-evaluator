const swapReferenceIds = require('../utilities/swapReferenceIds');

const deconstruct = string => {
    let i = 0;
    let parameters = [];
    const main = () => {
        let arr = [],
            startIndex = i,
            buildingWord;
        const addWord = isParam => {
            if ( i > startIndex) {
                const word = string.slice(startIndex, i);
                arr.push( word );
                if( isParam ) parameters.push( word )
            }
        };
        while ( i < string.length ) {
            const char = string[i++],
                next = string[i];
            if( char === "{" ){
                buildingWord = true;
                startIndex = i;
            }
            else if ( next === "}" ){
                addWord( true );
                startIndex = i + 1;
                buildingWord = false;
            }
            else if ( (char === " " && !buildingWord ) ||  i - 1 === 0 ){
                if( char === " " ) addWord();
                if( i - 1 > 0 ) startIndex = i;
                buildingWord = true;
            }
            else if ( (next === " " && buildingWord ) || !next){
                addWord();
                startIndex = i;
                buildingWord = false;
            }
        }
        return arr;
    };
    const words = main();
    return {
        words,
        parameters
    }
};

// executeTemplateString
module.exports = (function( string ){

    let errors;

    const addToErrors = ( message ) => {
        if( !errors ) errors = [];
        if( !errors.includes( message ) ){
            errors.push( message );
        }
    };

    const { words, parameters } = deconstruct( string );
    const  missingParameterValues = parameters.filter( parameter =>  (
        !(this.conditions||{}).hasOwnProperty( parameter )
    ));

    if( missingParameterValues.length > 0 ) missingParameterValues.map( missingParameter => {
        addToErrors(`Missing template string parameter value ${ missingParameter }`);
    });

    const wordsWithStringReplacement = words.map( word => {
        const conditionDefinition = this.appliedConditions[ word ];
        // show name instead of value if not found
        if( conditionDefinition && missingParameterValues.includes( word ) ){
            return conditionDefinition.name;
        }
        if( conditionDefinition && !missingParameterValues.includes( word )  ){
            return swapReferenceIds(this.conditions[ word ], conditionDefinition.template)
        }
        return word;
    });

    const newString = wordsWithStringReplacement.join('');

    if( errors ){
        errors.map( error => this.addError( error ));
        return null;
    }

    return newString;
});