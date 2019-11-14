var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var cx;module.link('classnames',{default:function(v){cx=v}},1);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},2);var React;module.link('react',{default:function(v){React=v}},3);var childrenUtils,createShorthandFactory,customPropTypes,getElementType,getUnhandledProps;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},createShorthandFactory:function(v){createShorthandFactory=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v}},4);




/**
 * An item can contain extra content meant to be formatted separately from the main content.
 */

function ItemExtra(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = cx('extra', className);
  var rest = getUnhandledProps(ItemExtra, props);
  var ElementType = getElementType(ItemExtra, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils.isNil(children) ? content : children);
}

ItemExtra.handledProps = ["as", "children", "className", "content"];
ItemExtra.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand
} : {};
ItemExtra.create = createShorthandFactory(ItemExtra, function (content) {
  return {
    content: content
  };
});
module.exportDefault(ItemExtra);