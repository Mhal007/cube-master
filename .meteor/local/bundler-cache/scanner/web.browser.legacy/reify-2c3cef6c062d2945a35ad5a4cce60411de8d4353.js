var _defineProperty;module.link('babel-runtime/helpers/defineProperty',{default:function(v){_defineProperty=v}},0);var _extends;module.link('babel-runtime/helpers/extends',{default:function(v){_extends=v}},1);var React;module.link('react',{default:function(v){React=v}},2);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},3);var classNames;module.link('classnames',{default:function(v){classNames=v}},4);var warning;module.link('warning',{default:function(v){warning=v}},5);






var calcPoints = function calcPoints(vertical, marks, dots, step, min, max) {
  warning(dots ? step > 0 : true, '`Slider[step]` should be a positive number in order to make Slider[dots] work.');
  var points = Object.keys(marks).map(parseFloat).sort(function (a, b) {
    return a - b;
  });
  if (dots && step) {
    for (var i = min; i <= max; i += step) {
      if (points.indexOf(i) === -1) {
        points.push(i);
      }
    }
  }
  return points;
};

var Steps = function Steps(_ref) {
  var prefixCls = _ref.prefixCls,
      vertical = _ref.vertical,
      reverse = _ref.reverse,
      marks = _ref.marks,
      dots = _ref.dots,
      step = _ref.step,
      included = _ref.included,
      lowerBound = _ref.lowerBound,
      upperBound = _ref.upperBound,
      max = _ref.max,
      min = _ref.min,
      dotStyle = _ref.dotStyle,
      activeDotStyle = _ref.activeDotStyle;

  var range = max - min;
  var elements = calcPoints(vertical, marks, dots, step, min, max).map(function (point) {
    var _classNames;

    var offset = Math.abs(point - min) / range * 100 + '%';

    var isActived = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var style = vertical ? _extends({}, dotStyle, _defineProperty({}, reverse ? 'top' : 'bottom', offset)) : _extends({}, dotStyle, _defineProperty({}, reverse ? 'right' : 'left', offset));
    if (isActived) {
      style = _extends({}, style, activeDotStyle);
    }

    var pointClassName = classNames((_classNames = {}, _defineProperty(_classNames, prefixCls + '-dot', true), _defineProperty(_classNames, prefixCls + '-dot-active', isActived), _defineProperty(_classNames, prefixCls + '-dot-reverse', reverse), _classNames));

    return React.createElement('span', { className: pointClassName, style: style, key: point });
  });

  return React.createElement(
    'div',
    { className: prefixCls + '-step' },
    elements
  );
};

Steps.propTypes = {
  prefixCls: PropTypes.string,
  activeDotStyle: PropTypes.object,
  dotStyle: PropTypes.object,
  min: PropTypes.number,
  max: PropTypes.number,
  upperBound: PropTypes.number,
  lowerBound: PropTypes.number,
  included: PropTypes.bool,
  dots: PropTypes.bool,
  step: PropTypes.number,
  marks: PropTypes.object,
  vertical: PropTypes.bool,
  reverse: PropTypes.bool
};

module.exportDefault(Steps);