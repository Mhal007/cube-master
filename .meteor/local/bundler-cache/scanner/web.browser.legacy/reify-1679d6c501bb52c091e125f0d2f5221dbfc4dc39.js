var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var cx;module.link('classnames',{default:function(v){cx=v}},1);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},2);var React;module.link('react',{default:function(v){React=v}},3);var childrenUtils,customPropTypes,getElementType,getUnhandledProps;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v}},4);var Icon;module.link('../../elements/Icon',{default:function(v){Icon=v}},5);





/**
 * A feed can contain a like element.
 */

function FeedLike(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      icon = props.icon;
  var classes = cx('like', className);
  var rest = getUnhandledProps(FeedLike, props);
  var ElementType = getElementType(FeedLike, props);

  if (!childrenUtils.isNil(children)) {
    return React.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }

  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), Icon.create(icon, {
    autoGenerateKey: false
  }), content);
}

FeedLike.handledProps = ["as", "children", "className", "content", "icon"];
FeedLike.defaultProps = {
  as: 'a'
};
FeedLike.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Shorthand for icon. Mutually exclusive with children. */
  icon: customPropTypes.itemShorthand
} : {};
module.exportDefault(FeedLike);