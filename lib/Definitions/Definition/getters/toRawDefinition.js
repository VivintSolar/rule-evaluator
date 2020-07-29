const { pick } = require('../../../utilities/util')

// definition.toRawDefinition
module.exports = (function(){
    if( !this.definitionAttributes ) throw new Error("No definition Attributes found!");
    return pick( this, this.definitionAttributes);
});
