

// addToRules
module.exports = (function( rule, source ){

  if( !this.rules[ rule.id ] ){
    this.rules[ rule.id ] = Object.assign({},
      rule,
      { source }, //NEED TO FIX THIS LATER TO ACTUALLY BE CORRECT SOURCE
      { statements: [] }
    );
  }

  const addStatement = ( statement ) => {
    const appliedConditions = this.getAppliedConditions( [ statement ], rule.id );
    statement = Object.assign({},
      statement,
      {
        source,
        appliedConditions
      }
    );
    this.rules[ rule.id ].statements.push( statement );
    this.incrementSourceTally( source.id );
  };

  rule.statements.map( addStatement )

});
