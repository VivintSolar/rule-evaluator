
module.exports = (function( templateString, dataType, appliedConditions, conditionValues){

    this.appliedConditions = appliedConditions || this.appliedConditions;
    this.dataType = dataType || this.dataType;
    this.conditions = conditionValues || this.conditions;

    if( dataType === 'formula' ){
        return this.executeFormula( templateString );
    } else if(  dataType === 'template string' ) {
        return this.executeTemplateString( templateString );
    }
});