var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var cx;module.link('classnames',{default:function(v){cx=v}},1);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},2);var React;module.link('react',{default:function(v){React=v}},3);var childrenUtils,createShorthandFactory,customPropTypes,getElementType,getUnhandledProps,useKeyOnly;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},createShorthandFactory:function(v){createShorthandFactory=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v},useKeyOnly:function(v){useKeyOnly=v}},4);




/**
 * A content sub-component for Accordion component.
 */

function AccordionContent(props) {
  var active = props.active,
      children = props.children,
      className = props.className,
      content = props.content;
  var classes = cx('content', useKeyOnly(active, 'active'), className);
  var rest = getUnhandledProps(AccordionContent, props);
  var ElementType = getElementType(AccordionContent, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils.isNil(children) ? content : children);
}

AccordionContent.handledProps = ["active", "as", "children", "className", "content"];
AccordionContent.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Whether or not the content is visible. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand
} : {};
AccordionContent.create = createShorthandFactory(AccordionContent, function (content) {
  return {
    content: content
  };
});
module.exportDefault(AccordionContent);