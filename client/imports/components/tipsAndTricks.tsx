import React, { FC } from 'react';
import { List, Segment } from 'semantic-ui-react';

type tip = {
  description: string;
  header: string;
  icon: string;
};

const tipsList: tip[] = [
  {
    header: 'Enter / Space',
    description: '... -> start timer -> stop timer -> save result -> ...'
  },
  {
    header: 'r',
    description: 'Randomize new algorithm'
  },
  {
    header: 'Shift (hold)',
    description: 'Take a peek at the solution'
  },
  {
    header: 'Control',
    description: 'Show / hide the solution'
  },
  {
    header: 'Backspace / Delete / Escape',
    description: "Reset timer - don't save the solution"
  }
].map((tip, index) => ({ ...tip, key: index, icon: 'lightbulb outline' }));

const TipsAndTricks: FC = () => (
  <Segment>
    Shortcuts list:
    <List celled inverted items={tipsList} />
  </Segment>
);

export default TipsAndTricks;
