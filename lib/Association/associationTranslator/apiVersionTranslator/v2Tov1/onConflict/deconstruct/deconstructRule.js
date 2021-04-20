
const deconstructStatement = require('./deconstructStatement');

const settleAppliedConflicts = require('./settleAppliedConflicts');

const settleGlobalConflicts = require('./settleGlobalConflicts');

const flatten = (array) => {
  if(Array.isArray(array) && array.every(item => !!item)){
    let flat = [];
    array.map( a => {
      if(Array.isArray(a)) return flat = [...flat,...a];
      flat = [ ...flat, a]
    });
    return flat;
  }
};


module.exports = ({
  name,
  id,
  statements,
  template,
  definition
}) => {

  statements = flatten(
    statements.map( statement => {
      return deconstructStatement( Object.assign({}, template, statement) )
    })
  );



  // statements =  statements ? settleAppliedConflicts({statements, definition}) : statements;

  statements = statements ? settleGlobalConflicts({statements, definition}) : statements;

  return {
    name,
    id,
    statements
  }


};
