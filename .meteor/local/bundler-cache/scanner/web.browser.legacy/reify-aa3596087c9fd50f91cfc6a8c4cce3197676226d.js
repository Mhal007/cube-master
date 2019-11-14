var _classCallCheck;module.link('babel-runtime/helpers/classCallCheck',{default:function(v){_classCallCheck=v}},0);var _possibleConstructorReturn;module.link('babel-runtime/helpers/possibleConstructorReturn',{default:function(v){_possibleConstructorReturn=v}},1);var _inherits;module.link('babel-runtime/helpers/inherits',{default:function(v){_inherits=v}},2);var React;module.link('react',{default:function(v){React=v}},3);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},4);





var Content = function (_React$Component) {
  _inherits(Content, _React$Component);

  function Content() {
    _classCallCheck(this, Content);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Content.prototype.componentDidUpdate = function componentDidUpdate() {
    var trigger = this.props.trigger;

    if (trigger) {
      trigger.forcePopupAlign();
    }
  };

  Content.prototype.render = function render() {
    var _props = this.props,
        overlay = _props.overlay,
        prefixCls = _props.prefixCls,
        id = _props.id;

    return React.createElement(
      'div',
      { className: prefixCls + '-inner', id: id, role: 'tooltip' },
      typeof overlay === 'function' ? overlay() : overlay
    );
  };

  return Content;
}(React.Component);

Content.propTypes = {
  prefixCls: PropTypes.string,
  overlay: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  id: PropTypes.string,
  trigger: PropTypes.any
};
module.exportDefault(Content);