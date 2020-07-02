

//deep
module.exports = (function( base, fill, location ){
  const shallowMerge = Object.assign({}, base, fill );
  const fields = Object.keys( shallowMerge );
  const _deep = function(field){
    const path = `${ location }.${ field }`;
    if( typeof shallowMerge[field] === 'object' && !Array.isArray(shallowMerge[field]) ){
      return this._deepMerge(base[field], fill[field]);
    }
    const generator = this.getGenerator( path );
    if( fill[ field ] !== undefined ) return fill[ field ];
    if( generator ) return generator({ base:this.base, fill:this.fill }, { base, fill });
    if( base[ field ] !== undefined ) return base[ field ];
  }.bind(this);
  return Object.assign({},
    ...fields.map( field => {
      return { [ field ]: _deep( field ) };
    })
  );
});
