let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default(v){_classCallCheck=v}},1);let _createClass;module.link("@babel/runtime/helpers/createClass",{default(v){_createClass=v}},2);let _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default(v){_possibleConstructorReturn=v}},3);let _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default(v){_getPrototypeOf=v}},4);let _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default(v){_assertThisInitialized=v}},5);let _inherits;module.link("@babel/runtime/helpers/inherits",{default(v){_inherits=v}},6);let _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default(v){_defineProperty=v}},7);let _invoke;module.link("lodash/invoke",{default(v){_invoke=v}},8);let _isNil;module.link("lodash/isNil",{default(v){_isNil=v}},9);let _without;module.link("lodash/without",{default(v){_without=v}},10);let cx;module.link('classnames',{default(v){cx=v}},11);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},12);let React,PureComponent;module.link('react',{default(v){React=v},PureComponent(v){PureComponent=v}},13);let createShorthandFactory,customPropTypes,getElementType,getUnhandledProps,SUI,useKeyOnly,useKeyOrValueAndKey,useValueAndKey;module.link('../../lib',{createShorthandFactory(v){createShorthandFactory=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},SUI(v){SUI=v},useKeyOnly(v){useKeyOnly=v},useKeyOrValueAndKey(v){useKeyOrValueAndKey=v},useValueAndKey(v){useValueAndKey=v}},14);let IconGroup;module.link('./IconGroup',{default(v){IconGroup=v}},15);















/**
 * An icon is a glyph used to represent something else.
 * @see Image
 */

var Icon =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Icon, _PureComponent);

  function Icon() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Icon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Icon)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      var disabled = _this.props.disabled;

      if (disabled) {
        e.preventDefault();
        return;
      }

      _invoke(_this.props, 'onClick', e, _this.props);
    });

    return _this;
  }

  _createClass(Icon, [{
    key: "getIconAriaOptions",
    value: function getIconAriaOptions() {
      var ariaOptions = {};
      var _this$props = this.props,
          ariaLabel = _this$props['aria-label'],
          ariaHidden = _this$props['aria-hidden'];

      if (_isNil(ariaLabel)) {
        ariaOptions['aria-hidden'] = 'true';
      } else {
        ariaOptions['aria-label'] = ariaLabel;
      }

      if (!_isNil(ariaHidden)) {
        ariaOptions['aria-hidden'] = ariaHidden;
      }

      return ariaOptions;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          bordered = _this$props2.bordered,
          circular = _this$props2.circular,
          className = _this$props2.className,
          color = _this$props2.color,
          corner = _this$props2.corner,
          disabled = _this$props2.disabled,
          fitted = _this$props2.fitted,
          flipped = _this$props2.flipped,
          inverted = _this$props2.inverted,
          link = _this$props2.link,
          loading = _this$props2.loading,
          name = _this$props2.name,
          rotated = _this$props2.rotated,
          size = _this$props2.size;
      var classes = cx(color, name, size, useKeyOnly(bordered, 'bordered'), useKeyOnly(circular, 'circular'), useKeyOnly(disabled, 'disabled'), useKeyOnly(fitted, 'fitted'), useKeyOnly(inverted, 'inverted'), useKeyOnly(link, 'link'), useKeyOnly(loading, 'loading'), useKeyOrValueAndKey(corner, 'corner'), useValueAndKey(flipped, 'flipped'), useValueAndKey(rotated, 'rotated'), 'icon', className);
      var rest = getUnhandledProps(Icon, this.props);
      var ElementType = getElementType(Icon, this.props);
      var ariaOptions = this.getIconAriaOptions();
      return React.createElement(ElementType, _extends({}, rest, ariaOptions, {
        className: classes,
        onClick: this.handleClick
      }));
    }
  }]);

  return Icon;
}(PureComponent);

_defineProperty(Icon, "defaultProps", {
  as: 'i'
});

_defineProperty(Icon, "Group", IconGroup);

_defineProperty(Icon, "handledProps", ["aria-hidden", "aria-label", "as", "bordered", "circular", "className", "color", "corner", "disabled", "fitted", "flipped", "inverted", "link", "loading", "name", "rotated", "size"]);

Icon.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Formatted to appear bordered. */
  bordered: PropTypes.bool,

  /** Icon can formatted to appear circular. */
  circular: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** Color of the icon. */
  color: PropTypes.oneOf(SUI.COLORS),

  /** Icons can display a smaller corner icon. */
  corner: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['top left', 'top right', 'bottom left', 'bottom right'])]),

  /** Show that the icon is inactive. */
  disabled: PropTypes.bool,

  /** Fitted, without space to left or right of Icon. */
  fitted: PropTypes.bool,

  /** Icon can be flipped. */
  flipped: PropTypes.oneOf(['horizontally', 'vertically']),

  /** Formatted to have its colors inverted for contrast. */
  inverted: PropTypes.bool,

  /** Icon can be formatted as a link. */
  link: PropTypes.bool,

  /** Icon can be used as a simple loader. */
  loading: PropTypes.bool,

  /** Name of the icon. */
  name: customPropTypes.suggest(SUI.ALL_ICONS_IN_ALL_CONTEXTS),

  /** Icon can rotated. */
  rotated: PropTypes.oneOf(['clockwise', 'counterclockwise']),

  /** Size of the icon. */
  size: PropTypes.oneOf(_without(SUI.SIZES, 'medium')),

  /** Icon can have an aria label. */
  'aria-hidden': PropTypes.string,

  /** Icon can have an aria label. */
  'aria-label': PropTypes.string
} : {};
Icon.create = createShorthandFactory(Icon, function (value) {
  return {
    name: value
  };
});
module.exportDefault(Icon);