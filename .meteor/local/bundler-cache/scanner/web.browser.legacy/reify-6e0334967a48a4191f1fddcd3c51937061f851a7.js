var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var cx;module.link('classnames',{default:function(v){cx=v}},1);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},2);var React;module.link('react',{default:function(v){React=v}},3);var childrenUtils,customPropTypes,getElementType,getUnhandledProps,SUI,useVerticalAlignProp;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v},SUI:function(v){SUI=v},useVerticalAlignProp:function(v){useVerticalAlignProp=v}},4);var ItemHeader;module.link('./ItemHeader',{default:function(v){ItemHeader=v}},5);var ItemDescription;module.link('./ItemDescription',{default:function(v){ItemDescription=v}},6);var ItemExtra;module.link('./ItemExtra',{default:function(v){ItemExtra=v}},7);var ItemMeta;module.link('./ItemMeta',{default:function(v){ItemMeta=v}},8);








/**
 * An item can contain content.
 */

function ItemContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      description = props.description,
      extra = props.extra,
      header = props.header,
      meta = props.meta,
      verticalAlign = props.verticalAlign;
  var classes = cx(useVerticalAlignProp(verticalAlign), 'content', className);
  var rest = getUnhandledProps(ItemContent, props);
  var ElementType = getElementType(ItemContent, props);

  if (!childrenUtils.isNil(children)) {
    return React.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }

  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), ItemHeader.create(header, {
    autoGenerateKey: false
  }), ItemMeta.create(meta, {
    autoGenerateKey: false
  }), ItemDescription.create(description, {
    autoGenerateKey: false
  }), ItemExtra.create(extra, {
    autoGenerateKey: false
  }), content);
}

ItemContent.handledProps = ["as", "children", "className", "content", "description", "extra", "header", "meta", "verticalAlign"];
ItemContent.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Shorthand for ItemDescription component. */
  description: customPropTypes.itemShorthand,

  /** Shorthand for ItemExtra component. */
  extra: customPropTypes.itemShorthand,

  /** Shorthand for ItemHeader component. */
  header: customPropTypes.itemShorthand,

  /** Shorthand for ItemMeta component. */
  meta: customPropTypes.itemShorthand,

  /** Content can specify its vertical alignment. */
  verticalAlign: PropTypes.oneOf(SUI.VERTICAL_ALIGNMENTS)
} : {};
module.exportDefault(ItemContent);