
const ObjectFiller = require("./index");


class ActionFiller extends ObjectFiller {
  constructor(base, fill, generators){
    super(base, fill, generators);
    this.base = base;
    this.fill = fill;
    this.generators = generators;
  }
}

module.exports = ActionFiller;
