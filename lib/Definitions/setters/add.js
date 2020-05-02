
//definition.add
module.exports = (function( definition ){
   if( definition.rule ) this.rules[ definition.id ] = definition;
   if( definition.condition ) this.conditions[ definition.id ] = definition;
   this.byId[definition.id] = definition;
   return this;
});