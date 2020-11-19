
const documents = require('./documents');

module.exports = Object.assign({},
    ...documents.map( document => ({
        [ document.name ]: document
    }))
);

