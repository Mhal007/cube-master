let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let _without;module.link("lodash/without",{default(v){_without=v}},1);let cx;module.link('classnames',{default(v){cx=v}},2);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},3);let React;module.link('react',{default(v){React=v}},4);let childrenUtils,createShorthand,customPropTypes,getElementType,getUnhandledProps,SUI,useKeyOnly,useTextAlignProp;module.link('../../lib',{childrenUtils(v){childrenUtils=v},createShorthand(v){createShorthand=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},SUI(v){SUI=v},useKeyOnly(v){useKeyOnly=v},useTextAlignProp(v){useTextAlignProp=v}},5);let CardDescription;module.link('./CardDescription',{default(v){CardDescription=v}},6);let CardHeader;module.link('./CardHeader',{default(v){CardHeader=v}},7);let CardMeta;module.link('./CardMeta',{default(v){CardMeta=v}},8);








/**
 * A card can contain blocks of content or extra content meant to be formatted separately from the main content.
 */

function CardContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      description = props.description,
      extra = props.extra,
      header = props.header,
      meta = props.meta,
      textAlign = props.textAlign;
  var classes = cx(useKeyOnly(extra, 'extra'), useTextAlignProp(textAlign), 'content', className);
  var rest = getUnhandledProps(CardContent, props);
  var ElementType = getElementType(CardContent, props);

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
  }), createShorthand(CardHeader, function (val) {
    return {
      content: val
    };
  }, header, {
    autoGenerateKey: false
  }), createShorthand(CardMeta, function (val) {
    return {
      content: val
    };
  }, meta, {
    autoGenerateKey: false
  }), createShorthand(CardDescription, function (val) {
    return {
      content: val
    };
  }, description, {
    autoGenerateKey: false
  }));
}

CardContent.handledProps = ["as", "children", "className", "content", "description", "extra", "header", "meta", "textAlign"];
CardContent.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Shorthand for CardDescription. */
  description: customPropTypes.itemShorthand,

  /** A card can contain extra content meant to be formatted separately from the main content. */
  extra: PropTypes.bool,

  /** Shorthand for CardHeader. */
  header: customPropTypes.itemShorthand,

  /** Shorthand for CardMeta. */
  meta: customPropTypes.itemShorthand,

  /** A card content can adjust its text alignment. */
  textAlign: PropTypes.oneOf(_without(SUI.TEXT_ALIGNMENTS, 'justified'))
} : {};
module.exportDefault(CardContent);