let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},1);let React;module.link('react',{default(v){React=v}},2);let getElementType,getUnhandledProps;module.link('../../lib',{getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v}},3);let Radio;module.link('../../addons/Radio',{default(v){Radio=v}},4);let FormField;module.link('./FormField',{default(v){FormField=v}},5);





/**
 * Sugar for <Form.Field control={Radio} />.
 * @see Form
 * @see Radio
 */

function FormRadio(props) {
  var control = props.control;
  var rest = getUnhandledProps(FormRadio, props);
  var ElementType = getElementType(FormRadio, props);
  return React.createElement(ElementType, _extends({}, rest, {
    control: control
  }));
}

FormRadio.handledProps = ["as", "control"];
FormRadio.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A FormField control prop. */
  control: FormField.propTypes.control
} : {};
FormRadio.defaultProps = {
  as: FormField,
  control: Radio
};
module.exportDefault(FormRadio);