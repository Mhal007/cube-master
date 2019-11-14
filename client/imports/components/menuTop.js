import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Menu } from 'semantic-ui-react';
import { Link } from '@reach/router';

const MenuTop = ({ onChangeTab, uri }) => (
  <Menu inverted icon="labeled">
    <Link to="/home">
      <Menu.Item
        active={uri === '/home'}
        color="green"
        name="home"
        onClick={onChangeTab}
      >
        <Icon name="home" />
        Home
      </Menu.Item>
    </Link>
    <Menu.Item
      active={uri === '/training'}
      color="blue"
      name="training"
      onClick={onChangeTab}
    >
      <Icon name="book" />
      Training
    </Menu.Item>
    <Menu.Item
      active={uri === '/results'}
      color="orange"
      name="results"
      onClick={onChangeTab}
    >
      <Icon name="lightning" />
      Results
    </Menu.Item>
    <Menu.Item
      active={uri === '/about'}
      color="teal"
      name="about"
      onClick={onChangeTab}
    >
      <Icon name="idea" />
      About
    </Menu.Item>
  </Menu>
);
MenuTop.propTypes = {
  uri: Prop/Types.string.isRequired,
  onChangeTab: PropTypes.func.isRequired
};

export default MenuTop;
