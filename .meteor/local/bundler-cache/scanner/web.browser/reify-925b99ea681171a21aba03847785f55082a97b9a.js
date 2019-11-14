let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let cx;module.link('classnames',{default(v){cx=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let React;module.link('react',{default(v){React=v}},3);let childrenUtils,customPropTypes,getElementType,getUnhandledProps,useKeyOnly;module.link('../../lib',{childrenUtils(v){childrenUtils=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},useKeyOnly(v){useKeyOnly=v}},4);




/**
 * A comment can contain an action.
 */

function CommentAction(props) {
  var active = props.active,
      className = props.className,
      children = props.children,
      content = props.content;
  var classes = cx(useKeyOnly(active, 'active'), className);
  var rest = getUnhandledProps(CommentAction, props);
  var ElementType = getElementType(CommentAction, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils.isNil(children) ? content : children);
}

CommentAction.handledProps = ["active", "as", "children", "className", "content"];
CommentAction.defaultProps = {
  as: 'a'
};
CommentAction.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Style as the currently active action. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand
} : {};
module.exportDefault(CommentAction);