var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var cx;module.link('classnames',{default:function(v){cx=v}},1);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},2);var React;module.link('react',{default:function(v){React=v}},3);var childrenUtils,customPropTypes,getElementType,getUnhandledProps,useKeyOnly;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v},useKeyOnly:function(v){useKeyOnly=v}},4);var PlaceholderHeader;module.link('./PlaceholderHeader',{default:function(v){PlaceholderHeader=v}},5);var PlaceholderImage;module.link('./PlaceholderImage',{default:function(v){PlaceholderImage=v}},6);var PlaceholderLine;module.link('./PlaceholderLine',{default:function(v){PlaceholderLine=v}},7);var PlaceholderParagraph;module.link('./PlaceholderParagraph',{default:function(v){PlaceholderParagraph=v}},8);








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