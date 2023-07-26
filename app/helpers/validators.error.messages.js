const DATE_FORMAT = 'YYYY-MM-DD';

exports.DATE_FORMAT = DATE_FORMAT;

exports.ERROR_MESSAGES = {
  IncorrectDateValue: `must be a date of format ${DATE_FORMAT}`,
  IncorrectNumericValue: `must be a valid number like "1", "1.00", etc...`,
  CannotBeEmpty: `is required and cannot equal to undefined, null or NaN`,
};
