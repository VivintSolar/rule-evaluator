



module.exports = ( value, template, options ) => {
    const convertToDisplayValue = require('./convertToDisplayValue');
    const { item: templatesMapByAttrName } = template||{};
    return Object.assign({},
        ...Object.keys( value ).map( attrName => ({
            [ attrName ]: convertToDisplayValue( value[attrName], templatesMapByAttrName[attrName], options )
        }))
    )
};
