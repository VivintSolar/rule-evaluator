
const definitions = require('./definitions');
const ahjDocuments = require('./ahjDocuments');

const authorityInfo = {
    serviceId: "1111111",
    latitude: 27.7806527,
    longitude: -82.6913532,
    City: "Kenny City",
    place: "incorporatedPlace"
};



module.exports = {
    authorityInfo,
    documents: [
        ...ahjDocuments,
        ...definitions
    ],
    apiVersion: 'v2'
}
