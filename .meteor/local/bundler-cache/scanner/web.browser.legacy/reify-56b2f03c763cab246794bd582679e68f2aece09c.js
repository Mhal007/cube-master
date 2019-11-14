var _objectSpread;module.link("@babel/runtime/helpers/objectSpread",{default:function(v){_objectSpread=v}},0);var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},1);var _isNil;module.link("lodash/isNil",{default:function(v){_isNil=v}},2);var _get;module.link("lodash/get",{default:function(v){_get=v}},3);var cx;module.link('classnames',{default:function(v){cx=v}},4);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},5);var React,createElement;module.link('react',{default:function(v){React=v},createElement:function(v){createElement=v}},6);var childrenUtils,createHTMLLabel,customPropTypes,getElementType,getUnhandledProps,SUI,useKeyOnly,useWidthProp;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},createHTMLLabel:function(v){createHTMLLabel=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v},SUI:function(v){SUI=v},useKeyOnly:function(v){useKeyOnly=v},useWidthProp:function(v){useWidthProp=v}},7);var Label;module.link('../../elements/Label',{default:function(v){Label=v}},8);var Checkbox;module.link('../../modules/Checkbox',{default:function(v){Checkbox=v}},9);var Radio;module.link('../../addons/Radio',{default:function(v){Radio=v}},10);










/**
 * A field is a form element containing a label and an input.
 * @see Form
 * @see Button
 * @see Checkbox
 * @see Dropdown
 * @see Input
 * @see Radio
 * @see Select
 * @see Visibility
 */

function FormField(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      control = props.control,
      disabled = props.disabled,
      error = props.error,
      inline = props.inline,
      label = props.label,
      required = props.required,
      type = props.type,
      width = props.width;
  var classes = cx(useKeyOnly(disabled, 'disabled'), useKeyOnly(error, 'error'), useKeyOnly(inline, 'inline'), useKeyOnly(required, 'required'), useWidthProp(width, 'wide'), 'field', className);
  var rest = getUnhandledProps(FormField, props);
  var ElementType = getElementType(FormField, props);

  var errorPointing = _get(error, 'pointing', 'above');

  var errorLabel = Label.create(error, {
    autoGenerateKey: false,
    defaultProps: {
      prompt: true,
      pointing: errorPointing
    }
  });
  var errorLabelBefore = (errorPointing === 'below' || errorPointing === 'right') && errorLabel;
  var errorLabelAfter = (errorPointing === 'above' || errorPointing === 'left') && errorLabel; // ----------------------------------------
  // No Control
  // ----------------------------------------

  if (_isNil(control)) {
    if (_isNil(label)) {
      return React.createElement(ElementType, _extends({}, rest, {
        className: classes
      }), childrenUtils.isNil(children) ? content : children);
    }

    return React.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), errorLabelBefore, createHTMLLabel(label, {
      autoGenerateKey: false
    }), errorLabelAfter);
  } // ----------------------------------------
  // Checkbox/Radio Control
  // ----------------------------------------


  var controlProps = _objectSpread({}, rest, {
    content: content,
    children: children,
    disabled: disabled,
    required: required,
    type: type // wrap HTML checkboxes/radios in the label

  });

  if (control === 'input' && (type === 'checkbox' || type === 'radio')) {
    return React.createElement(ElementType, {
      className: classes
    }, React.createElement("label", null, errorLabelBefore, createElement(control, controlProps), " ", label, errorLabelAfter));
  } // pass label prop to controls that support it


  if (control === Checkbox || control === Radio) {
    return React.createElement(ElementType, {
      className: classes
    }, errorLabelBefore, createElement(control, _objectSpread({}, controlProps, {
      label: label
    })), errorLabelAfter);
  } // ----------------------------------------
  // Other Control
  // ----------------------------------------


  return React.createElement(ElementType, {
    className: classes
  }, createHTMLLabel(label, {
    defaultProps: {
      htmlFor: _get(controlProps, 'id')
    },
    autoGenerateKey: false
  }), errorLabelBefore, createElement(control, controlProps), errorLabelAfter);
}

FormField.handledProps = ["as", "children", "className", "content", "control", "disabled", "error", "inline", "label", "required", "type", "width"];
FormField.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /**
   * A form control component (i.e. Dropdown) or HTML tagName (i.e. 'input').
   * Extra FormField props are passed to the control component.
   * Mutually exclusive with children.
   */
  control: customPropTypes.some([PropTypes.func, PropTypes.oneOf(['button', 'input', 'select', 'textarea'])]),

  /** Individual fields may be disabled. */
  disabled: PropTypes.bool,

  /** Individual fields may display an error state along with a message. */
  error: PropTypes.oneOfType([PropTypes.bool, customPropTypes.itemShorthand]),

  /** A field can have its label next to instead of above it. */
  inline: PropTypes.bool,
  // Heads Up!
  // Do not disallow children with `label` shorthand
  // The `control` might accept a `label` prop and `children`

  /** Mutually exclusive with children. */
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),

  /** A field can show that input is mandatory. */
  required: PropTypes.bool,

  /** Passed to the control component (i.e. <input type='password' />) */
  type: customPropTypes.every([customPropTypes.demand(['control'])]),

  /** A field can specify its width in grid columns */
  width: PropTypes.oneOf(SUI.WIDTHS)
} : {};
module.exportDefault(FormField);