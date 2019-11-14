module.export({default:()=>TransitionGroup});let _objectSpread;module.link("@babel/runtime/helpers/objectSpread",{default(v){_objectSpread=v}},0);let _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default(v){_classCallCheck=v}},1);let _createClass;module.link("@babel/runtime/helpers/createClass",{default(v){_createClass=v}},2);let _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default(v){_possibleConstructorReturn=v}},3);let _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default(v){_getPrototypeOf=v}},4);let _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default(v){_assertThisInitialized=v}},5);let _inherits;module.link("@babel/runtime/helpers/inherits",{default(v){_inherits=v}},6);let _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default(v){_defineProperty=v}},7);let _values;module.link("lodash/values",{default(v){_values=v}},8);let _get;module.link("lodash/get",{default(v){_get=v}},9);let _has;module.link("lodash/has",{default(v){_has=v}},10);let _forEach;module.link("lodash/forEach",{default(v){_forEach=v}},11);let _mapValues;module.link("lodash/mapValues",{default(v){_mapValues=v}},12);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},13);let React,cloneElement,Fragment;module.link('react',{default(v){React=v},cloneElement(v){cloneElement=v},Fragment(v){Fragment=v}},14);let getChildMapping,getElementType,getUnhandledProps,mergeChildMappings,SUI;module.link('../../lib',{getChildMapping(v){getChildMapping=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},mergeChildMappings(v){mergeChildMappings=v},SUI(v){SUI=v}},15);let Transition;module.link('./Transition',{default(v){Transition=v}},16);

















/**
 * A Transition.Group animates children as they mount and unmount.
 */
var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TransitionGroup, _React$Component);

  function TransitionGroup() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TransitionGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TransitionGroup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleOnHide", function (nothing, childProps) {
      var reactKey = childProps.reactKey;

      _this.setState(function (state) {
        var children = _objectSpread({}, state.children);

        delete children[reactKey];
        return {
          children: children
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "wrapChild", function (child) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _this$props = _this.props,
          animation = _this$props.animation,
          directional = _this$props.directional,
          duration = _this$props.duration;
      var key = child.key;
      var _options$visible = options.visible,
          visible = _options$visible === void 0 ? true : _options$visible,
          _options$transitionOn = options.transitionOnMount,
          transitionOnMount = _options$transitionOn === void 0 ? false : _options$transitionOn;
      return React.createElement(Transition, {
        animation: animation,
        directional: directional,
        duration: duration,
        key: key,
        onHide: _this.handleOnHide,
        reactKey: key,
        transitionOnMount: transitionOnMount,
        visible: visible
      }, child);
    });

    var _children = _this.props.children;
    _this.state = {
      children: _mapValues(getChildMapping(_children), function (child) {
        return _this.wrapChild(child);
      })
    };
    return _this;
  } // eslint-disable-next-line camelcase


  _createClass(TransitionGroup, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var prevMapping = this.state.children;
      var nextMapping = getChildMapping(nextProps.children);
      var children = mergeChildMappings(prevMapping, nextMapping);

      _forEach(children, function (child, key) {
        var hasPrev = _has(prevMapping, key);

        var hasNext = _has(nextMapping, key);

        var prevChild = prevMapping[key];
        var isLeaving = !_get(prevChild, 'props.visible'); // Heads up!
        // An item is new (entering), it will be picked from `nextChildren`, so it should be wrapped

        if (hasNext && (!hasPrev || isLeaving)) {
          children[key] = _this2.wrapChild(child, {
            transitionOnMount: true
          });
          return;
        } // Heads up!
        // An item is old (exiting), it will be picked from `prevChildren`, so it has been already
        // wrapped, so should be only updated


        if (!hasNext && hasPrev && !isLeaving) {
          children[key] = cloneElement(prevChild, {
            visible: false
          });
          return;
        } // Heads up!
        // An item item hasn't changed transition states, but it will be picked from `nextChildren`,
        // so we should wrap it again


        var _prevChild$props = prevChild.props,
            visible = _prevChild$props.visible,
            transitionOnMount = _prevChild$props.transitionOnMount;
        children[key] = _this2.wrapChild(child, {
          transitionOnMount: transitionOnMount,
          visible: visible
        });
      });

      this.setState({
        children: children
      });
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.state.children;
      var ElementType = getElementType(TransitionGroup, this.props);
      var rest = getUnhandledProps(TransitionGroup, this.props);
      return React.createElement(ElementType, rest, _values(children));
    }
  }]);

  return TransitionGroup;
}(React.Component);

_defineProperty(TransitionGroup, "defaultProps", {
  as: Fragment,
  animation: 'fade',
  duration: 500
});

_defineProperty(TransitionGroup, "handledProps", ["animation", "as", "children", "directional", "duration"]);


TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Named animation event to used. Must be defined in CSS. */
  animation: PropTypes.oneOfType([PropTypes.oneOf(SUI.TRANSITIONS), PropTypes.string]),

  /** Primary content. */
  children: PropTypes.node,

  /** Whether it is directional animation event or not. Use it only for custom transitions. */
  directional: PropTypes.bool,

  /** Duration of the CSS transition animation in milliseconds. */
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    hide: PropTypes.number.isRequired,
    show: PropTypes.number.isRequired
  }), PropTypes.string])
} : {};