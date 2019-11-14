var _isEqual;module.link("lodash/isEqual",{default:function(v){_isEqual=v}},0);var _has;module.link("lodash/has",{default:function(v){_has=v}},1);var _transform;module.link("lodash/transform",{default:function(v){_transform=v}},2);



/**
 * Naive and inefficient object difference, intended for development / debugging use only.
 * Deleted keys are shown as [DELETED].
 * @param {{}} source The source object
 * @param {{}} target The target object.
 * @returns {{}} A new object containing new/modified/deleted keys.
 * @example
 * import { objectDiff } from 'src/lib'
 *
 * const a = { key: 'val', foo: 'bar' }
 * const b = { key: 'val', foo: 'baz' }
 *
 * objectDiff(a, b)
 * //=> { foo: 'baz' }
 */
module.exportDefault(function (source, target) {
  return _transform(source, function (res, val, key) {
    // deleted keys
    if (!_has(target, key)) res[key] = '[DELETED]'; // new keys / changed values
    // Note, we tolerate isEqual here as this is a dev only utility and not included in production code
    else if (!_isEqual(val, target[key])) res[key] = target[key];
  }, {});
});