var _objectWithoutProperties;module.link("@babel/runtime/helpers/objectWithoutProperties",{default:function(v){_objectWithoutProperties=v}},0);var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},1);var _map;module.link("lodash/map",{default:function(v){_map=v}},2);var cx;module.link('classnames',{default:function(v){cx=v}},3);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},4);var React;module.link('react',{default:function(v){React=v}},5);var childrenUtils,customPropTypes,getElementType,getUnhandledProps,useKeyOnly,useKeyOrValueAndKey;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v},useKeyOnly:function(v){useKeyOnly=v},useKeyOrValueAndKey:function(v){useKeyOrValueAndKey=v}},6);var Item;module.link('./Item',{default:function(v){Item=v}},7);







/**
 * A group of items.
 */

function ItemGroup(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      divided = props.divided,
      items = props.items,
      link = props.link,
      relaxed = props.relaxed,
      unstackable = props.unstackable;
  var classes = cx('ui', useKeyOnly(divided, 'divided'), useKeyOnly(link, 'link'), useKeyOnly(unstackable, 'unstackable'), useKeyOrValueAndKey(relaxed, 'relaxed'), 'items', className);
  var rest = getUnhandledProps(ItemGroup, props);
  var ElementType = getElementType(ItemGroup, props);

  if (!childrenUtils.isNil(children)) {
    return React.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }

  if (!childrenUtils.isNil(content)) {
    return React.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), content);
  }

  var itemsJSX = _map(items, function (item) {
    var childKey = item.childKey,
        itemProps = _objectWithoutProperties(item, ["childKey"]);

    var finalKey = childKey || [itemProps.content, itemProps.description, itemProps.header, itemProps.meta].join('-');
    return React.createElement(Item, _extends({}, itemProps, {
      key: finalKey
    }));
  });

  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), itemsJSX);
}

ItemGroup.handledProps = ["as", "children", "className", "content", "divided", "items", "link", "relaxed", "unstackable"];
ItemGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Items can be divided to better distinguish between grouped content. */
  divided: PropTypes.bool,

  /** Shorthand array of props for Item. */
  items: customPropTypes.collectionShorthand,

  /** An item can be formatted so that the entire contents link to another page. */
  link: PropTypes.bool,

  /** A group of items can relax its padding to provide more negative space. */
  relaxed: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['very'])]),

  /** Prevent items from stacking on mobile. */
  unstackable: PropTypes.bool
} : {};
module.exportDefault(ItemGroup);