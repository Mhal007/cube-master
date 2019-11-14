let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let cx;module.link('classnames',{default(v){cx=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let React;module.link('react',{default(v){React=v}},3);let getUnhandledProps,useValueAndKey;module.link('../../lib',{getUnhandledProps(v){getUnhandledProps=v},useValueAndKey(v){useValueAndKey=v}},4);let TableCell;module.link('./TableCell',{default(v){TableCell=v}},5);





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