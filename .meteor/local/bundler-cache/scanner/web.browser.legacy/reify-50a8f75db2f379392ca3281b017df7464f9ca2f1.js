var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var _without;module.link("lodash/without",{default:function(v){_without=v}},1);var cx;module.link('classnames',{default:function(v){cx=v}},2);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},3);var React;module.link('react',{default:function(v){React=v}},4);var childrenUtils,createShorthandFactory,customPropTypes,getElementType,getUnhandledProps,SUI,useKeyOnly,useTextAlignProp,useVerticalAlignProp,useWidthProp;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},createShorthandFactory:function(v){createShorthandFactory=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v},SUI:function(v){SUI=v},useKeyOnly:function(v){useKeyOnly=v},useTextAlignProp:function(v){useTextAlignProp=v},useVerticalAlignProp:function(v){useVerticalAlignProp=v},useWidthProp:function(v){useWidthProp=v}},5);var Icon;module.link('../../elements/Icon',{default:function(v){Icon=v}},6);






/**
 * A table row can have cells.
 */

function TableCell(props) {
  var active = props.active,
      children = props.children,
      className = props.className,
      collapsing = props.collapsing,
      content = props.content,
      disabled = props.disabled,
      error = props.error,
      icon = props.icon,
      negative = props.negative,
      positive = props.positive,
      selectable = props.selectable,
      singleLine = props.singleLine,
      textAlign = props.textAlign,
      verticalAlign = props.verticalAlign,
      warning = props.warning,
      width = props.width;
  var classes = cx(useKeyOnly(active, 'active'), useKeyOnly(collapsing, 'collapsing'), useKeyOnly(disabled, 'disabled'), useKeyOnly(error, 'error'), useKeyOnly(negative, 'negative'), useKeyOnly(positive, 'positive'), useKeyOnly(selectable, 'selectable'), useKeyOnly(singleLine, 'single line'), useKeyOnly(warning, 'warning'), useTextAlignProp(textAlign), useVerticalAlignProp(verticalAlign), useWidthProp(width, 'wide'), className);
  var rest = getUnhandledProps(TableCell, props);
  var ElementType = getElementType(TableCell, props);

  if (!childrenUtils.isNil(children)) {
    return React.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }

  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), Icon.create(icon), content);
}

TableCell.handledProps = ["active", "as", "children", "className", "collapsing", "content", "disabled", "error", "icon", "negative", "positive", "selectable", "singleLine", "textAlign", "verticalAlign", "warning", "width"];
TableCell.defaultProps = {
  as: 'td'
};
TableCell.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A cell can be active or selected by a user. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A cell can be collapsing so that it only uses as much space as required. */
  collapsing: PropTypes.bool,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A cell can be disabled. */
  disabled: PropTypes.bool,

  /** A cell may call attention to an error or a negative value. */
  error: PropTypes.bool,

  /** Add an Icon by name, props object, or pass an <Icon /> */
  icon: customPropTypes.itemShorthand,

  /** A cell may let a user know whether a value is bad. */
  negative: PropTypes.bool,

  /** A cell may let a user know whether a value is good. */
  positive: PropTypes.bool,

  /** A cell can be selectable. */
  selectable: PropTypes.bool,

  /** A cell can specify that its contents should remain on a single line and not wrap. */
  singleLine: PropTypes.bool,

  /** A table cell can adjust its text alignment. */
  textAlign: PropTypes.oneOf(_without(SUI.TEXT_ALIGNMENTS, 'justified')),

  /** A table cell can adjust its text alignment. */
  verticalAlign: PropTypes.oneOf(SUI.VERTICAL_ALIGNMENTS),

  /** A cell may warn a user. */
  warning: PropTypes.bool,

  /** A table can specify the width of individual columns independently. */
  width: PropTypes.oneOf(SUI.WIDTHS)
} : {};
TableCell.create = createShorthandFactory(TableCell, function (content) {
  return {
    content: content
  };
});
module.exportDefault(TableCell);