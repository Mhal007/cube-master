var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var cx;module.link('classnames',{default:function(v){cx=v}},1);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},2);var React;module.link('react',{default:function(v){React=v}},3);var customPropTypes,getElementType,getUnhandledProps,useKeyOnly;module.link('../../lib',{customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v},useKeyOnly:function(v){useKeyOnly=v}},4);




/**
 * A placeholder can contain an image.
 */

function PlaceholderImage(props) {
  var className = props.className,
      square = props.square,
      rectangular = props.rectangular;
  var classes = cx(useKeyOnly(square, 'square'), useKeyOnly(rectangular, 'rectangular'), 'image', className);
  var rest = getUnhandledProps(PlaceholderImage, props);
  var ElementType = getElementType(PlaceholderImage, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }));
}

PlaceholderImage.handledProps = ["as", "className", "rectangular", "square"];
PlaceholderImage.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Additional classes. */
  className: PropTypes.string,

  /** An image can modify size correctly with responsive styles. */
  square: customPropTypes.every([customPropTypes.disallow(['rectangular']), PropTypes.bool]),

  /** An image can modify size correctly with responsive styles. */
  rectangular: customPropTypes.every([customPropTypes.disallow(['square']), PropTypes.bool])
} : {};
module.exportDefault(PlaceholderImage);