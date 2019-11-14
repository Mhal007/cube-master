module.export({default:function(){return Message}});var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default:function(v){_classCallCheck=v}},1);var _createClass;module.link("@babel/runtime/helpers/createClass",{default:function(v){_createClass=v}},2);var _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default:function(v){_possibleConstructorReturn=v}},3);var _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default:function(v){_getPrototypeOf=v}},4);var _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default:function(v){_assertThisInitialized=v}},5);var _inherits;module.link("@babel/runtime/helpers/inherits",{default:function(v){_inherits=v}},6);var _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default:function(v){_defineProperty=v}},7);var _isNil;module.link("lodash/isNil",{default:function(v){_isNil=v}},8);var _without;module.link("lodash/without",{default:function(v){_without=v}},9);var cx;module.link('classnames',{default:function(v){cx=v}},10);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},11);var React,Component;module.link('react',{default:function(v){React=v},Component:function(v){Component=v}},12);var childrenUtils,createHTMLParagraph,customPropTypes,getElementType,getUnhandledProps,SUI,useKeyOnly,useKeyOrValueAndKey;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},createHTMLParagraph:function(v){createHTMLParagraph=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v},SUI:function(v){SUI=v},useKeyOnly:function(v){useKeyOnly=v},useKeyOrValueAndKey:function(v){useKeyOrValueAndKey=v}},13);var Icon;module.link('../../elements/Icon',{default:function(v){Icon=v}},14);var MessageContent;module.link('./MessageContent',{default:function(v){MessageContent=v}},15);var MessageHeader;module.link('./MessageHeader',{default:function(v){MessageHeader=v}},16);var MessageList;module.link('./MessageList',{default:function(v){MessageList=v}},17);var MessageItem;module.link('./MessageItem',{default:function(v){MessageItem=v}},18);


















/**
 * A message displays information that explains nearby content.
 * @see Form
 */

var Message =
/*#__PURE__*/
function (_Component) {
  _inherits(Message, _Component);

  function Message() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Message);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Message)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleDismiss", function (e) {
      var onDismiss = _this.props.onDismiss;
      if (onDismiss) onDismiss(e, _this.props);
    });

    return _this;
  }

  _createClass(Message, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attached = _this$props.attached,
          children = _this$props.children,
          className = _this$props.className,
          color = _this$props.color,
          compact = _this$props.compact,
          content = _this$props.content,
          error = _this$props.error,
          floating = _this$props.floating,
          header = _this$props.header,
          hidden = _this$props.hidden,
          icon = _this$props.icon,
          info = _this$props.info,
          list = _this$props.list,
          negative = _this$props.negative,
          onDismiss = _this$props.onDismiss,
          positive = _this$props.positive,
          size = _this$props.size,
          success = _this$props.success,
          visible = _this$props.visible,
          warning = _this$props.warning;
      var classes = cx('ui', color, size, useKeyOnly(compact, 'compact'), useKeyOnly(error, 'error'), useKeyOnly(floating, 'floating'), useKeyOnly(hidden, 'hidden'), useKeyOnly(icon, 'icon'), useKeyOnly(info, 'info'), useKeyOnly(negative, 'negative'), useKeyOnly(positive, 'positive'), useKeyOnly(success, 'success'), useKeyOnly(visible, 'visible'), useKeyOnly(warning, 'warning'), useKeyOrValueAndKey(attached, 'attached'), 'message', className);
      var dismissIcon = onDismiss && React.createElement(Icon, {
        name: "close",
        onClick: this.handleDismiss
      });
      var rest = getUnhandledProps(Message, this.props);
      var ElementType = getElementType(Message, this.props);

      if (!childrenUtils.isNil(children)) {
        return React.createElement(ElementType, _extends({}, rest, {
          className: classes
        }), dismissIcon, children);
      }

      return React.createElement(ElementType, _extends({}, rest, {
        className: classes
      }), dismissIcon, Icon.create(icon, {
        autoGenerateKey: false
      }), (!_isNil(header) || !_isNil(content) || !_isNil(list)) && React.createElement(MessageContent, null, MessageHeader.create(header, {
        autoGenerateKey: false
      }), MessageList.create(list, {
        autoGenerateKey: false
      }), createHTMLParagraph(content, {
        autoGenerateKey: false
      })));
    }
  }]);

  return Message;
}(Component);

_defineProperty(Message, "Content", MessageContent);

_defineProperty(Message, "Header", MessageHeader);

_defineProperty(Message, "List", MessageList);

_defineProperty(Message, "Item", MessageItem);

_defineProperty(Message, "handledProps", ["as", "attached", "children", "className", "color", "compact", "content", "error", "floating", "header", "hidden", "icon", "info", "list", "negative", "onDismiss", "positive", "size", "success", "visible", "warning"]);


Message.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A message can be formatted to attach itself to other content. */
  attached: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['bottom', 'top'])]),

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A message can be formatted to be different colors. */
  color: PropTypes.oneOf(SUI.COLORS),

  /** A message can only take up the width of its content. */
  compact: PropTypes.bool,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A message may be formatted to display a negative message. Same as `negative`. */
  error: PropTypes.bool,

  /** A message can float above content that it is related to. */
  floating: PropTypes.bool,

  /** Shorthand for MessageHeader. */
  header: customPropTypes.itemShorthand,

  /** A message can be hidden. */
  hidden: PropTypes.bool,

  /** A message can contain an icon. */
  icon: PropTypes.oneOfType([customPropTypes.itemShorthand, PropTypes.bool]),

  /** A message may be formatted to display information. */
  info: PropTypes.bool,

  /** Array shorthand items for the MessageList. Mutually exclusive with children. */
  list: customPropTypes.collectionShorthand,

  /** A message may be formatted to display a negative message. Same as `error`. */
  negative: PropTypes.bool,

  /**
   * A message that the user can choose to hide.
   * Called when the user clicks the "x" icon. This also adds the "x" icon.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onDismiss: PropTypes.func,

  /** A message may be formatted to display a positive message.  Same as `success`. */
  positive: PropTypes.bool,

  /** A message can have different sizes. */
  size: PropTypes.oneOf(_without(SUI.SIZES, 'medium')),

  /** A message may be formatted to display a positive message.  Same as `positive`. */
  success: PropTypes.bool,

  /** A message can be set to visible to force itself to be shown. */
  visible: PropTypes.bool,

  /** A message may be formatted to display warning messages. */
  warning: PropTypes.bool
} : {};