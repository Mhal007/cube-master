let _toConsumableArray;module.link("@babel/runtime/helpers/toConsumableArray",{default(v){_toConsumableArray=v}},0);let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},1);let cx;module.link('classnames',{default(v){cx=v}},2);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},3);let React;module.link('react',{default(v){React=v}},4);let customPropTypes,getElementType,getUnhandledProps,SUI,useKeyOnly,useKeyOrValueAndKey,useMultipleProp,useTextAlignProp,useVerticalAlignProp,useWidthProp;module.link('../../lib',{customPropTypes(v){customPropTypes=v},getElementType(v){getElementType=v},getUnhandledProps(v){getUnhandledProps=v},SUI(v){SUI=v},useKeyOnly(v){useKeyOnly=v},useKeyOrValueAndKey(v){useKeyOrValueAndKey=v},useMultipleProp(v){useMultipleProp=v},useTextAlignProp(v){useTextAlignProp=v},useVerticalAlignProp(v){useVerticalAlignProp=v},useWidthProp(v){useWidthProp=v}},5);let GridColumn;module.link('./GridColumn',{default(v){GridColumn=v}},6);let GridRow;module.link('./GridRow',{default(v){GridRow=v}},7);







/**
 * A grid is used to harmonize negative space in a layout.
 */

function Grid(props) {
  var celled = props.celled,
      centered = props.centered,
      children = props.children,
      className = props.className,
      columns = props.columns,
      container = props.container,
      divided = props.divided,
      doubling = props.doubling,
      inverted = props.inverted,
      padded = props.padded,
      relaxed = props.relaxed,
      reversed = props.reversed,
      stackable = props.stackable,
      stretched = props.stretched,
      textAlign = props.textAlign,
      verticalAlign = props.verticalAlign;
  var classes = cx('ui', useKeyOnly(centered, 'centered'), useKeyOnly(container, 'container'), useKeyOnly(doubling, 'doubling'), useKeyOnly(inverted, 'inverted'), useKeyOnly(stackable, 'stackable'), useKeyOnly(stretched, 'stretched'), useKeyOrValueAndKey(celled, 'celled'), useKeyOrValueAndKey(divided, 'divided'), useKeyOrValueAndKey(padded, 'padded'), useKeyOrValueAndKey(relaxed, 'relaxed'), useMultipleProp(reversed, 'reversed'), useTextAlignProp(textAlign), useVerticalAlignProp(verticalAlign), useWidthProp(columns, 'column', true), 'grid', className);
  var rest = getUnhandledProps(Grid, props);
  var ElementType = getElementType(Grid, props);
  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), children);
}

Grid.handledProps = ["as", "celled", "centered", "children", "className", "columns", "container", "divided", "doubling", "inverted", "padded", "relaxed", "reversed", "stackable", "stretched", "textAlign", "verticalAlign"];
Grid.Column = GridColumn;
Grid.Row = GridRow;
Grid.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A grid can have rows divided into cells. */
  celled: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['internally'])]),

  /** A grid can have its columns centered. */
  centered: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Represents column count per row in Grid. */
  columns: PropTypes.oneOf([].concat(_toConsumableArray(SUI.WIDTHS), ['equal'])),

  /** A grid can be combined with a container to use the available layout and alignment. */
  container: PropTypes.bool,

  /** A grid can have dividers between its columns. */
  divided: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['vertically'])]),

  /** A grid can double its column width on tablet and mobile sizes. */
  doubling: PropTypes.bool,

  /** A grid's colors can be inverted. */
  inverted: PropTypes.bool,

  /** A grid can preserve its vertical and horizontal gutters on first and last columns. */
  padded: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['horizontally', 'vertically'])]),

  /** A grid can increase its gutters to allow for more negative space. */
  relaxed: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['very'])]),

  /** A grid can specify that its columns should reverse order at different device sizes. */
  reversed: customPropTypes.multipleProp(['computer', 'computer vertically', 'mobile', 'mobile vertically', 'tablet', 'tablet vertically']),

  /** A grid can have its columns stack on-top of each other after reaching mobile breakpoints. */
  stackable: PropTypes.bool,

  /** A grid can stretch its contents to take up the entire grid height. */
  stretched: PropTypes.bool,

  /** A grid can specify its text alignment. */
  textAlign: PropTypes.oneOf(SUI.TEXT_ALIGNMENTS),

  /** A grid can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: PropTypes.oneOf(SUI.VERTICAL_ALIGNMENTS)
} : {};
module.exportDefault(Grid);