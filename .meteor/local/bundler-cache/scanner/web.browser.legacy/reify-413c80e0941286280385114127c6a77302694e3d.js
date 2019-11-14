var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},1);var React;module.link('react',{default:function(v){React=v}},2);var getElementType,getUnhandledProps;module.link('../../lib',{getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v}},3);var Select;module.link('../../addons/Select',{default:function(v){Select=v}},4);var Dropdown;module.link('../../modules/Dropdown',{default:function(v){Dropdown=v}},5);var FormField;module.link('./FormField',{default:function(v){FormField=v}},6);






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