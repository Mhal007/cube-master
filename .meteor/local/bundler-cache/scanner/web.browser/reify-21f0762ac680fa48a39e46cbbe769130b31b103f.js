let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let cx;module.link('classnames',{default(v){cx=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let React;module.link('react',{default(v){React=v}},3);let childrenUtils,createShorthand,customPropTypes,getElementType,getUnhandledProps;module.link('../../lib',{childrenUtils(v){childrenUtils=v},createShorthand(v){createShorthand=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v}},4);let FeedDate;module.link('./FeedDate',{default(v){FeedDate=v}},5);let FeedUser;module.link('./FeedUser',{default(v){FeedUser=v}},6);






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