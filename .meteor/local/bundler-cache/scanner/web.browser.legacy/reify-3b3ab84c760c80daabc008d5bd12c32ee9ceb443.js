var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var cx;module.link('classnames',{default:function(v){cx=v}},1);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},2);var React;module.link('react',{default:function(v){React=v}},3);var childrenUtils,customPropTypes,getElementType,getUnhandledProps;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v}},4);var ItemContent;module.link('./ItemContent',{default:function(v){ItemContent=v}},5);var ItemDescription;module.link('./ItemDescription',{default:function(v){ItemDescription=v}},6);var ItemExtra;module.link('./ItemExtra',{default:function(v){ItemExtra=v}},7);var ItemGroup;module.link('./ItemGroup',{default:function(v){ItemGroup=v}},8);var ItemHeader;module.link('./ItemHeader',{default:function(v){ItemHeader=v}},9);var ItemImage;module.link('./ItemImage',{default:function(v){ItemImage=v}},10);var ItemMeta;module.link('./ItemMeta',{default:function(v){ItemMeta=v}},11);











/**
 * An item view presents large collections of site content for display.
 */

function Item(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      description = props.description,
      extra = props.extra,
      header = props.header,
      image = props.image,
      meta = props.meta;
  var classes = cx('item', className);
  var rest = getUnhandledProps(Item, props);
  var ElementType = getElementType(Item, props);

  if (!childrenUtils.isNil(children)) {
    return React.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }

  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), ItemImage.create(image, {
    autoGenerateKey: false
  }), React.createElement(ItemContent, {
    content: content,
    description: description,
    extra: extra,
    header: header,
    meta: meta
  }));
}

Item.handledProps = ["as", "children", "className", "content", "description", "extra", "header", "image", "meta"];
Item.Content = ItemContent;
Item.Description = ItemDescription;
Item.Extra = ItemExtra;
Item.Group = ItemGroup;
Item.Header = ItemHeader;
Item.Image = ItemImage;
Item.Meta = ItemMeta;
Item.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for ItemContent component. */
  content: customPropTypes.contentShorthand,

  /** Shorthand for ItemDescription component. */
  description: customPropTypes.itemShorthand,

  /** Shorthand for ItemExtra component. */
  extra: customPropTypes.itemShorthand,

  /** Shorthand for ItemHeader component. */
  header: customPropTypes.itemShorthand,

  /** Shorthand for ItemImage component. */
  image: customPropTypes.itemShorthand,

  /** Shorthand for ItemMeta component. */
  meta: customPropTypes.itemShorthand
} : {};
module.exportDefault(Item);