let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let cx;module.link('classnames',{default(v){cx=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let React;module.link('react',{default(v){React=v}},3);let childrenUtils,customPropTypes,getElementType,getUnhandledProps;module.link('../../lib',{childrenUtils(v){childrenUtils=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v}},4);let ItemContent;module.link('./ItemContent',{default(v){ItemContent=v}},5);let ItemDescription;module.link('./ItemDescription',{default(v){ItemDescription=v}},6);let ItemExtra;module.link('./ItemExtra',{default(v){ItemExtra=v}},7);let ItemGroup;module.link('./ItemGroup',{default(v){ItemGroup=v}},8);let ItemHeader;module.link('./ItemHeader',{default(v){ItemHeader=v}},9);let ItemImage;module.link('./ItemImage',{default(v){ItemImage=v}},10);let ItemMeta;module.link('./ItemMeta',{default(v){ItemMeta=v}},11);











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