module.export({default:function(){return Reference}});var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default:function(v){_assertThisInitialized=v}},1);var _inheritsLoose;module.link("@babel/runtime/helpers/inheritsLoose",{default:function(v){_inheritsLoose=v}},2);var _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default:function(v){_defineProperty=v}},3);var React;module.link('react',{"*":function(v){React=v}},4);var warning;module.link('warning',{default:function(v){warning=v}},5);var ManagerContext;module.link('./Manager',{ManagerContext:function(v){ManagerContext=v}},6);var safeInvoke,unwrapArray;module.link('./utils',{safeInvoke:function(v){safeInvoke=v},unwrapArray:function(v){unwrapArray=v}},7);








var InnerReference =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(InnerReference, _React$Component);

  function InnerReference() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "refHandler", function (node) {
      safeInvoke(_this.props.innerRef, node);
      safeInvoke(_this.props.setReferenceNode, node);
    });

    return _this;
  }

  var _proto = InnerReference.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    safeInvoke(this.props.innerRef, null);
  };

  _proto.render = function render() {
    warning(Boolean(this.props.setReferenceNode), '`Reference` should not be used outside of a `Manager` component.');
    return unwrapArray(this.props.children)({
      ref: this.refHandler
    });
  };

  return InnerReference;
}(React.Component);

function Reference(props) {
  return React.createElement(ManagerContext.Consumer, null, function (_ref) {
    var setReferenceNode = _ref.setReferenceNode;
    return React.createElement(InnerReference, _extends({
      setReferenceNode: setReferenceNode
    }, props));
  });
}