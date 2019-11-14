var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var cx;module.link('classnames',{default:function(v){cx=v}},1);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},2);var React;module.link('react',{default:function(v){React=v}},3);var childrenUtils,customPropTypes,getElementType,getUnhandledProps,useKeyOnly;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v},useKeyOnly:function(v){useKeyOnly=v}},4);




/**
 * A placeholder can contain a header.
 */

function PlaceholderHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      image = props.image;
  var classes = cx(useKeyOnly(image, 'image'), 'header', className);
  var rest = getUnhandledProps(PlaceholderHeader, props);
  var ElementType = getElementType(PlaceholderHeader, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils.isNil(children) ? content : children);
}

PlaceholderHeader.handledProps = ["as", "children", "className", "content", "image"];
PlaceholderHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A placeholder can contain an image. */
  image: PropTypes.bool
} : {};
module.exportDefault(PlaceholderHeader);