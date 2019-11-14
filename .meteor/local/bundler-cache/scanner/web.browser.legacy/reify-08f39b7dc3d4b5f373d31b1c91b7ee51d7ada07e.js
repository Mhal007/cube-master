module.export({default:function(){return Card}});var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default:function(v){_classCallCheck=v}},1);var _createClass;module.link("@babel/runtime/helpers/createClass",{default:function(v){_createClass=v}},2);var _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default:function(v){_possibleConstructorReturn=v}},3);var _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default:function(v){_getPrototypeOf=v}},4);var _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default:function(v){_assertThisInitialized=v}},5);var _inherits;module.link("@babel/runtime/helpers/inherits",{default:function(v){_inherits=v}},6);var _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default:function(v){_defineProperty=v}},7);var cx;module.link('classnames',{default:function(v){cx=v}},8);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},9);var React,Component;module.link('react',{default:function(v){React=v},Component:function(v){Component=v}},10);var childrenUtils,customPropTypes,getElementType,getUnhandledProps,SUI,useKeyOnly;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v},SUI:function(v){SUI=v},useKeyOnly:function(v){useKeyOnly=v}},11);var Image;module.link('../../elements/Image',{default:function(v){Image=v}},12);var CardContent;module.link('./CardContent',{default:function(v){CardContent=v}},13);var CardDescription;module.link('./CardDescription',{default:function(v){CardDescription=v}},14);var CardGroup;module.link('./CardGroup',{default:function(v){CardGroup=v}},15);var CardHeader;module.link('./CardHeader',{default:function(v){CardHeader=v}},16);var CardMeta;module.link('./CardMeta',{default:function(v){CardMeta=v}},17);

















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