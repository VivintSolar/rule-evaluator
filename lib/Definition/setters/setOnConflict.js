
//definition.setOnConflict
module.exports = (function( onConflict ){
   this.onConflict = onConflict;
   this.setTemplateAttr("onConflict", onConflict );
   return this.onConflict;
});