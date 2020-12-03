

//initializeDefinition
module.exports = (function(parameters){
    const {
        id,
        name,
        tags,
        template,
        options,
        apiVersion
    } = parameters||{};
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
    } = template || {};
    this.id = id;
    this.name = name;
    this.tags = tags;
    this.definitionAttributes = [ "id", "name", "tags", "template" ];
    this.template = template || {};
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
    this.options = options;
    this.apiVersion = apiVersion;
});
