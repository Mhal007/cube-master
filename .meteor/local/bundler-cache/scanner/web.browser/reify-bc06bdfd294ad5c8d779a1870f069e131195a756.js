let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let _slicedToArray;module.link("@babel/runtime/helpers/slicedToArray",{default(v){_slicedToArray=v}},1);let cx;module.link('classnames',{default(v){cx=v}},2);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},3);let React;module.link('react',{default(v){React=v}},4);let createHTMLImage,getElementType,getUnhandledProps,htmlImageProps,partitionHTMLProps;module.link('../../lib',{createHTMLImage(v){createHTMLImage=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},htmlImageProps(v){htmlImageProps=v},partitionHTMLProps(v){partitionHTMLProps=v}},5);





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