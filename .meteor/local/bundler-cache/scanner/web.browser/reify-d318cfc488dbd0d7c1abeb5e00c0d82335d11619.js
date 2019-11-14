module.export({default:()=>PopupContent});let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let cx;module.link('classnames',{default(v){cx=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let React;module.link('react',{default(v){React=v}},3);let childrenUtils,createShorthandFactory,customPropTypes,getElementType,getUnhandledProps;module.link('../../lib',{childrenUtils(v){childrenUtils=v},createShorthandFactory(v){createShorthandFactory=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v}},4);




/**
 * A PopupContent displays the content body of a Popover.
 */

function PopupContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = cx('content', className);
  var rest = getUnhandledProps(PopupContent, props);
  var ElementType = getElementType(PopupContent, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils.isNil(children) ? content : children);
}
PopupContent.handledProps = ["as", "children", "className", "content"];
PopupContent.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** The content of the Popup */
  children: PropTypes.node,

  /** Classes to add to the Popup content className. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand
} : {};
PopupContent.create = createShorthandFactory(PopupContent, function (children) {
  return {
    children: children
  };
});