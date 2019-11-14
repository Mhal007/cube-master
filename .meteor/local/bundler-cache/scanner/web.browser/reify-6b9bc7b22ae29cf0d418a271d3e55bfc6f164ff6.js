let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default(v){_classCallCheck=v}},1);let _createClass;module.link("@babel/runtime/helpers/createClass",{default(v){_createClass=v}},2);let _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default(v){_possibleConstructorReturn=v}},3);let _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default(v){_getPrototypeOf=v}},4);let _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default(v){_assertThisInitialized=v}},5);let _inherits;module.link("@babel/runtime/helpers/inherits",{default(v){_inherits=v}},6);let _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default(v){_defineProperty=v}},7);let _has;module.link("lodash/has",{default(v){_has=v}},8);let _invoke;module.link("lodash/invoke",{default(v){_invoke=v}},9);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},10);let React,Component;module.link('react',{default(v){React=v},Component(v){Component=v}},11);let customPropTypes,getUnhandledProps;module.link('../../lib',{customPropTypes(v){customPropTypes=v},getUnhandledProps(v){getUnhandledProps=v}},12);let Button;module.link('../../elements/Button',{default(v){Button=v}},13);let Modal;module.link('../../modules/Modal',{default(v){Modal=v}},14);














/**
 * A Confirm modal gives the user a choice to confirm or cancel an action/
 * @see Modal
 */

var Confirm =
/*#__PURE__*/
function (_Component) {
  _inherits(Confirm, _Component);

  function Confirm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Confirm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Confirm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleCancel", function (e) {
      _invoke(_this.props, 'onCancel', e, _this.props);
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancelOverrides", function (predefinedProps) {
      return {
        onClick: function onClick(e, buttonProps) {
          _invoke(predefinedProps, 'onClick', e, buttonProps);

          _this.handleCancel(e);
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleConfirmOverrides", function (predefinedProps) {
      return {
        onClick: function onClick(e, buttonProps) {
          _invoke(predefinedProps, 'onClick', e, buttonProps);

          _invoke(_this.props, 'onConfirm', e, _this.props);
        }
      };
    });

    return _this;
  }

  _createClass(Confirm, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          cancelButton = _this$props.cancelButton,
          confirmButton = _this$props.confirmButton,
          content = _this$props.content,
          header = _this$props.header,
          open = _this$props.open,
          size = _this$props.size;
      var rest = getUnhandledProps(Confirm, this.props); // `open` is auto controlled by the Modal
      // It cannot be present (even undefined) with `defaultOpen`
      // only apply it if the user provided an open prop

      var openProp = {};
      if (_has(this.props, 'open')) openProp.open = open;
      return React.createElement(Modal, _extends({}, rest, openProp, {
        size: size,
        onClose: this.handleCancel
      }), Modal.Header.create(header, {
        autoGenerateKey: false
      }), Modal.Content.create(content, {
        autoGenerateKey: false
      }), React.createElement(Modal.Actions, null, Button.create(cancelButton, {
        autoGenerateKey: false,
        overrideProps: this.handleCancelOverrides
      }), Button.create(confirmButton, {
        autoGenerateKey: false,
        defaultProps: {
          primary: true
        },
        overrideProps: this.handleConfirmOverrides
      })));
    }
  }]);

  return Confirm;
}(Component);

_defineProperty(Confirm, "defaultProps", {
  cancelButton: 'Cancel',
  confirmButton: 'OK',
  content: 'Are you sure?',
  size: 'small'
});

_defineProperty(Confirm, "handledProps", ["cancelButton", "confirmButton", "content", "header", "onCancel", "onConfirm", "open", "size"]);

Confirm.propTypes = process.env.NODE_ENV !== "production" ? {
  /** The cancel button text. */
  cancelButton: customPropTypes.itemShorthand,

  /** The OK button text. */
  confirmButton: customPropTypes.itemShorthand,

  /** The ModalContent text. */
  content: customPropTypes.itemShorthand,

  /** The ModalHeader text. */
  header: customPropTypes.itemShorthand,

  /**
   * Called when the Modal is closed without clicking confirm.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onCancel: PropTypes.func,

  /**
   * Called when the OK button is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onConfirm: PropTypes.func,

  /** Whether or not the modal is visible. */
  open: PropTypes.bool,

  /** A Confirm can vary in size */
  size: PropTypes.oneOf(['mini', 'tiny', 'small', 'large', 'fullscreen'])
} : {};
module.exportDefault(Confirm);