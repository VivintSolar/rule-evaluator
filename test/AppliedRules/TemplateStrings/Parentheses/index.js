const RuleEvaluator = require('../../../../index');
const assert = require('assert');
const associationObject = require('./associationObject');

const expected = JSON.stringify({
    templateString: 'SYSTEM SIZE - {systemSizeDc}kW DC | {cecAcSystemSize}kW CEC AC MODULE TYPE & AMOUNT - ({totalModuleQuantity}) {moduleManufacturer} {moduleModel} MODULE DIMENSIONS: (L/W/H) INVERTER: ({totalInverterQuantity}) {inverterManufacturer} {inverterModel1} PV BATTERY STORAGE - (1) LG CHEM RESU10H WITH {batteryDcSystemSize}kW DC | {batteryStorageCapacity}kWh PV STORAGE CAPACITY INTERCONNECTION METHOD (GRID-TIED): {interconnectionMethod} ',
    exceptions: null,
    conditions: [ { left: 'batteryDcSystemSize', operator: '>', right: 0 } ],
    value: 'SYSTEM SIZE - 1234kW DC | 4321kW CEC AC MODULE TYPE & AMOUNT - (33) MODULE MANUFACTURER VALUE MODULE MODEL VALUE MODULE DIMENSIONS: (L/W/H) INVERTER: (44) Solar Edge INVERTER MODEL 1 PV BATTERY STORAGE - (1) LG CHEM RESU10H WITH 11kW DC | 22kWh PV STORAGE CAPACITY INTERCONNECTION METHOD (GRID-TIED): Load Breaker ',
    errors: [ 'Required Condition Input Missing; Batteries Designed' ],
    id: 'pvSystemInformation'
});

const testPvSystemInformation = () => {
    const ruleEvaluator = new RuleEvaluator( associationObject );
    const conditions = {
        systemSizeDc: 1234,
        cecAcSystemSize: 4321,
        inverterManufacturer: "solarEdge",
        interconnectionMethod: "loadBreaker",
        batteryDcSystemSize: 11,
        batteryStorageCapacity: 22,
        moduleManufacturer: "MODULE MANUFACTURER VALUE",
        moduleModel: "MODULE MODEL VALUE",
        inverterModel1: "INVERTER MODEL 1",
        inverterModel2: "INVERTER MODEL 2",
        inverterModel3: "INVERTER MODEL 3",
        totalModuleQuantity: 33,
        totalInverterQuantity: 44,
        moduleLength: 55,
        moduleWidth: 66,
        moduleHeight: 77
    };
    const ruleId = 'pvSystemInformation';

    const evaluated = ruleEvaluator.evaluate( ruleId, conditions );
    assert.equal( expected, JSON.stringify(evaluated) );
    console.log('AppliedRules -- Template Strings -- Parentheses --  PV System Information ---> Success!!!!!!!!!');
};


module.exports = () => {
    testPvSystemInformation();
};
