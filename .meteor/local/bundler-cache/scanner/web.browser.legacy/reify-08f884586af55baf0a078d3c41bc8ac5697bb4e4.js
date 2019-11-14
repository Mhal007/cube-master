/**
 * Normalizes the offset value.
 * @param {number|array} value The value to normalize.
 * @returns {number}
 */
module.exportDefault(function (value) {
  return typeof value === 'number' || typeof value === 'string' ? [value, value] : value;
});