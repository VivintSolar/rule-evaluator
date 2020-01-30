



// executeTemplateString


const deconstruct = string => {
    let i = 0;
    const main = () => {
        let arr = [],
            startIndex = i,
            buildingWord;
        const addWord = () => {
            if ( i > startIndex) {
                let word = string.slice(startIndex, i);
                arr.push( word );
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
                addWord();
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
    return main();
};



module.exports = (function( string ){
    const appliedConditions = this.appliedConditions;
    const conditions = this.conditions;

    let errors;

    const addToErrors = ( message ) => {
        if( !errors ) errors = [];
        if( !errors.includes( message ) ){
            errors.push( message );
        }
    };





    const stringElements = deconstruct(string);
    console.log( "stringElements:::", stringElements );

    // if( errors ){
    //     if( this.addError ) errors.map( error => {
    //         this.addError( error );
    //     });
    //     this.formula = formula;
    //     return null;
    // }
    return string;
});