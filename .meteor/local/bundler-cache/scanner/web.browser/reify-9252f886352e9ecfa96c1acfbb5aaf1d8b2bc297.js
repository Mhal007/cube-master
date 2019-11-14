let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let cx;module.link('classnames',{default(v){cx=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let React;module.link('react',{default(v){React=v}},3);let childrenUtils,createShorthandFactory,customPropTypes,getElementType,getUnhandledProps,useKeyOnly;module.link('../../lib',{childrenUtils(v){childrenUtils=v},createShorthandFactory(v){createShorthandFactory=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},useKeyOnly(v){useKeyOnly=v}},4);




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