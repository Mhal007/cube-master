let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let cx;module.link('classnames',{default(v){cx=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let React;module.link('react',{default(v){React=v}},3);let childrenUtils,customPropTypes,getElementType,getUnhandledProps,useKeyOnly;module.link('../../lib',{childrenUtils(v){childrenUtils=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},useKeyOnly(v){useKeyOnly=v}},4);let PlaceholderHeader;module.link('./PlaceholderHeader',{default(v){PlaceholderHeader=v}},5);let PlaceholderImage;module.link('./PlaceholderImage',{default(v){PlaceholderImage=v}},6);let PlaceholderLine;module.link('./PlaceholderLine',{default(v){PlaceholderLine=v}},7);let PlaceholderParagraph;module.link('./PlaceholderParagraph',{default(v){PlaceholderParagraph=v}},8);








/**
 * A placeholder is used to reserve splace for content that soon will appear in a layout.
 */

function Placeholder(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      fluid = props.fluid,
      inverted = props.inverted;
  var classes = cx('ui', useKeyOnly(fluid, 'fluid'), useKeyOnly(inverted, 'inverted'), 'placeholder', className);
  var rest = getUnhandledProps(Placeholder, props);
  var ElementType = getElementType(Placeholder, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils.isNil(children) ? content : children);
}

Placeholder.handledProps = ["as", "children", "className", "content", "fluid", "inverted"];
Placeholder.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A fluid placeholder takes up the width of its container. */
  fluid: PropTypes.bool,

  /** A placeholder can have their colors inverted. */
  inverted: PropTypes.bool
} : {};
Placeholder.Header = PlaceholderHeader;
Placeholder.Image = PlaceholderImage;
Placeholder.Line = PlaceholderLine;
Placeholder.Paragraph = PlaceholderParagraph;
module.exportDefault(Placeholder);