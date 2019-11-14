module.export({createSimpleRange:function(){return createSimpleRange},createComplexRange:function(){return createComplexRange}});var _toConsumableArray;module.link("@babel/runtime/helpers/toConsumableArray",{default:function(v){_toConsumableArray=v}},0);var _range;module.link("lodash/range",{default:function(v){_range=v}},1);var _map;module.link("lodash/map",{default:function(v){_map=v}},2);var createInnerPrefix,createInnerSuffix;module.link('./suffixFactories',{createInnerPrefix:function(v){createInnerPrefix=v},createInnerSuffix:function(v){createInnerSuffix=v}},3);



var createSimpleRange = function createSimpleRange(start, end, pageFactory) {
  return _map(_range(start, end + 1), pageFactory);
};
var createComplexRange = function createComplexRange(options, pageFactory) {
  var activePage = options.activePage,
      boundaryRange = options.boundaryRange,
      hideEllipsis = options.hideEllipsis,
      siblingRange = options.siblingRange,
      totalPages = options.totalPages;
  var ellipsisSize = hideEllipsis ? 0 : 1;
  var firstGroupEnd = boundaryRange;
  var firstGroup = createSimpleRange(1, firstGroupEnd, pageFactory);
  var lastGroupStart = totalPages + 1 - boundaryRange;
  var lastGroup = createSimpleRange(lastGroupStart, totalPages, pageFactory);
  var innerGroupStart = Math.min(Math.max(activePage - siblingRange, firstGroupEnd + ellipsisSize + 1), lastGroupStart - ellipsisSize - 2 * siblingRange - 1);
  var innerGroupEnd = innerGroupStart + 2 * siblingRange;
  var innerGroup = createSimpleRange(innerGroupStart, innerGroupEnd, pageFactory);
  return [].concat(_toConsumableArray(firstGroup), [!hideEllipsis && createInnerPrefix(firstGroupEnd, innerGroupStart, pageFactory)], _toConsumableArray(innerGroup), [!hideEllipsis && createInnerSuffix(innerGroupEnd, lastGroupStart, pageFactory)], _toConsumableArray(lastGroup)).filter(Boolean);
};