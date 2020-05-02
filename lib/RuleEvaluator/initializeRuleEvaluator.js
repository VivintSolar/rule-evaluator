const Definitions = require('../Definitions')

//initializeRuleEvaluator
module.exports = (function({
   ahj,
   serviceAhj,
   definitions,
   conditions,
   options
}){
   this.definiitions = new Definitions( definitions );

   ahj = serviceAhj || ahj;
   this.rules = {};
   this.conditions = conditions;
   this.options = options || {};

   if( ahj && definitions ){
      this.ruleIds = [];
      Object.keys( definitions.rules )
          .map( id => {
             const appliedRule = ahj.rules[ id ];
             const ruleDefinition = definitions.rules[ id ];
             if( appliedRule ){
                this.ruleIds.push( id );
                this.rules[ id ] = new Rule(Object.assign({},
                    appliedRule,
                    ruleDefinition, {
                       definitions,
                       getRule: this.getRule,
                       getGlobalAttributes: this.getGlobalAttributes,
                       updateGlobalAttributes: this.updateGlobalAttributes,
                    }));
             }
          });
   }

});