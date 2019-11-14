var _objectWithoutProperties;module.link('babel-runtime/helpers/objectWithoutProperties',{default:function(v){_objectWithoutProperties=v}},0);var _classCallCheck;module.link('babel-runtime/helpers/classCallCheck',{default:function(v){_classCallCheck=v}},1);var _possibleConstructorReturn;module.link('babel-runtime/helpers/possibleConstructorReturn',{default:function(v){_possibleConstructorReturn=v}},2);var _inherits;module.link('babel-runtime/helpers/inherits',{default:function(v){_inherits=v}},3);var React,Component;module.link('react',{default:function(v){React=v},Component:function(v){Component=v}},4);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},5);






var LazyRenderBox = function (_Component) {
  _inherits(LazyRenderBox, _Component);

  function LazyRenderBox() {
    _classCallCheck(this, LazyRenderBox);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return nextProps.hiddenClassName || nextProps.visible;
  };

  LazyRenderBox.prototype.render = function render() {
    var _props = this.props,
        hiddenClassName = _props.hiddenClassName,
        visible = _props.visible,
        props = _objectWithoutProperties(_props, ['hiddenClassName', 'visible']);

    if (hiddenClassName || React.Children.count(props.children) > 1) {
      if (!visible && hiddenClassName) {
        props.className += ' ' + hiddenClassName;
      }
      return React.createElement('div', props);
    }

    return React.Children.only(props.children);
  };

  return LazyRenderBox;
}(Component);

LazyRenderBox.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  visible: PropTypes.bool,
  hiddenClassName: PropTypes.string
};


module.exportDefault(LazyRenderBox);