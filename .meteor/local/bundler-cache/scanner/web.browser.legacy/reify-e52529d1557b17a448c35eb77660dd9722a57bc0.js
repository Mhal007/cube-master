var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var cx;module.link('classnames',{default:function(v){cx=v}},1);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},2);var React;module.link('react',{default:function(v){React=v}},3);var getElementType,getUnhandledProps;module.link('../../lib',{getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v}},4);




/**
 * A placeholder can contain have lines of text.
 */

function PlaceholderLine(props) {
  var className = props.className,
      length = props.length;
  var classes = cx('line', length, className);
  var rest = getUnhandledProps(PlaceholderLine, props);
  var ElementType = getElementType(PlaceholderLine, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }));
}

PlaceholderLine.handledProps = ["as", "className", "length"];
PlaceholderLine.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Additional classes. */
  className: PropTypes.string,

  /** A line can specify how long its contents should appear. */
  length: PropTypes.oneOf(['full', 'very long', 'long', 'medium', 'short', 'very short'])
} : {};
module.exportDefault(PlaceholderLine);