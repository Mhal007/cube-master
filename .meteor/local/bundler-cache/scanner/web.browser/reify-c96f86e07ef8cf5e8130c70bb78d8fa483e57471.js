module.export({createSimpleRange:()=>createSimpleRange,createComplexRange:()=>createComplexRange});let _toConsumableArray;module.link("@babel/runtime/helpers/toConsumableArray",{default(v){_toConsumableArray=v}},0);let _range;module.link("lodash/range",{default(v){_range=v}},1);let _map;module.link("lodash/map",{default(v){_map=v}},2);let createInnerPrefix,createInnerSuffix;module.link('./suffixFactories',{createInnerPrefix(v){createInnerPrefix=v},createInnerSuffix(v){createInnerSuffix=v}},3);



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