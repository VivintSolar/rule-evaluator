

//initializeDefinition
module.exports = (function({
   id,
   name,
   tags,
   applyTo,
   allowableConditions,
   ruleAsParameter,
   allowableRuleParameters,
   template
}){
    const {
        dataType,
        display,
        displayUnitsAs,
        imports,
        item,
        items,
        onConflict,
        range,
        step,
        templates,
        units
    } = template;
    this.id = id;
    this.name = name;
    this.tags = tags;
    this.applyTo = applyTo;
    this.allowableConditions = allowableConditions;
    this.ruleAsParameter = ruleAsParameter;
    this.allowableRuleParameters = allowableRuleParameters;

    this.template = template;
    this.dataType = dataType;
    this.display = display;
    this.displayUnitsAs = displayUnitsAs;
    this.imports = imports;
    this.item = item;
    this.items = items;
    this.onConflict = onConflict;
    this.range = range;
    this.step = step;
    this.templates = templates;
    this.units = units;
    this.units = units;
});