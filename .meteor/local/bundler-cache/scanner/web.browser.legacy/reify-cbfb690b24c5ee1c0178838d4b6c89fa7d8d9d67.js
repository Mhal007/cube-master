var _extends;module.link('babel-runtime/helpers/extends',{default:function(v){_extends=v}},0);var _defineProperty;module.link('babel-runtime/helpers/defineProperty',{default:function(v){_defineProperty=v}},1);var React;module.link('react',{default:function(v){React=v}},2);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},3);var classNames;module.link('classnames',{default:function(v){classNames=v}},4);





var Marks = function Marks(_ref) {
  var className = _ref.className,
      vertical = _ref.vertical,
      reverse = _ref.reverse,
      marks = _ref.marks,
      included = _ref.included,
      upperBound = _ref.upperBound,
      lowerBound = _ref.lowerBound,
      max = _ref.max,
      min = _ref.min,
      onClickLabel = _ref.onClickLabel;

  var marksKeys = Object.keys(marks);

  var range = max - min;
  var elements = marksKeys.map(parseFloat).sort(function (a, b) {
    return a - b;
  }).map(function (point) {
    var _classNames;

    var markPoint = marks[point];
    var markPointIsObject = typeof markPoint === 'object' && !React.isValidElement(markPoint);
    var markLabel = markPointIsObject ? markPoint.label : markPoint;
    if (!markLabel && markLabel !== 0) {
      return null;
    }

    var isActive = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var markClassName = classNames((_classNames = {}, _defineProperty(_classNames, className + '-text', true), _defineProperty(_classNames, className + '-text-active', isActive), _classNames));

    var bottomStyle = _defineProperty({
      marginBottom: '-50%'
    }, reverse ? 'top' : 'bottom', (point - min) / range * 100 + '%');

    var leftStyle = _defineProperty({
      transform: 'translateX(-50%)',
      msTransform: 'translateX(-50%)'
    }, reverse ? 'right' : 'left', reverse ? (point - min / 4) / range * 100 + '%' : (point - min) / range * 100 + '%');

    var style = vertical ? bottomStyle : leftStyle;
    var markStyle = markPointIsObject ? _extends({}, style, markPoint.style) : style;
    return React.createElement(
      'span',
      {
        className: markClassName,
        style: markStyle,
        key: point,
        onMouseDown: function onMouseDown(e) {
          return onClickLabel(e, point);
        },
        onTouchStart: function onTouchStart(e) {
          return onClickLabel(e, point);
        }
      },
      markLabel
    );
  });

  return React.createElement(
    'div',
    { className: className },
    elements
  );
};

Marks.propTypes = {
  className: PropTypes.string,
  vertical: PropTypes.bool,
  reverse: PropTypes.bool,
  marks: PropTypes.object,
  included: PropTypes.bool,
  upperBound: PropTypes.number,
  lowerBound: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  onClickLabel: PropTypes.func
};

module.exportDefault(Marks);