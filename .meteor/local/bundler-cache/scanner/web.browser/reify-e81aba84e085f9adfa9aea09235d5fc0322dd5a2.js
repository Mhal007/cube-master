module.export({default:()=>ModalActions});let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default(v){_classCallCheck=v}},1);let _createClass;module.link("@babel/runtime/helpers/createClass",{default(v){_createClass=v}},2);let _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default(v){_possibleConstructorReturn=v}},3);let _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default(v){_getPrototypeOf=v}},4);let _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default(v){_assertThisInitialized=v}},5);let _inherits;module.link("@babel/runtime/helpers/inherits",{default(v){_inherits=v}},6);let _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default(v){_defineProperty=v}},7);let _map;module.link("lodash/map",{default(v){_map=v}},8);let _invoke;module.link("lodash/invoke",{default(v){_invoke=v}},9);let cx;module.link('classnames',{default(v){cx=v}},10);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},11);let React,Component;module.link('react',{default(v){React=v},Component(v){Component=v}},12);let childrenUtils,createShorthandFactory,customPropTypes,getElementType,getUnhandledProps;module.link('../../lib',{childrenUtils(v){childrenUtils=v},createShorthandFactory(v){createShorthandFactory=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v}},13);let Button;module.link('../../elements/Button',{default(v){Button=v}},14);














/**
 * A modal can contain a row of actions.
 */

var ModalActions =
/*#__PURE__*/
function (_Component) {
  _inherits(ModalActions, _Component);

  function ModalActions() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ModalActions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ModalActions)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleButtonOverrides", function (predefinedProps) {
      return {
        onClick: function onClick(e, buttonProps) {
          _invoke(predefinedProps, 'onClick', e, buttonProps);

          _invoke(_this.props, 'onActionClick', e, buttonProps);
        }
      };
    });

    return _this;
  }

  _createClass(ModalActions, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          actions = _this$props.actions,
          children = _this$props.children,
          className = _this$props.className,
          content = _this$props.content;
      var classes = cx('actions', className);
      var rest = getUnhandledProps(ModalActions, this.props);
      var ElementType = getElementType(ModalActions, this.props);

      if (!childrenUtils.isNil(children)) {
        return React.createElement(ElementType, _extends({}, rest, {
          className: classes
        }), children);
      }

      if (!childrenUtils.isNil(content)) {
        return React.createElement(ElementType, _extends({}, rest, {
          className: classes
        }), content);
      }

      return React.createElement(ElementType, _extends({}, rest, {
        className: classes
      }), _map(actions, function (action) {
        return Button.create(action, {
          overrideProps: _this2.handleButtonOverrides
        });
      }));
    }
  }]);

  return ModalActions;
}(Component);

_defineProperty(ModalActions, "handledProps", ["actions", "as", "children", "className", "content", "onActionClick"]);


ModalActions.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Array of shorthand buttons. */
  actions: customPropTypes.collectionShorthand,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /**
   * Action onClick handler when using shorthand `actions`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props from the clicked action.
   */
  onActionClick: customPropTypes.every([customPropTypes.disallow(['children']), PropTypes.func])
} : {};
ModalActions.create = createShorthandFactory(ModalActions, function (actions) {
  return {
    actions: actions
  };
});