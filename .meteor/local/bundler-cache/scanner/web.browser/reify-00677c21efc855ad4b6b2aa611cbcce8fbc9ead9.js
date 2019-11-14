let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let _without;module.link("lodash/without",{default(v){_without=v}},1);let _map;module.link("lodash/map",{default(v){_map=v}},2);let cx;module.link('classnames',{default(v){cx=v}},3);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},4);let React;module.link('react',{default(v){React=v}},5);let childrenUtils,customPropTypes,getElementType,getUnhandledProps,SUI,useKeyOnly,useWidthProp;module.link('../../lib',{childrenUtils(v){childrenUtils=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},SUI(v){SUI=v},useKeyOnly(v){useKeyOnly=v},useWidthProp(v){useWidthProp=v}},6);let Statistic;module.link('./Statistic',{default(v){Statistic=v}},7);







/**
 * A group of statistics.
 */

function StatisticGroup(props) {
  var children = props.children,
      className = props.className,
      color = props.color,
      content = props.content,
      horizontal = props.horizontal,
      inverted = props.inverted,
      items = props.items,
      size = props.size,
      widths = props.widths;
  var classes = cx('ui', color, size, useKeyOnly(horizontal, 'horizontal'), useKeyOnly(inverted, 'inverted'), useWidthProp(widths), 'statistics', className);
  var rest = getUnhandledProps(StatisticGroup, props);
  var ElementType = getElementType(StatisticGroup, props);

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
  }), _map(items, function (item) {
    return Statistic.create(item);
  }));
}

StatisticGroup.handledProps = ["as", "children", "className", "color", "content", "horizontal", "inverted", "items", "size", "widths"];
StatisticGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A statistic group can be formatted to be different colors. */
  color: PropTypes.oneOf(SUI.COLORS),

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A statistic group can present its measurement horizontally. */
  horizontal: PropTypes.bool,

  /** A statistic group can be formatted to fit on a dark background. */
  inverted: PropTypes.bool,

  /** Array of props for Statistic. */
  items: customPropTypes.collectionShorthand,

  /** A statistic group can vary in size. */
  size: PropTypes.oneOf(_without(SUI.SIZES, 'big', 'massive', 'medium')),

  /** A statistic group can have its items divided evenly. */
  widths: PropTypes.oneOf(SUI.WIDTHS)
} : {};
module.exportDefault(StatisticGroup);