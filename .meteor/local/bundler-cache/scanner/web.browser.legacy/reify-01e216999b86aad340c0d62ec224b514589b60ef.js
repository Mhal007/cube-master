module.export({default:function(){return RatingIcon}});var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default:function(v){_classCallCheck=v}},1);var _createClass;module.link("@babel/runtime/helpers/createClass",{default:function(v){_createClass=v}},2);var _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default:function(v){_possibleConstructorReturn=v}},3);var _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default:function(v){_getPrototypeOf=v}},4);var _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default:function(v){_assertThisInitialized=v}},5);var _inherits;module.link("@babel/runtime/helpers/inherits",{default:function(v){_inherits=v}},6);var _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default:function(v){_defineProperty=v}},7);var _invoke;module.link("lodash/invoke",{default:function(v){_invoke=v}},8);var cx;module.link('classnames',{default:function(v){cx=v}},9);var keyboardKey;module.link('keyboard-key',{default:function(v){keyboardKey=v}},10);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},11);var React,Component;module.link('react',{default:function(v){React=v},Component:function(v){Component=v}},12);var getElementType,getUnhandledProps,useKeyOnly;module.link('../../lib',{getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v},useKeyOnly:function(v){useKeyOnly=v}},13);













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