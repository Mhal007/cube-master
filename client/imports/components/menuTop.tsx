import React, { FunctionComponent } from 'react';
import { Icon, Menu, SemanticCOLORS, SemanticICONS } from 'semantic-ui-react';
import { Link, RouteComponentProps } from '@reach/router';
import capitalize from 'lodash/capitalize';

type tab = {
  name: string;
  color: SemanticCOLORS;
  icon: SemanticICONS;
};

const tabs: tab[] = [
  {
    name: 'home',
    color: 'green',
    icon: 'home'
  },
  {
    name: 'training',
    color: 'blue',
    icon: 'book'
  },
  {
    name: 'results',
    color: 'orange',
    icon: 'lightning'
  },
  {
    name: 'about',
    color: 'teal',
    icon: 'idea'
  }
];

const MenuTop: FunctionComponent<RouteComponentProps> = ({ uri }) => (
  <Menu inverted icon="labeled">
    {tabs.map(({ color, icon, name }) => (
      <Link key={name} to={`/${name}`}>
        <Menu.Item active={`/${name}` === uri} color={color} name={name}>
          <Icon name={icon} />
          {capitalize(name)}
        </Menu.Item>
      </Link>
    ))}
  </Menu>
);

export default MenuTop;
