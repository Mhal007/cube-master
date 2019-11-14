let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let cx;module.link('classnames',{default(v){cx=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let React;module.link('react',{default(v){React=v}},3);let createShorthandFactory,getUnhandledProps,SUI,useVerticalAlignProp;module.link('../../lib',{createShorthandFactory(v){createShorthandFactory=v},getUnhandledProps(v){getUnhandledProps=v},SUI(v){SUI=v},useVerticalAlignProp(v){useVerticalAlignProp=v}},4);let Icon;module.link('../Icon/Icon',{default(v){Icon=v}},5);





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