let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let cx;module.link('classnames',{default(v){cx=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let React;module.link('react',{default(v){React=v}},3);let childrenUtils,createHTMLImage,customPropTypes,getElementType,getUnhandledProps;module.link('../../lib',{childrenUtils(v){childrenUtils=v},createHTMLImage(v){createHTMLImage=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v}},4);let Icon;module.link('../../elements/Icon',{default(v){Icon=v}},5);





/**
 * An event can contain an image or icon label.
 */

function FeedLabel(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      icon = props.icon,
      image = props.image;
  var classes = cx('label', className);
  var rest = getUnhandledProps(FeedLabel, props);
  var ElementType = getElementType(FeedLabel, props);

  if (!childrenUtils.isNil(children)) {
    return React.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }

  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), content, Icon.create(icon, {
    autoGenerateKey: false
  }), createHTMLImage(image));
}

FeedLabel.handledProps = ["as", "children", "className", "content", "icon", "image"];
FeedLabel.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** An event can contain icon label. */
  icon: customPropTypes.itemShorthand,

  /** An event can contain image label. */
  image: customPropTypes.itemShorthand
} : {};
module.exportDefault(FeedLabel);