

//getGenerator
module.exports = (function( mPath ){
  const matches = (gPath) => {
    const mPathFields = mPath.split(".");
    const gPathFields = gPath.split(".");
    if( mPathFields.length !== gPathFields.length ) return false;
    return mPathFields.every( (mField, index) => {
      const gField = gPathFields[index] === "*" ? mField : gPathFields[index];
      return gField === mField;
    });
  };
  return this.generators[ Object.keys( this.generators ).filter( gPath => matches( gPath ))[0] || "_default" ];
});
