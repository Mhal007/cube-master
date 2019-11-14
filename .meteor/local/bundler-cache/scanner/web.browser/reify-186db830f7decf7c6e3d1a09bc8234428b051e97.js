module.export({default:()=>Pagination});let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let _objectSpread;module.link("@babel/runtime/helpers/objectSpread",{default(v){_objectSpread=v}},1);let _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default(v){_classCallCheck=v}},2);let _createClass;module.link("@babel/runtime/helpers/createClass",{default(v){_createClass=v}},3);let _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default(v){_possibleConstructorReturn=v}},4);let _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default(v){_getPrototypeOf=v}},5);let _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default(v){_assertThisInitialized=v}},6);let _inherits;module.link("@babel/runtime/helpers/inherits",{default(v){_inherits=v}},7);let _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default(v){_defineProperty=v}},8);let _map;module.link("lodash/map",{default(v){_map=v}},9);let _isNil;module.link("lodash/isNil",{default(v){_isNil=v}},10);let _invoke;module.link("lodash/invoke",{default(v){_invoke=v}},11);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},12);let React;module.link('react',{default(v){React=v}},13);let Component,createPaginationItems,customPropTypes,getUnhandledProps;module.link('../../lib',{AutoControlledComponent(v){Component=v},createPaginationItems(v){createPaginationItems=v},customPropTypes(v){customPropTypes=v},getUnhandledProps(v){getUnhandledProps=v}},14);let Menu;module.link('../../collections/Menu',{default(v){Menu=v}},15);let PaginationItem;module.link('./PaginationItem',{default(v){PaginationItem=v}},16);
















/**
 * A component to render a pagination.
 */

var Pagination =
/*#__PURE__*/
function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Pagination);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Pagination)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleItemClick", function (e, _ref) {
      var nextActivePage = _ref.value;
      var prevActivePage = _this.state.activePage; // Heads up! We need the cast to the "number" type there, as `activePage` can be a string

      if (+prevActivePage === +nextActivePage) return;

      _this.trySetState({
        activePage: nextActivePage
      });

      _invoke(_this.props, 'onPageChange', e, _objectSpread({}, _this.props, {
        activePage: nextActivePage
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "handleItemOverrides", function (active, type, value) {
      return function (predefinedProps) {
        return {
          active: active,
          type: type,
          key: "".concat(type, "-").concat(value),
          onClick: function onClick(e, itemProps) {
            _invoke(predefinedProps, 'onClick', e, itemProps);

            if (itemProps.type !== 'ellipsisItem') _this.handleItemClick(e, itemProps);
          }
        };
      };
    });

    return _this;
  }

  _createClass(Pagination, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          ariaLabel = _this$props['aria-label'],
          boundaryRange = _this$props.boundaryRange,
          disabled = _this$props.disabled,
          ellipsisItem = _this$props.ellipsisItem,
          siblingRange = _this$props.siblingRange,
          totalPages = _this$props.totalPages;
      var activePage = this.state.activePage;
      var items = createPaginationItems({
        activePage: activePage,
        boundaryRange: boundaryRange,
        hideEllipsis: _isNil(ellipsisItem),
        siblingRange: siblingRange,
        totalPages: totalPages
      });
      var rest = getUnhandledProps(Pagination, this.props);
      return React.createElement(Menu, _extends({}, rest, {
        "aria-label": ariaLabel,
        pagination: true,
        role: "navigation"
      }), _map(items, function (_ref2) {
        var active = _ref2.active,
            type = _ref2.type,
            value = _ref2.value;
        return PaginationItem.create(_this2.props[type], {
          defaultProps: {
            content: value,
            disabled: disabled,
            value: value
          },
          overrideProps: _this2.handleItemOverrides(active, type, value)
        });
      }));
    }
  }]);

  return Pagination;
}(Component);

_defineProperty(Pagination, "autoControlledProps", ['activePage']);

_defineProperty(Pagination, "defaultProps", {
  'aria-label': 'Pagination Navigation',
  boundaryRange: 1,
  ellipsisItem: '...',
  firstItem: {
    'aria-label': 'First item',
    content: '«'
  },
  lastItem: {
    'aria-label': 'Last item',
    content: '»'
  },
  nextItem: {
    'aria-label': 'Next item',
    content: '⟩'
  },
  pageItem: {},
  prevItem: {
    'aria-label': 'Previous item',
    content: '⟨'
  },
  siblingRange: 1
});

_defineProperty(Pagination, "Item", PaginationItem);

_defineProperty(Pagination, "handledProps", ["activePage", "aria-label", "boundaryRange", "defaultActivePage", "disabled", "ellipsisItem", "firstItem", "lastItem", "nextItem", "onPageChange", "pageItem", "prevItem", "siblingRange", "totalPages"]);


Pagination.propTypes = process.env.NODE_ENV !== "production" ? {
  /** A pagination item can have an aria label. */
  'aria-label': PropTypes.string,

  /** Initial activePage value. */
  defaultActivePage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Index of the currently active page. */
  activePage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Number of always visible pages at the beginning and end. */
  boundaryRange: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** A pagination can be disabled. */
  disabled: PropTypes.bool,

  /** A shorthand for PaginationItem. */
  ellipsisItem: customPropTypes.itemShorthand,

  /** A shorthand for PaginationItem. */
  firstItem: customPropTypes.itemShorthand,

  /** A shorthand for PaginationItem. */
  lastItem: customPropTypes.itemShorthand,

  /** A shorthand for PaginationItem. */
  nextItem: customPropTypes.itemShorthand,

  /** A shorthand for PaginationItem. */
  pageItem: customPropTypes.itemShorthand,

  /** A shorthand for PaginationItem. */
  prevItem: customPropTypes.itemShorthand,

  /**
   * Called on change of an active page.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onPageChange: PropTypes.func,

  /** Number of always visible pages before and after the current one. */
  siblingRange: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Total number of pages. */
  totalPages: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
} : {};