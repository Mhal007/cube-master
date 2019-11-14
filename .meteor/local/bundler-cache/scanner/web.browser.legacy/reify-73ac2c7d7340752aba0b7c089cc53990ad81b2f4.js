var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var _without;module.link("lodash/without",{default:function(v){_without=v}},1);var cx;module.link('classnames',{default:function(v){cx=v}},2);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},3);var React;module.link('react',{default:function(v){React=v}},4);var childrenUtils,customPropTypes,getElementType,getUnhandledProps,SUI,useKeyOnly;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v},SUI:function(v){SUI=v},useKeyOnly:function(v){useKeyOnly=v}},5);





/**
 * A group of segments can be formatted to appear together.
 */

function SegmentGroup(props) {
  var children = props.children,
      className = props.className,
      compact = props.compact,
      content = props.content,
      horizontal = props.horizontal,
      piled = props.piled,
      raised = props.raised,
      size = props.size,
      stacked = props.stacked;
  var classes = cx('ui', size, useKeyOnly(compact, 'compact'), useKeyOnly(horizontal, 'horizontal'), useKeyOnly(piled, 'piled'), useKeyOnly(raised, 'raised'), useKeyOnly(stacked, 'stacked'), 'segments', className);
  var rest = getUnhandledProps(SegmentGroup, props);
  var ElementType = getElementType(SegmentGroup, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils.isNil(children) ? content : children);
}

SegmentGroup.handledProps = ["as", "children", "className", "compact", "content", "horizontal", "piled", "raised", "size", "stacked"];
SegmentGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A segment may take up only as much space as is necessary. */
  compact: PropTypes.bool,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Formats content to be aligned horizontally. */
  horizontal: PropTypes.bool,

  /** Formatted to look like a pile of pages. */
  piled: PropTypes.bool,

  /** A segment group may be formatted to raise above the page. */
  raised: PropTypes.bool,

  /** A segment group can have different sizes. */
  size: PropTypes.oneOf(_without(SUI.SIZES, 'medium')),

  /** Formatted to show it contains multiple pages. */
  stacked: PropTypes.bool
} : {};
module.exportDefault(SegmentGroup);