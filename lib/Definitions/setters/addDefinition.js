
//definition.addDefinition
module.exports = (function( definition ){
   if( definition.rule ) {
      if( !this.rules ) this.rules = {};
      this.rules[ definition.id ] = definition;
   }
   if( definition.condition ) {
      if( !this.conditions ) this.conditions = {};
      this.conditions[ definition.id ] = definition;
   }
   this.byId[definition.id] = definition;
   return this;
});