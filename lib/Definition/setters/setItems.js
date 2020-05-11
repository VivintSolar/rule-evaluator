
//definition.setItems
module.exports = (function( items ){
   this.items = items;
   this.setTemplateAttr("items", items );
   return this.items;
});