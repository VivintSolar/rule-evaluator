const evaluate = require('./evaluation/evaluate').evaluate;

/**
 * Evaluates a set of Rules
 * @param {Object[]} data
 * @param {Object} inputObject
 * @return {string}
 */
module.exports = function(data, inputObject) {
    return evaluate(data, inputObject);
};