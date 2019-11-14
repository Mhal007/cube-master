let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let cx;module.link('classnames',{default(v){cx=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let React;module.link('react',{default(v){React=v}},3);let childrenUtils,customPropTypes,getElementType,getUnhandledProps,useKeyOnly;module.link('../../lib',{childrenUtils(v){childrenUtils=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},useKeyOnly(v){useKeyOnly=v}},4);




/**
 * A pushable sub-component for Sidebar.
 */

function SidebarPusher(props) {
  var className = props.className,
      dimmed = props.dimmed,
      children = props.children,
      content = props.content;
  var classes = cx('pusher', useKeyOnly(dimmed, 'dimmed'), className);
  var rest = getUnhandledProps(SidebarPusher, props);
  var ElementType = getElementType(SidebarPusher, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils.isNil(children) ? content : children);
}

SidebarPusher.handledProps = ["as", "children", "className", "content", "dimmed"];
SidebarPusher.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Controls whether or not the dim is displayed. */
  dimmed: PropTypes.bool
} : {};
module.exportDefault(SidebarPusher);