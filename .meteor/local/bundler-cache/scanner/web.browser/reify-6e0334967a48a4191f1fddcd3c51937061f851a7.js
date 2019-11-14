let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let cx;module.link('classnames',{default(v){cx=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let React;module.link('react',{default(v){React=v}},3);let childrenUtils,customPropTypes,getElementType,getUnhandledProps,SUI,useVerticalAlignProp;module.link('../../lib',{childrenUtils(v){childrenUtils=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},SUI(v){SUI=v},useVerticalAlignProp(v){useVerticalAlignProp=v}},4);let ItemHeader;module.link('./ItemHeader',{default(v){ItemHeader=v}},5);let ItemDescription;module.link('./ItemDescription',{default(v){ItemDescription=v}},6);let ItemExtra;module.link('./ItemExtra',{default(v){ItemExtra=v}},7);let ItemMeta;module.link('./ItemMeta',{default(v){ItemMeta=v}},8);








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