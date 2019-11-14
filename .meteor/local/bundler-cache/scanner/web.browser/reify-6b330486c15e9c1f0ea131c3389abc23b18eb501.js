let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let _objectSpread;module.link("@babel/runtime/helpers/objectSpread",{default(v){_objectSpread=v}},1);let _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default(v){_classCallCheck=v}},2);let _createClass;module.link("@babel/runtime/helpers/createClass",{default(v){_createClass=v}},3);let _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default(v){_possibleConstructorReturn=v}},4);let _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default(v){_getPrototypeOf=v}},5);let _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default(v){_assertThisInitialized=v}},6);let _inherits;module.link("@babel/runtime/helpers/inherits",{default(v){_inherits=v}},7);let _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default(v){_defineProperty=v}},8);let _invoke;module.link("lodash/invoke",{default(v){_invoke=v}},9);let _get;module.link("lodash/get",{default(v){_get=v}},10);let cx;module.link('classnames',{default(v){cx=v}},11);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},12);let React,Component;module.link('react',{default(v){React=v},Component(v){Component=v}},13);let createShorthandFactory,getUnhandledProps;module.link('../../lib',{createShorthandFactory(v){createShorthandFactory=v},getUnhandledProps(v){getUnhandledProps=v}},14);














/**
 * A search item sub-component for Dropdown component.
 */

var DropdownSearchInput =
/*#__PURE__*/
function (_Component) {
  _inherits(DropdownSearchInput, _Component);

  function DropdownSearchInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownSearchInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownSearchInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var value = _get(e, 'target.value');

      _invoke(_this.props, 'onChange', e, _objectSpread({}, _this.props, {
        value: value
      }));
    });

    return _this;
  }

  _createClass(DropdownSearchInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          autoComplete = _this$props.autoComplete,
          className = _this$props.className,
          tabIndex = _this$props.tabIndex,
          type = _this$props.type,
          value = _this$props.value;
      var classes = cx('search', className);
      var rest = getUnhandledProps(DropdownSearchInput, this.props);
      return React.createElement("input", _extends({}, rest, {
        "aria-autocomplete": "list",
        autoComplete: autoComplete,
        className: classes,
        onChange: this.handleChange,
        tabIndex: tabIndex,
        type: type,
        value: value
      }));
    }
  }]);

  return DropdownSearchInput;
}(Component);

_defineProperty(DropdownSearchInput, "defaultProps", {
  autoComplete: 'off',
  type: 'text'
});

_defineProperty(DropdownSearchInput, "handledProps", ["as", "autoComplete", "className", "tabIndex", "type", "value"]);

DropdownSearchInput.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** An input can have the auto complete. */
  autoComplete: PropTypes.string,

  /** Additional classes. */
  className: PropTypes.string,

  /** An input can receive focus. */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** The HTML input type. */
  type: PropTypes.string,

  /** Stored value. */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
} : {};
DropdownSearchInput.create = createShorthandFactory(DropdownSearchInput, function (type) {
  return {
    type: type
  };
});
module.exportDefault(DropdownSearchInput);