let _extends;module.link("@babel/runtime/helpers/extends",{default(v){_extends=v}},0);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},1);let React;module.link('react',{default(v){React=v}},2);let Dropdown;module.link('../../modules/Dropdown',{default(v){Dropdown=v}},3);



/**
 * A Select is sugar for <Dropdown selection />.
 * @see Dropdown
 * @see Form
 */

function Select(props) {
  return React.createElement(Dropdown, _extends({}, props, {
    selection: true
  }));
}

Select.handledProps = ["options"];
Select.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: PropTypes.arrayOf(PropTypes.shape(Dropdown.Item.propTypes)).isRequired
} : {};
Select.Divider = Dropdown.Divider;
Select.Header = Dropdown.Header;
Select.Item = Dropdown.Item;
Select.Menu = Dropdown.Menu;
module.exportDefault(Select);