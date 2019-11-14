let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let cx;module.link('classnames',{default(v){cx=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let React;module.link('react',{default(v){React=v}},3);let childrenUtils,customPropTypes,getElementType,getUnhandledProps,useKeyOnly;module.link('../../lib',{childrenUtils(v){childrenUtils=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},useKeyOnly(v){useKeyOnly=v}},4);




/**
 * A table can have a header.
 */

function TableHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      fullWidth = props.fullWidth;
  var classes = cx(useKeyOnly(fullWidth, 'full-width'), className);
  var rest = getUnhandledProps(TableHeader, props);
  var ElementType = getElementType(TableHeader, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils.isNil(children) ? content : children);
}

TableHeader.handledProps = ["as", "children", "className", "content", "fullWidth"];
TableHeader.defaultProps = {
  as: 'thead'
};
TableHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A definition table can have a full width header or footer, filling in the gap left by the first column. */
  fullWidth: PropTypes.bool
} : {};
module.exportDefault(TableHeader);