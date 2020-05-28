
//definition.setImports
module.exports = (function( imports ){
   this.imports = imports;
   this.setTemplateAttr("imports", imports );
   return this.imports;
});