var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var cx;module.link('classnames',{default:function(v){cx=v}},1);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},2);var React;module.link('react',{default:function(v){React=v}},3);var childrenUtils,createShorthandFactory,customPropTypes,getElementType,getUnhandledProps,useKeyOnly;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},createShorthandFactory:function(v){createShorthandFactory=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v},useKeyOnly:function(v){useKeyOnly=v}},4);




/**
 * A modal can contain content.
 */

function ModalContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      image = props.image,
      scrolling = props.scrolling;
  var classes = cx(className, useKeyOnly(image, 'image'), useKeyOnly(scrolling, 'scrolling'), 'content');
  var rest = getUnhandledProps(ModalContent, props);
  var ElementType = getElementType(ModalContent, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils.isNil(children) ? content : children);
}

ModalContent.handledProps = ["as", "children", "className", "content", "image", "scrolling"];
ModalContent.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A modal can contain image content. */
  image: PropTypes.bool,

  /** A modal can use the entire size of the screen. */
  scrolling: PropTypes.bool
} : {};
ModalContent.create = createShorthandFactory(ModalContent, function (content) {
  return {
    content: content
  };
});
module.exportDefault(ModalContent);