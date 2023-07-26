exports.isNullNanUndefinedOrEmpty = (strValue) => {
  if (strValue === '') return true;
  if (strValue === null) return true;
  if (strValue === undefined) return true;
  if (strValue === NaN) return true;
};
