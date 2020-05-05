

//initializeDefinitions
module.exports = (function({ definitions }){
    const {
        rules,
        conditions
    } = definitions ||{};
    const combined = Object.assign({}, rules, conditions);
    this.byId = combined;
    this.ids = Object.keys( combined );
    this.rules = rules;
    this.conditions = conditions;
});