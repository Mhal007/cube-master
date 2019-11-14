var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var cx;module.link('classnames',{default:function(v){cx=v}},1);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},2);var React;module.link('react',{default:function(v){React=v}},3);var childrenUtils,createShorthand,customPropTypes,getElementType,getUnhandledProps;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},createShorthand:function(v){createShorthand=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v}},4);var FeedDate;module.link('./FeedDate',{default:function(v){FeedDate=v}},5);var FeedUser;module.link('./FeedUser',{default:function(v){FeedUser=v}},6);






/**
 * A feed can contain a summary.
 */

function FeedSummary(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      date = props.date,
      user = props.user;
  var classes = cx('summary', className);
  var rest = getUnhandledProps(FeedSummary, props);
  var ElementType = getElementType(FeedSummary, props);

  if (!childrenUtils.isNil(children)) {
    return React.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }

  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), createShorthand(FeedUser, function (val) {
    return {
      content: val
    };
  }, user, {
    autoGenerateKey: false
  }), content, createShorthand(FeedDate, function (val) {
    return {
      content: val
    };
  }, date, {
    autoGenerateKey: false
  }));
}

FeedSummary.handledProps = ["as", "children", "className", "content", "date", "user"];
FeedSummary.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Shorthand for FeedDate. */
  date: customPropTypes.itemShorthand,

  /** Shorthand for FeedUser. */
  user: customPropTypes.itemShorthand
} : {};
module.exportDefault(FeedSummary);