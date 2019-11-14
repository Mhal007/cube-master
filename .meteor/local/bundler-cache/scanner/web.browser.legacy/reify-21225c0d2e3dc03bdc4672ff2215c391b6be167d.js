var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var cx;module.link('classnames',{default:function(v){cx=v}},1);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},2);var React;module.link('react',{default:function(v){React=v}},3);var childrenUtils,createShorthandFactory,customPropTypes,getElementType,getUnhandledProps,useKeyOnly;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},createShorthandFactory:function(v){createShorthandFactory=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v},useKeyOnly:function(v){useKeyOnly=v}},4);var Segment;module.link('../../elements/Segment/Segment',{default:function(v){Segment=v}},5);





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