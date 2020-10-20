
const sortByValue = (toSort, by) => {
  return toSort.sort((a,b) => {
    return by.indexOf(a.value) > by.indexOf(b.value) ? -1 : 1;
  })
};

module.exports = ({
  statements,
  definition
}) => {

  const standardType = ((statements[0]||{}).source||{}).type;
  if( !statements || statements.length === 0 ){
    throw new Error('Empty Statements! while settling global conflicts.');
  }

  const {
    onConflict,
    dataType,
    items
  } = definition.template;

  const conflictMap = {
    standard:() => {
      return statements.filter( statement => {
        return standardType === statement.source.type
      });
    },
    union:() => {
      return statements;
    }
  };

  if( dataType === 'ordered list'){
    const orderBy = items.map( ({id}) => (id));
    statements = sortByValue(statements, orderBy)
  }

  if( !onConflict || !conflictMap[onConflict] ) {
    return conflictMap.standard();
  }

  return conflictMap[onConflict]();

};
