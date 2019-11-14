let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},1);let React;module.link('react',{default(v){React=v}},2);let getUnhandledProps;module.link('../../lib',{getUnhandledProps(v){getUnhandledProps=v}},3);let TableHeader;module.link('./TableHeader',{default(v){TableHeader=v}},4);




/**
 * A table can have a footer.
 */

function TableFooter(props) {
  var as = props.as;
  var rest = getUnhandledProps(TableFooter, props);
  return React.createElement(TableHeader, _extends({}, rest, {
    as: as
  }));
}

TableFooter.handledProps = ["as"];
TableFooter.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType
} : {};
TableFooter.defaultProps = {
  as: 'tfoot'
};
module.exportDefault(TableFooter);