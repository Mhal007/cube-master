let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default(v){_classCallCheck=v}},1);let _createClass;module.link("@babel/runtime/helpers/createClass",{default(v){_createClass=v}},2);let _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default(v){_possibleConstructorReturn=v}},3);let _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default(v){_getPrototypeOf=v}},4);let _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default(v){_assertThisInitialized=v}},5);let _inherits;module.link("@babel/runtime/helpers/inherits",{default(v){_inherits=v}},6);let _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default(v){_defineProperty=v}},7);let _isPlainObject;module.link("lodash/isPlainObject",{default(v){_isPlainObject=v}},8);let _invoke;module.link("lodash/invoke",{default(v){_invoke=v}},9);let cx;module.link('classnames',{default(v){cx=v}},10);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},11);let React,Component,isValidElement;module.link('react',{default(v){React=v},Component(v){Component=v},isValidElement(v){isValidElement=v}},12);let childrenUtils,createShorthandFactory,customPropTypes,getElementType,getUnhandledProps,useKeyOnly;module.link('../../lib',{childrenUtils(v){childrenUtils=v},createShorthandFactory(v){createShorthandFactory=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},useKeyOnly(v){useKeyOnly=v}},13);let Image;module.link('../Image',{default(v){Image=v}},14);let ListContent;module.link('./ListContent',{default(v){ListContent=v}},15);let ListDescription;module.link('./ListDescription',{default(v){ListDescription=v}},16);let ListHeader;module.link('./ListHeader',{default(v){ListHeader=v}},17);let ListIcon;module.link('./ListIcon',{default(v){ListIcon=v}},18);


















/**
 * A list item can contain a set of items.
 */

var ListItem =
/*#__PURE__*/
function (_Component) {
  _inherits(ListItem, _Component);

  function ListItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ListItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ListItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      var disabled = _this.props.disabled;
      if (!disabled) _invoke(_this.props, 'onClick', e, _this.props);
    });

    return _this;
  }

  _createClass(ListItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          children = _this$props.children,
          className = _this$props.className,
          content = _this$props.content,
          description = _this$props.description,
          disabled = _this$props.disabled,
          header = _this$props.header,
          icon = _this$props.icon,
          image = _this$props.image,
          value = _this$props.value;
      var ElementType = getElementType(ListItem, this.props);
      var classes = cx(useKeyOnly(active, 'active'), useKeyOnly(disabled, 'disabled'), useKeyOnly(ElementType !== 'li', 'item'), className);
      var rest = getUnhandledProps(ListItem, this.props);
      var valueProp = ElementType === 'li' ? {
        value: value
      } : {
        'data-value': value
      };

      if (!childrenUtils.isNil(children)) {
        return React.createElement(ElementType, _extends({}, valueProp, {
          role: "listitem",
          className: classes,
          onClick: this.handleClick
        }, rest), children);
      }

      var iconElement = ListIcon.create(icon, {
        autoGenerateKey: false
      });
      var imageElement = Image.create(image, {
        autoGenerateKey: false
      }); // See description of `content` prop for explanation about why this is necessary.

      if (!isValidElement(content) && _isPlainObject(content)) {
        return React.createElement(ElementType, _extends({}, valueProp, {
          role: "listitem",
          className: classes,
          onClick: this.handleClick
        }, rest), iconElement || imageElement, ListContent.create(content, {
          autoGenerateKey: false,
          defaultProps: {
            header: header,
            description: description
          }
        }));
      }

      var headerElement = ListHeader.create(header, {
        autoGenerateKey: false
      });
      var descriptionElement = ListDescription.create(description, {
        autoGenerateKey: false
      });

      if (iconElement || imageElement) {
        return React.createElement(ElementType, _extends({}, valueProp, {
          role: "listitem",
          className: classes,
          onClick: this.handleClick
        }, rest), iconElement || imageElement, (content || headerElement || descriptionElement) && React.createElement(ListContent, null, headerElement, descriptionElement, content));
      }

      return React.createElement(ElementType, _extends({}, valueProp, {
        role: "listitem",
        className: classes,
        onClick: this.handleClick
      }, rest), headerElement, descriptionElement, content);
    }
  }]);

  return ListItem;
}(Component);

_defineProperty(ListItem, "handledProps", ["active", "as", "children", "className", "content", "description", "disabled", "header", "icon", "image", "onClick", "value"]);

ListItem.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A list item can active. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /**
   * Shorthand for primary content.
   *
   * Heads up!
   *
   * This is handled slightly differently than the typical `content` prop since
   * the wrapping ListContent is not used when there's no icon or image.
   *
   * If you pass content as:
   * - an element/literal, it's treated as the sibling node to
   * header/description (whether wrapped in Item.Content or not).
   * - a props object, it forces the presence of Item.Content and passes those
   * props to it. If you pass a content prop within that props object, it
   * will be treated as the sibling node to header/description.
   */
  content: customPropTypes.itemShorthand,

  /** Shorthand for ListDescription. */
  description: customPropTypes.itemShorthand,

  /** A list item can disabled. */
  disabled: PropTypes.bool,

  /** Shorthand for ListHeader. */
  header: customPropTypes.itemShorthand,

  /** Shorthand for ListIcon. */
  icon: customPropTypes.every([customPropTypes.disallow(['image']), customPropTypes.itemShorthand]),

  /** Shorthand for Image. */
  image: customPropTypes.every([customPropTypes.disallow(['icon']), customPropTypes.itemShorthand]),

  /** A ListItem can be clicked */
  onClick: PropTypes.func,

  /** A value for an ordered list. */
  value: PropTypes.string
} : {};
ListItem.create = createShorthandFactory(ListItem, function (content) {
  return {
    content: content
  };
});
module.exportDefault(ListItem);