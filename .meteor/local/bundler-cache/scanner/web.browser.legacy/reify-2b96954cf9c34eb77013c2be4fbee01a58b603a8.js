var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var cx;module.link('classnames',{default:function(v){cx=v}},1);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},2);var React;module.link('react',{default:function(v){React=v}},3);var childrenUtils,createShorthandFactory,customPropTypes,getElementType,getUnhandledProps;module.link('../../lib',{childrenUtils:function(v){childrenUtils=v},createShorthandFactory:function(v){createShorthandFactory=v},customPropTypes:function(v){customPropTypes=v},getElementType:function(v){getElementType=v},getUnhandledProps:function(v){getUnhandledProps=v}},4);var StepDescription;module.link('./StepDescription',{default:function(v){StepDescription=v}},5);var StepTitle;module.link('./StepTitle',{default:function(v){StepTitle=v}},6);






/**
 * A step can contain a content.
 */

function StepContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      description = props.description,
      title = props.title;
  var classes = cx('content', className);
  var rest = getUnhandledProps(StepContent, props);
  var ElementType = getElementType(StepContent, props);

  if (!childrenUtils.isNil(children)) {
    return React.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }

  if (!childrenUtils.isNil(content)) {
    return React.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), content);
  }

  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), StepTitle.create(title, {
    autoGenerateKey: false
  }), StepDescription.create(description, {
    autoGenerateKey: false
  }));
}

StepContent.handledProps = ["as", "children", "className", "content", "description", "title"];
StepContent.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Shorthand for StepDescription. */
  description: customPropTypes.itemShorthand,

  /** Shorthand for StepTitle. */
  title: customPropTypes.itemShorthand
} : {};
StepContent.create = createShorthandFactory(StepContent, function (content) {
  return {
    content: content
  };
});
module.exportDefault(StepContent);