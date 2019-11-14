var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var cx;module.link('classnames',{default:function(v){cx=v}},1);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},2);var React;module.link('react',{default:function(v){React=v}},3);var childrenUtils,createShorthand,customPropTypes,getElementType,getUnhandledProps;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},createShorthand:function(v){createShorthand=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v}},4);var FeedDate;module.link('./FeedDate',{default:function(v){FeedDate=v}},5);var FeedExtra;module.link('./FeedExtra',{default:function(v){FeedExtra=v}},6);var FeedMeta;module.link('./FeedMeta',{default:function(v){FeedMeta=v}},7);var FeedSummary;module.link('./FeedSummary',{default:function(v){FeedSummary=v}},8);









function FeedContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      extraImages = props.extraImages,
      extraText = props.extraText,
      date = props.date,
      meta = props.meta,
      summary = props.summary;
  var classes = cx('content', className);
  var rest = getUnhandledProps(FeedContent, props);
  var ElementType = getElementType(FeedContent, props);

  if (!childrenUtils.isNil(children)) {
    return React.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }

  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), createShorthand(FeedDate, function (val) {
    return {
      content: val
    };
  }, date, {
    autoGenerateKey: false
  }), createShorthand(FeedSummary, function (val) {
    return {
      content: val
    };
  }, summary, {
    autoGenerateKey: false
  }), content, createShorthand(FeedExtra, function (val) {
    return {
      text: true,
      content: val
    };
  }, extraText, {
    autoGenerateKey: false
  }), createShorthand(FeedExtra, function (val) {
    return {
      images: val
    };
  }, extraImages, {
    autoGenerateKey: false
  }), createShorthand(FeedMeta, function (val) {
    return {
      content: val
    };
  }, meta, {
    autoGenerateKey: false
  }));
}

FeedContent.handledProps = ["as", "children", "className", "content", "date", "extraImages", "extraText", "meta", "summary"];
FeedContent.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** An event can contain a date. */
  date: customPropTypes.itemShorthand,

  /** Shorthand for FeedExtra with images. */
  extraImages: FeedExtra.propTypes.images,

  /** Shorthand for FeedExtra with text. */
  extraText: customPropTypes.itemShorthand,

  /** Shorthand for FeedMeta. */
  meta: customPropTypes.itemShorthand,

  /** Shorthand for FeedSummary. */
  summary: customPropTypes.itemShorthand
} : {};
module.exportDefault(FeedContent);