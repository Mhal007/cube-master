module.export({default:function(){return Dimmer}});var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default:function(v){_classCallCheck=v}},1);var _createClass;module.link("@babel/runtime/helpers/createClass",{default:function(v){_createClass=v}},2);var _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default:function(v){_possibleConstructorReturn=v}},3);var _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default:function(v){_getPrototypeOf=v}},4);var _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default:function(v){_assertThisInitialized=v}},5);var _inherits;module.link("@babel/runtime/helpers/inherits",{default:function(v){_inherits=v}},6);var _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default:function(v){_defineProperty=v}},7);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},8);var React,Component;module.link('react',{default:function(v){React=v},Component:function(v){Component=v}},9);var createShorthandFactory,getUnhandledProps,isBrowser;module.link('../../lib',{createShorthandFactory:function(v){createShorthandFactory=v},getUnhandledProps:function(v){getUnhandledProps=v},isBrowser:function(v){isBrowser=v}},10);var Portal;module.link('../../addons/Portal',{default:function(v){Portal=v}},11);var DimmerDimmable;module.link('./DimmerDimmable',{default:function(v){DimmerDimmable=v}},12);var DimmerInner;module.link('./DimmerInner',{default:function(v){DimmerInner=v}},13);













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