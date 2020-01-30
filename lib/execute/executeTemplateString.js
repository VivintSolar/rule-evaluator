



// executeTemplateString


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

module.exports = (function( string ){

    // console.log('Applied Conditions:::', this.appliedConditions );


    let errors;

    const addToErrors = ( message ) => {
        if( !errors ) errors = [];
        if( !errors.includes( message ) ){
            errors.push( message );
        }
    };

    const swapConditionValues = words => (
        words.map( word => (
            (this.conditions||{})[ word ] ? this.conditions[ word ] : word
        ))
    );




    const { words, parameters } = deconstruct( string );
    const  missingParameterValues = parameters.filter( parameter =>  (
        !this.conditions.hasOwnProperty( parameter )
    ));

    if( missingParameterValues.length > 0 ) missingParameterValues.map( missingParameter => {
        this.addError(`Missing template string parameter value ${ missingParameter }`)
    })




    console.log( "stringElements:::", stringElements );



    return string;
});