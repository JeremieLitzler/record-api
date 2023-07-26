const validatorsStr = require('./validators.string');

/**
 * Validates the string a date of format YYYY-MM-DDD
 * @param {string} dateOnlyStr The date as a string
 * @returns True or False
 */
exports.isValidDate = (dateOnlyStr) => {
  if (validatorsStr.isNullNanUndefinedOrEmpty(dateOnlyStr)) {
    return false;
  }
  var regEx = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateOnlyStr.match(regEx)) return false; // Invalid format
  var d = new Date(dateOnlyStr);
  var dNum = d.getTime();
  if (!dNum && dNum !== 0) return false; // NaN value, Invalid date
  return d.toISOString().slice(0, 10) === dateOnlyStr;
};
