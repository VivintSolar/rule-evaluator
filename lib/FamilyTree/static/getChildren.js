const getValue = require('./getValue');

// getChildren
module.exports = function( element, options ){
   const { aliases } = options;
   return getValue( element, aliases.children );
};
