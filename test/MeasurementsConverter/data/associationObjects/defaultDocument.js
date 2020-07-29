const documents = require('../documents');

const {
    defaultDocument,
    defPointSetbacks,
    roofType,
    structureType
} = documents;



module.exports = {
    ahj: defaultDocument,
    definitions:{
        rules:{
            defPointSetbacks
        },
        conditions:{
            roofType,
            structureType
        }
    }
}
