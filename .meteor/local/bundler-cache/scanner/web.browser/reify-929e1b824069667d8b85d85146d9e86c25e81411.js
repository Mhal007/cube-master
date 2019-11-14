let _toConsumableArray;module.link("@babel/runtime/helpers/toConsumableArray",{default(v){_toConsumableArray=v}},0);let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},1);let _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default(v){_classCallCheck=v}},2);let _createClass;module.link("@babel/runtime/helpers/createClass",{default(v){_createClass=v}},3);let _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default(v){_possibleConstructorReturn=v}},4);let _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default(v){_getPrototypeOf=v}},5);let _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default(v){_assertThisInitialized=v}},6);let _inherits;module.link("@babel/runtime/helpers/inherits",{default(v){_inherits=v}},7);let _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default(v){_defineProperty=v}},8);let _invoke;module.link("lodash/invoke",{default(v){_invoke=v}},9);let _isNil;module.link("lodash/isNil",{default(v){_isNil=v}},10);let Ref;module.link('@stardust-ui/react-component-ref',{Ref(v){Ref=v}},11);let cx;module.link('classnames',{default(v){cx=v}},12);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},13);let React,Component,createRef;module.link('react',{default(v){React=v},Component(v){Component=v},createRef(v){createRef=v}},14);let childrenUtils,customPropTypes,createShorthandFactory,getElementType,getUnhandledProps,SUI,useKeyOnly,useKeyOrValueAndKey,useValueAndKey;module.link('../../lib',{childrenUtils(v){childrenUtils=v},customPropTypes(v){customPropTypes=v},createShorthandFactory(v){createShorthandFactory=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},SUI(v){SUI=v},useKeyOnly(v){useKeyOnly=v},useKeyOrValueAndKey(v){useKeyOrValueAndKey=v},useValueAndKey(v){useValueAndKey=v}},15);let Icon;module.link('../Icon/Icon',{default(v){Icon=v}},16);let Label;module.link('../Label/Label',{default(v){Label=v}},17);let ButtonContent;module.link('./ButtonContent',{default(v){ButtonContent=v}},18);let ButtonGroup;module.link('./ButtonGroup',{default(v){ButtonGroup=v}},19);let ButtonOr;module.link('./ButtonOr',{default(v){ButtonOr=v}},20);




















/**
 * A Button indicates a possible user action.
 * @see Form
 * @see Icon
 * @see Label
 */

var Button =
/*#__PURE__*/
function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Button)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "ref", createRef());

    _defineProperty(_assertThisInitialized(_this), "computeElementType", function () {
      var _this$props = _this.props,
          attached = _this$props.attached,
          label = _this$props.label;
      if (!_isNil(attached) || !_isNil(label)) return 'div';
    });

    _defineProperty(_assertThisInitialized(_this), "computeTabIndex", function (ElementType) {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          tabIndex = _this$props2.tabIndex;
      if (!_isNil(tabIndex)) return tabIndex;
      if (disabled) return -1;
      if (ElementType === 'div') return 0;
    });

    _defineProperty(_assertThisInitialized(_this), "focus", function () {
      return _invoke(_this.ref.current, 'focus');
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      var disabled = _this.props.disabled;

      if (disabled) {
        e.preventDefault();
        return;
      }

      _invoke(_this.props, 'onClick', e, _this.props);
    });

    _defineProperty(_assertThisInitialized(_this), "hasIconClass", function () {
      var _this$props3 = _this.props,
          labelPosition = _this$props3.labelPosition,
          children = _this$props3.children,
          content = _this$props3.content,
          icon = _this$props3.icon;
      if (icon === true) return true;
      return icon && (labelPosition || childrenUtils.isNil(children) && _isNil(content));
    });

    return _this;
  }

  _createClass(Button, [{
    key: "computeButtonAriaRole",
    value: function computeButtonAriaRole(ElementType) {
      var role = this.props.role;
      if (!_isNil(role)) return role;
      if (ElementType !== 'button') return 'button';
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          active = _this$props4.active,
          animated = _this$props4.animated,
          attached = _this$props4.attached,
          basic = _this$props4.basic,
          children = _this$props4.children,
          circular = _this$props4.circular,
          className = _this$props4.className,
          color = _this$props4.color,
          compact = _this$props4.compact,
          content = _this$props4.content,
          disabled = _this$props4.disabled,
          floated = _this$props4.floated,
          fluid = _this$props4.fluid,
          icon = _this$props4.icon,
          inverted = _this$props4.inverted,
          label = _this$props4.label,
          labelPosition = _this$props4.labelPosition,
          loading = _this$props4.loading,
          negative = _this$props4.negative,
          positive = _this$props4.positive,
          primary = _this$props4.primary,
          secondary = _this$props4.secondary,
          size = _this$props4.size,
          toggle = _this$props4.toggle;
      var baseClasses = cx(color, size, useKeyOnly(active, 'active'), useKeyOnly(basic, 'basic'), useKeyOnly(circular, 'circular'), useKeyOnly(compact, 'compact'), useKeyOnly(fluid, 'fluid'), useKeyOnly(this.hasIconClass(), 'icon'), useKeyOnly(inverted, 'inverted'), useKeyOnly(loading, 'loading'), useKeyOnly(negative, 'negative'), useKeyOnly(positive, 'positive'), useKeyOnly(primary, 'primary'), useKeyOnly(secondary, 'secondary'), useKeyOnly(toggle, 'toggle'), useKeyOrValueAndKey(animated, 'animated'), useKeyOrValueAndKey(attached, 'attached'));
      var labeledClasses = cx(useKeyOrValueAndKey(labelPosition || !!label, 'labeled'));
      var wrapperClasses = cx(useKeyOnly(disabled, 'disabled'), useValueAndKey(floated, 'floated'));
      var rest = getUnhandledProps(Button, this.props);
      var ElementType = getElementType(Button, this.props, this.computeElementType);
      var tabIndex = this.computeTabIndex(ElementType);

      if (!_isNil(label)) {
        var buttonClasses = cx('ui', baseClasses, 'button', className);
        var containerClasses = cx('ui', labeledClasses, 'button', className, wrapperClasses);
        var labelElement = Label.create(label, {
          defaultProps: {
            basic: true,
            pointing: labelPosition === 'left' ? 'right' : 'left'
          },
          autoGenerateKey: false
        });
        return React.createElement(ElementType, _extends({}, rest, {
          className: containerClasses,
          onClick: this.handleClick
        }), labelPosition === 'left' && labelElement, React.createElement(Ref, {
          innerRef: this.ref
        }, React.createElement("button", {
          className: buttonClasses,
          "aria-pressed": toggle ? !!active : undefined,
          disabled: disabled,
          tabIndex: tabIndex
        }, Icon.create(icon, {
          autoGenerateKey: false
        }), " ", content)), (labelPosition === 'right' || !labelPosition) && labelElement);
      }

      var classes = cx('ui', baseClasses, wrapperClasses, labeledClasses, 'button', className);
      var hasChildren = !childrenUtils.isNil(children);
      var role = this.computeButtonAriaRole(ElementType);
      return React.createElement(Ref, {
        innerRef: this.ref
      }, React.createElement(ElementType, _extends({}, rest, {
        className: classes,
        "aria-pressed": toggle ? !!active : undefined,
        disabled: disabled && ElementType === 'button' || undefined,
        onClick: this.handleClick,
        role: role,
        tabIndex: tabIndex
      }), hasChildren && children, !hasChildren && Icon.create(icon, {
        autoGenerateKey: false
      }), !hasChildren && content));
    }
  }]);

  return Button;
}(Component);

