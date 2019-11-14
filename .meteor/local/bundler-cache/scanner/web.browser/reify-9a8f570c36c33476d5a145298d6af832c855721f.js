module.export({default:()=>Popup});let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let _objectSpread;module.link("@babel/runtime/helpers/objectSpread",{default(v){_objectSpread=v}},1);let _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default(v){_classCallCheck=v}},2);let _createClass;module.link("@babel/runtime/helpers/createClass",{default(v){_createClass=v}},3);let _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default(v){_possibleConstructorReturn=v}},4);let _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default(v){_getPrototypeOf=v}},5);let _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default(v){_assertThisInitialized=v}},6);let _inherits;module.link("@babel/runtime/helpers/inherits",{default(v){_inherits=v}},7);let _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default(v){_defineProperty=v}},8);let _isNil;module.link("lodash/isNil",{default(v){_isNil=v}},9);let _merge;module.link("lodash/merge",{default(v){_merge=v}},10);let _invoke;module.link("lodash/invoke",{default(v){_invoke=v}},11);let _isArray;module.link("lodash/isArray",{default(v){_isArray=v}},12);let _pick;module.link("lodash/pick",{default(v){_pick=v}},13);let _includes;module.link("lodash/includes",{default(v){_includes=v}},14);let _reduce;module.link("lodash/reduce",{default(v){_reduce=v}},15);let _without;module.link("lodash/without",{default(v){_without=v}},16);let EventStack;module.link('@semantic-ui-react/event-stack',{default(v){EventStack=v}},17);let Ref;module.link('@stardust-ui/react-component-ref',{Ref(v){Ref=v}},18);let cx;module.link('classnames',{default(v){cx=v}},19);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},20);let React,Component,createRef;module.link('react',{default(v){React=v},Component(v){Component=v},createRef(v){createRef=v}},21);let Popper;module.link('react-popper',{Popper(v){Popper=v}},22);let shallowEqual;module.link('shallowequal',{default(v){shallowEqual=v}},23);let eventStack,childrenUtils,customPropTypes,getElementType,getUnhandledProps,SUI,useKeyOnly,useKeyOrValueAndKey;module.link('../../lib',{eventStack(v){eventStack=v},childrenUtils(v){childrenUtils=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},SUI(v){SUI=v},useKeyOnly(v){useKeyOnly=v},useKeyOrValueAndKey(v){useKeyOrValueAndKey=v}},24);let Portal;module.link('../../addons/Portal',{default(v){Portal=v}},25);let placementMapping,positions,positionsMapping;module.link('./lib/positions',{placementMapping(v){placementMapping=v},positions(v){positions=v},positionsMapping(v){positionsMapping=v}},26);let createReferenceProxy;module.link('./lib/createReferenceProxy',{default(v){createReferenceProxy=v}},27);let PopupContent;module.link('./PopupContent',{default(v){PopupContent=v}},28);let PopupHeader;module.link('./PopupHeader',{default(v){PopupHeader=v}},29);






























/**
 * A Popup displays additional information on top of a page.
 */
