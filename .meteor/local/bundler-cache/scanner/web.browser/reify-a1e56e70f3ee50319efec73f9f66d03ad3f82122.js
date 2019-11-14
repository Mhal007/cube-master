let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let cx;module.link('classnames',{default(v){cx=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let React;module.link('react',{default(v){React=v}},3);let childrenUtils,customPropTypes,getElementType,getUnhandledProps;module.link('../../lib',{childrenUtils(v){childrenUtils=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v}},4);




/**
 * A menu can contain a sub menu.
 */

function MenuMenu(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      position = props.position;
  var classes = cx(position, 'menu', className);
  var rest = getUnhandledProps(MenuMenu, props);
  var ElementType = getElementType(MenuMenu, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils.isNil(children) ? content : children);
}

MenuMenu.handledProps = ["as", "children", "className", "content", "position"];
MenuMenu.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A sub menu can take left or right position. */
  position: PropTypes.oneOf(['left', 'right'])
} : {};
module.exportDefault(MenuMenu);