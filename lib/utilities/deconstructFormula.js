

//deconstructFormula
module.exports = (formula) => {
    let TWS = formula[formula.length - 1] === " ";
    let i = 0;
    const main = () => {
        let arr = [];
        let startIndex = i;
        const addWord = () => {
            if ( i - 1 > startIndex ) {
                arr.push( formula.slice( startIndex, i - 1 ) );
            }
        };
        while ( i < formula.length ) {
            switch( formula[ i++ ] ) {
                case " ":
                    addWord();
                    startIndex = i;
                    continue;
                case "(":
                    arr.push( main() );
                    startIndex = i;
                    continue;
                case ")":
                    addWord();
                    return arr;
            }
        }
        if( !TWS ){
            i = i + 1;
            addWord();
        }
        return arr;
    };
    return main();
};