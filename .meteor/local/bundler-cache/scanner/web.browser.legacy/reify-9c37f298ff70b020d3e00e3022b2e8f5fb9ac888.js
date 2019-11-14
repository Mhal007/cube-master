var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var cx;module.link('classnames',{default:function(v){cx=v}},1);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},2);var React;module.link('react',{default:function(v){React=v}},3);var getElementType,getUnhandledProps;module.link('../../lib',{getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v}},4);




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