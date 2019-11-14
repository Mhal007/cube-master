var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var _without;module.link("lodash/without",{default:function(v){_without=v}},1);var _map;module.link("lodash/map",{default:function(v){_map=v}},2);var cx;module.link('classnames',{default:function(v){cx=v}},3);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},4);var React;module.link('react',{default:function(v){React=v}},5);var childrenUtils,createShorthandFactory,customPropTypes,getElementType,getUnhandledProps,SUI,useKeyOnly,useTextAlignProp,useVerticalAlignProp;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},createShorthandFactory:function(v){createShorthandFactory=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v},SUI:function(v){SUI=v},useKeyOnly:function(v){useKeyOnly=v},useTextAlignProp:function(v){useTextAlignProp=v},useVerticalAlignProp:function(v){useVerticalAlignProp=v}},6);var TableCell;module.link('./TableCell',{default:function(v){TableCell=v}},7);







/**
 * A table can have rows.
 */

function TableRow(props) {
  var active = props.active,
      cellAs = props.cellAs,
      cells = props.cells,
      children = props.children,
      className = props.className,
      disabled = props.disabled,
      error = props.error,
      negative = props.negative,
      positive = props.positive,
      textAlign = props.textAlign,
      verticalAlign = props.verticalAlign,
      warning = props.warning;
  var classes = cx(useKeyOnly(active, 'active'), useKeyOnly(disabled, 'disabled'), useKeyOnly(error, 'error'), useKeyOnly(negative, 'negative'), useKeyOnly(positive, 'positive'), useKeyOnly(warning, 'warning'), useTextAlignProp(textAlign), useVerticalAlignProp(verticalAlign), className);
  var rest = getUnhandledProps(TableRow, props);
  var ElementType = getElementType(TableRow, props);

  if (!childrenUtils.isNil(children)) {
    return React.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }

  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), _map(cells, function (cell) {
    return TableCell.create(cell, {
      defaultProps: {
        as: cellAs
      }
    });
  }));
}

TableRow.handledProps = ["active", "as", "cellAs", "cells", "children", "className", "disabled", "error", "negative", "positive", "textAlign", "verticalAlign", "warning"];
TableRow.defaultProps = {
  as: 'tr',
  cellAs: 'td'
};
TableRow.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A row can be active or selected by a user. */
  active: PropTypes.bool,

  /** An element type to render as (string or function). */
  cellAs: PropTypes.elementType,

  /** Shorthand array of props for TableCell. */
  cells: customPropTypes.collectionShorthand,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A row can be disabled. */
  disabled: PropTypes.bool,

  /** A row may call attention to an error or a negative value. */
  error: PropTypes.bool,

  /** A row may let a user know whether a value is bad. */
  negative: PropTypes.bool,

  /** A row may let a user know whether a value is good. */
  positive: PropTypes.bool,

  /** A table row can adjust its text alignment. */
  textAlign: PropTypes.oneOf(_without(SUI.TEXT_ALIGNMENTS, 'justified')),

  /** A table row can adjust its vertical alignment. */
  verticalAlign: PropTypes.oneOf(SUI.VERTICAL_ALIGNMENTS),

  /** A row may warn a user. */
  warning: PropTypes.bool
} : {};
TableRow.create = createShorthandFactory(TableRow, function (cells) {
  return {
    cells: cells
  };
});
module.exportDefault(TableRow);