var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var _map;module.link("lodash/map",{default:function(v){_map=v}},1);var cx;module.link('classnames',{default:function(v){cx=v}},2);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},3);var React;module.link('react',{default:function(v){React=v}},4);var childrenUtils,createShorthandFactory,customPropTypes,getElementType,getUnhandledProps;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},createShorthandFactory:function(v){createShorthandFactory=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v}},5);var MessageItem;module.link('./MessageItem',{default:function(v){MessageItem=v}},6);






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