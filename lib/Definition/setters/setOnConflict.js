
//definition.setOnConflict
module.exports = (function( onConflict ){
   this.onConflict = onConflict;
   this.template.onConflict = onConflict;
   return this.onConflict;
});