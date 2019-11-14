let _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default(v){_classCallCheck=v}},0);let _createClass;module.link("@babel/runtime/helpers/createClass",{default(v){_createClass=v}},1);let _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default(v){_possibleConstructorReturn=v}},2);let _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default(v){_getPrototypeOf=v}},3);let _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default(v){_assertThisInitialized=v}},4);let _inherits;module.link("@babel/runtime/helpers/inherits",{default(v){_inherits=v}},5);let _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default(v){_defineProperty=v}},6);let _invoke;module.link("lodash/invoke",{default(v){_invoke=v}},7);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},8);let React,Component,Fragment;module.link('react',{default(v){React=v},Component(v){Component=v},Fragment(v){Fragment=v}},9);let createShorthandFactory,customPropTypes;module.link('../../lib',{createShorthandFactory(v){createShorthandFactory=v},customPropTypes(v){customPropTypes=v}},10);let AccordionTitle;module.link('./AccordionTitle',{default(v){AccordionTitle=v}},11);let AccordionContent;module.link('./AccordionContent',{default(v){AccordionContent=v}},12);












/**
 * A panel sub-component for Accordion component.
 */

var AccordionPanel =
/*#__PURE__*/
function (_Component) {
  _inherits(AccordionPanel, _Component);

  function AccordionPanel() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AccordionPanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AccordionPanel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleTitleOverrides", function (predefinedProps) {
      return {
        onClick: function onClick(e, titleProps) {
          _invoke(predefinedProps, 'onClick', e, titleProps);

          _invoke(_this.props, 'onTitleClick', e, titleProps);
        }
      };
    });

    return _this;
  }

  _createClass(AccordionPanel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          content = _this$props.content,
          index = _this$props.index,
          title = _this$props.title;
      return React.createElement(Fragment, null, AccordionTitle.create(title, {
        autoGenerateKey: false,
        defaultProps: {
          active: active,
          index: index
        },
        overrideProps: this.handleTitleOverrides
      }), AccordionContent.create(content, {
        autoGenerateKey: false,
        defaultProps: {
          active: active
        }
      }));
    }
  }]);

  return AccordionPanel;
}(Component);

_defineProperty(AccordionPanel, "handledProps", ["active", "content", "index", "onTitleClick", "title"]);

AccordionPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Whether or not the title is in the open state. */
  active: PropTypes.bool,

  /** A shorthand for Accordion.Content. */
  content: customPropTypes.itemShorthand,

  /** A panel index. */
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Called when a panel title is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onTitleClick: PropTypes.func,

  /** A shorthand for Accordion.Title. */
  title: customPropTypes.itemShorthand
} : {};
AccordionPanel.create = createShorthandFactory(AccordionPanel, null);
module.exportDefault(AccordionPanel);