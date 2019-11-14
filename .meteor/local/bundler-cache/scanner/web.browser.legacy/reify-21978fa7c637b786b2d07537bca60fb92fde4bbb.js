var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var _without;module.link("lodash/without",{default:function(v){_without=v}},1);var cx;module.link('classnames',{default:function(v){cx=v}},2);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},3);var React;module.link('react',{default:function(v){React=v}},4);var childrenUtils,createShorthandFactory,customPropTypes,getElementType,getUnhandledProps,SUI,useKeyOnly,useValueAndKey;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},createShorthandFactory:function(v){createShorthandFactory=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v},SUI:function(v){SUI=v},useKeyOnly:function(v){useKeyOnly=v},useValueAndKey:function(v){useValueAndKey=v}},5);var StatisticGroup;module.link('./StatisticGroup',{default:function(v){StatisticGroup=v}},6);var StatisticLabel;module.link('./StatisticLabel',{default:function(v){StatisticLabel=v}},7);var StatisticValue;module.link('./StatisticValue',{default:function(v){StatisticValue=v}},8);








/**
 * A statistic emphasizes the current value of an attribute.
 */

function Statistic(props) {
  var children = props.children,
      className = props.className,
      color = props.color,
      content = props.content,
      floated = props.floated,
      horizontal = props.horizontal,
      inverted = props.inverted,
      label = props.label,
      size = props.size,
      text = props.text,
      value = props.value;
  var classes = cx('ui', color, size, useValueAndKey(floated, 'floated'), useKeyOnly(horizontal, 'horizontal'), useKeyOnly(inverted, 'inverted'), 'statistic', className);
  var rest = getUnhandledProps(Statistic, props);
  var ElementType = getElementType(Statistic, props);

  if (!childrenUtils.isNil(children)) {
    return React.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }

  if (!childrenUtils.isNil(content)) {
    return React.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), content);
  }

  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), StatisticValue.create(value, {
    defaultProps: {
      text: text
    },
    autoGenerateKey: false
  }), StatisticLabel.create(label, {
    autoGenerateKey: false
  }));
}

Statistic.handledProps = ["as", "children", "className", "color", "content", "floated", "horizontal", "inverted", "label", "size", "text", "value"];
Statistic.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A statistic can be formatted to be different colors. */
  color: PropTypes.oneOf(SUI.COLORS),

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A statistic can sit to the left or right of other content. */
  floated: PropTypes.oneOf(SUI.FLOATS),

  /** A statistic can present its measurement horizontally. */
  horizontal: PropTypes.bool,

  /** A statistic can be formatted to fit on a dark background. */
  inverted: PropTypes.bool,

  /** Label content of the Statistic. */
  label: customPropTypes.contentShorthand,

  /** A statistic can vary in size. */
  size: PropTypes.oneOf(_without(SUI.SIZES, 'big', 'massive', 'medium')),

  /** Format the StatisticValue with smaller font size to fit nicely beside number values. */
  text: PropTypes.bool,

  /** Value content of the Statistic. */
  value: customPropTypes.contentShorthand
} : {};
Statistic.Group = StatisticGroup;
Statistic.Label = StatisticLabel;
Statistic.Value = StatisticValue;
Statistic.create = createShorthandFactory(Statistic, function (content) {
  return {
    content: content
  };
});
module.exportDefault(Statistic);