var Popup =
/*#__PURE__*/
function (_Component) {
  _inherits(Popup, _Component);

  function Popup() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Popup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Popup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "open", false);

    _defineProperty(_assertThisInitialized(_this), "triggerRef", createRef());

    _defineProperty(_assertThisInitialized(_this), "getPortalProps", function () {
      var portalProps = {};
      var _this$props = _this.props,
          on = _this$props.on,
          hoverable = _this$props.hoverable;
      var normalizedOn = _isArray(on) ? on : [on];

      if (hoverable) {
        portalProps.closeOnPortalMouseLeave = true;
        portalProps.mouseLeaveDelay = 300;
      }

      if (_includes(normalizedOn, 'hover')) {
        portalProps.openOnTriggerClick = false;
        portalProps.closeOnTriggerClick = false;
        portalProps.openOnTriggerMouseEnter = true;
        portalProps.closeOnTriggerMouseLeave = true; // Taken from SUI: https://git.io/vPmCm

        portalProps.mouseLeaveDelay = 70;
        portalProps.mouseEnterDelay = 50;
      }

      if (_includes(normalizedOn, 'click')) {
        portalProps.openOnTriggerClick = true;
        portalProps.closeOnTriggerClick = true;
        portalProps.closeOnDocumentClick = true;
      }

      if (_includes(normalizedOn, 'focus')) {
        portalProps.openOnTriggerFocus = true;
        portalProps.closeOnTriggerBlur = true;
      }

      return portalProps;
    });

    _defineProperty(_assertThisInitialized(_this), "hideOnScroll", function (e) {
      _this.setState({
        closed: true
      });

      eventStack.unsub('scroll', _this.hideOnScroll, {
        target: window
      });
      _this.timeoutId = setTimeout(function () {
        _this.setState({
          closed: false
        });
      }, 50);

      _this.handleClose(e);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function (e) {
      _invoke(_this.props, 'onClose', e, _this.props);
    });

    _defineProperty(_assertThisInitialized(_this), "handleOpen", function (e) {
      _invoke(_this.props, 'onOpen', e, _this.props);
    });

    _defineProperty(_assertThisInitialized(_this), "handlePortalMount", function (e) {
      _invoke(_this.props, 'onMount', e, _this.props);
    });

    _defineProperty(_assertThisInitialized(_this), "handlePortalUnmount", function (e) {
      _this.positionUpdate = null;

      _invoke(_this.props, 'onUnmount', e, _this.props);
    });

    _defineProperty(_assertThisInitialized(_this), "renderContent", function (_ref) {
      var popperPlacement = _ref.placement,
          popperRef = _ref.ref,
          scheduleUpdate = _ref.scheduleUpdate,
          popperStyle = _ref.style;
      var _this$props2 = _this.props,
          basic = _this$props2.basic,
          children = _this$props2.children,
          className = _this$props2.className,
          content = _this$props2.content,
          hideOnScroll = _this$props2.hideOnScroll,
          flowing = _this$props2.flowing,
          header = _this$props2.header,
          inverted = _this$props2.inverted,
          size = _this$props2.size,
          style = _this$props2.style,
          wide = _this$props2.wide;
      var contentRestProps = _this.state.contentRestProps;
      _this.positionUpdate = scheduleUpdate;
      var classes = cx('ui', placementMapping[popperPlacement], size, useKeyOrValueAndKey(wide, 'wide'), useKeyOnly(basic, 'basic'), useKeyOnly(flowing, 'flowing'), useKeyOnly(inverted, 'inverted'), 'popup transition visible', className);
      var ElementType = getElementType(Popup, _this.props);

      var styles = _objectSpread({
        // Heads up! We need default styles to get working correctly `flowing`
        left: 'auto',
        right: 'auto'
      }, popperStyle, style);

      return React.createElement(Ref, {
        innerRef: popperRef
      }, React.createElement(ElementType, _extends({}, contentRestProps, {
        className: classes,
        style: styles
      }), childrenUtils.isNil(children) ? React.createElement(React.Fragment, null, PopupHeader.create(header, {
        autoGenerateKey: false
      }), PopupContent.create(content, {
        autoGenerateKey: false
      })) : children, hideOnScroll && React.createElement(EventStack, {
        on: _this.hideOnScroll,
        name: "scroll",
        target: "window"
      })));
    });

    return _this;
  }

  _createClass(Popup, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var depsEqual = shallowEqual(this.props.popperDependencies, prevProps.popperDependencies);

      if (!depsEqual) {
        this.handleUpdate();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeoutId);
    }
  }, {
    key: "handleUpdate",
    value: function handleUpdate() {
      if (this.positionUpdate) this.positionUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          context = _this$props3.context,
          disabled = _this$props3.disabled,
          eventsEnabled = _this$props3.eventsEnabled,
          offset = _this$props3.offset,
          pinned = _this$props3.pinned,
          popperModifiers = _this$props3.popperModifiers,
          position = _this$props3.position,
          positionFixed = _this$props3.positionFixed,
          trigger = _this$props3.trigger;
      var _this$state = this.state,
          closed = _this$state.closed,
          portalRestProps = _this$state.portalRestProps;
      if (closed || disabled) return trigger;

      var modifiers = _merge({
        arrow: {
          enabled: false
        },
        flip: {
          enabled: !pinned
        },
        // There are issues with `keepTogether` and `offset`
        // https://github.com/FezVrasta/popper.js/issues/557
        keepTogether: {
          enabled: !!offset
        },
        offset: {
          offset: offset
        }
      }, popperModifiers);

      var referenceElement = createReferenceProxy(_isNil(context) ? this.triggerRef : context);

      var mergedPortalProps = _objectSpread({}, this.getPortalProps(), portalRestProps);

      return React.createElement(Portal, _extends({}, mergedPortalProps, {
        onClose: this.handleClose,
        onMount: this.handlePortalMount,
        onOpen: this.handleOpen,
        onUnmount: this.handlePortalUnmount,
        trigger: trigger,
        triggerRef: this.triggerRef
      }), React.createElement(Popper, {
        eventsEnabled: eventsEnabled,
        modifiers: modifiers,
        placement: positionsMapping[position],
        positionFixed: positionFixed,
        referenceElement: referenceElement
      }, this.renderContent));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (state.closed || state.disabled) return {};
      var unhandledProps = getUnhandledProps(Popup, props);

      var contentRestProps = _reduce(unhandledProps, function (acc, val, key) {
        if (!_includes(Portal.handledProps, key)) acc[key] = val;
        return acc;
      }, {});

      var portalRestProps = _pick(unhandledProps, Portal.handledProps);

      return {
        contentRestProps: contentRestProps,
        portalRestProps: portalRestProps
      };
    }
  }]);

  return Popup;
}(Component);

