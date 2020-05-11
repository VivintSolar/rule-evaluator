const { roundTo } = require('../utilities/util');

const supported = [
  "m",
  "ft",
  "in"
];

const deconstruct = (value, units, displayAs) => {
  if( displayAs && displayAs !== units ){
    value = convert( value, displayAs, units );
    units = displayAs;
  }
  if( MC[displayAs] ){
    const remainderObj = getRemainderChildDistance(value, units);
    if( value !== undefined ) value = parseInt(value);
    return [ { value, units }, remainderObj ];
  }
  return [ { value, units } ];
};

const combineValues = values => {
  if( values.every( item => isNaN(item.value) ) ) return undefined;
  if(values.length > 1){
    const primaryValue = values[0].value;
    const primaryUnits = values[0].units;
    const secondaryValue = values[1].value;
    const secondaryUnits = values[1].units;
    const secondaryRemainder = `${secondaryValue||""}`.split('.')[1];
    const secondaryCap = (MC[secondaryUnits]||{})[primaryUnits];
    const decPlaces = (MC[secondaryUnits]||{}).roundTo;

    if( ( decPlaces && secondaryRemainder && `${secondaryRemainder}`.length > decPlaces ) || secondaryCap <= secondaryValue){
      return false;
    }
    const secondaryConverted = convert(secondaryValue, primaryUnits, secondaryUnits);
    return {
      value: (primaryValue||0) + (secondaryConverted||0),
      units: primaryUnits
    }

  } else {
    return values[0]
  }
};

const getConverter = (desiredUnits, currentUnits) => {
  let converterFunc = ((MC[ desiredUnits ]||{}).from||{})[ currentUnits ];
  if( !converterFunc ) {
    converterFunc = ((MC[ currentUnits ]||{}).to||{})[ desiredUnits ]
  }
  if( !converterFunc ) {
    throw new Error(`Conversion from: ${ desiredUnits } to: ${currentUnits} Not Found!`)
  }
  return converterFunc;
};

const construct = (values, primaryUnits) => {
  const result = combineValues(values);

  if( result ){
    let value = result.value;
    if(value !== undefined && result.units !== primaryUnits ){
      value = convert(value, primaryUnits, result.units);
    }
    return value;
  }
  return result;

};

const getRemainderChildDistance = (value, parentUnits) => {
  const childUnits = (MC[parentUnits]||{}).child;
  if( childUnits ){
    let val;
    if( value !== undefined ){
      const decPlaces = (MC[childUnits]||{}).roundTo;
      const valueArray = (value + "").split(".");
      const remainder = valueArray[1] !== undefined ? parseFloat("." + valueArray[1]) : valueArray[1];
      const convertedResult = convert( remainder, childUnits, parentUnits );
      if( !isNaN(convertedResult) ){
        val = decPlaces ? roundTo(convertedResult, decPlaces) : convertedResult;
      }
    }

    return {
      value: val,
      units: childUnits
    }
  }
};

const formatText = (values) => {
  const { value, units } = values[0]||{};
  const secondary = values[1];
  if( secondary ){
    return `${value} ${units}, ${secondary.value} ${secondary.units}`;
  }
  return `${value} ${units}.`;
};

const meterTN = 3.28084;


// TO.FROM
const multipliers = {
  in:{
    ft: 12,
    m: 39.3701
  },
  ft: {
    in: ( 1 / 12 ),
    m: 3.28084
  },
  m:{
    in: (1 / 39.3701),
    ft: ( 1 / 3.28084 )
  }
};

const convert = (value, to, from) => {
  if( value !== undefined ){
    const multiplier = (multipliers[to]||{})[from];
    if( multiplier !== undefined){
      return value * multiplier;
    }
    const customConverter = (MC[from]||{})[to].convert;
    if(customConverter){
      return customConverter(value)
    }
    throw new Error(`Conversion from: ${ from } to: ${to} Not Found!`)
  }
};

// MeasurementConverter
const MC = {
  deconstruct,
  formatText,
  construct,
  convert,
  multipliers,
  supported,
  ft: {
    child: 'in',
    in: ( 1 / 12 ),
    from: {
      m: m => m * meterTN,
      in: inch =>  (inch / 12)
    },
    to: {
      m: ft =>  ft / meterTN,
      in: ft => ft * 12
    },
    saveAs: 'm'
  },
  in: {
    roundTo: 3,
    parent: 'ft',
    ft: 12,
    from: {
      m: m => m * 39.3701,
      ft: ft => ft * 12
    },
    to: {
      m: inch =>  inch / 39.3701,
      ft: inch =>  inch / 12
    },
    saveAs: 'm'
  },
  m: {
    from: {
      in: inch =>  inch / 39.3701,
      ft: ft =>  ft / meterTN
    },
    to: {
      in: m => m * 39.3701,
      ft: m => m * meterTN
    }
  }
};

module.exports = MC;
