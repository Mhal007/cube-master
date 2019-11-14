var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var cx;module.link('classnames',{default:function(v){cx=v}},1);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},2);var React;module.link('react',{default:function(v){React=v}},3);var createShorthandFactory,getUnhandledProps,SUI,useVerticalAlignProp;module.link('../../lib',{createShorthandFactory:function(v){createShorthandFactory=v},getUnhandledProps:function(v){getUnhandledProps=v},SUI:function(v){SUI=v},useVerticalAlignProp:function(v){useVerticalAlignProp=v}},4);var Icon;module.link('../Icon/Icon',{default:function(v){Icon=v}},5);





/**
 * A list item can contain an icon.
 */

function ListIcon(props) {
  var className = props.className,
      verticalAlign = props.verticalAlign;
  var classes = cx(useVerticalAlignProp(verticalAlign), className);
  var rest = getUnhandledProps(ListIcon, props);
  return React.createElement(Icon, _extends({}, rest, {
    className: classes
  }));
}

ListIcon.handledProps = ["className", "verticalAlign"];
ListIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Additional classes. */
  className: PropTypes.string,

  /** An element inside a list can be vertically aligned. */
  verticalAlign: PropTypes.oneOf(SUI.VERTICAL_ALIGNMENTS)
} : {};
ListIcon.create = createShorthandFactory(ListIcon, function (name) {
  return {
    name: name
  };
});
module.exportDefault(ListIcon);