_defineProperty(Popup, "defaultProps", {
  disabled: false,
  eventsEnabled: true,
  offset: 0,
  on: ['click', 'hover'],
  pinned: false,
  position: 'top left'
});

_defineProperty(Popup, "Content", PopupContent);

_defineProperty(Popup, "Header", PopupHeader);

_defineProperty(Popup, "handledProps", ["as", "basic", "children", "className", "content", "context", "disabled", "eventsEnabled", "flowing", "header", "hideOnScroll", "hoverable", "inverted", "offset", "on", "onClose", "onMount", "onOpen", "onUnmount", "pinned", "popperDependencies", "popperModifiers", "position", "positionFixed", "size", "style", "trigger", "wide"]);


Popup.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Display the popup without the pointing arrow. */
  basic: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Simple text content for the popover. */
  content: customPropTypes.itemShorthand,

  /** Existing element the pop-up should be bound to. */
  context: PropTypes.oneOfType([PropTypes.object, customPropTypes.refObject]),

  /** A disabled popup only renders its trigger. */
  disabled: PropTypes.bool,

  /** Enables the Popper.js event listeners. */
  eventsEnabled: PropTypes.bool,

  /** A flowing Popup has no maximum width and continues to flow to fit its content. */
  flowing: PropTypes.bool,

  /** Takes up the entire width of its offset container. */
  // TODO: implement the Popup fluid layout
  // fluid: PropTypes.bool,

  /** Header displayed above the content in bold. */
  header: customPropTypes.itemShorthand,

  /** Hide the Popup when scrolling the window. */
  hideOnScroll: PropTypes.bool,

  /** Whether the popup should not close on hover. */
  hoverable: PropTypes.bool,

  /** Invert the colors of the Popup. */
  inverted: PropTypes.bool,

  /** Offset value to apply to rendered popup. Accepts the following units:
   * - px or unit-less, interpreted as pixels
   * - %, percentage relative to the length of the trigger element
   * - %p, percentage relative to the length of the popup element
   * - vw, CSS viewport width unit
   * - vh, CSS viewport height unit
   */
  offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Events triggering the popup. */
  on: PropTypes.oneOfType([PropTypes.oneOf(['hover', 'click', 'focus']), PropTypes.arrayOf(PropTypes.oneOf(['hover', 'click', 'focus']))]),

  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: PropTypes.func,

  /**
   * Called when the portal is mounted on the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: PropTypes.func,

  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: PropTypes.func,

  /**
   * Called when the portal is unmounted from the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: PropTypes.func,

  /** Disables automatic repositioning of the component, it will always be placed according to the position value. */
  pinned: PropTypes.bool,

  /** Position for the popover. */
  position: PropTypes.oneOf(positions),

  /** Tells `Popper.js` to use the `position: fixed` strategy to position the popover. */
  positionFixed: PropTypes.bool,

  /** An object containing custom settings for the Popper.js modifiers. */
  popperModifiers: PropTypes.object,

  /** A popup can have dependencies which update will schedule a position update. */
  popperDependencies: PropTypes.array,

  /** Popup size. */
  size: PropTypes.oneOf(_without(SUI.SIZES, 'medium', 'big', 'massive')),

  /** Custom Popup style. */
  style: PropTypes.object,

  /** Element to be rendered in-place where the popup is defined. */
  trigger: PropTypes.node,

  /** Popup width. */
  wide: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['very'])])
} : {};