
const deepMerge = require("./deepMerge");
const _deepMerge = require("./_deepMerge");
const getGenerator = require("./getGenerator");
const deep = require("./deep");

class ObjectFiller {
  constructor(base, fill, generators){
    this.base = base;
    this.fill = fill;
    this.generators = generators;
  }
}

ObjectFiller.prototype.deepMerge = deepMerge;
ObjectFiller.prototype._deepMerge = _deepMerge;
ObjectFiller.prototype.getGenerator = getGenerator;
ObjectFiller.prototype.deep = deep;

module.exports = ObjectFiller;
