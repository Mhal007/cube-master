var _extends;module.link('babel-runtime/helpers/extends',{default:function(v){_extends=v}},0);var _defineProperty;module.link('babel-runtime/helpers/defineProperty',{default:function(v){_defineProperty=v}},1);var React;module.link('react',{default:function(v){React=v}},2);

/* eslint-disable react/prop-types */


var Track = function Track(props) {
  var _ref, _ref2;

  var className = props.className,
      included = props.included,
      vertical = props.vertical,
      offset = props.offset,
      length = props.length,
      style = props.style,
      reverse = props.reverse;

  var positonStyle = vertical ? (_ref = {}, _defineProperty(_ref, reverse ? 'top' : 'bottom', offset + '%'), _defineProperty(_ref, reverse ? 'bottom' : 'top', 'auto'), _defineProperty(_ref, 'height', length + '%'), _ref) : (_ref2 = {}, _defineProperty(_ref2, reverse ? 'right' : 'left', offset + '%'), _defineProperty(_ref2, reverse ? 'left' : 'right', 'auto'), _defineProperty(_ref2, 'width', length + '%'), _ref2);

  var elStyle = _extends({}, style, positonStyle);
  return included ? React.createElement('div', { className: className, style: elStyle }) : null;
};

module.exportDefault(Track);