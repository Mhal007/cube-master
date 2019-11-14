let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let cx;module.link('classnames',{default(v){cx=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let React;module.link('react',{default(v){React=v}},3);let childrenUtils,customPropTypes,getElementType,getUnhandledProps,useKeyOnly;module.link('../../lib',{childrenUtils(v){childrenUtils=v},customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},useKeyOnly(v){useKeyOnly=v}},4);




/**
 * An ad displays third-party promotional content.
 */

function Advertisement(props) {
  var centered = props.centered,
      children = props.children,
      className = props.className,
      content = props.content,
      test = props.test,
      unit = props.unit;
  var classes = cx('ui', unit, useKeyOnly(centered, 'centered'), useKeyOnly(test, 'test'), 'ad', className);
  var rest = getUnhandledProps(Advertisement, props);
  var ElementType = getElementType(Advertisement, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes,
    "data-text": test
  }), childrenUtils.isNil(children) ? content : children);
}

Advertisement.handledProps = ["as", "centered", "children", "className", "content", "test", "unit"];
Advertisement.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Center the advertisement. */
  centered: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Text to be displayed on the advertisement. */
  test: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),

  /** Varies the size of the advertisement. */
  unit: PropTypes.oneOf(['medium rectangle', 'large rectangle', 'vertical rectangle', 'small rectangle', 'mobile banner', 'banner', 'vertical banner', 'top banner', 'half banner', 'button', 'square button', 'small button', 'skyscraper', 'wide skyscraper', 'leaderboard', 'large leaderboard', 'mobile leaderboard', 'billboard', 'panorama', 'netboard', 'half page', 'square', 'small square']).isRequired
} : {};
module.exportDefault(Advertisement);