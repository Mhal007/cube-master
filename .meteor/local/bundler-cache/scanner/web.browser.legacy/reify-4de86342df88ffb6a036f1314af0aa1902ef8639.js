var _toConsumableArray;module.link("@babel/runtime/helpers/toConsumableArray",{default:function(v){_toConsumableArray=v}},0);var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},1);var cx;module.link('classnames',{default:function(v){cx=v}},2);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},3);var React;module.link('react',{default:function(v){React=v}},4);var customPropTypes,getElementType,getUnhandledProps,SUI,useKeyOnly,useWidthProp;module.link('../../lib',{customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v},SUI:function(v){SUI=v},useKeyOnly:function(v){useKeyOnly=v},useWidthProp:function(v){useWidthProp=v}},5);





/**
 * A set of fields can appear grouped together.
 * @see Form
 */

function FormGroup(props) {
  var children = props.children,
      className = props.className,
      grouped = props.grouped,
      inline = props.inline,
      unstackable = props.unstackable,
      widths = props.widths;
  var classes = cx(useKeyOnly(grouped, 'grouped'), useKeyOnly(inline, 'inline'), useKeyOnly(unstackable, 'unstackable'), useWidthProp(widths, null, true), 'fields', className);
  var rest = getUnhandledProps(FormGroup, props);
  var ElementType = getElementType(FormGroup, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), children);
}

FormGroup.handledProps = ["as", "children", "className", "grouped", "inline", "unstackable", "widths"];
FormGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Fields can show related choices. */
  grouped: customPropTypes.every([customPropTypes.disallow(['inline']), PropTypes.bool]),

  /** Multiple fields may be inline in a row. */
  inline: customPropTypes.every([customPropTypes.disallow(['grouped']), PropTypes.bool]),

  /** A form group can prevent itself from stacking on mobile. */
  unstackable: PropTypes.bool,

  /** Fields Groups can specify their width in grid columns or automatically divide fields to be equal width. */
  widths: PropTypes.oneOf([].concat(_toConsumableArray(SUI.WIDTHS), ['equal']))
} : {};
module.exportDefault(FormGroup);