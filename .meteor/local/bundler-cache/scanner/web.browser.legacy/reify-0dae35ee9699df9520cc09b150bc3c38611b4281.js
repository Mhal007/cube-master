module.export({default:function(){return Rating}});var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var _objectSpread;module.link("@babel/runtime/helpers/objectSpread",{default:function(v){_objectSpread=v}},1);var _classCallCheck;module.link("@babel/runtime/helpers/classCallCheck",{default:function(v){_classCallCheck=v}},2);var _createClass;module.link("@babel/runtime/helpers/createClass",{default:function(v){_createClass=v}},3);var _possibleConstructorReturn;module.link("@babel/runtime/helpers/possibleConstructorReturn",{default:function(v){_possibleConstructorReturn=v}},4);var _getPrototypeOf;module.link("@babel/runtime/helpers/getPrototypeOf",{default:function(v){_getPrototypeOf=v}},5);var _assertThisInitialized;module.link("@babel/runtime/helpers/assertThisInitialized",{default:function(v){_assertThisInitialized=v}},6);var _inherits;module.link("@babel/runtime/helpers/inherits",{default:function(v){_inherits=v}},7);var _defineProperty;module.link("@babel/runtime/helpers/defineProperty",{default:function(v){_defineProperty=v}},8);var _times;module.link("lodash/times",{default:function(v){_times=v}},9);var _invoke;module.link("lodash/invoke",{default:function(v){_invoke=v}},10);var _without;module.link("lodash/without",{default:function(v){_without=v}},11);var cx;module.link('classnames',{default:function(v){cx=v}},12);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},13);var React;module.link('react',{default:function(v){React=v}},14);var Component,getElementType,getUnhandledProps,SUI,useKeyOnly;module.link('../../lib',{AutoControlledComponent:function(v){Component=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v},SUI:function(v){SUI=v},useKeyOnly:function(v){useKeyOnly=v}},15);var RatingIcon;module.link('./RatingIcon',{default:function(v){RatingIcon=v}},16);
















/**
 * A rating indicates user interest in content.
 */

var Rating =
/*#__PURE__*/
function (_Component) {
  _inherits(Rating, _Component);

  function Rating() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Rating);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Rating)).call.apply(_getPrototypeOf2, [this].concat(_args)));

    _defineProperty(_assertThisInitialized(_this), "handleIconClick", function (e, _ref) {
      var index = _ref.index;
      var _this$props = _this.props,
          clearable = _this$props.clearable,
          disabled = _this$props.disabled,
          maxRating = _this$props.maxRating,
          onRate = _this$props.onRate;
      var rating = _this.state.rating;
      if (disabled) return; // default newRating is the clicked icon
      // allow toggling a binary rating
      // allow clearing ratings

      var newRating = index + 1;

      if (clearable === 'auto' && maxRating === 1) {
        newRating = +!rating;
      } else if (clearable === true && newRating === rating) {
        newRating = 0;
      } // set rating


      _this.trySetState({
        rating: newRating,
        isSelecting: false
      });

      if (onRate) onRate(e, _objectSpread({}, _this.props, {
        rating: newRating
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "handleIconMouseEnter", function (e, _ref2) {
      var index = _ref2.index;
      if (_this.props.disabled) return;

      _this.setState({
        selectedIndex: index,
        isSelecting: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseLeave", function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _invoke.apply(void 0, [_this.props, 'onMouseLeave'].concat(args));

      if (_this.props.disabled) return;

      _this.setState({
        selectedIndex: -1,
        isSelecting: false
      });
    });

    return _this;
  }

  _createClass(Rating, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          disabled = _this$props2.disabled,
          icon = _this$props2.icon,
          maxRating = _this$props2.maxRating,
          size = _this$props2.size;
      var _this$state = this.state,
          rating = _this$state.rating,
          selectedIndex = _this$state.selectedIndex,
          isSelecting = _this$state.isSelecting;
      var classes = cx('ui', icon, size, useKeyOnly(disabled, 'disabled'), useKeyOnly(isSelecting && !disabled && selectedIndex >= 0, 'selected'), 'rating', className);
      var rest = getUnhandledProps(Rating, this.props);
      var ElementType = getElementType(Rating, this.props);
      return React.createElement(ElementType, _extends({}, rest, {
        className: classes,
        role: "radiogroup",
        onMouseLeave: this.handleMouseLeave,
        tabIndex: disabled ? 0 : -1
      }), _times(maxRating, function (i) {
        return React.createElement(RatingIcon, {
          tabIndex: disabled ? -1 : 0,
          active: rating >= i + 1,
          "aria-checked": rating === i + 1,
          "aria-posinset": i + 1,
          "aria-setsize": maxRating,
          index: i,
          key: i,
          onClick: _this2.handleIconClick,
          onMouseEnter: _this2.handleIconMouseEnter,
          selected: selectedIndex >= i && isSelecting
        });
      }));
    }
  }]);

  return Rating;
}(Component);

_defineProperty(Rating, "autoControlledProps", ['rating']);

_defineProperty(Rating, "defaultProps", {
  clearable: 'auto',
  maxRating: 1
});

_defineProperty(Rating, "Icon", RatingIcon);

_defineProperty(Rating, "handledProps", ["as", "className", "clearable", "defaultRating", "disabled", "icon", "maxRating", "onRate", "rating", "size"]);


Rating.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Additional classes. */
  className: PropTypes.string,

  /**
   * You can clear the rating by clicking on the current start rating.
   * By default a rating will be only clearable if there is 1 icon.
   * Setting to `true`/`false` will allow or disallow a user to clear their rating.
   */
  clearable: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['auto'])]),

  /** The initial rating value. */
  defaultRating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** You can disable or enable interactive rating.  Makes a read-only rating. */
  disabled: PropTypes.bool,

  /** A rating can use a set of star or heart icons. */
  icon: PropTypes.oneOf(['star', 'heart']),

  /** The total number of icons. */
  maxRating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Called after user selects a new rating.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed rating.
   */
  onRate: PropTypes.func,

  /** The current number of active icons. */
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** A progress bar can vary in size. */
  size: PropTypes.oneOf(_without(SUI.SIZES, 'medium', 'big'))
} : {};