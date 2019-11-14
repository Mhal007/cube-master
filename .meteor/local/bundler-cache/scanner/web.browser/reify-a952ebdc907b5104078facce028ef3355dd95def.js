let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},1);let React;module.link('react',{default(v){React=v}},2);let getElementType,getUnhandledProps;module.link('../../lib',{getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v}},3);let Dropdown;module.link('../../modules/Dropdown',{default(v){Dropdown=v}},4);let FormField;module.link('./FormField',{default(v){FormField=v}},5);





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