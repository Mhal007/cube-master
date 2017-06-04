import React        from 'react';
import PropTypes    from 'prop-types';
import {Menu, Icon} from 'semantic-ui-react'

const MenuTop = ({
    currentTab,
    onChangeTab
}) =>
    <Menu inverted icon='labeled'>
        <Menu.Item
            active={currentTab === 'home'}
            color="green"
            onClick={onChangeTab}
            name="home"
        >
            <Icon name='home' />
            Home
        </Menu.Item>
        <Menu.Item
            active={currentTab === 'learning'}
            color="blue"
            onClick={onChangeTab}
            name="learning"
        >
            <Icon name='book' />
            Learning
        </Menu.Item>
        <Menu.Item
            active={currentTab === 'training'}
            color="orange"
            onClick={onChangeTab}
            name="training"
        >
            <Icon name='lightning' />
            Training
        </Menu.Item>
        <Menu.Item
            active={currentTab === 'about'}
            color="teal"
            onClick={onChangeTab}
            name="about"
        >
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