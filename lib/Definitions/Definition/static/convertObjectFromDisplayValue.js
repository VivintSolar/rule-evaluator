

const convertFromDisplayValue = require('./convertFromDisplayValue');

module.exports = ( value, template ) => {
    const { item: templatesMapByAttrName } = template||{};
    return Object.assign({},
        ...Object.keys( value ).map( attrName => ({
            [ attrName ]: convertFromDisplayValue( value[attrName], templatesMapByAttrName[attrName] )
        }))
    )
};
