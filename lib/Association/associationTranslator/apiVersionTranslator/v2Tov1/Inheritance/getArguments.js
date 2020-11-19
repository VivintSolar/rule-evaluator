


// getArguments
module.exports = (function( ahj ){

  let verifiedPlace;
  this.documents.map( document => {
    if ( document.verifiedPlace ){
      verifiedPlace = document.verifiedPlace
    }
  });

  return Object.assign({}, {
      place: this.document.place,
      verifiedPlace,
      override: this.document.override ? true: false
    }, ahj
  );
});
