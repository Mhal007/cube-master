var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default:function(v){_classCallCheck=v}},1);var _createClass;module.link("@babel/runtime/helpers/createClass",{default:function(v){_createClass=v}},2);var _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default:function(v){_possibleConstructorReturn=v}},3);var _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default:function(v){_getPrototypeOf=v}},4);var _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default:function(v){_assertThisInitialized=v}},5);var _inherits;module.link("@babel/runtime/helpers/inherits",{default:function(v){_inherits=v}},6);var _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default:function(v){_defineProperty=v}},7);var _isNil;module.link("lodash/isNil",{default:function(v){_isNil=v}},8);var _invoke;module.link("lodash/invoke",{default:function(v){_invoke=v}},9);var cx;module.link('classnames',{default:function(v){cx=v}},10);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},11);var React,Component;module.link('react',{default:function(v){React=v},Component:function(v){Component=v}},12);var childrenUtils,createShorthand,createShorthandFactory,customPropTypes,getElementType,getUnhandledProps,useKeyOnly;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},createShorthand:function(v){createShorthand=v},createShorthandFactory:function(v){createShorthandFactory=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v},useKeyOnly:function(v){useKeyOnly=v}},13);var Flag;module.link('../../elements/Flag',{default:function(v){Flag=v}},14);var Icon;module.link('../../elements/Icon',{default:function(v){Icon=v}},15);var Image;module.link('../../elements/Image',{default:function(v){Image=v}},16);var Label;module.link('../../elements/Label',{default:function(v){Label=v}},17);

















/**
 * An item sub-component for Dropdown component.
 */

var DropdownItem =
/*#__PURE__*/
function (_Component) {
  _inherits(DropdownItem, _Component);

  function DropdownItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      _invoke(_this.props, 'onClick', e, _this.props);
    });

    return _this;
  }

  _createClass(DropdownItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          children = _this$props.children,
          className = _this$props.className,
          content = _this$props.content,
          disabled = _this$props.disabled,
          description = _this$props.description,
          flag = _this$props.flag,
          icon = _this$props.icon,
          image = _this$props.image,
          label = _this$props.label,
          selected = _this$props.selected,
          text = _this$props.text;
      var classes = cx(useKeyOnly(active, 'active'), useKeyOnly(disabled, 'disabled'), useKeyOnly(selected, 'selected'), 'item', className); // add default dropdown icon if item contains another menu

      var iconName = _isNil(icon) ? childrenUtils.someByType(children, 'DropdownMenu') && 'dropdown' : icon;
      var rest = getUnhandledProps(DropdownItem, this.props);
      var ElementType = getElementType(DropdownItem, this.props);
      var ariaOptions = {
        role: 'option',
        'aria-disabled': disabled,
        'aria-checked': active,
        'aria-selected': selected
      };

      if (!childrenUtils.isNil(children)) {
        return React.createElement(ElementType, _extends({}, rest, ariaOptions, {
          className: classes,
          onClick: this.handleClick
        }), children);
      }

      var flagElement = Flag.create(flag, {
        autoGenerateKey: false
      });
      var iconElement = Icon.create(iconName, {
        autoGenerateKey: false
      });
      var imageElement = Image.create(image, {
        autoGenerateKey: false
      });
      var labelElement = Label.create(label, {
        autoGenerateKey: false
      });
      var descriptionElement = createShorthand('span', function (val) {
        return {
          children: val
        };
      }, description, {
        defaultProps: {
          className: 'description'
        },
        autoGenerateKey: false
      });
      var textElement = createShorthand('span', function (val) {
        return {
          children: val
        };
      }, childrenUtils.isNil(content) ? text : content, {
        defaultProps: {
          className: 'text'
        },
        autoGenerateKey: false
      });
      return React.createElement(ElementType, _extends({}, rest, ariaOptions, {
        className: classes,
        onClick: this.handleClick
      }), imageElement, iconElement, flagElement, labelElement, descriptionElement, textElement);
    }
  }]);

  return DropdownItem;
}(Component);

_defineProperty(DropdownItem, "handledProps", ["active", "as", "children", "className", "content", "description", "disabled", "flag", "icon", "image", "label", "onClick", "selected", "text", "value"]);

DropdownItem.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Style as the currently chosen item. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Additional text with less emphasis. */
  description: customPropTypes.itemShorthand,

  /** A dropdown item can be disabled. */
  disabled: PropTypes.bool,

  /** Shorthand for Flag. */
  flag: customPropTypes.itemShorthand,

  /** Shorthand for Icon. */
  icon: customPropTypes.itemShorthand,

  /** Shorthand for Image. */
  image: customPropTypes.itemShorthand,

  /** Shorthand for Label. */
  label: customPropTypes.itemShorthand,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: PropTypes.func,

  /**
   * The item currently selected by keyboard shortcut.
   * This is not the active item.
   */
  selected: PropTypes.bool,

  /** Display text. */
  text: customPropTypes.contentShorthand,

  /** Stored value. */
  value: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string])
} : {};
DropdownItem.create = createShorthandFactory(DropdownItem, function (opts) {
  return opts;
});
module.exportDefault(DropdownItem);