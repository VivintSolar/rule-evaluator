const {
    defaultDocument,
    defPointSetbacks,
    roofType,
    structureType
} = require('./documents');



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
};
