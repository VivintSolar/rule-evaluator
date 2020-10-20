
module.exports = ({
  onConflict,
  value,
  condition,
  description,
  dataType,
  source,
  item,
  items
}) => {


  const reconstructStatement = (val) => {
    return Object.assign(
      condition ? {condition} : {},
      description ? {description} : {},
      {
        value: val || value,
        onConflict,
        source
      }
    )
  };

  const deconstruct = {
    object:() => {
      return Object.keys( value ).map( key => {
        return reconstructStatement( { [key]: value[key] } )
      })
    },
    'ordered list':() => {
      return value.map( itemId => {
        return reconstructStatement( itemId )
      })
    },
    collection:() => {
      if( value && value.length > 0){
        return value.map(reconstructStatement)
      }
    }
  };

  if(deconstruct[dataType]) return deconstruct[dataType]();


  return reconstructStatement();

};
