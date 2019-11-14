var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var cx;module.link('classnames',{default:function(v){cx=v}},1);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},2);var React;module.link('react',{default:function(v){React=v}},3);var getUnhandledProps,useKeyOnly;module.link('../../lib',{getUnhandledProps:function(v){getUnhandledProps=v},useKeyOnly:function(v){useKeyOnly=v}},4);var AccordionAccordion;module.link('./AccordionAccordion',{default:function(v){AccordionAccordion=v}},5);var AccordionContent;module.link('./AccordionContent',{default:function(v){AccordionContent=v}},6);var AccordionPanel;module.link('./AccordionPanel',{default:function(v){AccordionPanel=v}},7);var AccordionTitle;module.link('./AccordionTitle',{default:function(v){AccordionTitle=v}},8);








/**
 * An accordion allows users to toggle the display of sections of content.
 */

function Accordion(props) {
  var className = props.className,
      fluid = props.fluid,
      inverted = props.inverted,
      styled = props.styled;
  var classes = cx('ui', useKeyOnly(fluid, 'fluid'), useKeyOnly(inverted, 'inverted'), useKeyOnly(styled, 'styled'), className);
  var rest = getUnhandledProps(Accordion, props);
  return React.createElement(AccordionAccordion, _extends({}, rest, {
    className: classes
  }));
}

Accordion.handledProps = ["className", "fluid", "inverted", "styled"];
Accordion.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Additional classes. */
  className: PropTypes.string,

  /** Format to take up the width of its container. */
  fluid: PropTypes.bool,

  /** Format for dark backgrounds. */
  inverted: PropTypes.bool,

  /** Adds some basic styling to accordion panels. */
  styled: PropTypes.bool
} : {};
Accordion.Accordion = AccordionAccordion;
Accordion.Content = AccordionContent;
Accordion.Panel = AccordionPanel;
Accordion.Title = AccordionTitle;
module.exportDefault(Accordion);