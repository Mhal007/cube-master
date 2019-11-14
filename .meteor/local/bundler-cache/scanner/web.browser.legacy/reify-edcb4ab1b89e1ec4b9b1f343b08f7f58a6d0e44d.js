module.export({default:function(){return TransitionablePortal}});var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var _objectSpread;module.link("@babel/runtime/helpers/objectSpread",{default:function(v){_objectSpread=v}},1);var _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default:function(v){_classCallCheck=v}},2);var _createClass;module.link("@babel/runtime/helpers/createClass",{default:function(v){_createClass=v}},3);var _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default:function(v){_possibleConstructorReturn=v}},4);var _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default:function(v){_getPrototypeOf=v}},5);var _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default:function(v){_assertThisInitialized=v}},6);var _inherits;module.link("@babel/runtime/helpers/inherits",{default:function(v){_inherits=v}},7);var _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default:function(v){_defineProperty=v}},8);var _invoke;module.link("lodash/invoke",{default:function(v){_invoke=v}},9);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},10);var React,Component;module.link('react',{default:function(v){React=v},Component:function(v){Component=v}},11);var Portal;module.link('../Portal',{default:function(v){Portal=v}},12);var Transition;module.link('../../modules/Transition',{default:function(v){Transition=v}},13);var getUnhandledProps;module.link('../../lib',{getUnhandledProps:function(v){getUnhandledProps=v}},14);















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