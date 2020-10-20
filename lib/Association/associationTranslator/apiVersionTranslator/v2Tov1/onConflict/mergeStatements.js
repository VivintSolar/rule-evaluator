

const createMap = (items) => {
  return Object.assign({},
    ...items.map(item=>{
      return {[item.id]:item}
    })
  )
};

const unique = (collection) => {
  let uniqueIds = [];
  return collection.filter(item=>{
      const id = Object.keys(item).map(key=>(item[key])).join('');
      const isUnique = !uniqueIds.includes(id);
      if(isUnique){
        return uniqueIds.push(id);
      }
    })
};

const swapReferenceIds = ( value, definition ) => {

  let itemsMap;
  const { dataType, items } = definition.template;

  if( items ) itemsMap = createMap(items);

  if( dataType === 'ordered list' ){
    value = value.map(id=>{
      return itemsMap[id]
    })
  }

  if( dataType === 'enum' ){
    value = itemsMap[value].name;
  }

  return value;

};

module.exports = ({
  statements,
  definition,
  swapReferences
}) => {

  if( statements.length < 1 ) return { value:null };

  let obj,
    val,
    conditions,
    description,
    source,
    array,
    names;

  const compressConditions = () => {
    let unique = [];
    conditions = conditions.filter(({left,operator,right})=>{
      const conditionString = `${left}${operator}${right}`;
      const isUnique = !unique.includes(conditionString);
      if(isUnique){
        return unique.push(conditionString);
      }
    })
  };

  const { dataType, onConflict } = definition.template;

  if( dataType === 'object' ) obj = {};

  if( ['collection','ordered list'].includes(dataType) ) {
    names = [];
    array = [];
  }

  statements.reverse().map( statement => {

    const { value, condition } = statement;

    if( condition ) conditions = [ ...( conditions || [] ), ...condition ];

    if( obj ) Object.assign(obj, value);

    if( dataType === 'ordered list' && !array.includes(value) )  array.push(value);

    if( dataType === 'collection' && !names.includes(value.name) ) {
      names.push(value.names);
      array.push(value);
    }

    if( dataType === 'string' && onConflict === 'union' && val ) {
      val += `\n${value}`;
    } else {
      val = value;
    }

    description = statement.description;

    source = [ ...( source || [] ), statement.source ];

  });

  let mergedValue = obj || array || val;
  if(swapReferences) mergedValue = swapReferenceIds( mergedValue, definition);

  if(conditions) conditions = unique(conditions);

  source = unique(source);

  return Object.assign(
    description ? { description } : {},
    conditions ? { conditions } : {},
    {
      source,
      value: mergedValue
    }
  );

};
