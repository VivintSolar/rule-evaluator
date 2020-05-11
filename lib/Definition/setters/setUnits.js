
//definition.setUnits
module.exports = (function( units ){
   this.units = units;
   this.setTemplateAttr("units", units );
   return this.units;
});