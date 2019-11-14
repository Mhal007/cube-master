var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var _without;module.link("lodash/without",{default:function(v){_without=v}},1);var cx;module.link('classnames',{default:function(v){cx=v}},2);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},3);var React;module.link('react',{default:function(v){React=v}},4);var childrenUtils,customPropTypes,getElementType,getUnhandledProps,SUI,useTextAlignProp;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v},SUI:function(v){SUI=v},useTextAlignProp:function(v){useTextAlignProp=v}},5);





/**
 * A card can contain a header.
 */

function CardHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      textAlign = props.textAlign;
  var classes = cx(useTextAlignProp(textAlign), 'header', className);
  var rest = getUnhandledProps(CardHeader, props);
  var ElementType = getElementType(CardHeader, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils.isNil(children) ? content : children);
}

CardHeader.handledProps = ["as", "children", "className", "content", "textAlign"];
CardHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A card header can adjust its text alignment. */
  textAlign: PropTypes.oneOf(_without(SUI.TEXT_ALIGNMENTS, 'justified'))
} : {};
module.exportDefault(CardHeader);