let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let cx;module.link('classnames',{default(v){cx=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let React;module.link('react',{default(v){React=v}},3);let getElementType,getUnhandledProps;module.link('../../lib',{getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v}},4);




/**
 * A dropdown menu can contain dividers to separate related content.
 */

function DropdownDivider(props) {
  var className = props.className;
  var classes = cx('divider', className);
  var rest = getUnhandledProps(DropdownDivider, props);
  var ElementType = getElementType(DropdownDivider, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }));
}

DropdownDivider.handledProps = ["as", "className"];
DropdownDivider.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Additional classes. */
  className: PropTypes.string
} : {};
module.exportDefault(DropdownDivider);