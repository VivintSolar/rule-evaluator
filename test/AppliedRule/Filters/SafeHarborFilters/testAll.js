
const SafeHarborModules = require('./SafeHarborModules');
const SafeHarborInverters = require('./SafeHarborInverters');

module.exports = () => {
    SafeHarborModules();
    SafeHarborInverters();
}
