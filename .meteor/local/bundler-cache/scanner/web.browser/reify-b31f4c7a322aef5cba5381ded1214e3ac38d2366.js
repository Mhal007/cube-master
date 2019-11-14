let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let _without;module.link("lodash/without",{default(v){_without=v}},1);let _each;module.link("lodash/each",{default(v){_each=v}},2);let cx;module.link('classnames',{default(v){cx=v}},3);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},4);let React;module.link('react',{default(v){React=v}},5);let childrenUtils,customPropTypes,getUnhandledProps,getElementType,SUI;module.link('../../lib',{childrenUtils(v){childrenUtils=v},customPropTypes(v){customPropTypes=v},getUnhandledProps(v){getUnhandledProps=v},getElementType(v){getElementType=v},SUI(v){SUI=v}},6);let BreadcrumbDivider;module.link('./BreadcrumbDivider',{default(v){BreadcrumbDivider=v}},7);let BreadcrumbSection;module.link('./BreadcrumbSection',{default(v){BreadcrumbSection=v}},8);








/**
 * A breadcrumb is used to show hierarchy between content.
 */

function Breadcrumb(props) {
  var children = props.children,
      className = props.className,
      divider = props.divider,
      icon = props.icon,
      sections = props.sections,
      size = props.size;
  var classes = cx('ui', size, 'breadcrumb', className);
  var rest = getUnhandledProps(Breadcrumb, props);
  var ElementType = getElementType(Breadcrumb, props);

  if (!childrenUtils.isNil(children)) {
    return React.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }

  var childElements = [];

  _each(sections, function (section, index) {
    // section
    var breadcrumbElement = BreadcrumbSection.create(section);
    childElements.push(breadcrumbElement); // divider

    if (index !== sections.length - 1) {
      var key = "".concat(breadcrumbElement.key, "_divider") || JSON.stringify(section);
      childElements.push(BreadcrumbDivider.create({
        content: divider,
        icon: icon,
        key: key
      }));
    }
  });

  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childElements);
}

Breadcrumb.handledProps = ["as", "children", "className", "divider", "icon", "sections", "size"];
Breadcrumb.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content of the Breadcrumb.Divider. */
  divider: customPropTypes.every([customPropTypes.disallow(['icon']), customPropTypes.contentShorthand]),

  /** For use with the sections prop. Render as an `Icon` component with `divider` class instead of a `div` in
   *  Breadcrumb.Divider. */
  icon: customPropTypes.every([customPropTypes.disallow(['divider']), customPropTypes.itemShorthand]),

  /** Shorthand array of props for Breadcrumb.Section. */
  sections: customPropTypes.collectionShorthand,

  /** Size of Breadcrumb. */
  size: PropTypes.oneOf(_without(SUI.SIZES, 'medium'))
} : {};
Breadcrumb.Divider = BreadcrumbDivider;
Breadcrumb.Section = BreadcrumbSection;
module.exportDefault(Breadcrumb);