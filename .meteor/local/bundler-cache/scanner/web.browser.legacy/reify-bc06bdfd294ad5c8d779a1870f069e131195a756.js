var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var _slicedToArray;module.link("@babel/runtime/helpers/slicedToArray",{default:function(v){_slicedToArray=v}},1);var cx;module.link('classnames',{default:function(v){cx=v}},2);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},3);var React;module.link('react',{default:function(v){React=v}},4);var createHTMLImage,getElementType,getUnhandledProps,htmlImageProps,partitionHTMLProps;module.link('../../lib',{createHTMLImage:function(v){createHTMLImage=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v},htmlImageProps:function(v){htmlImageProps=v},partitionHTMLProps:function(v){partitionHTMLProps=v}},5);





/**
 * A comment can contain an image or avatar.
 */

function CommentAvatar(props) {
  var className = props.className,
      src = props.src;
  var classes = cx('avatar', className);
  var rest = getUnhandledProps(CommentAvatar, props);

  var _partitionHTMLProps = partitionHTMLProps(rest, {
    htmlProps: htmlImageProps
  }),
      _partitionHTMLProps2 = _slicedToArray(_partitionHTMLProps, 2),
      imageProps = _partitionHTMLProps2[0],
      rootProps = _partitionHTMLProps2[1];

  var ElementType = getElementType(CommentAvatar, props);
  return React.createElement(ElementType, _extends({}, rootProps, {
    className: classes
  }), createHTMLImage(src, {
    autoGenerateKey: false,
    defaultProps: imageProps
  }));
}

CommentAvatar.handledProps = ["as", "className", "src"];
CommentAvatar.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Additional classes. */
  className: PropTypes.string,

  /** Specifies the URL of the image. */
  src: PropTypes.string
} : {};
module.exportDefault(CommentAvatar);