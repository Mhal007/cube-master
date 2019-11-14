let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let _slicedToArray;module.link("@babel/runtime/helpers/slicedToArray",{default(v){_slicedToArray=v}},1);let _objectSpread;module.link("@babel/runtime/helpers/objectSpread",{default(v){_objectSpread=v}},2);let _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default(v){_classCallCheck=v}},3);let _createClass;module.link("@babel/runtime/helpers/createClass",{default(v){_createClass=v}},4);let _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default(v){_possibleConstructorReturn=v}},5);let _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default(v){_getPrototypeOf=v}},6);let _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default(v){_assertThisInitialized=v}},7);let _inherits;module.link("@babel/runtime/helpers/inherits",{default(v){_inherits=v}},8);let _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default(v){_defineProperty=v}},9);let _includes;module.link("lodash/includes",{default(v){_includes=v}},10);let _map;module.link("lodash/map",{default(v){_map=v}},11);let _invoke;module.link("lodash/invoke",{default(v){_invoke=v}},12);let _get;module.link("lodash/get",{default(v){_get=v}},13);let _isNil;module.link("lodash/isNil",{default(v){_isNil=v}},14);let handleRef;module.link('@stardust-ui/react-component-ref',{handleRef(v){handleRef=v}},15);let cx;module.link('classnames',{default(v){cx=v}},16);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},17);let React,Children,cloneElement,Component,createRef;module.link('react',{default(v){React=v},Children(v){Children=v},cloneElement(v){cloneElement=v},Component(v){Component=v},createRef(v){createRef=v}},18);let childrenUtils,createHTMLInput,createShorthandFactory,customPropTypes,getElementType,getUnhandledProps,partitionHTMLProps,useKeyOnly,useValueAndKey;module.link('../../lib',{childrenUtils(v){childrenUtils=v},createHTMLInput(v){createHTMLInput=v},createShorthandFactory(v){createShorthandFactory=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},partitionHTMLProps(v){partitionHTMLProps=v},useKeyOnly(v){useKeyOnly=v},useValueAndKey(v){useValueAndKey=v}},19);let Button;module.link('../Button',{default(v){Button=v}},20);let Icon;module.link('../Icon',{default(v){Icon=v}},21);let Label;module.link('../Label',{default(v){Label=v}},22);






















/**
 * An Input is a field used to elicit a response from a user.
 * @see Button
 * @see Form
 * @see Icon
 * @see Label
 */

