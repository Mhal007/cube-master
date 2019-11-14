let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let cx;module.link('classnames',{default(v){cx=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let React;module.link('react',{default(v){React=v}},3);let childrenUtils,customPropTypes,getElementType,getUnhandledProps,useKeyOnly;module.link('../../lib',{childrenUtils(v){childrenUtils=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},useKeyOnly(v){useKeyOnly=v}},4);let RevealContent;module.link('./RevealContent',{default(v){RevealContent=v}},5);





/**
 * A reveal displays additional content in place of previous content when activated.
 */

function Reveal(props) {
  var active = props.active,
      animated = props.animated,
      children = props.children,
      className = props.className,
      content = props.content,
      disabled = props.disabled,
      instant = props.instant;
  var classes = cx('ui', animated, useKeyOnly(active, 'active'), useKeyOnly(disabled, 'disabled'), useKeyOnly(instant, 'instant'), 'reveal', className);
  var rest = getUnhandledProps(Reveal, props);
  var ElementType = getElementType(Reveal, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils.isNil(children) ? content : children);
}

Reveal.handledProps = ["active", "animated", "as", "children", "className", "content", "disabled", "instant"];
Reveal.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** An active reveal displays its hidden content. */
  active: PropTypes.bool,

  /** An animation name that will be applied to Reveal. */
  animated: PropTypes.oneOf(['fade', 'small fade', 'move', 'move right', 'move up', 'move down', 'rotate', 'rotate left']),

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A disabled reveal will not animate when hovered. */
  disabled: PropTypes.bool,

  /** An element can show its content without delay. */
  instant: PropTypes.bool
} : {};
Reveal.Content = RevealContent;
module.exportDefault(Reveal);