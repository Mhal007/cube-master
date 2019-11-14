let _objectWithoutProperties;module.link("@babel/runtime/helpers/objectWithoutProperties",{default(v){_objectWithoutProperties=v}},0);let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},1);let _without;module.link("lodash/without",{default(v){_without=v}},2);let _map;module.link("lodash/map",{default(v){_map=v}},3);let cx;module.link('classnames',{default(v){cx=v}},4);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},5);let React;module.link('react',{default(v){React=v}},6);let childrenUtils,customPropTypes,getElementType,getUnhandledProps,SUI;module.link('../../lib',{childrenUtils(v){childrenUtils=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},SUI(v){SUI=v}},7);let FeedContent;module.link('./FeedContent',{default(v){FeedContent=v}},8);let FeedDate;module.link('./FeedDate',{default(v){FeedDate=v}},9);let FeedEvent;module.link('./FeedEvent',{default(v){FeedEvent=v}},10);let FeedExtra;module.link('./FeedExtra',{default(v){FeedExtra=v}},11);let FeedLabel;module.link('./FeedLabel',{default(v){FeedLabel=v}},12);let FeedLike;module.link('./FeedLike',{default(v){FeedLike=v}},13);let FeedMeta;module.link('./FeedMeta',{default(v){FeedMeta=v}},14);let FeedSummary;module.link('./FeedSummary',{default(v){FeedSummary=v}},15);let FeedUser;module.link('./FeedUser',{default(v){FeedUser=v}},16);
















/**
 * A feed presents user activity chronologically.
 */

function Feed(props) {
  var children = props.children,
      className = props.className,
      events = props.events,
      size = props.size;
  var classes = cx('ui', size, 'feed', className);
  var rest = getUnhandledProps(Feed, props);
  var ElementType = getElementType(Feed, props);

  if (!childrenUtils.isNil(children)) {
    return React.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }

  var eventElements = _map(events, function (eventProps) {
    var childKey = eventProps.childKey,
        date = eventProps.date,
        meta = eventProps.meta,
        summary = eventProps.summary,
        eventData = _objectWithoutProperties(eventProps, ["childKey", "date", "meta", "summary"]);

    var finalKey = childKey || [date, meta, summary].join('-');
    return React.createElement(FeedEvent, _extends({
      date: date,
      key: finalKey,
      meta: meta,
      summary: summary
    }, eventData));
  });

  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), eventElements);
}

Feed.handledProps = ["as", "children", "className", "events", "size"];
Feed.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand array of props for FeedEvent. */
  events: customPropTypes.collectionShorthand,

  /** A feed can have different sizes. */
  size: PropTypes.oneOf(_without(SUI.SIZES, 'mini', 'tiny', 'medium', 'big', 'huge', 'massive'))
} : {};
Feed.Content = FeedContent;
Feed.Date = FeedDate;
Feed.Event = FeedEvent;
Feed.Extra = FeedExtra;
Feed.Label = FeedLabel;
Feed.Like = FeedLike;
Feed.Meta = FeedMeta;
Feed.Summary = FeedSummary;
Feed.User = FeedUser;
module.exportDefault(Feed);