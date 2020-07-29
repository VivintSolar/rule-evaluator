
const convertToDisplayValue = {
    defPointSetbacks: [
        JSON.stringify({
            serviceLine: 36,
            side: 8,
            chimney: 236.2206,
            newSolarArray: 4,
            eave: 8,
            obstructions: 3,
            mechanicalUnits: 36,
            skyLights: 18,
            hip: 8,
            existingSolarArray: 4,
            sidesAgainstWalls: 8,
            valley: 8,
            ridge: 18,
            inflection: 314.9608
        })
    ]
};

const deconstruct = {
    measurements: [
        JSON.stringify([ { value: 236.2206, units: 'in' } ])
    ]
}

module.exports = {
    convertToDisplayValue,
    deconstruct
}
