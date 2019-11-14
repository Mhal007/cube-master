var _objectWithoutProperties;module.link("@babel/runtime/helpers/objectWithoutProperties",{default:function(v){_objectWithoutProperties=v}},0);var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},1);var _without;module.link("lodash/without",{default:function(v){_without=v}},2);var _map;module.link("lodash/map",{default:function(v){_map=v}},3);var cx;module.link('classnames',{default:function(v){cx=v}},4);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},5);var React;module.link('react',{default:function(v){React=v}},6);var childrenUtils,customPropTypes,getElementType,getUnhandledProps,SUI;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v},SUI:function(v){SUI=v}},7);var FeedContent;module.link('./FeedContent',{default:function(v){FeedContent=v}},8);var FeedDate;module.link('./FeedDate',{default:function(v){FeedDate=v}},9);var FeedEvent;module.link('./FeedEvent',{default:function(v){FeedEvent=v}},10);var FeedExtra;module.link('./FeedExtra',{default:function(v){FeedExtra=v}},11);var FeedLabel;module.link('./FeedLabel',{default:function(v){FeedLabel=v}},12);var FeedLike;module.link('./FeedLike',{default:function(v){FeedLike=v}},13);var FeedMeta;module.link('./FeedMeta',{default:function(v){FeedMeta=v}},14);var FeedSummary;module.link('./FeedSummary',{default:function(v){FeedSummary=v}},15);var FeedUser;module.link('./FeedUser',{default:function(v){FeedUser=v}},16);
















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