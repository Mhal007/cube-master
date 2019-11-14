let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let cx;module.link('classnames',{default(v){cx=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let React;module.link('react',{default(v){React=v}},3);let childrenUtils,createShorthand,customPropTypes,getElementType,getUnhandledProps;module.link('../../lib',{childrenUtils(v){childrenUtils=v},createShorthand(v){createShorthand=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v}},4);let FeedDate;module.link('./FeedDate',{default(v){FeedDate=v}},5);let FeedExtra;module.link('./FeedExtra',{default(v){FeedExtra=v}},6);let FeedMeta;module.link('./FeedMeta',{default(v){FeedMeta=v}},7);let FeedSummary;module.link('./FeedSummary',{default(v){FeedSummary=v}},8);









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