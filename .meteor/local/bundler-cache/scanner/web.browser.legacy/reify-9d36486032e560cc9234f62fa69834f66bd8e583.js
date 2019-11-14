var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var cx;module.link('classnames',{default:function(v){cx=v}},1);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},2);var React;module.link('react',{default:function(v){React=v}},3);var childrenUtils,customPropTypes,getElementType,getUnhandledProps,useKeyOnly;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v},useKeyOnly:function(v){useKeyOnly=v}},4);var CommentAction;module.link('./CommentAction',{default:function(v){CommentAction=v}},5);var CommentActions;module.link('./CommentActions',{default:function(v){CommentActions=v}},6);var CommentAuthor;module.link('./CommentAuthor',{default:function(v){CommentAuthor=v}},7);var CommentAvatar;module.link('./CommentAvatar',{default:function(v){CommentAvatar=v}},8);var CommentContent;module.link('./CommentContent',{default:function(v){CommentContent=v}},9);var CommentGroup;module.link('./CommentGroup',{default:function(v){CommentGroup=v}},10);var CommentMetadata;module.link('./CommentMetadata',{default:function(v){CommentMetadata=v}},11);var CommentText;module.link('./CommentText',{default:function(v){CommentText=v}},12);












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