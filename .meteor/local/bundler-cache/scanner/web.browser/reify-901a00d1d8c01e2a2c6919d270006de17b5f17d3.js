let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},1);let React;module.link('react',{default(v){React=v}},2);let getElementType,getUnhandledProps;module.link('../../lib',{getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v}},3);let TextArea;module.link('../../addons/TextArea',{default(v){TextArea=v}},4);let FormField;module.link('./FormField',{default(v){FormField=v}},5);





/**
 * Sugar for <Form.Field control={TextArea} />.
 * @see Form
 * @see TextArea
 */

function FormTextArea(props) {
  var control = props.control;
  var rest = getUnhandledProps(FormTextArea, props);
  var ElementType = getElementType(FormTextArea, props);
  return React.createElement(ElementType, _extends({}, rest, {
    control: control
  }));
}

FormTextArea.handledProps = ["as", "control"];
FormTextArea.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A FormField control prop. */
  control: FormField.propTypes.control
} : {};
FormTextArea.defaultProps = {
  as: FormField,
  control: TextArea
};
module.exportDefault(FormTextArea);