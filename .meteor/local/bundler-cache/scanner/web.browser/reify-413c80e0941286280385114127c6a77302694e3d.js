let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},1);let React;module.link('react',{default(v){React=v}},2);let getElementType,getUnhandledProps;module.link('../../lib',{getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v}},3);let Select;module.link('../../addons/Select',{default(v){Select=v}},4);let Dropdown;module.link('../../modules/Dropdown',{default(v){Dropdown=v}},5);let FormField;module.link('./FormField',{default(v){FormField=v}},6);






/**
 * Sugar for <Form.Field control={Select} />.
 * @see Form
 * @see Select
 */

function FormSelect(props) {
  var control = props.control,
      options = props.options;
  var rest = getUnhandledProps(FormSelect, props);
  var ElementType = getElementType(FormSelect, props);
  return React.createElement(ElementType, _extends({}, rest, {
    control: control,
    options: options
  }));
}

FormSelect.handledProps = ["as", "control", "options"];
FormSelect.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A FormField control prop. */
  control: FormField.propTypes.control,

  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: PropTypes.arrayOf(PropTypes.shape(Dropdown.Item.propTypes)).isRequired
} : {};
FormSelect.defaultProps = {
  as: FormField,
  control: Select
};
module.exportDefault(FormSelect);