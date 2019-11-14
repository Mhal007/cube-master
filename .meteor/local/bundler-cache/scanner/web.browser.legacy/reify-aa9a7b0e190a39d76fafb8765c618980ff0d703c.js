var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},1);var React;module.link('react',{default:function(v){React=v}},2);var getUnhandledProps;module.link('../../lib',{getUnhandledProps:function(v){getUnhandledProps=v}},3);var TableHeader;module.link('./TableHeader',{default:function(v){TableHeader=v}},4);




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