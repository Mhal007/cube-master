var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var cx;module.link('classnames',{default:function(v){cx=v}},1);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},2);var React;module.link('react',{default:function(v){React=v}},3);var childrenUtils,createShorthandFactory,customPropTypes,getElementType,getUnhandledProps,SUI,useValueAndKey,useVerticalAlignProp;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},createShorthandFactory:function(v){createShorthandFactory=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v},SUI:function(v){SUI=v},useValueAndKey:function(v){useValueAndKey=v},useVerticalAlignProp:function(v){useVerticalAlignProp=v}},4);var ListDescription;module.link('./ListDescription',{default:function(v){ListDescription=v}},5);var ListHeader;module.link('./ListHeader',{default:function(v){ListHeader=v}},6);






/**
 * A list item can contain a content.
 */

function ListContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      description = props.description,
      floated = props.floated,
      header = props.header,
      verticalAlign = props.verticalAlign;
  var classes = cx(useValueAndKey(floated, 'floated'), useVerticalAlignProp(verticalAlign), 'content', className);
  var rest = getUnhandledProps(ListContent, props);
  var ElementType = getElementType(ListContent, props);

  if (!childrenUtils.isNil(children)) {
    return React.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }

  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), ListHeader.create(header), ListDescription.create(description), content);
}

ListContent.handledProps = ["as", "children", "className", "content", "description", "floated", "header", "verticalAlign"];
ListContent.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Shorthand for ListDescription. */
  description: customPropTypes.itemShorthand,

  /** An list content can be floated left or right. */
  floated: PropTypes.oneOf(SUI.FLOATS),

  /** Shorthand for ListHeader. */
  header: customPropTypes.itemShorthand,

  /** An element inside a list can be vertically aligned. */
  verticalAlign: PropTypes.oneOf(SUI.VERTICAL_ALIGNMENTS)
} : {};
ListContent.create = createShorthandFactory(ListContent, function (content) {
  return {
    content: content
  };
});
module.exportDefault(ListContent);