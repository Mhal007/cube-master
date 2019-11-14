let _classCallCheck;module.link('babel-runtime/helpers/classCallCheck',{default(v){_classCallCheck=v}},0);let _possibleConstructorReturn;module.link('babel-runtime/helpers/possibleConstructorReturn',{default(v){_possibleConstructorReturn=v}},1);let _inherits;module.link('babel-runtime/helpers/inherits',{default(v){_inherits=v}},2);let React,Component;module.link('react',{default(v){React=v},Component(v){Component=v}},3);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},4);let LazyRenderBox;module.link('./LazyRenderBox',{default(v){LazyRenderBox=v}},5);






var PopupInner = function (_Component) {
  _inherits(PopupInner, _Component);

  function PopupInner() {
    _classCallCheck(this, PopupInner);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  PopupInner.prototype.render = function render() {
    var props = this.props;
    var className = props.className;
    if (!props.visible) {
      className += ' ' + props.hiddenClassName;
    }
    return React.createElement(
      'div',
      {
        className: className,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        onMouseDown: props.onMouseDown,
        onTouchStart: props.onTouchStart,
        style: props.style
      },
      React.createElement(
        LazyRenderBox,
        { className: props.prefixCls + '-content', visible: props.visible },
        props.children
      )
    );
  };

  return PopupInner;
}(Component);

PopupInner.propTypes = {
  hiddenClassName: PropTypes.string,
  className: PropTypes.string,
  prefixCls: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseDown: PropTypes.func,
  onTouchStart: PropTypes.func,
  children: PropTypes.any
};


module.exportDefault(PopupInner);