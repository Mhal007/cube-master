/**
 * Normalizes the duration of a transition.
 * @param {number|object} duration The value to normalize.
 * @param {'hide'|'show'} type The type of transition.
 * @returns {number}
 */
module.exportDefault(function (duration, type) {
  return typeof duration === 'number' || typeof duration === 'string' ? duration : duration[type];
});