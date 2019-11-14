module.export({getChildMapping:function(){return getChildMapping},mergeChildMappings:function(){return mergeChildMappings}});var _slicedToArray;module.link("@babel/runtime/helpers/slicedToArray",{default:function(v){_slicedToArray=v}},0);var _has;module.link("lodash/has",{default:function(v){_has=v}},1);var _keys;module.link("lodash/keys",{default:function(v){_keys=v}},2);var _forEach;module.link("lodash/forEach",{default:function(v){_forEach=v}},3);var _filter;module.link("lodash/filter",{default:function(v){_filter=v}},4);var _keyBy;module.link("lodash/keyBy",{default:function(v){_keyBy=v}},5);var Children,isValidElement;module.link('react',{Children:function(v){Children=v},isValidElement:function(v){isValidElement=v}},6);






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