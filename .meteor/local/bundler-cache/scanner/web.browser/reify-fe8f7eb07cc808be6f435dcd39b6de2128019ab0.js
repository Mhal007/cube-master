let _objectWithoutProperties;module.link("@babel/runtime/helpers/objectWithoutProperties",{default(v){_objectWithoutProperties=v}},0);let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},1);let _map;module.link("lodash/map",{default(v){_map=v}},2);let cx;module.link('classnames',{default(v){cx=v}},3);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},4);let React;module.link('react',{default(v){React=v}},5);let childrenUtils,customPropTypes,getElementType,getUnhandledProps,useKeyOnly,useKeyOrValueAndKey;module.link('../../lib',{childrenUtils(v){childrenUtils=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},useKeyOnly(v){useKeyOnly=v},useKeyOrValueAndKey(v){useKeyOrValueAndKey=v}},6);let Item;module.link('./Item',{default(v){Item=v}},7);







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