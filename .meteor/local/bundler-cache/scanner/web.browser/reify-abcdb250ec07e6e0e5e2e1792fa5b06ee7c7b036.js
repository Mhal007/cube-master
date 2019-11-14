let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let cx;module.link('classnames',{default(v){cx=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let React;module.link('react',{default(v){React=v}},3);let childrenUtils,customPropTypes,getElementType,getUnhandledProps,SUI,useKeyOnly,useTextAlignProp;module.link('../../lib',{childrenUtils(v){childrenUtils=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},SUI(v){SUI=v},useKeyOnly(v){useKeyOnly=v},useTextAlignProp(v){useTextAlignProp=v}},4);




/**
 * A container limits content to a maximum width.
 */

function Container(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      fluid = props.fluid,
      text = props.text,
      textAlign = props.textAlign;
  var classes = cx('ui', useKeyOnly(text, 'text'), useKeyOnly(fluid, 'fluid'), useTextAlignProp(textAlign), 'container', className);
  var rest = getUnhandledProps(Container, props);
  var ElementType = getElementType(Container, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils.isNil(children) ? content : children);
}

Container.handledProps = ["as", "children", "className", "content", "fluid", "text", "textAlign"];
Container.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Container has no maximum width. */
  fluid: PropTypes.bool,

  /** Reduce maximum width to more naturally accommodate text. */
  text: PropTypes.bool,

  /** Align container text. */
  textAlign: PropTypes.oneOf(SUI.TEXT_ALIGNMENTS)
} : {};
module.exportDefault(Container);