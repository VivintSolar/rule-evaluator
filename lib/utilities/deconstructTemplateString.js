//deconstructTemplateString
module.exports = string => {
    let i = 0;
    let parameters = [];
    const main = () => {
        let arr = [],
            startIndex = i,
            buildingPlaceholder;
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
                buildingPlaceholder = true;
                startIndex = i;
            } else if ( next === "}" ){
                addWord(true);
                startIndex = i + 1;
                buildingPlaceholder = false;
            } else if ( !buildingPlaceholder ){
                addWord();
                startIndex = i;
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