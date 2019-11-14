module.export({default:function(){return MenuItem}});var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default:function(v){_classCallCheck=v}},1);var _createClass;module.link("@babel/runtime/helpers/createClass",{default:function(v){_createClass=v}},2);var _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default:function(v){_possibleConstructorReturn=v}},3);var _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default:function(v){_getPrototypeOf=v}},4);var _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default:function(v){_assertThisInitialized=v}},5);var _inherits;module.link("@babel/runtime/helpers/inherits",{default:function(v){_inherits=v}},6);var _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default:function(v){_defineProperty=v}},7);var _startCase;module.link("lodash/startCase",{default:function(v){_startCase=v}},8);var _invoke;module.link("lodash/invoke",{default:function(v){_invoke=v}},9);var cx;module.link('classnames',{default:function(v){cx=v}},10);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},11);var React,Component;module.link('react',{default:function(v){React=v},Component:function(v){Component=v}},12);var childrenUtils,createShorthandFactory,customPropTypes,getElementType,getUnhandledProps,SUI,useKeyOnly,useKeyOrValueAndKey;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},createShorthandFactory:function(v){createShorthandFactory=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v},SUI:function(v){SUI=v},useKeyOnly:function(v){useKeyOnly=v},useKeyOrValueAndKey:function(v){useKeyOrValueAndKey=v}},13);var Icon;module.link('../../elements/Icon',{default:function(v){Icon=v}},14);














/**
 * A menu can contain an item.
 */

var MenuItem =
/*#__PURE__*/
function (_Component) {
  _inherits(MenuItem, _Component);

  function MenuItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MenuItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MenuItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      var disabled = _this.props.disabled;
      if (!disabled) _invoke(_this.props, 'onClick', e, _this.props);
    });

    return _this;
  }

  _createClass(MenuItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          children = _this$props.children,
          className = _this$props.className,
          color = _this$props.color,
          content = _this$props.content,
          disabled = _this$props.disabled,
          fitted = _this$props.fitted,
          header = _this$props.header,
          icon = _this$props.icon,
          link = _this$props.link,
          name = _this$props.name,
          onClick = _this$props.onClick,
          position = _this$props.position;
      var classes = cx(color, position, useKeyOnly(active, 'active'), useKeyOnly(disabled, 'disabled'), useKeyOnly(icon === true || icon && !(name || content), 'icon'), useKeyOnly(header, 'header'), useKeyOnly(link, 'link'), useKeyOrValueAndKey(fitted, 'fitted'), 'item', className);
      var ElementType = getElementType(MenuItem, this.props, function () {
        if (onClick) return 'a';
      });
      var rest = getUnhandledProps(MenuItem, this.props);

      if (!childrenUtils.isNil(children)) {
        return React.createElement(ElementType, _extends({}, rest, {
          className: classes,
          onClick: this.handleClick
        }), children);
      }

      return React.createElement(ElementType, _extends({}, rest, {
        className: classes,
        onClick: this.handleClick
      }), Icon.create(icon, {
        autoGenerateKey: false
      }), childrenUtils.isNil(content) ? _startCase(name) : content);
    }
  }]);

  return MenuItem;
}(Component);

_defineProperty(MenuItem, "handledProps", ["active", "as", "children", "className", "color", "content", "disabled", "fitted", "header", "icon", "index", "link", "name", "onClick", "position"]);


MenuItem.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A menu item can be active. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Additional colors can be specified. */
  color: PropTypes.oneOf(SUI.COLORS),

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A menu item can be disabled. */
  disabled: PropTypes.bool,

  /** A menu item or menu can remove element padding, vertically or horizontally. */
  fitted: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['horizontally', 'vertically'])]),

  /** A menu item may include a header or may itself be a header. */
  header: PropTypes.bool,

  /** MenuItem can be only icon. */
  icon: PropTypes.oneOfType([PropTypes.bool, customPropTypes.itemShorthand]),

  /** MenuItem index inside Menu. */
  index: PropTypes.number,

  /** A menu item can be link. */
  link: PropTypes.bool,

  /** Internal name of the MenuItem. */
  name: PropTypes.string,

  /**
   * Called on click. When passed, the component will render as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: PropTypes.func,

  /** A menu item can take left or right position. */
  position: PropTypes.oneOf(['left', 'right'])
} : {};
MenuItem.create = createShorthandFactory(MenuItem, function (val) {
  return {
    content: val,
    name: val
  };
});