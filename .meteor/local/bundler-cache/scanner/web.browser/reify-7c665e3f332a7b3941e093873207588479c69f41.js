module.export({default:()=>MountNode});let _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default(v){_classCallCheck=v}},0);let _createClass;module.link("@babel/runtime/helpers/createClass",{default(v){_createClass=v}},1);let _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default(v){_possibleConstructorReturn=v}},2);let _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default(v){_getPrototypeOf=v}},3);let _inherits;module.link("@babel/runtime/helpers/inherits",{default(v){_inherits=v}},4);let _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default(v){_defineProperty=v}},5);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},6);let Component;module.link('react',{Component(v){Component=v}},7);let customPropTypes;module.link('../../lib',{customPropTypes(v){customPropTypes=v}},8);let getNodeRefFromProps;module.link('./lib/getNodeRefFromProps',{default(v){getNodeRefFromProps=v}},9);let handleClassNamesChange;module.link('./lib/handleClassNamesChange',{default(v){handleClassNamesChange=v}},10);let NodeRegistry;module.link('./lib/NodeRegistry',{default(v){NodeRegistry=v}},11);











var nodeRegistry = new NodeRegistry();
/**
 * A component that allows to manage classNames on a DOM node in declarative manner.
 */

var MountNode =
/*#__PURE__*/
function (_Component) {
  _inherits(MountNode, _Component);

  function MountNode() {
    _classCallCheck(this, MountNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(MountNode).apply(this, arguments));
  }

  _createClass(MountNode, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(_ref) {
      var nextClassName = _ref.className;
      var currentClassName = this.props.className;
      return nextClassName !== currentClassName;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var nodeRef = getNodeRefFromProps(this.props);
      nodeRegistry.add(nodeRef, this);
      nodeRegistry.emit(nodeRef, handleClassNamesChange);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      nodeRegistry.emit(getNodeRefFromProps(this.props), handleClassNamesChange);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var nodeRef = getNodeRefFromProps(this.props);
      nodeRegistry.del(nodeRef, this);
      nodeRegistry.emit(nodeRef, handleClassNamesChange);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return MountNode;
}(Component);

_defineProperty(MountNode, "handledProps", ["className", "node"]);


MountNode.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Additional classes. */
  className: PropTypes.string,

  /** The DOM node where we will apply class names. Defaults to document.body. */
  node: PropTypes.oneOfType([customPropTypes.domNode, customPropTypes.refObject])
} : {};