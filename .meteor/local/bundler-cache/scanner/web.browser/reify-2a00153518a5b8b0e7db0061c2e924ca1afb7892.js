let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let cx;module.link('classnames',{default(v){cx=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let React;module.link('react',{default(v){React=v}},3);let childrenUtils,createShorthand,customPropTypes,getElementType,getUnhandledProps;module.link('../../lib',{childrenUtils(v){childrenUtils=v},createShorthand(v){createShorthand=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v}},4);let FeedLike;module.link('./FeedLike',{default(v){FeedLike=v}},5);





/**
 * A feed can contain a meta.
 */

function FeedMeta(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      like = props.like;
  var classes = cx('meta', className);
  var rest = getUnhandledProps(FeedMeta, props);
  var ElementType = getElementType(FeedMeta, props);

  if (!childrenUtils.isNil(children)) {
    return React.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }

  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), createShorthand(FeedLike, function (val) {
    return {
      content: val
    };
  }, like, {
    autoGenerateKey: false
  }), content);
}

FeedMeta.handledProps = ["as", "children", "className", "content", "like"];
FeedMeta.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Shorthand for FeedLike. */
  like: customPropTypes.itemShorthand
} : {};
module.exportDefault(FeedMeta);