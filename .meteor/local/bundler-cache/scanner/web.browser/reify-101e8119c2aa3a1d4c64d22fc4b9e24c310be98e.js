module.export({getChildMapping:()=>getChildMapping,mergeChildMappings:()=>mergeChildMappings});let _slicedToArray;module.link("@babel/runtime/helpers/slicedToArray",{default(v){_slicedToArray=v}},0);let _has;module.link("lodash/has",{default(v){_has=v}},1);let _keys;module.link("lodash/keys",{default(v){_keys=v}},2);let _forEach;module.link("lodash/forEach",{default(v){_forEach=v}},3);let _filter;module.link("lodash/filter",{default(v){_filter=v}},4);let _keyBy;module.link("lodash/keyBy",{default(v){_keyBy=v}},5);let Children,isValidElement;module.link('react',{Children(v){Children=v},isValidElement(v){isValidElement=v}},6);






/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {object} children Element's children
 * @return {object} Mapping of key to child
 */

var getChildMapping = function getChildMapping(children) {
  return _keyBy(_filter(Children.toArray(children), isValidElement), 'key');
};

var getPendingKeys = function getPendingKeys(prev, next) {
  var nextKeysPending = {};
  var pendingKeys = [];

  _forEach(_keys(prev), function (prevKey) {
    if (!_has(next, prevKey)) {
      pendingKeys.push(prevKey);
      return;
    }

    if (pendingKeys.length) {
      nextKeysPending[prevKey] = pendingKeys;
      pendingKeys = [];
    }
  });

  return [nextKeysPending, pendingKeys];
};

var getValue = function getValue(key, prev, next) {
  return _has(next, key) ? next[key] : prev[key];
};
/**
 * When you're adding or removing children some may be added or removed in the same render pass. We want to show *both*
 * since we want to simultaneously animate elements in and out. This function takes a previous set of keys and a new set
 * of keys and merges them with its best guess of the correct ordering.
 *
 * @param {object} prev Prev children as returned from `getChildMapping()`
 * @param {object} next Next children as returned from `getChildMapping()`
 * @return {object} A key set that contains all keys in `prev` and all keys in `next` in a reasonable order
 */


var mergeChildMappings = function mergeChildMappings() {
  var prev = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var childMapping = {};

  var _getPendingKeys = getPendingKeys(prev, next),
      _getPendingKeys2 = _slicedToArray(_getPendingKeys, 2),
      nextKeysPending = _getPendingKeys2[0],
      pendingKeys = _getPendingKeys2[1];

  _forEach(_keys(next), function (nextKey) {
    if (_has(nextKeysPending, nextKey)) {
      _forEach(nextKeysPending[nextKey], function (pendingKey) {
        childMapping[pendingKey] = getValue(pendingKey, prev, next);
      });
    }

    childMapping[nextKey] = getValue(nextKey, prev, next);
  });

  _forEach(pendingKeys, function (pendingKey) {
    childMapping[pendingKey] = getValue(pendingKey, prev, next);
  });

  return childMapping;
};