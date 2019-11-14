var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var cx;module.link('classnames',{default:function(v){cx=v}},1);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},2);var React;module.link('react',{default:function(v){React=v}},3);var childrenUtils,customPropTypes,getElementType,getUnhandledProps,useKeyOnly;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v},useKeyOnly:function(v){useKeyOnly=v}},4);





function SearchCategory(props) {
  var active = props.active,
      children = props.children,
      className = props.className,
      content = props.content,
      renderer = props.renderer;
  var classes = cx(useKeyOnly(active, 'active'), 'category', className);
  var rest = getUnhandledProps(SearchCategory, props);
  var ElementType = getElementType(SearchCategory, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), React.createElement("div", {
    className: "name"
  }, renderer(props)), React.createElement("div", {
    className: "results"
  }, childrenUtils.isNil(children) ? content : children));
}

SearchCategory.handledProps = ["active", "as", "children", "className", "content", "name", "renderer", "results"];
SearchCategory.defaultProps = {
  renderer: function renderer(_ref) {
    var name = _ref.name;
    return name;
  }
};
SearchCategory.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** The item currently selected by keyboard shortcut. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Display name. */
  name: PropTypes.string,

  /**
   * Renders the category contents.
   *
   * @param {object} props - The SearchCategory props object.
   * @returns {*} - Renderable category contents.
   */
  renderer: PropTypes.func,

  /** Array of Search.Result props. */
  results: PropTypes.array
} : {};
module.exportDefault(SearchCategory);