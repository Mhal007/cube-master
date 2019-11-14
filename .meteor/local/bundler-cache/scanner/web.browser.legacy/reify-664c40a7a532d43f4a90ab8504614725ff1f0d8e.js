module.export({default:function(){return SearchResult}});var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default:function(v){_classCallCheck=v}},1);var _createClass;module.link("@babel/runtime/helpers/createClass",{default:function(v){_createClass=v}},2);var _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default:function(v){_possibleConstructorReturn=v}},3);var _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default:function(v){_getPrototypeOf=v}},4);var _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default:function(v){_assertThisInitialized=v}},5);var _inherits;module.link("@babel/runtime/helpers/inherits",{default:function(v){_inherits=v}},6);var _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default:function(v){_defineProperty=v}},7);var cx;module.link('classnames',{default:function(v){cx=v}},8);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},9);var React,Component;module.link('react',{default:function(v){React=v},Component:function(v){Component=v}},10);var createHTMLImage,customPropTypes,getElementType,getUnhandledProps,useKeyOnly;module.link('../../lib',{createHTMLImage:function(v){createHTMLImage=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v},useKeyOnly:function(v){useKeyOnly=v}},11);










 // Note: You technically only need the 'content' wrapper when there's an
// image. However, optionally wrapping it makes this function a lot more
// complicated and harder to read. Since always wrapping it doesn't affect
// the style in any way let's just do that.
//
// Note: To avoid requiring a wrapping div, we return an array here so to
// prevent rendering issues each node needs a unique key.

var defaultRenderer = function defaultRenderer(_ref) {
  var image = _ref.image,
      price = _ref.price,
      title = _ref.title,
      description = _ref.description;
  return [image && React.createElement("div", {
    key: "image",
    className: "image"
  }, createHTMLImage(image, {
    autoGenerateKey: false
  })), React.createElement("div", {
    key: "content",
    className: "content"
  }, price && React.createElement("div", {
    className: "price"
  }, price), title && React.createElement("div", {
    className: "title"
  }, title), description && React.createElement("div", {
    className: "description"
  }, description))];
};

defaultRenderer.handledProps = [];

var SearchResult =
/*#__PURE__*/
function (_Component) {
  _inherits(SearchResult, _Component);

  function SearchResult() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SearchResult);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SearchResult)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      var onClick = _this.props.onClick;
      if (onClick) onClick(e, _this.props);
    });

    return _this;
  }

  _createClass(SearchResult, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          className = _this$props.className,
          renderer = _this$props.renderer;
      var classes = cx(useKeyOnly(active, 'active'), 'result', className);
      var rest = getUnhandledProps(SearchResult, this.props);
      var ElementType = getElementType(SearchResult, this.props); // Note: You technically only need the 'content' wrapper when there's an
      // image. However, optionally wrapping it makes this function a lot more
      // complicated and harder to read. Since always wrapping it doesn't affect
      // the style in any way let's just do that.

      return React.createElement(ElementType, _extends({}, rest, {
        className: classes,
        onClick: this.handleClick
      }), renderer(this.props));
    }
  }]);

  return SearchResult;
}(Component);

_defineProperty(SearchResult, "defaultProps", {
  renderer: defaultRenderer
});

_defineProperty(SearchResult, "handledProps", ["active", "as", "className", "content", "description", "id", "image", "onClick", "price", "renderer", "title"]);


SearchResult.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** The item currently selected by keyboard shortcut. */
  active: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Additional text with less emphasis. */
  description: PropTypes.string,

  /** A unique identifier. */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Add an image to the item. */
  image: PropTypes.string,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: PropTypes.func,

  /** Customized text for price. */
  price: PropTypes.string,

  /**
   * Renders the result contents.
   *
   * @param {object} props - The SearchResult props object.
   * @returns {*} - Renderable result contents.
   */
  renderer: PropTypes.func,

  /** Display title. */
  title: PropTypes.string.isRequired
} : {};