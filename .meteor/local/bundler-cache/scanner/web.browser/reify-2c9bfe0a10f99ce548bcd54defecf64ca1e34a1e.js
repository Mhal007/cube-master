let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let _without;module.link("lodash/without",{default(v){_without=v}},1);let cx;module.link('classnames',{default(v){cx=v}},2);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},3);let React;module.link('react',{default(v){React=v}},4);let childrenUtils,customPropTypes,getElementType,getUnhandledProps,SUI,useTextAlignProp;module.link('../../lib',{childrenUtils(v){childrenUtils=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},SUI(v){SUI=v},useTextAlignProp(v){useTextAlignProp=v}},5);





/**
 * A card can contain content metadata.
 */

function CardMeta(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      textAlign = props.textAlign;
  var classes = cx(useTextAlignProp(textAlign), 'meta', className);
  var rest = getUnhandledProps(CardMeta, props);
  var ElementType = getElementType(CardMeta, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils.isNil(children) ? content : children);
}

CardMeta.handledProps = ["as", "children", "className", "content", "textAlign"];
CardMeta.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A card meta can adjust its text alignment. */
  textAlign: PropTypes.oneOf(_without(SUI.TEXT_ALIGNMENTS, 'justified'))
} : {};
module.exportDefault(CardMeta);