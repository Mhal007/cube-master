let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let _map;module.link("lodash/map",{default(v){_map=v}},1);let _isNil;module.link("lodash/isNil",{default(v){_isNil=v}},2);let cx;module.link('classnames',{default(v){cx=v}},3);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},4);let React;module.link('react',{default(v){React=v}},5);let childrenUtils,customPropTypes,getElementType,getUnhandledProps,SUI,useKeyOnly,useKeyOrValueAndKey,useValueAndKey,useWidthProp;module.link('../../lib',{childrenUtils(v){childrenUtils=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},SUI(v){SUI=v},useKeyOnly(v){useKeyOnly=v},useKeyOrValueAndKey(v){useKeyOrValueAndKey=v},useValueAndKey(v){useValueAndKey=v},useWidthProp(v){useWidthProp=v}},6);let Button;module.link('./Button',{default(v){Button=v}},7);







/**
 * Buttons can be grouped.
 */

function ButtonGroup(props) {
  var attached = props.attached,
      basic = props.basic,
      buttons = props.buttons,
      children = props.children,
      className = props.className,
      color = props.color,
      compact = props.compact,
      content = props.content,
      floated = props.floated,
      fluid = props.fluid,
      icon = props.icon,
      inverted = props.inverted,
      labeled = props.labeled,
      negative = props.negative,
      positive = props.positive,
      primary = props.primary,
      secondary = props.secondary,
      size = props.size,
      toggle = props.toggle,
      vertical = props.vertical,
      widths = props.widths;
  var classes = cx('ui', color, size, useKeyOnly(basic, 'basic'), useKeyOnly(compact, 'compact'), useKeyOnly(fluid, 'fluid'), useKeyOnly(icon, 'icon'), useKeyOnly(inverted, 'inverted'), useKeyOnly(labeled, 'labeled'), useKeyOnly(negative, 'negative'), useKeyOnly(positive, 'positive'), useKeyOnly(primary, 'primary'), useKeyOnly(secondary, 'secondary'), useKeyOnly(toggle, 'toggle'), useKeyOnly(vertical, 'vertical'), useKeyOrValueAndKey(attached, 'attached'), useValueAndKey(floated, 'floated'), useWidthProp(widths), 'buttons', className);
  var rest = getUnhandledProps(ButtonGroup, props);
  var ElementType = getElementType(ButtonGroup, props);

  if (_isNil(buttons)) {
    return React.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), childrenUtils.isNil(children) ? content : children);
  }

  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), _map(buttons, function (button) {
    return Button.create(button);
  }));
}

ButtonGroup.handledProps = ["as", "attached", "basic", "buttons", "children", "className", "color", "compact", "content", "floated", "fluid", "icon", "inverted", "labeled", "negative", "positive", "primary", "secondary", "size", "toggle", "vertical", "widths"];
ButtonGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Groups can be attached to other content. */
  attached: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['left', 'right', 'top', 'bottom'])]),

  /** Groups can be less pronounced. */
  basic: PropTypes.bool,

  /** Array of shorthand Button values. */
  buttons: customPropTypes.collectionShorthand,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Groups can have a shared color. */
  color: PropTypes.oneOf(SUI.COLORS),

  /** Groups can reduce their padding to fit into tighter spaces. */
  compact: PropTypes.bool,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Groups can be aligned to the left or right of its container. */
  floated: PropTypes.oneOf(SUI.FLOATS),

  /** Groups can take the width of their container. */
  fluid: PropTypes.bool,

  /** Groups can be formatted as icons. */
  icon: PropTypes.bool,

  /** Groups can be formatted to appear on dark backgrounds. */
  inverted: PropTypes.bool,

  /** Groups can be formatted as labeled icon buttons. */
  labeled: PropTypes.bool,

  /** Groups can hint towards a negative consequence. */
  negative: PropTypes.bool,

  /** Groups can hint towards a positive consequence. */
  positive: PropTypes.bool,

  /** Groups can be formatted to show different levels of emphasis. */
  primary: PropTypes.bool,

  /** Groups can be formatted to show different levels of emphasis. */
  secondary: PropTypes.bool,

  /** Groups can have different sizes. */
  size: PropTypes.oneOf(SUI.SIZES),

  /** Groups can be formatted to toggle on and off. */
  toggle: PropTypes.bool,

  /** Groups can be formatted to appear vertically. */
  vertical: PropTypes.bool,

  /** Groups can have their widths divided evenly. */
  widths: PropTypes.oneOf(SUI.WIDTHS)
} : {};
module.exportDefault(ButtonGroup);