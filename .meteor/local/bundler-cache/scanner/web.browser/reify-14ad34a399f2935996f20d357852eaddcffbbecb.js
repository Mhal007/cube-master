let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let cx;module.link('classnames',{default(v){cx=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let React;module.link('react',{default(v){React=v}},3);let getElementType,getUnhandledProps;module.link('../../lib',{getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v}},4);





function TableBody(props) {
  var children = props.children,
      className = props.className;
  var classes = cx(className);
  var rest = getUnhandledProps(TableBody, props);
  var ElementType = getElementType(TableBody, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), children);
}

TableBody.handledProps = ["as", "children", "className"];
TableBody.defaultProps = {
  as: 'tbody'
};
TableBody.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string
} : {};
module.exportDefault(TableBody);