

//initializeRuleDefinition
module.exports = (function({
    applyTo
}){
    this.applyTo = applyTo;
    this.definitionAttributes = [ ...this.definitionAttributes||[], "condition", "applyTo"];
    this.condition = true;
});