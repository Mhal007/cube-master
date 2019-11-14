module.export({default:()=>Dimmer});let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default(v){_classCallCheck=v}},1);let _createClass;module.link("@babel/runtime/helpers/createClass",{default(v){_createClass=v}},2);let _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default(v){_possibleConstructorReturn=v}},3);let _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default(v){_getPrototypeOf=v}},4);let _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default(v){_assertThisInitialized=v}},5);let _inherits;module.link("@babel/runtime/helpers/inherits",{default(v){_inherits=v}},6);let _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default(v){_defineProperty=v}},7);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},8);let React,Component;module.link('react',{default(v){React=v},Component(v){Component=v}},9);let createShorthandFactory,getUnhandledProps,isBrowser;module.link('../../lib',{createShorthandFactory(v){createShorthandFactory=v},getUnhandledProps(v){getUnhandledProps=v},isBrowser(v){isBrowser=v}},10);let Portal;module.link('../../addons/Portal',{default(v){Portal=v}},11);let DimmerDimmable;module.link('./DimmerDimmable',{default(v){DimmerDimmable=v}},12);let DimmerInner;module.link('./DimmerInner',{default(v){DimmerInner=v}},13);













/**
 * A dimmer hides distractions to focus attention on particular content.
 */

var Dimmer =
/*#__PURE__*/
function (_Component) {
  _inherits(Dimmer, _Component);

  function Dimmer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Dimmer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dimmer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handlePortalMount", function () {
      if (!isBrowser()) return; // Heads up, IE doesn't support second argument in add()

      document.body.classList.add('dimmed');
      document.body.classList.add('dimmable');
    });

    _defineProperty(_assertThisInitialized(_this), "handlePortalUnmount", function () {
      if (!isBrowser()) return; // Heads up, IE doesn't support second argument in add()

      document.body.classList.remove('dimmed');
      document.body.classList.remove('dimmable');
    });

    return _this;
  }

  _createClass(Dimmer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          page = _this$props.page;
      var rest = getUnhandledProps(Dimmer, this.props);

      if (page) {
        return React.createElement(Portal, {
          closeOnEscape: false,
          closeOnDocumentClick: false,
          onMount: this.handlePortalMount,
          onUnmount: this.handlePortalUnmount,
          open: active,
          openOnTriggerClick: false
        }, React.createElement(DimmerInner, _extends({}, rest, {
          active: active,
          page: page
        })));
      }

      return React.createElement(DimmerInner, _extends({}, rest, {
        active: active,
        page: page
      }));
    }
  }]);

  return Dimmer;
}(Component);

_defineProperty(Dimmer, "Dimmable", DimmerDimmable);

_defineProperty(Dimmer, "Inner", DimmerInner);

_defineProperty(Dimmer, "handledProps", ["active", "page"]);


Dimmer.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An active dimmer will dim its parent container. */
  active: PropTypes.bool,

  /** A dimmer can be formatted to be fixed to the page. */
  page: PropTypes.bool
} : {};
Dimmer.create = createShorthandFactory(Dimmer, function (value) {
  return {
    content: value
  };
});