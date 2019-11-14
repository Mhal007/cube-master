let _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default(v){_classCallCheck=v}},0);let _createClass;module.link("@babel/runtime/helpers/createClass",{default(v){_createClass=v}},1);let _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default(v){_possibleConstructorReturn=v}},2);let _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default(v){_getPrototypeOf=v}},3);let _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default(v){_assertThisInitialized=v}},4);let _inherits;module.link("@babel/runtime/helpers/inherits",{default(v){_inherits=v}},5);let _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default(v){_defineProperty=v}},6);let _invoke;module.link("lodash/invoke",{default(v){_invoke=v}},7);let handleRef,Ref;module.link('@stardust-ui/react-component-ref',{handleRef(v){handleRef=v},Ref(v){Ref=v}},8);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},9);let React,Component;module.link('react',{default(v){React=v},Component(v){Component=v}},10);let createPortal;module.link('react-dom',{createPortal(v){createPortal=v}},11);let customPropTypes,isBrowser;module.link('../../lib',{customPropTypes(v){customPropTypes=v},isBrowser(v){isBrowser=v}},12);













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