var _extends;module.link('babel-runtime/helpers/extends',{default:function(v){_extends=v}},0);var _objectWithoutProperties;module.link('babel-runtime/helpers/objectWithoutProperties',{default:function(v){_objectWithoutProperties=v}},1);var _classCallCheck;module.link('babel-runtime/helpers/classCallCheck',{default:function(v){_classCallCheck=v}},2);var _possibleConstructorReturn;module.link('babel-runtime/helpers/possibleConstructorReturn',{default:function(v){_possibleConstructorReturn=v}},3);var _inherits;module.link('babel-runtime/helpers/inherits',{default:function(v){_inherits=v}},4);var React,Component;module.link('react',{default:function(v){React=v},Component:function(v){Component=v}},5);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},6);var Trigger;module.link('rc-trigger',{default:function(v){Trigger=v}},7);var placements;module.link('./placements',{placements:function(v){placements=v}},8);var Content;module.link('./Content',{default:function(v){Content=v}},9);










var Tooltip = function (_Component) {
  _inherits(Tooltip, _Component);

  function Tooltip() {
    var _temp, _this, _ret;

    _classCallCheck(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getPopupElement = function () {
      var _this$props = _this.props,
          arrowContent = _this$props.arrowContent,
          overlay = _this$props.overlay,
          prefixCls = _this$props.prefixCls,
          id = _this$props.id;

      return [React.createElement(
        'div',
        { className: prefixCls + '-arrow', key: 'arrow' },
        arrowContent
      ), React.createElement(Content, {
        key: 'content',
        trigger: _this.trigger,
        prefixCls: prefixCls,
        id: id,
        overlay: overlay
      })];
    }, _this.saveTrigger = function (node) {
      _this.trigger = node;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Tooltip.prototype.getPopupDomNode = function getPopupDomNode() {
    return this.trigger.getPopupDomNode();
  };

  Tooltip.prototype.render = function render() {
    var _props = this.props,
        overlayClassName = _props.overlayClassName,
        trigger = _props.trigger,
        mouseEnterDelay = _props.mouseEnterDelay,
        mouseLeaveDelay = _props.mouseLeaveDelay,
        overlayStyle = _props.overlayStyle,
        prefixCls = _props.prefixCls,
        children = _props.children,
        onVisibleChange = _props.onVisibleChange,
        afterVisibleChange = _props.afterVisibleChange,
        transitionName = _props.transitionName,
        animation = _props.animation,
        placement = _props.placement,
        align = _props.align,
        destroyTooltipOnHide = _props.destroyTooltipOnHide,
        defaultVisible = _props.defaultVisible,
        getTooltipContainer = _props.getTooltipContainer,
        restProps = _objectWithoutProperties(_props, ['overlayClassName', 'trigger', 'mouseEnterDelay', 'mouseLeaveDelay', 'overlayStyle', 'prefixCls', 'children', 'onVisibleChange', 'afterVisibleChange', 'transitionName', 'animation', 'placement', 'align', 'destroyTooltipOnHide', 'defaultVisible', 'getTooltipContainer']);

    var extraProps = _extends({}, restProps);
    if ('visible' in this.props) {
      extraProps.popupVisible = this.props.visible;
    }
    return React.createElement(
      Trigger,
      _extends({
        popupClassName: overlayClassName,
        ref: this.saveTrigger,
        prefixCls: prefixCls,
        popup: this.getPopupElement,
        action: trigger,
        builtinPlacements: placements,
        popupPlacement: placement,
        popupAlign: align,
        getPopupContainer: getTooltipContainer,
        onPopupVisibleChange: onVisibleChange,
        afterPopupVisibleChange: afterVisibleChange,
        popupTransitionName: transitionName,
        popupAnimation: animation,
        defaultPopupVisible: defaultVisible,
        destroyPopupOnHide: destroyTooltipOnHide,
        mouseLeaveDelay: mouseLeaveDelay,
        popupStyle: overlayStyle,
        mouseEnterDelay: mouseEnterDelay
      }, extraProps),
      children
    );
  };

  return Tooltip;
}(Component);

Tooltip.propTypes = {
  trigger: PropTypes.any,
  children: PropTypes.any,
  defaultVisible: PropTypes.bool,
  visible: PropTypes.bool,
  placement: PropTypes.string,
  transitionName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  animation: PropTypes.any,
  onVisibleChange: PropTypes.func,
  afterVisibleChange: PropTypes.func,
  overlay: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  overlayStyle: PropTypes.object,
  overlayClassName: PropTypes.string,
  prefixCls: PropTypes.string,
  mouseEnterDelay: PropTypes.number,
  mouseLeaveDelay: PropTypes.number,
  getTooltipContainer: PropTypes.func,
  destroyTooltipOnHide: PropTypes.bool,
  align: PropTypes.object,
  arrowContent: PropTypes.any,
  id: PropTypes.string
};
Tooltip.defaultProps = {
  prefixCls: 'rc-tooltip',
  mouseEnterDelay: 0,
  destroyTooltipOnHide: false,
  mouseLeaveDelay: 0.1,
  align: {},
  placement: 'right',
  trigger: ['hover'],
  arrowContent: null
};


module.exportDefault(Tooltip);