var Input =
/*#__PURE__*/
function (_Component) {
  _inherits(Input, _Component);

  function Input() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Input)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "inputRef", createRef());

    _defineProperty(_assertThisInitialized(_this), "computeIcon", function () {
      var _this$props = _this.props,
          loading = _this$props.loading,
          icon = _this$props.icon;
      if (!_isNil(icon)) return icon;
      if (loading) return 'spinner';
    });

    _defineProperty(_assertThisInitialized(_this), "computeTabIndex", function () {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          tabIndex = _this$props2.tabIndex;
      if (!_isNil(tabIndex)) return tabIndex;
      if (disabled) return -1;
    });

    _defineProperty(_assertThisInitialized(_this), "focus", function () {
      return _this.inputRef.current.focus();
    });

    _defineProperty(_assertThisInitialized(_this), "select", function () {
      return _this.inputRef.current.select();
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var value = _get(e, 'target.value');

      _invoke(_this.props, 'onChange', e, _objectSpread({}, _this.props, {
        value: value
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "handleChildOverrides", function (child, defaultProps) {
      return _objectSpread({}, defaultProps, child.props, {
        ref: function ref(c) {
          handleRef(child.ref, c);
          _this.inputRef.current = c;
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "partitionProps", function () {
      var _this$props3 = _this.props,
          disabled = _this$props3.disabled,
          type = _this$props3.type;

      var tabIndex = _this.computeTabIndex();

      var unhandled = getUnhandledProps(Input, _this.props);

      var _partitionHTMLProps = partitionHTMLProps(unhandled),
          _partitionHTMLProps2 = _slicedToArray(_partitionHTMLProps, 2),
          htmlInputProps = _partitionHTMLProps2[0],
          rest = _partitionHTMLProps2[1];

      return [_objectSpread({}, htmlInputProps, {
        disabled: disabled,
        type: type,
        tabIndex: tabIndex,
        onChange: _this.handleChange,
        ref: _this.inputRef
      }), rest];
    });

    return _this;
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          action = _this$props4.action,
          actionPosition = _this$props4.actionPosition,
          children = _this$props4.children,
          className = _this$props4.className,
          disabled = _this$props4.disabled,
          error = _this$props4.error,
          fluid = _this$props4.fluid,
          focus = _this$props4.focus,
          icon = _this$props4.icon,
          iconPosition = _this$props4.iconPosition,
          input = _this$props4.input,
          inverted = _this$props4.inverted,
          label = _this$props4.label,
          labelPosition = _this$props4.labelPosition,
          loading = _this$props4.loading,
          size = _this$props4.size,
          transparent = _this$props4.transparent,
          type = _this$props4.type;
      var classes = cx('ui', size, useKeyOnly(disabled, 'disabled'), useKeyOnly(error, 'error'), useKeyOnly(fluid, 'fluid'), useKeyOnly(focus, 'focus'), useKeyOnly(inverted, 'inverted'), useKeyOnly(loading, 'loading'), useKeyOnly(transparent, 'transparent'), useValueAndKey(actionPosition, 'action') || useKeyOnly(action, 'action'), useValueAndKey(iconPosition, 'icon') || useKeyOnly(icon || loading, 'icon'), useValueAndKey(labelPosition, 'labeled') || useKeyOnly(label, 'labeled'), 'input', className);
      var ElementType = getElementType(Input, this.props);

      var _this$partitionProps = this.partitionProps(),
          _this$partitionProps2 = _slicedToArray(_this$partitionProps, 2),
          htmlInputProps = _this$partitionProps2[0],
          rest = _this$partitionProps2[1]; // Render with children
      // ----------------------------------------


      if (!childrenUtils.isNil(children)) {
        // add htmlInputProps to the `<input />` child
        var childElements = _map(Children.toArray(children), function (child) {
          if (child.type !== 'input') return child;
          return cloneElement(child, _this2.handleChildOverrides(child, htmlInputProps));
        });

        return React.createElement(ElementType, _extends({}, rest, {
          className: classes
        }), childElements);
      } // Render Shorthand
      // ----------------------------------------


      var actionElement = Button.create(action, {
        autoGenerateKey: false
      });
      var labelElement = Label.create(label, {
        defaultProps: {
          className: cx('label', // add 'left|right corner'
          _includes(labelPosition, 'corner') && labelPosition)
        },
        autoGenerateKey: false
      });
      return React.createElement(ElementType, _extends({}, rest, {
        className: classes
      }), actionPosition === 'left' && actionElement, labelPosition !== 'right' && labelElement, createHTMLInput(input || type, {
        defaultProps: htmlInputProps,
        autoGenerateKey: false
      }), Icon.create(this.computeIcon(), {
        autoGenerateKey: false
      }), actionPosition !== 'left' && actionElement, labelPosition === 'right' && labelElement);
    }
  }]);

  return Input;
}(Component);

_defineProperty(Input, "defaultProps", {
  type: 'text'
});

_defineProperty(Input, "handledProps", ["action", "actionPosition", "as", "children", "className", "disabled", "error", "fluid", "focus", "icon", "iconPosition", "input", "inverted", "label", "labelPosition", "loading", "onChange", "size", "tabIndex", "transparent", "type"]);

Input.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** An Input can be formatted to alert the user to an action they may perform. */
  action: PropTypes.oneOfType([PropTypes.bool, customPropTypes.itemShorthand]),

  /** An action can appear along side an Input on the left or right. */
  actionPosition: PropTypes.oneOf(['left']),

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** An Input field can show that it is disabled. */
  disabled: PropTypes.bool,

  /** An Input field can show the data contains errors. */
  error: PropTypes.bool,

  /** Take on the size of its container. */
  fluid: PropTypes.bool,

  /** An Input field can show a user is currently interacting with it. */
  focus: PropTypes.bool,

  /** Optional Icon to display inside the Input. */
  icon: PropTypes.oneOfType([PropTypes.bool, customPropTypes.itemShorthand]),

  /** An Icon can appear inside an Input on the left or right. */
  iconPosition: PropTypes.oneOf(['left']),

  /** Shorthand for creating the HTML Input. */
  input: customPropTypes.itemShorthand,

  /** Format to appear on dark backgrounds. */
  inverted: PropTypes.bool,

  /** Optional Label to display along side the Input. */
  label: customPropTypes.itemShorthand,

  /** A Label can appear outside an Input on the left or right. */
  labelPosition: PropTypes.oneOf(['left', 'right', 'left corner', 'right corner']),

  /** An Icon Input field can show that it is currently loading data. */
  loading: PropTypes.bool,

  /**
   * Called on change.
   *
   * @param {ChangeEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and a proposed value.
   */
  onChange: PropTypes.func,

  /** An Input can vary in size. */
  size: PropTypes.oneOf(['mini', 'small', 'large', 'big', 'huge', 'massive']),

  /** An Input can receive focus. */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Transparent Input has no background. */
  transparent: PropTypes.bool,

  /** The HTML input type. */
  type: PropTypes.string
} : {};
Input.create = createShorthandFactory(Input, function (type) {
  return {
    type: type
  };
});
module.exportDefault(Input);