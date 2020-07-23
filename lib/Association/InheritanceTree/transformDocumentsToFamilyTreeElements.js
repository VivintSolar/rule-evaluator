
// static transformDocumentsToFamilyTreeElements
module.exports = ( documents ) =>{
  return documents.map( ({ id, name, type, state, inherit }) => {
    return {
      id,
      name,
      type,
      state,
      children: ( !(inherit && inherit.length > 0) ) ? undefined : inherit.map(({ source }) => source.id)
    };
  });
};
