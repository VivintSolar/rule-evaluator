
const booleanRule = require('./booleanRule');
const enumRule = require('./enumRule');
const formulaRule = require('./formulaRule');
const numberRule = require('./numberRule');
const objectRule = require('./objectRule');
const orderedListRule = require('./orderedListRule');
const stringRule = require('./stringRule');
const templateStringRule = require('./templateStringRule');

const rulesIndex = {
    booleanRule,
    enumRule,
    formulaRule,
    numberRule,
    objectRule,
    orderedListRule,
    stringRule,
    templateStringRule
};

Object.values( rulesIndex ).forEach( ruleDefinition => {
    const id = `${ ruleDefinition.id }Union`;
    const name = `${ ruleDefinition.name } Union`;
    const clonedDefinition = JSON.parse( JSON.stringify( ruleDefinition ) );
    clonedDefinition.id = id;
    clonedDefinition.name = name;
    clonedDefinition.description = name;
    clonedDefinition.template.onConflict = "union";
    rulesIndex[ id ] = clonedDefinition;
})

module.exports = rulesIndex
