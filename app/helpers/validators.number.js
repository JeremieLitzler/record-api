const validatorsStr = require('./validators.string');

exports.isNumeric = (value) => {
  if (validatorsStr.isNullNanUndefinedOrEmpty(value)) {
    return false;
  }
  const isNumericWithDot = /^-?\d+(\.\d+)?$/.test(value);
  const isNumericWithComma = /^-?\d+(\,\d+)?$/.test(value);

  return isNumericWithDot || isNumericWithComma;
};
