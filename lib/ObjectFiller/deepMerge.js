

//deepMerge
module.exports = (function(_base, _fill, _generators){
  this.generators = Object.assign({}, _generators||this.generators||{});
  this.base = Object.assign({}, _base||this.base||{});
  this.fill = Object.assign({}, _fill||this.fill||{});
  return this._deepMerge(this.base, this.fill);
});
