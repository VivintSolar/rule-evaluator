
//definition.setItem
module.exports = (function(item){
   this.item = item;
   this.setTemplateAttr("item", item );
   return this.item;
});