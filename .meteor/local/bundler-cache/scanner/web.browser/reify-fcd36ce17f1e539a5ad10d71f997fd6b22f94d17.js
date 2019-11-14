module.export({ManagerContext:()=>ManagerContext,default:()=>Manager});let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default(v){_assertThisInitialized=v}},1);let _inheritsLoose;module.link("@babel/runtime/helpers/inheritsLoose",{default(v){_inheritsLoose=v}},2);let _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default(v){_defineProperty=v}},3);let React;module.link('react',{"*"(v){React=v}},4);let createContext;module.link('create-react-context',{default(v){createContext=v}},5);





var ManagerContext = createContext({
  setReferenceNode: undefined,
  referenceNode: undefined
});

var Manager =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Manager, _React$Component);

  function Manager() {
    var _this;

    _this = _React$Component.call(this) || this;

    _defineProperty(_assertThisInitialized(_this), "setReferenceNode", function (referenceNode) {
      if (!referenceNode || _this.state.context.referenceNode === referenceNode) {
        return;
      }

      _this.setState(function (_ref) {
        var context = _ref.context;
        return {
          context: _extends({}, context, {
            referenceNode: referenceNode
          })
        };
      });
    });

    _this.state = {
      context: {
        setReferenceNode: _this.setReferenceNode,
        referenceNode: undefined
      }
    };
    return _this;
  }

  var _proto = Manager.prototype;

  _proto.render = function render() {
    return React.createElement(ManagerContext.Provider, {
      value: this.state.context
    }, this.props.children);
  };

  return Manager;
}(React.Component);

