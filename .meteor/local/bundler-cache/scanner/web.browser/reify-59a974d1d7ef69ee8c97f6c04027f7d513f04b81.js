let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let cx;module.link('classnames',{default(v){cx=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let React;module.link('react',{default(v){React=v}},3);let childrenUtils,createShorthandFactory,customPropTypes,getElementType,getUnhandledProps;module.link('../../lib',{childrenUtils(v){childrenUtils=v},createShorthandFactory(v){createShorthandFactory=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v}},4);let Icon;module.link('../../elements/Icon',{default(v){Icon=v}},5);





/**
 * A dropdown menu can contain a header.
 */

function DropdownHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      icon = props.icon;
  var classes = cx('header', className);
  var rest = getUnhandledProps(DropdownHeader, props);
  var ElementType = getElementType(DropdownHeader, props);

  if (!childrenUtils.isNil(children)) {
    return React.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }

  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), Icon.create(icon, {
    autoGenerateKey: false
  }), content);
}

DropdownHeader.handledProps = ["as", "children", "className", "content", "icon"];
DropdownHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function) */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Shorthand for Icon. */
  icon: customPropTypes.itemShorthand
} : {};
DropdownHeader.create = createShorthandFactory(DropdownHeader, function (content) {
  return {
    content: content
  };
});
module.exportDefault(DropdownHeader);