const documents = require('./documents');
const parameters = require('./parameters');
const expected = require('./expected');

const {
    defaultDocument,
    defPointSetbacks,
    roofType,
    structureType
} = documents;



module.exports = {
    documents,
    expected,
    parameters,
    associationObject: {
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
};
