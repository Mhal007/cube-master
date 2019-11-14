module.export({someByType:function(){return someByType},findByType:function(){return findByType},isNil:function(){return isNil}});var _find;module.link("lodash/find",{default:function(v){_find=v}},0);var _some;module.link("lodash/some",{default:function(v){_some=v}},1);var Children;module.link('react',{Children:function(v){Children=v}},2);


/**
 * Determine if child by type exists in children.
 * @param {Object} children The children prop of a component.
 * @param {string|Function} type An html tag name string or React component.
 * @returns {Boolean}
 */

var someByType = function someByType(children, type) {
  return _some(Children.toArray(children), {
    type: type
  });
};
/**
 * Find child by type.
 * @param {Object} children The children prop of a component.
 * @param {string|Function} type An html tag name string or React component.
 * @returns {undefined|Object}
 */

var findByType = function findByType(children, type) {
  return _find(Children.toArray(children), {
    type: type
  });
};
/**
 * Tests if children are nil in React and Preact.
 * @param {Object} children The children prop of a component.
 * @returns {Boolean}
 */

var isNil = function isNil(children) {
  return children === null || children === undefined || Array.isArray(children) && children.length === 0;
};