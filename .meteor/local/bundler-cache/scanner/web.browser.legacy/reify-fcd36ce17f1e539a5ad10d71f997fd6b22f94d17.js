module.export({ManagerContext:function(){return ManagerContext},default:function(){return Manager}});var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default:function(v){_assertThisInitialized=v}},1);var _inheritsLoose;module.link("@babel/runtime/helpers/inheritsLoose",{default:function(v){_inheritsLoose=v}},2);var _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default:function(v){_defineProperty=v}},3);var React;module.link('react',{"*":function(v){React=v}},4);var createContext;module.link('create-react-context',{default:function(v){createContext=v}},5);





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

