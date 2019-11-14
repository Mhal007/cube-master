module.export({default:()=>RefFindNode});let _classCallCheck;module.link("@babel/runtime/helpers/esm/classCallCheck",{default(v){_classCallCheck=v}},0);let _createClass;module.link("@babel/runtime/helpers/esm/createClass",{default(v){_createClass=v}},1);let _possibleConstructorReturn;module.link("@babel/runtime/helpers/esm/possibleConstructorReturn",{default(v){_possibleConstructorReturn=v}},2);let _getPrototypeOf;module.link("@babel/runtime/helpers/esm/getPrototypeOf",{default(v){_getPrototypeOf=v}},3);let _assertThisInitialized;module.link("@babel/runtime/helpers/esm/assertThisInitialized",{default(v){_assertThisInitialized=v}},4);let _inherits;module.link("@babel/runtime/helpers/esm/inherits",{default(v){_inherits=v}},5);let _defineProperty;module.link("@babel/runtime/helpers/esm/defineProperty",{default(v){_defineProperty=v}},6);let PropTypes;module.link('prop-types',{"*"(v){PropTypes=v}},7);let React;module.link('react',{"*"(v){React=v}},8);let ReactDOM;module.link('react-dom',{"*"(v){ReactDOM=v}},9);let handleRef;module.link('./handleRef',{default(v){handleRef=v}},10);let refPropType;module.link('./types',{refPropType(v){refPropType=v}},11);












var RefFindNode =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RefFindNode, _React$Component);

  function RefFindNode() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RefFindNode);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RefFindNode)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "prevNode", null);

    return _this;
  }

  _createClass(RefFindNode, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prevNode = ReactDOM.findDOMNode(this);
      handleRef(this.props.innerRef, this.prevNode);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var currentNode = ReactDOM.findDOMNode(this);

      if (this.prevNode !== currentNode) {
        this.prevNode = currentNode;
        handleRef(this.props.innerRef, currentNode);
      }

      if (prevProps.innerRef !== this.props.innerRef) {
        handleRef(this.props.innerRef, currentNode);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      handleRef(this.props.innerRef, null);
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children;
    }
  }]);

  return RefFindNode;
}(React.Component);

_defineProperty(RefFindNode, "displayName", 'RefFindNode');

_defineProperty(RefFindNode, "propTypes", process.env.NODE_ENV !== 'production' ? {
  children: PropTypes.element.isRequired,
  innerRef: refPropType.isRequired
} : {});

