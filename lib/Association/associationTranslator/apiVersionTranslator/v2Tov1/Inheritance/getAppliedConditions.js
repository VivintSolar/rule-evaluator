



//  getAppliedConditions
module.exports = (function( statements, id ){

  const ruleDefinition = (this.definitions.rules||{})[id];
  let applied = [];
  statements.map( statement => {

    if( [ 'formula', 'template string' ].includes( ruleDefinition.template.dataType ) ){
      if( ruleDefinition.allowableConditions && ruleDefinition.allowableConditions !== 'none' ){
        ruleDefinition.allowableConditions.map(conditionId => {
          if( statement.value.includes(conditionId) && !applied.includes( conditionId )){
            applied.push( conditionId );
            if( id && this.rules ) {
              if (!this.rules[id].appliedConditions) {
                this.rules[id].appliedConditions = [];
              }
              if( !this.rules[ id ].appliedConditions.includes( conditionId ) ){
                this.rules[ id ].appliedConditions.push(  conditionId )
              }
              if( !this.appliedConditions.includes( conditionId ) ){
                this.appliedConditions.push( conditionId )
              }
            }
          }
        })
      }
    }

    if( statement.condition ){
      statement.condition.map( condition => {

        if( !applied.includes( condition.left )){
          applied.push( condition.left );

          if( id && this.rules ){
            if( !this.rules[ id ].appliedConditions ){
              this.rules[ id ].appliedConditions = [];
            }

            if( !this.rules[ id ].appliedConditions.includes( condition.left ) ){
              this.rules[ id ].appliedConditions.push(  condition.left )
            }

            if( !this.appliedConditions.includes( condition.left ) ){
              this.appliedConditions.push( condition.left )
            }
          }
        }
      })
    }
  });

  return applied.length > 0 ? applied : null;
});
