var _extends;module.link("@babel/runtime/helpers/extends",{default:function(v){_extends=v}},0);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},1);var React;module.link('react',{default:function(v){React=v}},2);var Dropdown;module.link('../../modules/Dropdown',{default:function(v){Dropdown=v}},3);



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