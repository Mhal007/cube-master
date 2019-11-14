let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let _map;module.link("lodash/map",{default(v){_map=v}},1);let cx;module.link('classnames',{default(v){cx=v}},2);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},3);let React;module.link('react',{default(v){React=v}},4);let childrenUtils,createShorthandFactory,customPropTypes,getElementType,getUnhandledProps;module.link('../../lib',{childrenUtils(v){childrenUtils=v},createShorthandFactory(v){createShorthandFactory=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v}},5);let MessageItem;module.link('./MessageItem',{default(v){MessageItem=v}},6);






/**
 * A message can contain a list of items.
 */

function MessageList(props) {
  var children = props.children,
      className = props.className,
      items = props.items;
  var classes = cx('list', className);
  var rest = getUnhandledProps(MessageList, props);
  var ElementType = getElementType(MessageList, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils.isNil(children) ? _map(items, MessageItem.create) : children);
}

MessageList.handledProps = ["as", "children", "className", "items"];
MessageList.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand Message.Items. */
  items: customPropTypes.collectionShorthand
} : {};
MessageList.defaultProps = {
  as: 'ul'
};
MessageList.create = createShorthandFactory(MessageList, function (val) {
  return {
    items: val
  };
});
module.exportDefault(MessageList);