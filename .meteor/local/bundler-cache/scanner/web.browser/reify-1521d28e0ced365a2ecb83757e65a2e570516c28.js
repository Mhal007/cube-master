module.export({default:()=>Label});let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default(v){_classCallCheck=v}},1);let _createClass;module.link("@babel/runtime/helpers/createClass",{default(v){_createClass=v}},2);let _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default(v){_possibleConstructorReturn=v}},3);let _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default(v){_getPrototypeOf=v}},4);let _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default(v){_assertThisInitialized=v}},5);let _inherits;module.link("@babel/runtime/helpers/inherits",{default(v){_inherits=v}},6);let _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default(v){_defineProperty=v}},7);let _isUndefined;module.link("lodash/isUndefined",{default(v){_isUndefined=v}},8);let _invoke;module.link("lodash/invoke",{default(v){_invoke=v}},9);let cx;module.link('classnames',{default(v){cx=v}},10);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},11);let React,Component;module.link('react',{default(v){React=v},Component(v){Component=v}},12);let childrenUtils,createShorthandFactory,customPropTypes,getElementType,getUnhandledProps,SUI,useKeyOnly,useKeyOrValueAndKey,useValueAndKey;module.link('../../lib',{childrenUtils(v){childrenUtils=v},createShorthandFactory(v){createShorthandFactory=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},SUI(v){SUI=v},useKeyOnly(v){useKeyOnly=v},useKeyOrValueAndKey(v){useKeyOrValueAndKey=v},useValueAndKey(v){useValueAndKey=v}},13);let Icon;module.link('../Icon/Icon',{default(v){Icon=v}},14);let Image;module.link('../Image/Image',{default(v){Image=v}},15);let LabelDetail;module.link('./LabelDetail',{default(v){LabelDetail=v}},16);let LabelGroup;module.link('./LabelGroup',{default(v){LabelGroup=v}},17);

















/**
 * A label displays content classification.
 */

var Label =
/*#__PURE__*/
function (_Component) {
  _inherits(Label, _Component);

  function Label() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Label);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Label)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      var onClick = _this.props.onClick;
      if (onClick) onClick(e, _this.props);
    });

    _defineProperty(_assertThisInitialized(_this), "handleIconOverrides", function (predefinedProps) {
      return {
        onClick: function onClick(e) {
          _invoke(predefinedProps, 'onClick', e);

          _invoke(_this.props, 'onRemove', e, _this.props);
        }
      };
    });

    return _this;
  }

  _createClass(Label, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          attached = _this$props.attached,
          basic = _this$props.basic,
          children = _this$props.children,
          circular = _this$props.circular,
          className = _this$props.className,
          color = _this$props.color,
          content = _this$props.content,
          corner = _this$props.corner,
          detail = _this$props.detail,
          empty = _this$props.empty,
          floating = _this$props.floating,
          horizontal = _this$props.horizontal,
          icon = _this$props.icon,
          image = _this$props.image,
          onRemove = _this$props.onRemove,
          pointing = _this$props.pointing,
          prompt = _this$props.prompt,
          removeIcon = _this$props.removeIcon,
          ribbon = _this$props.ribbon,
          size = _this$props.size,
          tag = _this$props.tag;
      var pointingClass = pointing === true && 'pointing' || (pointing === 'left' || pointing === 'right') && "".concat(pointing, " pointing") || (pointing === 'above' || pointing === 'below') && "pointing ".concat(pointing);
      var classes = cx('ui', color, pointingClass, size, useKeyOnly(active, 'active'), useKeyOnly(basic, 'basic'), useKeyOnly(circular, 'circular'), useKeyOnly(empty, 'empty'), useKeyOnly(floating, 'floating'), useKeyOnly(horizontal, 'horizontal'), useKeyOnly(image === true, 'image'), useKeyOnly(prompt, 'prompt'), useKeyOnly(tag, 'tag'), useKeyOrValueAndKey(corner, 'corner'), useKeyOrValueAndKey(ribbon, 'ribbon'), useValueAndKey(attached, 'attached'), 'label', className);
      var rest = getUnhandledProps(Label, this.props);
      var ElementType = getElementType(Label, this.props);

      if (!childrenUtils.isNil(children)) {
        return React.createElement(ElementType, _extends({}, rest, {
          className: classes,
          onClick: this.handleClick
        }), children);
      }

      var removeIconShorthand = _isUndefined(removeIcon) ? 'delete' : removeIcon;
      return React.createElement(ElementType, _extends({
        className: classes,
        onClick: this.handleClick
      }, rest), Icon.create(icon, {
        autoGenerateKey: false
      }), typeof image !== 'boolean' && Image.create(image, {
        autoGenerateKey: false
      }), content, LabelDetail.create(detail, {
        autoGenerateKey: false
      }), onRemove && Icon.create(removeIconShorthand, {
        autoGenerateKey: false,
        overrideProps: this.handleIconOverrides
      }));
    }
  }]);

  return Label;
}(Component);

_defineProperty(Label, "Detail", LabelDetail);

_defineProperty(Label, "Group", LabelGroup);

_defineProperty(Label, "handledProps", ["active", "as", "attached", "basic", "children", "circular", "className", "color", "content", "corner", "detail", "empty", "floating", "horizontal", "icon", "image", "onClick", "onRemove", "pointing", "prompt", "removeIcon", "ribbon", "size", "tag"]);


Label.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A label can be active. */
  active: PropTypes.bool,

  /** A label can attach to a content segment. */
  attached: PropTypes.oneOf(['top', 'bottom', 'top right', 'top left', 'bottom left', 'bottom right']),

  /** A label can reduce its complexity. */
  basic: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** A label can be circular. */
  circular: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** Color of the label. */
  color: PropTypes.oneOf(SUI.COLORS),

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A label can position itself in the corner of an element. */
  corner: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['left', 'right'])]),

  /** Shorthand for LabelDetail. */
  detail: customPropTypes.itemShorthand,

  /** Formats the label as a dot. */
  empty: customPropTypes.every([PropTypes.bool, customPropTypes.demand(['circular'])]),

  /** Float above another element in the upper right corner. */
  floating: PropTypes.bool,

  /** A horizontal label is formatted to label content along-side it horizontally. */
  horizontal: PropTypes.bool,

  /** Shorthand for Icon. */
  icon: customPropTypes.itemShorthand,

  /** A label can be formatted to emphasize an image or prop can be used as shorthand for Image. */
  image: PropTypes.oneOfType([PropTypes.bool, customPropTypes.itemShorthand]),

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: PropTypes.func,

  /**
   * Adds an "x" icon, called when "x" is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onRemove: PropTypes.func,

  /** A label can point to content next to it. */
  pointing: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['above', 'below', 'left', 'right'])]),

  /** A label can prompt for an error in your forms. */
  prompt: PropTypes.bool,

  /** Shorthand for Icon to appear as the last child and trigger onRemove. */
  removeIcon: customPropTypes.itemShorthand,

  /** A label can appear as a ribbon attaching itself to an element. */
  ribbon: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['right'])]),

  /** A label can have different sizes. */
  size: PropTypes.oneOf(SUI.SIZES),

  /** A label can appear as a tag. */
  tag: PropTypes.bool
} : {};
Label.create = createShorthandFactory(Label, function (value) {
  return {
    content: value
  };
});