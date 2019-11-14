let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let cx;module.link('classnames',{default(v){cx=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let React;module.link('react',{default(v){React=v}},3);let createShorthand,customPropTypes,getElementType,getUnhandledProps;module.link('../../lib',{createShorthand(v){createShorthand=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v}},4);let FeedContent;module.link('./FeedContent',{default(v){FeedContent=v}},5);let FeedLabel;module.link('./FeedLabel',{default(v){FeedLabel=v}},6);






/**
 * A feed contains an event.
 */

function FeedEvent(props) {
  var content = props.content,
      children = props.children,
      className = props.className,
      date = props.date,
      extraImages = props.extraImages,
      extraText = props.extraText,
      image = props.image,
      icon = props.icon,
      meta = props.meta,
      summary = props.summary;
  var classes = cx('event', className);
  var rest = getUnhandledProps(FeedEvent, props);
  var ElementType = getElementType(FeedEvent, props);
  var hasContentProp = content || date || extraImages || extraText || meta || summary;
  var contentProps = {
    content: content,
    date: date,
    extraImages: extraImages,
    extraText: extraText,
    meta: meta,
    summary: summary
  };
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), createShorthand(FeedLabel, function (val) {
    return {
      icon: val
    };
  }, icon, {
    autoGenerateKey: false
  }), createShorthand(FeedLabel, function (val) {
    return {
      image: val
    };
  }, image, {
    autoGenerateKey: false
  }), hasContentProp && React.createElement(FeedContent, contentProps), children);
}

FeedEvent.handledProps = ["as", "children", "className", "content", "date", "extraImages", "extraText", "icon", "image", "meta", "summary"];
FeedEvent.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for FeedContent. */
  content: customPropTypes.itemShorthand,

  /** Shorthand for FeedDate. */
  date: customPropTypes.itemShorthand,

  /** Shorthand for FeedExtra with images. */
  extraImages: customPropTypes.itemShorthand,

  /** Shorthand for FeedExtra with content. */
  extraText: customPropTypes.itemShorthand,

  /** An event can contain icon label. */
  icon: customPropTypes.itemShorthand,

  /** An event can contain image label. */
  image: customPropTypes.itemShorthand,

  /** Shorthand for FeedMeta. */
  meta: customPropTypes.itemShorthand,

  /** Shorthand for FeedSummary. */
  summary: customPropTypes.itemShorthand
} : {};
module.exportDefault(FeedEvent);