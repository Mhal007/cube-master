var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var cx;module.link('classnames',{default:function(v){cx=v}},1);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},2);var React;module.link('react',{default:function(v){React=v}},3);var createShorthand,customPropTypes,getElementType,getUnhandledProps;module.link('../../lib',{createShorthand:function(v){createShorthand=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v}},4);var FeedContent;module.link('./FeedContent',{default:function(v){FeedContent=v}},5);var FeedLabel;module.link('./FeedLabel',{default:function(v){FeedLabel=v}},6);






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