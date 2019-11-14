var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var cx;module.link('classnames',{default:function(v){cx=v}},1);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},2);var React;module.link('react',{default:function(v){React=v}},3);var childrenUtils,createShorthandFactory,customPropTypes,getElementType,getUnhandledProps;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},createShorthandFactory:function(v){createShorthandFactory=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v}},4);




/**
 * A statistic can contain a label to help provide context for the presented value.
 */

function StatisticLabel(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = cx('label', className);
  var rest = getUnhandledProps(StatisticLabel, props);
  var ElementType = getElementType(StatisticLabel, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils.isNil(children) ? content : children);
}

StatisticLabel.handledProps = ["as", "children", "className", "content"];
StatisticLabel.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand
} : {};
StatisticLabel.create = createShorthandFactory(StatisticLabel, function (content) {
  return {
    content: content
  };
});
module.exportDefault(StatisticLabel);