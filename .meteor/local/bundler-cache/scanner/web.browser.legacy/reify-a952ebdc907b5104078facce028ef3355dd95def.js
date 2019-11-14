var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},1);var React;module.link('react',{default:function(v){React=v}},2);var getElementType,getUnhandledProps;module.link('../../lib',{getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v}},3);var Dropdown;module.link('../../modules/Dropdown',{default:function(v){Dropdown=v}},4);var FormField;module.link('./FormField',{default:function(v){FormField=v}},5);





/**
 * Sugar for <Form.Field control={Dropdown} />.
 * @see Dropdown
 * @see Form
 */

function FormDropdown(props) {
  var control = props.control;
  var rest = getUnhandledProps(FormDropdown, props);
  var ElementType = getElementType(FormDropdown, props);
  return React.createElement(ElementType, _extends({}, rest, {
    control: control
  }));
}

FormDropdown.handledProps = ["as", "control"];
FormDropdown.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A FormField control prop. */
  control: FormField.propTypes.control
} : {};
FormDropdown.defaultProps = {
  as: FormField,
  control: Dropdown
};
module.exportDefault(FormDropdown);