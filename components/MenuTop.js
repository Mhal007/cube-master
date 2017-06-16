import React        from 'react';
import PropTypes    from 'prop-types';
import {Menu, Icon} from 'semantic-ui-react'

const MenuTop = ({
    currentTab,
    onChangeTab
}) =>
    <Menu inverted icon='labeled'>
        <Menu.Item active={currentTab === 'home'}     color="green"  name="home"     onClick={onChangeTab}>
            <Icon name='home' />
            Home
        </Menu.Item>
        <Menu.Item active={currentTab === 'training'} color="blue"   name="training" onClick={onChangeTab}>
            <Icon name='book' />
            Training
        </Menu.Item>
        <Menu.Item active={currentTab === 'tests'}    color="brown"  name="tests"    onClick={onChangeTab}>
            <Icon name='pencil' />
            Tests
        </Menu.Item>
        <Menu.Item active={currentTab === 'results'}  color="orange" name="results"  onClick={onChangeTab}>
            <Icon name='lightning' />
            Results
        </Menu.Item>
        <Menu.Item active={currentTab === 'about'}    color="teal"   name="about"    onClick={onChangeTab}>
            <Icon name='idea' />
            About
        </Menu.Item>
    </Menu>
;

MenuTop.propTypes = {
    currentTab:  PropTypes .string .isRequired,
    onChangeTab: PropTypes .func   .isRequired
};

export default MenuTop;