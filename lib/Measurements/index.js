const { roundTo } = require('../utilities/util');

const supported = [
  "m",
  "ft",
  "in"
];

const deconstruct = (value, units, displayAs) => {
  if( displayAs && displayAs !== units ){
    const primaryDecPlaces = (MC[displayAs]||{}).roundTo;
    value = convert( value, displayAs, units, primaryDecPlaces );
  }
  if( MC[displayAs] && value !== undefined  ){
    const remainderObj = getRemainderChildDistance(value, displayAs);
    if( remainderObj ) return [ { value: parseInt(value), units: displayAs }, remainderObj ];
  }
  return [ { value, units: displayAs } ];
};

const combineValues = ( values, convertToUnits ) => {
  if( values.every( item => isNaN(item.value) ) ) return undefined;
  const parseValues = () => {
    const data = {};
    const multiple = values.length > 1;
    if( values.length > 0 ){
      data.primaryValue = (values[0]||{}).value;
      data.primaryUnits = (values[0]||{}).units;
      data.primaryDecPlaces = (MC[data.primaryUnits]||{}).roundTo;
    }
    if( multiple ){
      data.secondaryValue = (values[1]||{}).value;
      data.secondaryUnits = (values[1]||{}).units;
      data.secondaryRemainder = `${data.secondaryValue||""}`.split('.')[1];
      data.secondaryCap = (MC[data.secondaryUnits]||{})[data.primaryUnits];
      data.secondaryDecPlaces = (MC[data.secondaryUnits]||{}).secondaryRoundTo;
    }
    return data;
  }
  if(values.length > 0){
    const {
      primaryValue,
      primaryUnits,
      primaryDecPlaces,
      secondaryValue,
      secondaryUnits,
      secondaryRemainder,
      secondaryCap,
      secondaryDecPlaces
    } = parseValues();

    const getCombined = () => {
      let combined = 0;
      combined += primaryValue;
      if( secondaryValue !== undefined ){
        const secondaryConverted = convert(secondaryValue, primaryUnits, secondaryUnits);
        combined += secondaryConverted;
      }
      if( primaryDecPlaces ) return roundTo( combined, primaryDecPlaces );
      return combined;
    }



    if( ( secondaryDecPlaces && secondaryRemainder && `${secondaryRemainder}`.length > secondaryDecPlaces ) || secondaryCap <= secondaryValue){
      return false;
    }
    const combined = getCombined();
    return {
      value: combined,
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
  const result = combineValues(values, primaryUnits);

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
    const secondaryRoundTo = (MC[childUnits]||{}).secondaryRoundTo;
    if( value !== undefined ){
      const valueArray = (value + "").split(".");
      const remainder = valueArray[1] !== undefined ? parseFloat("." + valueArray[1]) : valueArray[1];
      const convertedResult = convert( remainder, childUnits, parentUnits, secondaryRoundTo );
      return {
        value: convertedResult,
        units: childUnits
      }
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

const convert = (value, to, from, roundToDecimalPlaces) => {
  if( value !== undefined ){
    if( to === from ) return value;
    const getConvertedValue = () => {
      const multiplier = (multipliers[to]||{})[from];
      if( multiplier !== undefined){
        return value * multiplier;
      }
      const customConverter = ((MC[to]||{}).from||{})[from];
      if( customConverter ){
        return customConverter(value)
      }
    }
    const convertedValue = getConvertedValue();
    if( roundToDecimalPlaces !== undefined ){
      return roundTo( convertedValue, roundToDecimalPlaces)
    }
    return convertedValue;

    throw new Error(`Conversion from: ${ from } to: ${to} Not Found!`)
  }
};

const changeByUnits = ( updateObjectByUnits, value, definition ) => {
  const { displayUnitsAs, units } = definition||{};
  if(!displayUnitsAs && updateObjectByUnits[units] !== undefined){
    return updateObjectByUnits[ units ];
  }
  if( displayUnitsAs ){

  }
}

const reconstruct = (value, from, to) => {
  const values = deconstruct( value, from, to );
  return construct( values, to );

}

// MeasurementConverter
const MC = {
  reconstruct,
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
    secondaryRoundTo: 3,
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
