let _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default(v){_classCallCheck=v}},0);let _createClass;module.link("@babel/runtime/helpers/createClass",{default(v){_createClass=v}},1);let _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default(v){_possibleConstructorReturn=v}},2);let _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default(v){_getPrototypeOf=v}},3);let _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default(v){_assertThisInitialized=v}},4);let _inherits;module.link("@babel/runtime/helpers/inherits",{default(v){_inherits=v}},5);let _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default(v){_defineProperty=v}},6);let _invoke;module.link("lodash/invoke",{default(v){_invoke=v}},7);let keyboardKey;module.link('keyboard-key',{default(v){keyboardKey=v}},8);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},9);let Component;module.link('react',{Component(v){Component=v}},10);let createShorthandFactory;module.link('../../lib',{createShorthandFactory(v){createShorthandFactory=v}},11);let MenuItem;module.link('../../collections/Menu/MenuItem',{default(v){MenuItem=v}},12);












/**
 * An item of a pagination.
 */

var PaginationItem =
/*#__PURE__*/
function (_Component) {
  _inherits(PaginationItem, _Component);

  function PaginationItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PaginationItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PaginationItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      _invoke(_this.props, 'onClick', e, _this.props);
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
      _invoke(_this.props, 'onKeyDown', e, _this.props);

      if (keyboardKey.getCode(e) === keyboardKey.Enter) _invoke(_this.props, 'onClick', e, _this.props);
    });

    _defineProperty(_assertThisInitialized(_this), "handleOverrides", function () {
      return {
        onClick: _this.handleClick,
        onKeyDown: _this.handleKeyDown
      };
    });

    return _this;
  }

  _createClass(PaginationItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          type = _this$props.type;
      var disabled = this.props.disabled || type === 'ellipsisItem';
      return MenuItem.create(this.props, {
        defaultProps: {
          active: active,
          'aria-current': active,
          'aria-disabled': disabled,
          disabled: disabled,
          onClick: this.handleClick,
          onKeyDown: this.handleKeyDown,
          tabIndex: disabled ? -1 : 0
        },
        overrideProps: this.handleOverrides
      });
    }
  }]);

  return PaginationItem;
}(Component);

_defineProperty(PaginationItem, "handledProps", ["active", "disabled", "onClick", "onKeyDown", "type"]);

PaginationItem.propTypes = process.env.NODE_ENV !== "production" ? {
  /** A pagination item can be active. */
  active: PropTypes.bool,

  /** A pagination item can be disabled. */
  disabled: PropTypes.bool,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: PropTypes.func,

  /**
   * Called on key down.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onKeyDown: PropTypes.func,

  /** A pagination should have a type. */
  type: PropTypes.oneOf(['ellipsisItem', 'firstItem', 'prevItem', 'pageItem', 'nextItem', 'lastItem'])
} : {};
PaginationItem.create = createShorthandFactory(PaginationItem, function (content) {
  return {
    content: content
  };
});
module.exportDefault(PaginationItem);