let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let cx;module.link('classnames',{default(v){cx=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let React;module.link('react',{default(v){React=v}},3);let getUnhandledProps,useKeyOnly;module.link('../../lib',{getUnhandledProps(v){getUnhandledProps=v},useKeyOnly(v){useKeyOnly=v}},4);let AccordionAccordion;module.link('./AccordionAccordion',{default(v){AccordionAccordion=v}},5);let AccordionContent;module.link('./AccordionContent',{default(v){AccordionContent=v}},6);let AccordionPanel;module.link('./AccordionPanel',{default(v){AccordionPanel=v}},7);let AccordionTitle;module.link('./AccordionTitle',{default(v){AccordionTitle=v}},8);








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