_defineProperty(Button, "defaultProps", {
  as: 'button'
});

_defineProperty(Button, "Content", ButtonContent);

_defineProperty(Button, "Group", ButtonGroup);

_defineProperty(Button, "Or", ButtonOr);

_defineProperty(Button, "handledProps", ["active", "animated", "as", "attached", "basic", "children", "circular", "className", "color", "compact", "content", "disabled", "floated", "fluid", "icon", "inverted", "label", "labelPosition", "loading", "negative", "onClick", "positive", "primary", "role", "secondary", "size", "tabIndex", "toggle"]);

Button.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A button can show it is currently the active user selection. */
  active: PropTypes.bool,

  /** A button can animate to show hidden content. */
  animated: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['fade', 'vertical'])]),

  /** A button can be attached to other content. */
  attached: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['left', 'right', 'top', 'bottom'])]),

  /** A basic button is less pronounced. */
  basic: PropTypes.bool,

  /** Primary content. */
  children: customPropTypes.every([PropTypes.node, customPropTypes.disallow(['label']), customPropTypes.givenProps({
    icon: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.object.isRequired, PropTypes.element.isRequired])
  }, customPropTypes.disallow(['icon']))]),

  /** A button can be circular. */
  circular: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** A button can have different colors */
  color: PropTypes.oneOf([].concat(_toConsumableArray(SUI.COLORS), ['facebook', 'google plus', 'instagram', 'linkedin', 'twitter', 'vk', 'youtube'])),

  /** A button can reduce its padding to fit into tighter spaces. */
  compact: PropTypes.bool,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A button can show it is currently unable to be interacted with. */
  disabled: PropTypes.bool,

  /** A button can be aligned to the left or right of its container. */
  floated: PropTypes.oneOf(SUI.FLOATS),

  /** A button can take the width of its container. */
  fluid: PropTypes.bool,

  /** Add an Icon by name, props object, or pass an <Icon />. */
  icon: customPropTypes.some([PropTypes.bool, PropTypes.string, PropTypes.object, PropTypes.element]),

  /** A button can be formatted to appear on dark backgrounds. */
  inverted: PropTypes.bool,

  /** Add a Label by text, props object, or pass a <Label />. */
  label: customPropTypes.some([PropTypes.string, PropTypes.object, PropTypes.element]),

  /** A labeled button can format a Label or Icon to appear on the left or right. */
  labelPosition: PropTypes.oneOf(['right', 'left']),

  /** A button can show a loading indicator. */
  loading: PropTypes.bool,

  /** A button can hint towards a negative consequence. */
  negative: PropTypes.bool,

  /**
   * Called after user's click.
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: PropTypes.func,

  /** A button can hint towards a positive consequence. */
  positive: PropTypes.bool,

  /** A button can be formatted to show different levels of emphasis. */
  primary: PropTypes.bool,

  /** The role of the HTML element. */
  role: PropTypes.string,

  /** A button can be formatted to show different levels of emphasis. */
  secondary: PropTypes.bool,

  /** A button can have different sizes. */
  size: PropTypes.oneOf(SUI.SIZES),

  /** A button can receive focus. */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** A button can be formatted to toggle on and off. */
  toggle: PropTypes.bool
} : {};
Button.create = createShorthandFactory(Button, function (value) {
  return {
    content: value
  };
});
module.exportDefault(Button);