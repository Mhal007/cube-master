let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default(v){_classCallCheck=v}},1);let _createClass;module.link("@babel/runtime/helpers/createClass",{default(v){_createClass=v}},2);let _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default(v){_possibleConstructorReturn=v}},3);let _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default(v){_getPrototypeOf=v}},4);let _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default(v){_assertThisInitialized=v}},5);let _inherits;module.link("@babel/runtime/helpers/inherits",{default(v){_inherits=v}},6);let _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default(v){_defineProperty=v}},7);let _invoke;module.link("lodash/invoke",{default(v){_invoke=v}},8);let _without;module.link("lodash/without",{default(v){_without=v}},9);let cx;module.link('classnames',{default(v){cx=v}},10);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},11);let React,Component;module.link('react',{default(v){React=v},Component(v){Component=v}},12);let getElementType,getUnhandledProps,SUI,useKeyOnly,useWidthProp;module.link('../../lib',{getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},SUI(v){SUI=v},useKeyOnly(v){useKeyOnly=v},useWidthProp(v){useWidthProp=v}},13);let FormButton;module.link('./FormButton',{default(v){FormButton=v}},14);let FormCheckbox;module.link('./FormCheckbox',{default(v){FormCheckbox=v}},15);let FormDropdown;module.link('./FormDropdown',{default(v){FormDropdown=v}},16);let FormField;module.link('./FormField',{default(v){FormField=v}},17);let FormGroup;module.link('./FormGroup',{default(v){FormGroup=v}},18);let FormInput;module.link('./FormInput',{default(v){FormInput=v}},19);let FormRadio;module.link('./FormRadio',{default(v){FormRadio=v}},20);let FormSelect;module.link('./FormSelect',{default(v){FormSelect=v}},21);let FormTextArea;module.link('./FormTextArea',{default(v){FormTextArea=v}},22);






















/**
 * A Form displays a set of related user input fields in a structured way.
 * @see Button
 * @see Checkbox
 * @see Dropdown
 * @see Input
 * @see Message
 * @see Radio
 * @see Select
 * @see Visibility
 */

var Form =
/*#__PURE__*/
function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Form)).call.apply(_getPrototypeOf2, [this].concat(_args)));

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      var action = _this.props.action; // Heads up! Third party libs can pass own data as first argument, we need to check that it has preventDefault()
      // method.

      if (typeof action !== 'string') _invoke(e, 'preventDefault');

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      _invoke.apply(void 0, [_this.props, 'onSubmit', e, _this.props].concat(args));
    });

    return _this;
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          action = _this$props.action,
          children = _this$props.children,
          className = _this$props.className,
          error = _this$props.error,
          inverted = _this$props.inverted,
          loading = _this$props.loading,
          reply = _this$props.reply,
          size = _this$props.size,
          success = _this$props.success,
          unstackable = _this$props.unstackable,
          warning = _this$props.warning,
          widths = _this$props.widths;
      var classes = cx('ui', size, useKeyOnly(error, 'error'), useKeyOnly(inverted, 'inverted'), useKeyOnly(loading, 'loading'), useKeyOnly(reply, 'reply'), useKeyOnly(success, 'success'), useKeyOnly(unstackable, 'unstackable'), useKeyOnly(warning, 'warning'), useWidthProp(widths, null, true), 'form', className);
      var rest = getUnhandledProps(Form, this.props);
      var ElementType = getElementType(Form, this.props);
      return React.createElement(ElementType, _extends({}, rest, {
        action: action,
        className: classes,
        onSubmit: this.handleSubmit
      }), children);
    }
  }]);

  return Form;
}(Component);

_defineProperty(Form, "defaultProps", {
  as: 'form'
});

_defineProperty(Form, "Field", FormField);

_defineProperty(Form, "Button", FormButton);

_defineProperty(Form, "Checkbox", FormCheckbox);

_defineProperty(Form, "Dropdown", FormDropdown);

_defineProperty(Form, "Group", FormGroup);

_defineProperty(Form, "Input", FormInput);

_defineProperty(Form, "Radio", FormRadio);

_defineProperty(Form, "Select", FormSelect);

_defineProperty(Form, "TextArea", FormTextArea);

_defineProperty(Form, "handledProps", ["action", "as", "children", "className", "error", "inverted", "loading", "onSubmit", "reply", "size", "success", "unstackable", "warning", "widths"]);

Form.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** The HTML form action */
  action: PropTypes.string,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Automatically show any error Message children. */
  error: PropTypes.bool,

  /** A form can have its color inverted for contrast. */
  inverted: PropTypes.bool,

  /** Automatically show a loading indicator. */
  loading: PropTypes.bool,

  /** The HTML form submit handler. */
  onSubmit: PropTypes.func,

  /** A comment can contain a form to reply to a comment. This may have arbitrary content. */
  reply: PropTypes.bool,

  /** A form can vary in size. */
  size: PropTypes.oneOf(_without(SUI.SIZES, 'medium')),

  /** Automatically show any success Message children. */
  success: PropTypes.bool,

  /** A form can prevent itself from stacking on mobile. */
  unstackable: PropTypes.bool,

  /** Automatically show any warning Message children. */
  warning: PropTypes.bool,

  /** Forms can automatically divide fields to be equal width. */
  widths: PropTypes.oneOf(['equal'])
} : {};
module.exportDefault(Form);