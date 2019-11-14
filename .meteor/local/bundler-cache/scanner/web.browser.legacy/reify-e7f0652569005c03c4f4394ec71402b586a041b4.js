var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var cx;module.link('classnames',{default:function(v){cx=v}},1);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},2);var React;module.link('react',{default:function(v){React=v}},3);var getUnhandledProps,useValueAndKey;module.link('../../lib',{getUnhandledProps:function(v){getUnhandledProps=v},useValueAndKey:function(v){useValueAndKey=v}},4);var TableCell;module.link('./TableCell',{default:function(v){TableCell=v}},5);





/**
 * A table can have a header cell.
 */

function TableHeaderCell(props) {
  var as = props.as,
      className = props.className,
      sorted = props.sorted;
  var classes = cx(useValueAndKey(sorted, 'sorted'), className);
  var rest = getUnhandledProps(TableHeaderCell, props);
  return React.createElement(TableCell, _extends({}, rest, {
    as: as,
    className: classes
  }));
}

TableHeaderCell.handledProps = ["as", "className", "sorted"];
TableHeaderCell.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Additional classes. */
  className: PropTypes.string,

  /** A header cell can be sorted in ascending or descending order. */
  sorted: PropTypes.oneOf(['ascending', 'descending'])
} : {};
TableHeaderCell.defaultProps = {
  as: 'th'
};
module.exportDefault(TableHeaderCell);