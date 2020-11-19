



module.exports = {
  City:{
    inherit: "sibling",
    siblings:["County"],
    isNeededArg: [
      {
        place: 'censusDesignatedPlace',
        verifiedPlace: 'incorporatedPlace'
      },
      {
        place: 'incorporatedPlace',
        not:{
          verifiedPlace: 'censusDesignatedPlace'
        }
      },
      {
        verifiedPlace: 'merge'
      },
      {
        override: true
      }
    ]
  },
  County:{
    inherit:"default",
    siblings:["City"],
    isNeededArg: [
      {
        place: 'incorporatedPlace',
        verifiedPlace: 'censusDesignatedPlace'
      },
      {
        place: 'incorporatedPlace',
        verifiedPlace: 'incorporatedPlaceMerge'
      },
      {
        place: 'censusDesignatedPlace',
        not:{
          verifiedPlace: 'incorporatedPlace'
        }
      },
      {
        verifiedPlace: 'merge'
      },
      {
        override: true
      }
    ]
  }
};
