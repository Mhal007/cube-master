let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default(v){_classCallCheck=v}},1);let _createClass;module.link("@babel/runtime/helpers/createClass",{default(v){_createClass=v}},2);let _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default(v){_possibleConstructorReturn=v}},3);let _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default(v){_getPrototypeOf=v}},4);let _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default(v){_assertThisInitialized=v}},5);let _inherits;module.link("@babel/runtime/helpers/inherits",{default(v){_inherits=v}},6);let _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default(v){_defineProperty=v}},7);let _invoke;module.link("lodash/invoke",{default(v){_invoke=v}},8);let cx;module.link('classnames',{default(v){cx=v}},9);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},10);let React,Component;module.link('react',{default(v){React=v},Component(v){Component=v}},11);let childrenUtils,createShorthandFactory,customPropTypes,getElementType,getUnhandledProps,useKeyOnly;module.link('../../lib',{childrenUtils(v){childrenUtils=v},createShorthandFactory(v){createShorthandFactory=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},useKeyOnly(v){useKeyOnly=v}},12);let Icon;module.link('../Icon',{default(v){Icon=v}},13);let StepContent;module.link('./StepContent',{default(v){StepContent=v}},14);let StepDescription;module.link('./StepDescription',{default(v){StepDescription=v}},15);let StepGroup;module.link('./StepGroup',{default(v){StepGroup=v}},16);let StepTitle;module.link('./StepTitle',{default(v){StepTitle=v}},17);

















/**
 * A step shows the completion status of an activity in a series of activities.
 */

var Step =
/*#__PURE__*/
function (_Component) {
  _inherits(Step, _Component);

  function Step() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Step);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Step)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "computeElementType", function () {
      var onClick = _this.props.onClick;
      if (onClick) return 'a';
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      var disabled = _this.props.disabled;
      if (!disabled) _invoke(_this.props, 'onClick', e, _this.props);
    });

    return _this;
  }

  _createClass(Step, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          children = _this$props.children,
          className = _this$props.className,
          completed = _this$props.completed,
          content = _this$props.content,
          description = _this$props.description,
          disabled = _this$props.disabled,
          href = _this$props.href,
          icon = _this$props.icon,
          link = _this$props.link,
          title = _this$props.title;
      var classes = cx(useKeyOnly(active, 'active'), useKeyOnly(completed, 'completed'), useKeyOnly(disabled, 'disabled'), useKeyOnly(link, 'link'), 'step', className);
      var rest = getUnhandledProps(Step, this.props);
      var ElementType = getElementType(Step, this.props, this.computeElementType);

      if (!childrenUtils.isNil(children)) {
        return React.createElement(ElementType, _extends({}, rest, {
          className: classes,
          href: href,
          onClick: this.handleClick
        }), children);
      }

      if (!childrenUtils.isNil(content)) {
        return React.createElement(ElementType, _extends({}, rest, {
          className: classes,
          href: href,
          onClick: this.handleClick
        }), content);
      }

      return React.createElement(ElementType, _extends({}, rest, {
        className: classes,
        href: href,
        onClick: this.handleClick
      }), Icon.create(icon, {
        autoGenerateKey: false
      }), StepContent.create({
        description: description,
        title: title
      }, {
        autoGenerateKey: false
      }));
    }
  }]);

  return Step;
}(Component);

_defineProperty(Step, "Content", StepContent);

_defineProperty(Step, "Description", StepDescription);

_defineProperty(Step, "Group", StepGroup);

_defineProperty(Step, "Title", StepTitle);

_defineProperty(Step, "handledProps", ["active", "as", "children", "className", "completed", "content", "description", "disabled", "href", "icon", "link", "onClick", "ordered", "title"]);

Step.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A step can be highlighted as active. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A step can show that a user has completed it. */
  completed: PropTypes.bool,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Shorthand for StepDescription. */
  description: customPropTypes.itemShorthand,

  /** Show that the Loader is inactive. */
  disabled: PropTypes.bool,

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: PropTypes.string,

  /** Shorthand for Icon. */
  icon: customPropTypes.itemShorthand,

  /** A step can be link. */
  link: PropTypes.bool,

  /**
   * Called on click. When passed, the component will render as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: PropTypes.func,

  /** A step can show a ordered sequence of steps. Passed from StepGroup. */
  ordered: PropTypes.bool,

  /** Shorthand for StepTitle. */
  title: customPropTypes.itemShorthand
} : {};
Step.create = createShorthandFactory(Step, function (content) {
  return {
    content: content
  };
});
module.exportDefault(Step);