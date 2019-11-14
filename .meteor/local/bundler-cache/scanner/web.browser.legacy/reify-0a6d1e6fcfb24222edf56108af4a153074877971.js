var _extends;module.link('babel-runtime/helpers/extends',{default:function(v){_extends=v}},0);var _defineProperty;module.link('babel-runtime/helpers/defineProperty',{default:function(v){_defineProperty=v}},1);var _objectWithoutProperties;module.link('babel-runtime/helpers/objectWithoutProperties',{default:function(v){_objectWithoutProperties=v}},2);var _classCallCheck;module.link('babel-runtime/helpers/classCallCheck',{default:function(v){_classCallCheck=v}},3);var _createClass;module.link('babel-runtime/helpers/createClass',{default:function(v){_createClass=v}},4);var _possibleConstructorReturn;module.link('babel-runtime/helpers/possibleConstructorReturn',{default:function(v){_possibleConstructorReturn=v}},5);var _inherits;module.link('babel-runtime/helpers/inherits',{default:function(v){_inherits=v}},6);var React;module.link('react',{default:function(v){React=v}},7);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},8);var classNames;module.link('classnames',{default:function(v){classNames=v}},9);var addEventListener;module.link('rc-util/es/Dom/addEventListener',{default:function(v){addEventListener=v}},10);











var Handle = function (_React$Component) {
  _inherits(Handle, _React$Component);

  function Handle() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Handle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Handle.__proto__ || Object.getPrototypeOf(Handle)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      clickFocused: false
    }, _this.setHandleRef = function (node) {
      _this.handle = node;
    }, _this.handleMouseUp = function () {
      if (document.activeElement === _this.handle) {
        _this.setClickFocus(true);
      }
    }, _this.handleMouseDown = function () {
      // fix https://github.com/ant-design/ant-design/issues/15324
      _this.focus();
    }, _this.handleBlur = function () {
      _this.setClickFocus(false);
    }, _this.handleKeyDown = function () {
      _this.setClickFocus(false);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Handle, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // mouseup won't trigger if mouse moved out of handle,
      // so we listen on document here.
      this.onMouseUpListener = addEventListener(document, 'mouseup', this.handleMouseUp);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.onMouseUpListener) {
        this.onMouseUpListener.remove();
      }
    }
  }, {
    key: 'setClickFocus',
    value: function setClickFocus(focused) {
      this.setState({ clickFocused: focused });
    }
  }, {
    key: 'clickFocus',
    value: function clickFocus() {
      this.setClickFocus(true);
      this.focus();
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.handle.focus();
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.handle.blur();
    }
  }, {
    key: 'render',
    value: function render() {
      var _ref2, _ref3;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          vertical = _props.vertical,
          reverse = _props.reverse,
          offset = _props.offset,
          style = _props.style,
          disabled = _props.disabled,
          min = _props.min,
          max = _props.max,
          value = _props.value,
          tabIndex = _props.tabIndex,
          restProps = _objectWithoutProperties(_props, ['prefixCls', 'vertical', 'reverse', 'offset', 'style', 'disabled', 'min', 'max', 'value', 'tabIndex']);

      var className = classNames(this.props.className, _defineProperty({}, prefixCls + '-handle-click-focused', this.state.clickFocused));
      var positionStyle = vertical ? (_ref2 = {}, _defineProperty(_ref2, reverse ? 'top' : 'bottom', offset + '%'), _defineProperty(_ref2, reverse ? 'bottom' : 'top', 'auto'), _defineProperty(_ref2, 'transform', 'translateY(+50%)'), _ref2) : (_ref3 = {}, _defineProperty(_ref3, reverse ? 'right' : 'left', offset + '%'), _defineProperty(_ref3, reverse ? 'left' : 'right', 'auto'), _defineProperty(_ref3, 'transform', 'translateX(' + (reverse ? '+' : '-') + '50%)'), _ref3);
      var elStyle = _extends({}, style, positionStyle);

      var _tabIndex = tabIndex || 0;
      if (disabled || tabIndex === null) {
        _tabIndex = null;
      }

      return React.createElement('div', _extends({
        ref: this.setHandleRef,
        tabIndex: _tabIndex
      }, restProps, {
        className: className,
        style: elStyle,
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleMouseDown

        // aria attribute
        , role: 'slider',
        'aria-valuemin': min,
        'aria-valuemax': max,
        'aria-valuenow': value,
        'aria-disabled': !!disabled
      }));
    }
  }]);

  return Handle;
}(React.Component);

module.exportDefault(Handle);


Handle.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  vertical: PropTypes.bool,
  offset: PropTypes.number,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  tabIndex: PropTypes.number,
  reverse: PropTypes.bool
};