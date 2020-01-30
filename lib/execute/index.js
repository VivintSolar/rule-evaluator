
module.exports = (function( templateString, dataType ){

    if( dataType === 'formula' ){
        return this.executeFormula( templateString );
    } else if(  dataType === 'template string' ) {
        return this.executeTemplateString( templateString );
    }
});