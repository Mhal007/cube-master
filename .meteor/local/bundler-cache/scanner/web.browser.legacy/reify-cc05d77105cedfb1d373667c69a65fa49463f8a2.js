var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var _objectSpread;module.link("@babel/runtime/helpers/objectSpread",{default:function(v){_objectSpread=v}},1);var _isNil;module.link("lodash/isNil",{default:function(v){_isNil=v}},2);var cx;module.link('classnames',{default:function(v){cx=v}},3);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},4);var React;module.link('react',{default:function(v){React=v}},5);var childrenUtils,createShorthandFactory,customPropTypes,getUnhandledProps,getElementType;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},createShorthandFactory:function(v){createShorthandFactory=v},customPropTypes:function(v){customPropTypes=v},getUnhandledProps:function(v){getUnhandledProps=v},getElementType:function(v){getElementType=v}},6);var Icon;module.link('../../elements/Icon',{default:function(v){Icon=v}},7);







/**
 * A divider sub-component for Breadcrumb component.
 */

function BreadcrumbDivider(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      icon = props.icon;
  var classes = cx('divider', className);
  var rest = getUnhandledProps(BreadcrumbDivider, props);
  var ElementType = getElementType(BreadcrumbDivider, props);

  if (!_isNil(icon)) {
    return Icon.create(icon, {
      defaultProps: _objectSpread({}, rest, {
        className: classes
      }),
      autoGenerateKey: false
    });
  }

  if (!_isNil(content)) {
    return React.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), content);
  }

  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils.isNil(children) ? '/' : children);
}

BreadcrumbDivider.handledProps = ["as", "children", "className", "content", "icon"];
BreadcrumbDivider.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Render as an `Icon` component with `divider` class instead of a `div`. */
  icon: customPropTypes.itemShorthand
} : {};
BreadcrumbDivider.create = createShorthandFactory(BreadcrumbDivider, function (icon) {
  return {
    icon: icon
  };
});
module.exportDefault(BreadcrumbDivider);