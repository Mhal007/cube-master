let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let _without;module.link("lodash/without",{default(v){_without=v}},1);let cx;module.link('classnames',{default(v){cx=v}},2);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},3);let React;module.link('react',{default(v){React=v}},4);let childrenUtils,customPropTypes,getElementType,getUnhandledProps,SUI,useKeyOnly;module.link('../../lib',{childrenUtils(v){childrenUtils=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},SUI(v){SUI=v},useKeyOnly(v){useKeyOnly=v}},5);





/**
 * Comments can be grouped.
 */

function CommentGroup(props) {
  var className = props.className,
      children = props.children,
      collapsed = props.collapsed,
      content = props.content,
      minimal = props.minimal,
      size = props.size,
      threaded = props.threaded;
  var classes = cx('ui', size, useKeyOnly(collapsed, 'collapsed'), useKeyOnly(minimal, 'minimal'), useKeyOnly(threaded, 'threaded'), 'comments', className);
  var rest = getUnhandledProps(CommentGroup, props);
  var ElementType = getElementType(CommentGroup, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils.isNil(children) ? content : children);
}

CommentGroup.handledProps = ["as", "children", "className", "collapsed", "content", "minimal", "size", "threaded"];
CommentGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Comments can be collapsed, or hidden from view. */
  collapsed: PropTypes.bool,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Comments can hide extra information unless a user shows intent to interact with a comment. */
  minimal: PropTypes.bool,

  /** Comments can have different sizes. */
  size: PropTypes.oneOf(_without(SUI.SIZES, 'medium')),

  /** A comment list can be threaded to showing the relationship between conversations. */
  threaded: PropTypes.bool
} : {};
module.exportDefault(CommentGroup);