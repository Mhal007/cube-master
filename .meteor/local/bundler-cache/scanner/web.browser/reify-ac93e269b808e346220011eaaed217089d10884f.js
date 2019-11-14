let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let React;module.link('react',{default(v){React=v}},1);let getUnhandledProps;module.link('../../lib',{getUnhandledProps(v){getUnhandledProps=v}},2);let Checkbox;module.link('../../modules/Checkbox',{default(v){Checkbox=v}},3);



/**
 * A Radio is sugar for <Checkbox radio />.
 * Useful for exclusive groups of sliders or toggles.
 * @see Checkbox
 * @see Form
 */

function Radio(props) {
  var slider = props.slider,
      toggle = props.toggle,
      type = props.type;
  var rest = getUnhandledProps(Radio, props); // const ElementType = getElementType(Radio, props)
  // radio, slider, toggle are exclusive
  // use an undefined radio if slider or toggle are present

  var radio = !(slider || toggle) || undefined;
  return React.createElement(Checkbox, _extends({}, rest, {
    type: type,
    radio: radio,
    slider: slider,
    toggle: toggle
  }));
}

Radio.handledProps = ["slider", "toggle", "type"];
Radio.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Format to emphasize the current selection state. */
  slider: Checkbox.propTypes.slider,

  /** Format to show an on or off choice. */
  toggle: Checkbox.propTypes.toggle,

  /** HTML input type, either checkbox or radio. */
  type: Checkbox.propTypes.type
} : {};
Radio.defaultProps = {
  type: 'radio'
};
module.exportDefault(Radio);