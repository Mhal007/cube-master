let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let cx;module.link('classnames',{default(v){cx=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let React;module.link('react',{default(v){React=v}},3);let childrenUtils,customPropTypes,getElementType,getUnhandledProps,useKeyOnly;module.link('../../lib',{childrenUtils(v){childrenUtils=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},useKeyOnly(v){useKeyOnly=v}},4);let CommentAction;module.link('./CommentAction',{default(v){CommentAction=v}},5);let CommentActions;module.link('./CommentActions',{default(v){CommentActions=v}},6);let CommentAuthor;module.link('./CommentAuthor',{default(v){CommentAuthor=v}},7);let CommentAvatar;module.link('./CommentAvatar',{default(v){CommentAvatar=v}},8);let CommentContent;module.link('./CommentContent',{default(v){CommentContent=v}},9);let CommentGroup;module.link('./CommentGroup',{default(v){CommentGroup=v}},10);let CommentMetadata;module.link('./CommentMetadata',{default(v){CommentMetadata=v}},11);let CommentText;module.link('./CommentText',{default(v){CommentText=v}},12);












/**
 * A comment displays user feedback to site content.
 */

function Comment(props) {
  var className = props.className,
      children = props.children,
      collapsed = props.collapsed,
      content = props.content;
  var classes = cx(useKeyOnly(collapsed, 'collapsed'), 'comment', className);
  var rest = getUnhandledProps(Comment, props);
  var ElementType = getElementType(Comment, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils.isNil(children) ? content : children);
}

Comment.handledProps = ["as", "children", "className", "collapsed", "content"];
Comment.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Comment can be collapsed, or hidden from view. */
  collapsed: PropTypes.bool,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand
} : {};
Comment.Author = CommentAuthor;
Comment.Action = CommentAction;
Comment.Actions = CommentActions;
Comment.Avatar = CommentAvatar;
Comment.Content = CommentContent;
Comment.Group = CommentGroup;
Comment.Metadata = CommentMetadata;
Comment.Text = CommentText;
module.exportDefault(Comment);