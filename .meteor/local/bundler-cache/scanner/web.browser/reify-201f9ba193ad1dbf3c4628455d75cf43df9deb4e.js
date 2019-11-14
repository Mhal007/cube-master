let _toConsumableArray;module.link("@babel/runtime/helpers/toConsumableArray",{default(v){_toConsumableArray=v}},0);let createFirstPage,createLastItem,createNextItem,createPageFactory,createPrevItem;module.link('./itemFactories',{createFirstPage(v){createFirstPage=v},createLastItem(v){createLastItem=v},createNextItem(v){createNextItem=v},createPageFactory(v){createPageFactory=v},createPrevItem(v){createPrevItem=v}},1);let createComplexRange,createSimpleRange;module.link('./rangeFactories',{createComplexRange(v){createComplexRange=v},createSimpleRange(v){createSimpleRange=v}},2);let isSimplePagination,typifyOptions;module.link('./paginationUtils',{isSimplePagination(v){isSimplePagination=v},typifyOptions(v){typifyOptions=v}},3);



/**
 * @param {object} rawOptions
 * @param {number|string} rawOptions.activePage
 * @param {number|string} rawOptions.boundaryRange Number of always visible pages at the beginning and end.
 * @param {boolean} rawOptions.hideEllipsis Marks if ellipsis should be hidden.
 * @param {number|string} rawOptions.siblingRange Number of always visible pages before and after the current one.
 * @param {number|string} rawOptions.totalPages Total number of pages.
 */

var createPaginationItems = function createPaginationItems(rawOptions) {
  var options = typifyOptions(rawOptions);
  var activePage = options.activePage,
      totalPages = options.totalPages;
  var pageFactory = createPageFactory(activePage);
  var innerRange = isSimplePagination(options) ? createSimpleRange(1, totalPages, pageFactory) : createComplexRange(options, pageFactory);
  return [createFirstPage(), createPrevItem(activePage)].concat(_toConsumableArray(innerRange), [createNextItem(activePage, totalPages), createLastItem(totalPages)]);
};

module.exportDefault(createPaginationItems);