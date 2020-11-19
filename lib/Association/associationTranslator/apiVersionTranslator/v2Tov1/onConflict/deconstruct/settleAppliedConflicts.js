

module.exports = ({
  statements,
  definition
}) => {

  const { dataType, onConflict } = definition.template;

  const settleConflicts = {
    remove:( ) => {
      if( dataType === 'ordered list' ){

        let toRemove = [];

        statements.map( statement => {
          if( statement.onConflict === 'remove' ) {
            toRemove.push(statement.value);
          }
        });

        statements = statements.filter(statement => {
          return !toRemove.includes(statement.value)
        })
      }
    }
  };

  let appliedConflict;

  statements.map( statement => {
    if( statement.onConflict && statement.onConflict !== onConflict ) {
      appliedConflict = statement;
    }
  });

  if( appliedConflict && settleConflicts[ appliedConflict.onConflict ] ) {
    settleConflicts[ appliedConflict.onConflict ]();
  }

  return statements;

};
