module.export({default:function(){return AccordionAccordion}});var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var _toConsumableArray;module.link("@babel/runtime/helpers/toConsumableArray",{default:function(v){_toConsumableArray=v}},1);var _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default:function(v){_classCallCheck=v}},2);var _createClass;module.link("@babel/runtime/helpers/createClass",{default:function(v){_createClass=v}},3);var _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default:function(v){_possibleConstructorReturn=v}},4);var _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default:function(v){_getPrototypeOf=v}},5);var _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default:function(v){_assertThisInitialized=v}},6);var _inherits;module.link("@babel/runtime/helpers/inherits",{default:function(v){_inherits=v}},7);var _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default:function(v){_defineProperty=v}},8);var _map;module.link("lodash/map",{default:function(v){_map=v}},9);var _invoke;module.link("lodash/invoke",{default:function(v){_invoke=v}},10);var _without;module.link("lodash/without",{default:function(v){_without=v}},11);var _includes;module.link("lodash/includes",{default:function(v){_includes=v}},12);var _isArray;module.link("lodash/isArray",{default:function(v){_isArray=v}},13);var cx;module.link('classnames',{default:function(v){cx=v}},14);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},15);var React;module.link('react',{default:function(v){React=v}},16);var Component,childrenUtils,createShorthandFactory,customPropTypes,getElementType,getUnhandledProps;module.link('../../lib',{AutoControlledComponent:function(v){Component=v},childrenUtils:function(v){childrenUtils=v},createShorthandFactory:function(v){createShorthandFactory=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v}},17);var AccordionPanel;module.link('./AccordionPanel',{default:function(v){AccordionPanel=v}},18);



















var warnIfPropsAreInvalid = function warnIfPropsAreInvalid(props, state) {
  var exclusive = props.exclusive;
  var activeIndex = state.activeIndex;
  /* eslint-disable no-console */

  if (exclusive && typeof activeIndex !== 'number') {
    console.error('`activeIndex` must be a number if `exclusive` is true');
  } else if (!exclusive && !_isArray(activeIndex)) {
    console.error('`activeIndex` must be an array if `exclusive` is false');
  }
  /* eslint-enable no-console */

};
/**
 * An Accordion can contain sub-accordions.
 */


var AccordionAccordion =
/*#__PURE__*/
function (_Component) {
  _inherits(AccordionAccordion, _Component);

  function AccordionAccordion() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AccordionAccordion);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AccordionAccordion)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "computeNewIndex", function (index) {
      var exclusive = _this.props.exclusive;
      var activeIndex = _this.state.activeIndex;
      if (exclusive) return index === activeIndex ? -1 : index; // check to see if index is in array, and remove it, if not then add it

      return _includes(activeIndex, index) ? _without(activeIndex, index) : [].concat(_toConsumableArray(activeIndex), [index]);
    });

    _defineProperty(_assertThisInitialized(_this), "handleTitleClick", function (e, titleProps) {
      var index = titleProps.index;

      _this.trySetState({
        activeIndex: _this.computeNewIndex(index)
      });

      _invoke(_this.props, 'onTitleClick', e, titleProps);
    });

    _defineProperty(_assertThisInitialized(_this), "isIndexActive", function (index) {
      var exclusive = _this.props.exclusive;
      var activeIndex = _this.state.activeIndex;
      return exclusive ? activeIndex === index : _includes(activeIndex, index);
    });

    return _this;
  }

  _createClass(AccordionAccordion, [{
    key: "getInitialAutoControlledState",
    value: function getInitialAutoControlledState(_ref) {
      var exclusive = _ref.exclusive;
      return {
        activeIndex: exclusive ? -1 : []
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (process.env.NODE_ENV !== 'production') {
        warnIfPropsAreInvalid(this.props, this.state);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (process.env.NODE_ENV !== 'production') {
        warnIfPropsAreInvalid(this.props, this.state);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          panels = _this$props.panels;
      var classes = cx('accordion', className);
      var rest = getUnhandledProps(AccordionAccordion, this.props);
      var ElementType = getElementType(AccordionAccordion, this.props);
      return React.createElement(ElementType, _extends({}, rest, {
        className: classes
      }), childrenUtils.isNil(children) ? _map(panels, function (panel, index) {
        return AccordionPanel.create(panel, {
          defaultProps: {
            active: _this2.isIndexActive(index),
            index: index,
            onTitleClick: _this2.handleTitleClick
          }
        });
      }) : children);
    }
  }]);

  return AccordionAccordion;
}(Component);

_defineProperty(AccordionAccordion, "defaultProps", {
  exclusive: true
});

_defineProperty(AccordionAccordion, "autoControlledProps", ['activeIndex']);

_defineProperty(AccordionAccordion, "handledProps", ["activeIndex", "as", "children", "className", "defaultActiveIndex", "exclusive", "onTitleClick", "panels"]);


AccordionAccordion.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Index of the currently active panel. */
  activeIndex: customPropTypes.every([customPropTypes.disallow(['children']), PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number])]),

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Initial activeIndex value. */
  defaultActiveIndex: customPropTypes.every([customPropTypes.disallow(['children']), PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number])]),

  /** Only allow one panel open at a time. */
  exclusive: PropTypes.bool,

  /**
   * Called when a panel title is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onTitleClick: customPropTypes.every([customPropTypes.disallow(['children']), PropTypes.func]),

  /** Shorthand array of props for Accordion. */
  panels: customPropTypes.every([customPropTypes.disallow(['children']), PropTypes.arrayOf(PropTypes.shape({
    content: customPropTypes.itemShorthand,
    title: customPropTypes.itemShorthand
  }))])
} : {};
AccordionAccordion.create = createShorthandFactory(AccordionAccordion, function (content) {
  return {
    content: content
  };
});