module.export({default:()=>createSliderWithTooltip});let _objectWithoutProperties;module.link('babel-runtime/helpers/objectWithoutProperties',{default(v){_objectWithoutProperties=v}},0);let _defineProperty;module.link('babel-runtime/helpers/defineProperty',{default(v){_defineProperty=v}},1);let _extends;module.link('babel-runtime/helpers/extends',{default(v){_extends=v}},2);let _classCallCheck;module.link('babel-runtime/helpers/classCallCheck',{default(v){_classCallCheck=v}},3);let _createClass;module.link('babel-runtime/helpers/createClass',{default(v){_createClass=v}},4);let _possibleConstructorReturn;module.link('babel-runtime/helpers/possibleConstructorReturn',{default(v){_possibleConstructorReturn=v}},5);let _inherits;module.link('babel-runtime/helpers/inherits',{default(v){_inherits=v}},6);let React;module.link('react',{default(v){React=v}},7);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},8);let Tooltip;module.link('rc-tooltip',{default(v){Tooltip=v}},9);let Handle;module.link('./Handle',{default(v){Handle=v}},10);











function createSliderWithTooltip(Component) {
  var _class, _temp2;

  return _temp2 = _class = function (_React$Component) {
    _inherits(ComponentWrapper, _React$Component);

    function ComponentWrapper() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, ComponentWrapper);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ComponentWrapper.__proto__ || Object.getPrototypeOf(ComponentWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        visibles: {}
      }, _this.handleTooltipVisibleChange = function (index, visible) {
        _this.setState(function (prevState) {
          return {
            visibles: _extends({}, prevState.visibles, _defineProperty({}, index, visible))
          };
        });
      }, _this.handleWithTooltip = function (_ref2) {
        var value = _ref2.value,
            dragging = _ref2.dragging,
            index = _ref2.index,
            disabled = _ref2.disabled,
            restProps = _objectWithoutProperties(_ref2, ['value', 'dragging', 'index', 'disabled']);

        var _this$props = _this.props,
            tipFormatter = _this$props.tipFormatter,
            tipProps = _this$props.tipProps,
            handleStyle = _this$props.handleStyle;

        var _tipProps$prefixCls = tipProps.prefixCls,
            prefixCls = _tipProps$prefixCls === undefined ? 'rc-slider-tooltip' : _tipProps$prefixCls,
            _tipProps$overlay = tipProps.overlay,
            overlay = _tipProps$overlay === undefined ? tipFormatter(value) : _tipProps$overlay,
            _tipProps$placement = tipProps.placement,
            placement = _tipProps$placement === undefined ? 'top' : _tipProps$placement,
            _tipProps$visible = tipProps.visible,
            visible = _tipProps$visible === undefined ? false : _tipProps$visible,
            restTooltipProps = _objectWithoutProperties(tipProps, ['prefixCls', 'overlay', 'placement', 'visible']);

        var handleStyleWithIndex = void 0;
        if (Array.isArray(handleStyle)) {
          handleStyleWithIndex = handleStyle[index] || handleStyle[0];
        } else {
          handleStyleWithIndex = handleStyle;
        }

        return React.createElement(
          Tooltip,
          _extends({}, restTooltipProps, {
            prefixCls: prefixCls,
            overlay: overlay,
            placement: placement,
            visible: !disabled && (_this.state.visibles[index] || dragging) || visible,
            key: index
          }),
          React.createElement(Handle, _extends({}, restProps, {
            style: _extends({}, handleStyleWithIndex),
            value: value,
            onMouseEnter: function onMouseEnter() {
              return _this.handleTooltipVisibleChange(index, true);
            },
            onMouseLeave: function onMouseLeave() {
              return _this.handleTooltipVisibleChange(index, false);
            }
          }))
        );
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ComponentWrapper, [{
      key: 'render',
      value: function render() {
        return React.createElement(Component, _extends({}, this.props, { handle: this.handleWithTooltip }));
      }
    }]);

    return ComponentWrapper;
  }(React.Component), _class.propTypes = {
    tipFormatter: PropTypes.func,
    handleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
    tipProps: PropTypes.object
  }, _class.defaultProps = {
    tipFormatter: function tipFormatter(value) {
      return value;
    },

    handleStyle: [{}],
    tipProps: {}
  }, _temp2;
}