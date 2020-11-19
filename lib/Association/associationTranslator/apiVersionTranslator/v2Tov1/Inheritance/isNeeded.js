


const identifiers = {
  NOT: 'not'
};

const compareAttributes = (attribute, argument, compareObj) => {
  switch ( attribute ){
    case identifiers.NOT: {
      return Object.keys( argument[attribute] ).every( notArgAttr => (
        argument[attribute][notArgAttr] !== compareObj[ notArgAttr ]
      ));
    }
    default:
      return compareObj[ attribute ] === argument[attribute];
  }
};

const checkIfNeeded = (isNeededArg, args) => (
  isNeededArg.some( argument => (
    Object.keys( argument ).every( argAttr => (
      compareAttributes(argAttr, argument, args)
    ))
  ))
);

// isNeeded
module.exports = (function( ahj ){

  const { rules, id } = ahj || {};

  let type = (ahj||{}).type;

  if( !rules ) return false;

  const { isNeededArg } = this.settings[ type ]||{};

  if( !isNeededArg ) {
    return true;
  }

  return checkIfNeeded( isNeededArg, this.getArguments( ahj ) );
});
