

// getLocation
module.exports = function( path ){
   if( typeof path === 'string' ) return path.split(".");
   else if( Array.isArray( path ) ) return path;
   throw new Error(`Unsupported Path Type: ${ typeof path }. Path must be of type String or Array`);
};
