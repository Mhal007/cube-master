var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var cx;module.link('classnames',{default:function(v){cx=v}},1);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},2);var React;module.link('react',{default:function(v){React=v}},3);var childrenUtils,customPropTypes,getElementType,getUnhandledProps;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v}},4);




/**
 * A comment can contain an author.
 */

function CommentAuthor(props) {
  var className = props.className,
      children = props.children,
      content = props.content;
  var classes = cx('author', className);
  var rest = getUnhandledProps(CommentAuthor, props);
  var ElementType = getElementType(CommentAuthor, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils.isNil(children) ? content : children);
}

CommentAuthor.handledProps = ["as", "children", "className", "content"];
CommentAuthor.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand
} : {};
module.exportDefault(CommentAuthor);