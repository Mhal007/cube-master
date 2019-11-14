module.export({default:()=>RatingIcon});let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default(v){_classCallCheck=v}},1);let _createClass;module.link("@babel/runtime/helpers/createClass",{default(v){_createClass=v}},2);let _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default(v){_possibleConstructorReturn=v}},3);let _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default(v){_getPrototypeOf=v}},4);let _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default(v){_assertThisInitialized=v}},5);let _inherits;module.link("@babel/runtime/helpers/inherits",{default(v){_inherits=v}},6);let _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default(v){_defineProperty=v}},7);let _invoke;module.link("lodash/invoke",{default(v){_invoke=v}},8);let cx;module.link('classnames',{default(v){cx=v}},9);let keyboardKey;module.link('keyboard-key',{default(v){keyboardKey=v}},10);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},11);let React,Component;module.link('react',{default(v){React=v},Component(v){Component=v}},12);let getElementType,getUnhandledProps,useKeyOnly;module.link('../../lib',{getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},useKeyOnly(v){useKeyOnly=v}},13);













/**
 * An internal icon sub-component for Rating component
 */

var RatingIcon =
/*#__PURE__*/
function (_Component) {
  _inherits(RatingIcon, _Component);

  function RatingIcon() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RatingIcon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RatingIcon)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      _invoke(_this.props, 'onClick', e, _this.props);
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyUp", function (e) {
      _invoke(_this.props, 'onKeyUp', e, _this.props);

      switch (keyboardKey.getCode(e)) {
        case keyboardKey.Enter:
        case keyboardKey.Spacebar:
          e.preventDefault();

          _invoke(_this.props, 'onClick', e, _this.props);

          break;

        default:
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseEnter", function (e) {
      _invoke(_this.props, 'onMouseEnter', e, _this.props);
    });

    return _this;
  }

  _createClass(RatingIcon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          className = _this$props.className,
          selected = _this$props.selected;
      var classes = cx(useKeyOnly(active, 'active'), useKeyOnly(selected, 'selected'), 'icon', className);
      var rest = getUnhandledProps(RatingIcon, this.props);
      var ElementType = getElementType(RatingIcon, this.props);
      return React.createElement(ElementType, _extends({}, rest, {
        className: classes,
        onClick: this.handleClick,
        onKeyUp: this.handleKeyUp,
        onMouseEnter: this.handleMouseEnter,
        role: "radio"
      }));
    }
  }]);

  return RatingIcon;
}(Component);

_defineProperty(RatingIcon, "defaultProps", {
  as: 'i'
});

_defineProperty(RatingIcon, "handledProps", ["active", "as", "className", "index", "onClick", "onKeyUp", "onMouseEnter", "selected"]);


RatingIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Indicates activity of an icon. */
  active: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** An index of icon inside Rating. */
  index: PropTypes.number,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: PropTypes.func,

  /**
   * Called on keyup.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onKeyUp: PropTypes.func,

  /**
   * Called on mouseenter.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onMouseEnter: PropTypes.func,

  /** Indicates selection of an icon. */
  selected: PropTypes.bool
} : {};