module.export({default:function(){return MountNode}});var _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default:function(v){_classCallCheck=v}},0);var _createClass;module.link("@babel/runtime/helpers/createClass",{default:function(v){_createClass=v}},1);var _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default:function(v){_possibleConstructorReturn=v}},2);var _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default:function(v){_getPrototypeOf=v}},3);var _inherits;module.link("@babel/runtime/helpers/inherits",{default:function(v){_inherits=v}},4);var _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default:function(v){_defineProperty=v}},5);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},6);var Component;module.link('react',{Component:function(v){Component=v}},7);var customPropTypes;module.link('../../lib',{customPropTypes:function(v){customPropTypes=v}},8);var getNodeRefFromProps;module.link('./lib/getNodeRefFromProps',{default:function(v){getNodeRefFromProps=v}},9);var handleClassNamesChange;module.link('./lib/handleClassNamesChange',{default:function(v){handleClassNamesChange=v}},10);var NodeRegistry;module.link('./lib/NodeRegistry',{default:function(v){NodeRegistry=v}},11);











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