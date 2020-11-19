

const Default = require('./Default');
const DukeFL = require('./DukeFL');
const FL01TampaBaySolar = require('./FL-01 Tampa Bay Solar');
const Florida = require('./Florida');
const NationalElectricalCode = require('./National Electrical Code');
const StPetersburg = require('./St Petersburg');

module.exports = [
    Default,
    DukeFL,
    FL01TampaBaySolar,
    Florida,
    NationalElectricalCode,
    StPetersburg
].map( document => {
    Object.keys( document.rules ).forEach( ruleId => {
        const appliedRuleClone = JSON.parse( JSON.stringify( document.rules[ ruleId ] ) );
        const unionRuleId = `${ ruleId }Union`;
        document.rules[ unionRuleId ] = appliedRuleClone;
    })
    return document;
})
