module.export({default:()=>Card});let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default(v){_classCallCheck=v}},1);let _createClass;module.link("@babel/runtime/helpers/createClass",{default(v){_createClass=v}},2);let _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default(v){_possibleConstructorReturn=v}},3);let _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default(v){_getPrototypeOf=v}},4);let _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default(v){_assertThisInitialized=v}},5);let _inherits;module.link("@babel/runtime/helpers/inherits",{default(v){_inherits=v}},6);let _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default(v){_defineProperty=v}},7);let cx;module.link('classnames',{default(v){cx=v}},8);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},9);let React,Component;module.link('react',{default(v){React=v},Component(v){Component=v}},10);let childrenUtils,customPropTypes,getElementType,getUnhandledProps,SUI,useKeyOnly;module.link('../../lib',{childrenUtils(v){childrenUtils=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},SUI(v){SUI=v},useKeyOnly(v){useKeyOnly=v}},11);let Image;module.link('../../elements/Image',{default(v){Image=v}},12);let CardContent;module.link('./CardContent',{default(v){CardContent=v}},13);let CardDescription;module.link('./CardDescription',{default(v){CardDescription=v}},14);let CardGroup;module.link('./CardGroup',{default(v){CardGroup=v}},15);let CardHeader;module.link('./CardHeader',{default(v){CardHeader=v}},16);let CardMeta;module.link('./CardMeta',{default(v){CardMeta=v}},17);

















/**
 * A card displays site content in a manner similar to a playing card.
 */

var Card =
/*#__PURE__*/
function (_Component) {
  _inherits(Card, _Component);

  function Card() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Card);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Card)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      var onClick = _this.props.onClick;
      if (onClick) onClick(e, _this.props);
    });

    return _this;
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          centered = _this$props.centered,
          children = _this$props.children,
          className = _this$props.className,
          color = _this$props.color,
          content = _this$props.content,
          description = _this$props.description,
          extra = _this$props.extra,
          fluid = _this$props.fluid,
          header = _this$props.header,
          href = _this$props.href,
          image = _this$props.image,
          link = _this$props.link,
          meta = _this$props.meta,
          onClick = _this$props.onClick,
          raised = _this$props.raised;
      var classes = cx('ui', color, useKeyOnly(centered, 'centered'), useKeyOnly(fluid, 'fluid'), useKeyOnly(link, 'link'), useKeyOnly(raised, 'raised'), 'card', className);
      var rest = getUnhandledProps(Card, this.props);
      var ElementType = getElementType(Card, this.props, function () {
        if (onClick) return 'a';
      });

      if (!childrenUtils.isNil(children)) {
        return React.createElement(ElementType, _extends({}, rest, {
          className: classes,
          href: href,
          onClick: this.handleClick
        }), children);
      }

      if (!childrenUtils.isNil(content)) {
        return React.createElement(ElementType, _extends({}, rest, {
          className: classes,
          href: href,
          onClick: this.handleClick
        }), content);
      }

      return React.createElement(ElementType, _extends({}, rest, {
        className: classes,
        href: href,
        onClick: this.handleClick
      }), Image.create(image, {
        autoGenerateKey: false,
        defaultProps: {
          ui: false,
          wrapped: true
        }
      }), (description || header || meta) && React.createElement(CardContent, {
        description: description,
        header: header,
        meta: meta
      }), extra && React.createElement(CardContent, {
        extra: true
      }, extra));
    }
  }]);

  return Card;
}(Component);

_defineProperty(Card, "Content", CardContent);

_defineProperty(Card, "Description", CardDescription);

_defineProperty(Card, "Group", CardGroup);

_defineProperty(Card, "Header", CardHeader);

_defineProperty(Card, "Meta", CardMeta);

_defineProperty(Card, "handledProps", ["as", "centered", "children", "className", "color", "content", "description", "extra", "fluid", "header", "href", "image", "link", "meta", "onClick", "raised"]);


Card.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A Card can center itself inside its container. */
  centered: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A Card can be formatted to display different colors. */
  color: PropTypes.oneOf(SUI.COLORS),

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Shorthand for CardDescription. */
  description: customPropTypes.itemShorthand,

  /** Shorthand for primary content of CardContent. */
  extra: customPropTypes.contentShorthand,

  /** A Card can be formatted to take up the width of its container. */
  fluid: PropTypes.bool,

  /** Shorthand for CardHeader. */
  header: customPropTypes.itemShorthand,

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: PropTypes.string,

  /** A card can contain an Image component. */
  image: customPropTypes.itemShorthand,

  /** A card can be formatted to link to other content. */
  link: PropTypes.bool,

  /** Shorthand for CardMeta. */
  meta: customPropTypes.itemShorthand,

  /**
   * Called on click. When passed, the component renders as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: PropTypes.func,

  /** A Card can be formatted to raise above the page. */
  raised: PropTypes.bool
} : {};