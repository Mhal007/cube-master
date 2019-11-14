let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let cx;module.link('classnames',{default(v){cx=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let React;module.link('react',{default(v){React=v}},3);let childrenUtils,createShorthandFactory,customPropTypes,getElementType,getUnhandledProps,useKeyOnly;module.link('../../lib',{childrenUtils(v){childrenUtils=v},createShorthandFactory(v){createShorthandFactory=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},useKeyOnly(v){useKeyOnly=v}},4);let Segment;module.link('../../elements/Segment/Segment',{default(v){Segment=v}},5);





/**
 * A tab pane holds the content of a tab.
 */

function TabPane(props) {
  var active = props.active,
      children = props.children,
      className = props.className,
      content = props.content,
      loading = props.loading;
  var classes = cx(useKeyOnly(active, 'active'), useKeyOnly(loading, 'loading'), 'tab', className);
  var rest = getUnhandledProps(TabPane, props);
  var ElementType = getElementType(TabPane, props);
  var calculatedDefaultProps = {};

  if (ElementType === Segment) {
    calculatedDefaultProps.attached = 'bottom';
  }

  return React.createElement(ElementType, _extends({}, calculatedDefaultProps, rest, {
    className: classes
  }), childrenUtils.isNil(children) ? content : children);
}

TabPane.handledProps = ["active", "as", "children", "className", "content", "loading"];
TabPane.defaultProps = {
  as: Segment,
  active: true
};
TabPane.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A tab pane can be active. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A Tab.Pane can display a loading indicator. */
  loading: PropTypes.bool
} : {};
TabPane.create = createShorthandFactory(TabPane, function (content) {
  return {
    content: content
  };
});
module.exportDefault(TabPane);