let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let _objectSpread;module.link("@babel/runtime/helpers/objectSpread",{default(v){_objectSpread=v}},1);let _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default(v){_classCallCheck=v}},2);let _createClass;module.link("@babel/runtime/helpers/createClass",{default(v){_createClass=v}},3);let _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default(v){_possibleConstructorReturn=v}},4);let _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default(v){_getPrototypeOf=v}},5);let _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default(v){_assertThisInitialized=v}},6);let _inherits;module.link("@babel/runtime/helpers/inherits",{default(v){_inherits=v}},7);let _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default(v){_defineProperty=v}},8);let _invoke;module.link("lodash/invoke",{default(v){_invoke=v}},9);let EventListener,documentRef;module.link('@stardust-ui/react-component-event-listener',{EventListener(v){EventListener=v},documentRef(v){documentRef=v}},10);let isRefObject,toRefObject,Ref;module.link('@stardust-ui/react-component-ref',{isRefObject(v){isRefObject=v},toRefObject(v){toRefObject=v},Ref(v){Ref=v}},11);let cx;module.link('classnames',{default(v){cx=v}},12);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},13);let React,Component,createRef;module.link('react',{default(v){React=v},Component(v){Component=v},createRef(v){createRef=v}},14);let childrenUtils,customPropTypes,doesNodeContainClick,getUnhandledProps,getElementType,useKeyOnly;module.link('../../lib',{childrenUtils(v){childrenUtils=v},customPropTypes(v){customPropTypes=v},doesNodeContainClick(v){doesNodeContainClick=v},getUnhandledProps(v){getUnhandledProps=v},getElementType(v){getElementType=v},useKeyOnly(v){useKeyOnly=v}},15);let SidebarPushable;module.link('./SidebarPushable',{default(v){SidebarPushable=v}},16);let SidebarPusher;module.link('./SidebarPusher',{default(v){SidebarPusher=v}},17);

















/**
 * A sidebar hides additional content beside a page.
 */

var Sidebar =
/*#__PURE__*/
function (_Component) {
  _inherits(Sidebar, _Component);

  function Sidebar(props) {
    var _this;

    _classCallCheck(this, Sidebar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sidebar).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "ref", createRef());

    _defineProperty(_assertThisInitialized(_this), "handleAnimationStart", function () {
      var visible = _this.props.visible;
      var callback = visible ? 'onVisible' : 'onHide';
      clearTimeout(_this.animationTimer);
      _this.animationTimer = setTimeout(_this.handleAnimationEnd, Sidebar.animationDuration);

      if (_this.skipNextCallback) {
        _this.skipNextCallback = false;
        return;
      }

      _invoke(_this.props, callback, null, _this.props);
    });

    _defineProperty(_assertThisInitialized(_this), "handleAnimationEnd", function () {
      var visible = _this.props.visible;
      var callback = visible ? 'onShow' : 'onHidden';

      _this.setState({
        animationTick: 0
      });

      _invoke(_this.props, callback, null, _this.props);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDocumentClick", function (e) {
      if (!doesNodeContainClick(_this.ref.current, e)) {
        _this.skipNextCallback = true;

        _invoke(_this.props, 'onHide', e, _objectSpread({}, _this.props, {
          visible: false
        }));
      }
    });

    _this.state = {
      animationTick: 0,
      visible: props.visible
    };
    return _this;
  }

  _createClass(Sidebar, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.animationTick > prevState.animationTick) {
        this.handleAnimationStart();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.animationTimer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          animation = _this$props.animation,
          className = _this$props.className,
          children = _this$props.children,
          content = _this$props.content,
          direction = _this$props.direction,
          target = _this$props.target,
          visible = _this$props.visible,
          width = _this$props.width;
      var animationTick = this.state.animationTick;
      var classes = cx('ui', animation, direction, width, useKeyOnly(animationTick > 0, 'animating'), useKeyOnly(visible, 'visible'), 'sidebar', className);
      var rest = getUnhandledProps(Sidebar, this.props);
      var ElementType = getElementType(Sidebar, this.props);
      var targetRef = isRefObject(target) ? target : toRefObject(target);
      return React.createElement(Ref, {
        innerRef: this.ref
      }, React.createElement(ElementType, _extends({}, rest, {
        className: classes
      }), childrenUtils.isNil(children) ? content : children, visible && React.createElement(EventListener, {
        listener: this.handleDocumentClick,
        targetRef: targetRef,
        type: "click"
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      // We use `animationTick` to understand when an animation should be scheduled
      var tickIncrement = !!props.visible === !!state.visible ? 0 : 1;
      return {
        animationTick: state.animationTick + tickIncrement,
        visible: props.visible
      };
    }
  }]);

  return Sidebar;
}(Component);

_defineProperty(Sidebar, "defaultProps", {
  direction: 'left',
  target: documentRef,
  visible: false
});

_defineProperty(Sidebar, "animationDuration", 500);

_defineProperty(Sidebar, "autoControlledProps", ['visible']);

_defineProperty(Sidebar, "Pushable", SidebarPushable);

_defineProperty(Sidebar, "Pusher", SidebarPusher);

_defineProperty(Sidebar, "handledProps", ["animation", "as", "children", "className", "content", "direction", "onHidden", "onHide", "onShow", "onVisible", "target", "visible", "width"]);

Sidebar.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Animation style. */
  animation: PropTypes.oneOf(['overlay', 'push', 'scale down', 'uncover', 'slide out', 'slide along']),

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Direction the sidebar should appear on. */
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * Called before a sidebar begins to animate out.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onHide: PropTypes.func,

  /**
   * Called after a sidebar has finished animating out.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onHidden: PropTypes.func,

  /**
   * Called when a sidebar has finished animating in.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onShow: PropTypes.func,

  /**
   * Called when a sidebar begins animating in.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onVisible: PropTypes.func,

  /** A sidebar can handle clicks on the passed element. */
  target: PropTypes.oneOfType([customPropTypes.domNode, customPropTypes.refObject]),

  /** Controls whether or not the sidebar is visible on the page. */
  visible: PropTypes.bool,

  /** Sidebar width. */
  width: PropTypes.oneOf(['very thin', 'thin', 'wide', 'very wide'])
} : {};
module.exportDefault(Sidebar);