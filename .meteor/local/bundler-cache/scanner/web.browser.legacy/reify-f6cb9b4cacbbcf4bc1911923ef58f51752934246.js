var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var _objectSpread;module.link("@babel/runtime/helpers/objectSpread",{default:function(v){_objectSpread=v}},1);var _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default:function(v){_classCallCheck=v}},2);var _createClass;module.link("@babel/runtime/helpers/createClass",{default:function(v){_createClass=v}},3);var _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default:function(v){_possibleConstructorReturn=v}},4);var _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default:function(v){_getPrototypeOf=v}},5);var _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default:function(v){_assertThisInitialized=v}},6);var _inherits;module.link("@babel/runtime/helpers/inherits",{default:function(v){_inherits=v}},7);var _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default:function(v){_defineProperty=v}},8);var _invoke;module.link("lodash/invoke",{default:function(v){_invoke=v}},9);var _get;module.link("lodash/get",{default:function(v){_get=v}},10);var Ref;module.link('@stardust-ui/react-component-ref',{Ref:function(v){Ref=v}},11);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},12);var React,Component,createRef;module.link('react',{default:function(v){React=v},Component:function(v){Component=v},createRef:function(v){createRef=v}},13);var getElementType,getUnhandledProps;module.link('../../lib',{getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v}},14);














/**
 * A TextArea can be used to allow for extended user input.
 * @see Form
 */

var TextArea =
/*#__PURE__*/
function (_Component) {
  _inherits(TextArea, _Component);

  function TextArea() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TextArea);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TextArea)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "ref", createRef());

    _defineProperty(_assertThisInitialized(_this), "focus", function () {
      return _this.ref.current.focus();
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var value = _get(e, 'target.value');

      _invoke(_this.props, 'onChange', e, _objectSpread({}, _this.props, {
        value: value
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "handleInput", function (e) {
      var value = _get(e, 'target.value');

      _invoke(_this.props, 'onInput', e, _objectSpread({}, _this.props, {
        value: value
      }));
    });

    return _this;
  }

  _createClass(TextArea, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          rows = _this$props.rows,
          value = _this$props.value;
      var rest = getUnhandledProps(TextArea, this.props);
      var ElementType = getElementType(TextArea, this.props);
      return React.createElement(Ref, {
        innerRef: this.ref
      }, React.createElement(ElementType, _extends({}, rest, {
        onChange: this.handleChange,
        onInput: this.handleInput,
        rows: rows,
        value: value
      })));
    }
  }]);

  return TextArea;
}(Component);

_defineProperty(TextArea, "defaultProps", {
  as: 'textarea',
  rows: 3
});

_defineProperty(TextArea, "handledProps", ["as", "onChange", "onInput", "rows", "value"]);

TextArea.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /**
   * Called on change.
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onChange: PropTypes.func,

  /**
   * Called on input.
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onInput: PropTypes.func,

  /** Indicates row count for a TextArea. */
  rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** The value of the textarea. */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
} : {};
module.exportDefault(TextArea);