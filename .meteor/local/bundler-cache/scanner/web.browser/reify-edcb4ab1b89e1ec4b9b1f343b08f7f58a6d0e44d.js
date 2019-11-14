module.export({default:()=>TransitionablePortal});let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let _objectSpread;module.link("@babel/runtime/helpers/objectSpread",{default(v){_objectSpread=v}},1);let _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default(v){_classCallCheck=v}},2);let _createClass;module.link("@babel/runtime/helpers/createClass",{default(v){_createClass=v}},3);let _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default(v){_possibleConstructorReturn=v}},4);let _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default(v){_getPrototypeOf=v}},5);let _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default(v){_assertThisInitialized=v}},6);let _inherits;module.link("@babel/runtime/helpers/inherits",{default(v){_inherits=v}},7);let _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default(v){_defineProperty=v}},8);let _invoke;module.link("lodash/invoke",{default(v){_invoke=v}},9);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},10);let React,Component;module.link('react',{default(v){React=v},Component(v){Component=v}},11);let Portal;module.link('../Portal',{default(v){Portal=v}},12);let Transition;module.link('../../modules/Transition',{default(v){Transition=v}},13);let getUnhandledProps;module.link('../../lib',{getUnhandledProps(v){getUnhandledProps=v}},14);















/**
 * A sugar for `Portal` and `Transition`.
 * @see Portal
 * @see Transition
 */
var TransitionablePortal =
/*#__PURE__*/
function (_Component) {
  _inherits(TransitionablePortal, _Component);

  function TransitionablePortal(props) {
    var _this;

    _classCallCheck(this, TransitionablePortal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TransitionablePortal).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handlePortalClose", function () {
      _this.setState({
        portalOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlePortalOpen", function () {
      _this.setState({
        portalOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleTransitionHide", function (nothing, data) {
      var portalOpen = _this.state.portalOpen;

      _this.setState({
        transitionVisible: false
      });

      _invoke(_this.props, 'onClose', null, _objectSpread({}, data, {
        portalOpen: false,
        transitionVisible: false
      }));

      _invoke(_this.props, 'onHide', null, _objectSpread({}, data, {
        portalOpen: portalOpen,
        transitionVisible: false
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "handleTransitionStart", function (nothing, data) {
      var portalOpen = _this.state.portalOpen;
      var status = data.status;
      var transitionVisible = status === Transition.ENTERING;

      _invoke(_this.props, 'onStart', null, _objectSpread({}, data, {
        portalOpen: portalOpen,
        transitionVisible: transitionVisible
      })); // Heads up! TransitionablePortal fires onOpen callback on the start of transition animation


      if (!transitionVisible) return;

      _this.setState({
        transitionVisible: transitionVisible
      });

      _invoke(_this.props, 'onOpen', null, _objectSpread({}, data, {
        transitionVisible: transitionVisible,
        portalOpen: true
      }));
    });

    _this.state = {
      portalOpen: props.open
    };
    return _this;
  } // ----------------------------------------
  // Lifecycle
  // ----------------------------------------
  // eslint-disable-next-line camelcase


  _createClass(TransitionablePortal, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(_ref) {
      var open = _ref.open;
      this.setState({
        portalOpen: open
      });
    } // ----------------------------------------
    // Callback handling
    // ----------------------------------------

  }, {
    key: "render",
    // ----------------------------------------
    // Render
    // ----------------------------------------
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          transition = _this$props.transition;
      var _this$state = this.state,
          portalOpen = _this$state.portalOpen,
          transitionVisible = _this$state.transitionVisible;
      var open = portalOpen || transitionVisible;
      var rest = getUnhandledProps(TransitionablePortal, this.props);
      return React.createElement(Portal, _extends({}, rest, {
        open: open,
        onOpen: this.handlePortalOpen,
        onClose: this.handlePortalClose
      }), React.createElement(Transition, _extends({}, transition, {
        transitionOnMount: true,
        onStart: this.handleTransitionStart,
        onHide: this.handleTransitionHide,
        visible: portalOpen
      }), children));
    }
  }]);

  return TransitionablePortal;
}(Component);

_defineProperty(TransitionablePortal, "defaultProps", {
  transition: {
    animation: 'scale',
    duration: 400
  }
});

_defineProperty(TransitionablePortal, "handledProps", ["children", "onClose", "onHide", "onOpen", "onStart", "open", "transition"]);


TransitionablePortal.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Primary content. */
  children: PropTypes.node.isRequired,

  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and internal state.
   */
  onClose: PropTypes.func,

  /**
   * Callback on each transition that changes visibility to hidden.
   *
   * @param {null}
   * @param {object} data - All props with transition status and internal state.
   */
  onHide: PropTypes.func,

  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and internal state.
   */
  onOpen: PropTypes.func,

  /**
   * Callback on animation start.
   *
   * @param {null}
   * @param {object} data - All props with transition status and internal state.
   */
  onStart: PropTypes.func,

  /** Controls whether or not the portal is displayed. */
  open: PropTypes.bool,

  /** Transition props. */
  transition: PropTypes.object
} : {};