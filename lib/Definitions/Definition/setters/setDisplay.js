
//definition.setDisplay
module.exports = (function(display){
   this.display = display;
   this.setTemplateAttr("display", display );
   return this.display;
});