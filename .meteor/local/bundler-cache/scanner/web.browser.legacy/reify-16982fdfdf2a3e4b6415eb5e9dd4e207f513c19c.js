var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},1);var React;module.link('react',{default:function(v){React=v}},2);var getElementType,getUnhandledProps;module.link('../../lib',{getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v}},3);var Input;module.link('../../elements/Input',{default:function(v){Input=v}},4);var FormField;module.link('./FormField',{default:function(v){FormField=v}},5);





/**
 * Sugar for <Form.Field control={Input} />.
 * @see Form
 * @see Input
 */

function FormInput(props) {
  var control = props.control;
  var rest = getUnhandledProps(FormInput, props);
  var ElementType = getElementType(FormInput, props);
  return React.createElement(ElementType, _extends({}, rest, {
    control: control
  }));
}

FormInput.handledProps = ["as", "control"];
FormInput.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A FormField control prop. */
  control: FormField.propTypes.control
} : {};
FormInput.defaultProps = {
  as: FormField,
  control: Input
};
module.exportDefault(FormInput);