

//_deepMerge
module.exports = (function(_base, _fill, _path){
  const path = (_path||"");
  const base = Object.assign({}, _base||this.base||{});
  const fill = Object.assign({}, _fill||this.fill||{});
  return this.deep(base, fill, path);
});
