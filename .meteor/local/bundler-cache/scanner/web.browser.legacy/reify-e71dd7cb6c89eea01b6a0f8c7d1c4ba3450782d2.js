var _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default:function(v){_classCallCheck=v}},0);var _createClass;module.link("@babel/runtime/helpers/createClass",{default:function(v){_createClass=v}},1);var _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default:function(v){_possibleConstructorReturn=v}},2);var _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default:function(v){_getPrototypeOf=v}},3);var _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default:function(v){_assertThisInitialized=v}},4);var _inherits;module.link("@babel/runtime/helpers/inherits",{default:function(v){_inherits=v}},5);var _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default:function(v){_defineProperty=v}},6);var _invoke;module.link("lodash/invoke",{default:function(v){_invoke=v}},7);var handleRef,Ref;module.link('@stardust-ui/react-component-ref',{handleRef:function(v){handleRef=v},Ref:function(v){Ref=v}},8);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},9);var React,Component;module.link('react',{default:function(v){React=v},Component:function(v){Component=v}},10);var createPortal;module.link('react-dom',{createPortal:function(v){createPortal=v}},11);var customPropTypes,isBrowser;module.link('../../lib',{customPropTypes:function(v){customPropTypes=v},isBrowser:function(v){isBrowser=v}},12);













/**
 * An inner component that allows you to render children outside their parent.
 */
var PortalInner =
/*#__PURE__*/
function (_Component) {
  _inherits(PortalInner, _Component);

  function PortalInner() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PortalInner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PortalInner)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleRef", function (c) {
      handleRef(_this.props.innerRef, c);
    });

    return _this;
  }

  _createClass(PortalInner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _invoke(this.props, 'onMount', null, this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _invoke(this.props, 'onUnmount', null, this.props);
    }
  }, {
    key: "render",
    value: function render() {
      if (!isBrowser()) return null;
      var _this$props = this.props,
          children = _this$props.children,
          _this$props$mountNode = _this$props.mountNode,
          mountNode = _this$props$mountNode === void 0 ? document.body : _this$props$mountNode;
      return createPortal(React.createElement(Ref, {
        innerRef: this.handleRef
      }, children), mountNode);
    }
  }]);

  return PortalInner;
}(Component);

_defineProperty(PortalInner, "handledProps", ["children", "innerRef", "mountNode", "onMount", "onUnmount"]);

PortalInner.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Primary content. */
  children: PropTypes.node.isRequired,

  /** Called with a ref to the inner node. */
  innerRef: customPropTypes.ref,

  /** The node where the portal should mount. */
  mountNode: PropTypes.any,

  /**
   * Called when the portal is mounted on the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: PropTypes.func,

  /**
   * Called when the portal is unmounted from the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: PropTypes.func
} : {};
module.exportDefault(PortalInner);