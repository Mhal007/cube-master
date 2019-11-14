let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let cx;module.link('classnames',{default(v){cx=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let React;module.link('react',{default(v){React=v}},3);let childrenUtils,createShorthandFactory,customPropTypes,getElementType,getUnhandledProps,SUI,useValueAndKey,useVerticalAlignProp;module.link('../../lib',{childrenUtils(v){childrenUtils=v},createShorthandFactory(v){createShorthandFactory=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},SUI(v){SUI=v},useValueAndKey(v){useValueAndKey=v},useVerticalAlignProp(v){useVerticalAlignProp=v}},4);let ListDescription;module.link('./ListDescription',{default(v){ListDescription=v}},5);let ListHeader;module.link('./ListHeader',{default(v){ListHeader=v}},6);






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